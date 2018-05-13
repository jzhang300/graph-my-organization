import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";
import { generateHierarchicalData, noop } from "./utils";

// const format = d3.format(",d");

export default class Bubbles extends React.Component {
  constructor(props) {
    super(props);

    // A private variable to manually track props and props updates
    // instead of this.props because when rendering the viz on prop change,
    // this.props doesn't update at the right times due to how this component
    // is structured to work with D3. A private variable this.realProps is used
    // instead of a React state variable this.state.realProps because there's
    // no need to involve React state lifecycles.
    this.realProps = props;
  }

  state = {
    g1: null, // d3 selection of the root element
    g2: null, // d3 selection of the text root element
    view: [0, 0, 0], // current zoomed view dimensions [x, y, diameter]
    focus: null, // destination zoomed view dimensions [x, y, diameter]
    root: null // root node of hierarchical dataset
  };

  /**
   * Manually render viz if this component props changes
   * @param  {Object} nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.realProps) {
      this.realProps = nextProps;
      this.renderViz(nextProps);
      this.forceUpdate();
    }
  }

  /**
   * Prevent React from updating to allow D3 to update instead
   * @return {boolean}
   */
  shouldComponentUpdate() {
    return false;
  }

  /**
   * Sets D3 selection to the root g tag and rerender viz right afterwards
   * @param  {Object} ref
   */
  onBubblesRef = ref => {
    this.setState({ g1: d3.select(ref) }, () => this.renderViz(this.realProps));
  };

  /**
   * Sets D3 selection to the root g tag and rerender viz right afterwards
   * @param  {Object} ref
   */
  onTextsRef = ref => {
    this.setState({ g2: d3.select(ref) }, () => this.renderViz(this.realProps));
  };

  /**
   * This function uses the D3 Pack layout to calculate and bind layout data
   * (such as x, y, radius values) to each node in the dataset passed in.
   * This function mutates the parameter.
   * @param {Object} tree   a hierarchical object with name and children properties
   */
  pack = tree =>
    d3
      .pack()
      .size([this.realProps.diameter, this.realProps.diameter])
      .padding(1)(tree);

  /**
   * Maps depth level to color
   * @param  {number} depth level of node in the viz
   * @return {String} CSS color value
   */
  color = depth =>
    d3
      .scaleLinear()
      .domain([
        0,
        !this.realProps.showLeaves ||
        (this.realProps.showLeaves && this.realProps.leafColor)
          ? this.realProps.hierarchies.length
          : this.realProps.hierarchies.length + 1
      ]) // hierarchies + leaf level
      .range(this.realProps.colorRange)
      .interpolate(d3.interpolateHcl)(depth);

  /**
   * A layer of logic on top of this.color to return the final color depending
   * on whether the last node is a leaf and whether a leafColor is specified
   * @param  {number} depth level of node in the viz
   * @return {String} CSS color value
   */
  finalColor = depth => {
    return depth > this.realProps.hierarchies.length && this.realProps.leafColor
      ? this.realProps.leafColor
      : this.color(depth);
  };

  /**
   * Zooms visualization to specified view.
   * This function represents an instant frame.
   * @param  {Array(x, y, diameter)} view
   */
  zoomTo = view => {
    const self = this;
    const k = self.state.root.r * 2 / view[2];
    this.state.g1
      .selectAll("circle")
      .attr("r", d => d.r * k)
      .attr(
        "transform",
        d =>
          `translate(${self.state.root.r - (view[0] - d.x) * k}, ${self.state
            .root.r -
            (view[1] - d.y) * k})`
      );
    this.state.g2
      .selectAll(".label")
      .style(
        "transform",
        d =>
          `translate(${self.state.root.r - (view[0] - d.x) * k}px, ${self.state
            .root.r -
            (view[1] - d.y) * k}px)`
      );
    this.setState({ view });
  };

  /**
   * Tween the view to the node passed in.
   * This function applies an interpolation of the previous view to node's view
   * to the transition timeline.
   * @param  {Object} d   d3 node
   */
  zoom = d => {
    const self = this;
    const i = d3.interpolateZoom(self.state.view, [d.x, d.y, d.r * 2]);
    let transition;
    self.setState({ focus: d }, () => {
      transition = d3
        .transition()
        .duration(750)
        .tween("zoom", () => t => self.zoomTo(i(t)));
      transition
        .selectAll(".label")
        .filter(function(d2) {
          return (
            d2.parent === self.state.focus || this.style.display === "flex"
          );
        })
        .style("opacity", d2 => (d2.parent === self.state.focus ? 1 : 0))
        .on("start", function(d2) {
          if (d2.parent === self.state.focus) this.style.display = "flex";
        })
        .on("end", function(d2) {
          if (d2.parent !== self.state.focus) this.style.display = "none";
        });
      self.realProps.onZoom();
    });
  };

  wrap(text) {
    text.each(function(d) {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        y = text.attr("y"),
        // dy = parseFloat(text.attr("dy") || 0),
        tspan = text.text(null).append("span").attr("x", 0).attr("y", y);
      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(" "));
        // 1 char = 6.5px
        if (tspan.text().length * 3 > d.r) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("span").attr("x", 0).attr("y", y).text(word);
        }
      }

      // removing first empty node
      var firstTSpan = text.select("span");
      if (firstTSpan.text() === "") {
        firstTSpan.remove();
      }

      var lineCount = text.selectAll("span").size();

      text
        .selectAll("span")
        .attr("data-lines", lineCount)
        .attr("dy", function(d, i) {
          return i === 0 ? 1 - lineCount / 2 + "em" : "1em";
        });

      // for (var i = 0; i < lineCount; i++) {
      // 	text.selectAll('tspan')
      // 		.each(function(d) {
      // 			console.log(tspan.attr("dy", -lineCount + "em"));
      // 		});
      // }
    });
  }

  wrap2(root) {
    root.each(function(d) {
      let selection = d3.select(this);
      let words = d.data.data.name.split(/\s+/);
      words.forEach(word =>
        selection.append("span").attr("class", "label--text").text(word)
      );
    });
  }

  resetText(root) {
    root.each(function(d) {
      d3.select(this).html("");
    });
  }

  /**
   * D3 enter state - when viz data changes, this defines what happens to nodes
   * that are newly added to DOM
   * @param  {D3 selection} selection
   */
  bubblesEnter(selection) {
    const self = this;
    selection
      .attr("data-name", d => d.name || " ")
      .attr("data-depth", d => d.depth)
      .attr(
        "class",
        d =>
          `bubble-chart--node ${d.depth > this.realProps.hierarchies.length
            ? "leaf"
            : ""}`
      )
      .attr("transform", d => `translate(${d.x},${d.y})`)
      .attr("r", 0)
      .attr("fill", d => this.finalColor(d.depth))
      .attr("fill-opacity", "1")
      .on("click", d => {
        if (self.state.focus !== d) {
          self.zoom(d);
          // self.setState({ focus: d });
        } else {
          self.zoom(self.state.root);
          // self.setState({ focus: self.state.root });
        }
        d3.event.stopPropagation();
      })
      .transition()
      .duration(1000)
      .ease(d3.easeElastic)
      .attr("r", d => d.r)
      .delay((d, i) => i * 1.5);
  }

  /**
   * D3 update state - when viz data changes, this defines what happens to nodes
   * that were not added nor removed from DOM
   * @param  {D3 selection} selection
   */
  bubblesUpdate(selection) {
    selection
      .transition()
      .duration(1000)
      .ease(d3.easeCubicOut)
      .attr("data-name", d => d.name || " ")
      .attr("data-depth", d => d.depth)
      .attr("class", d => "bubble-chart--node " + (d.depth === 3 ? "leaf" : ""))
      .attr("transform", d => `translate(${d.x},${d.y})`)
      .attr("fill-opacity", "1")
      .attr("fill", d => this.finalColor(d.depth))
      .attr("r", d => d.r)
      .delay((d, i) => i * 1.5);
  }

  /**
   * D3 exit state - when viz data changes, this defines what happens to nodes
   * that are removed from DOM
   * @param  {D3 selection} selection
   */
  bubblesExit(selection) {
    selection
      .transition()
      .duration(400)
      .ease(d3.easeCubicOut)
      .attr("fill-opacity", "0")
      .attr("fill", d => this.finalColor(d.depth))
      .attr("r", 0)
      .remove();
  }

  /**
   * Renders the D3 visualization
   * @param  {Object[]} data
   * @param  {String[]} hierarchies
   * @param  {number} diameter
   */
  renderViz({
    data,
    leafProperty,
    hierarchies,
    diameter,
    showLeaves,
    colorRange,
    sortType,
    leafColor,
    onZoom
  }) {
    if (data.length === 0) return;

    let g1;
    let g2;
    let bubbles;
    let bubblesEnter;
    let bubblesExit;
    let root;
    let bubblesData;
    let self = this;

    // transform the original data to hierarchical dataset
    root = generateHierarchicalData(
      data,
      leafProperty,
      hierarchies,
      showLeaves
    );

    // apply sorting if specified
    if (this.realProps.sortType === "ascending") {
      root = d3.hierarchy(root).sort((a, b) => b.value - a.value);
    } else if (this.realProps.sortType === "descending") {
      root = d3.hierarchy(root).sort((a, b) => a.value - b.value);
    }

    // send hierarchical data to pack layout to generate viz metadata
    this.pack(root);

    bubblesData = root.descendants();

    // initialize state variables
    this.setState(
      {
        view: [root.x, root.y, root.r * 2],
        focus: root,
        root: root
      },
      () => {
        // initialize d3 data viz
        g1 = this.state.g1.attr("transform", "translate(0, 0)");
        g2 = this.state.g2.attr("transform", "translate(0, 0)");
        bubbles = g1.selectAll("circle").data(bubblesData);
        bubblesEnter = bubbles.enter().append("circle");
        bubblesExit = bubbles.exit();

        // define styles, interactions, and transitions of each node
        this.bubblesUpdate(bubbles);
        this.bubblesEnter(bubblesEnter);
        this.bubblesExit(bubblesExit);

        const text = g2.selectAll(".label").data(bubblesData);
        const textEnter = text.enter().append("div").attr("class", "label");
        const textExit = text.exit();

        textEnter
          .style("transform", d => `translate(${d.x}px,${d.y}px)`)
          // .attr("transform", d => `translate(${d.x},${d.y})`)
          .style("opacity", function(d) {
            return d.parent === self.state.focus ? 1 : 0;
          })
          .style("display", function(d) {
            return d.parent === self.state.focus ? "flex" : "none";
          })
          .append("div")
          .attr("class", "label--inner")
          .call(this.wrap2);

        text
          .call(this.resetText)
          .call(this.wrap2)
          .transition()
          .duration(1200)
          .style("transform", d => `translate(${d.x}px,${d.y}px)`)
          // .attr("transform", d => `translate(${d.x},${d.y})`)
          .style("opacity", function(d) {
            return d.parent === self.state.focus ? 1 : 0;
          })
          .style("display", function(d) {
            return d.parent === self.state.focus ? "flex" : "none";
          });

        textExit
          .transition()
          .duration(1200)
          .style("transform", d => `translate(${d.x}px,${d.y}px)`)
          // .attr("transform", d => `translate(${d.x},${d.y})`)
          .style("opacity", function(d) {
            return d.parent === self.state.focus ? 1 : 0;
          })
          .remove();
      }
    );

    // let node = g.selectAll("circle,text");
  }

  render() {
    return (
      <div className="bubble-chart--wrapper">
        <svg
          className="bubble-chart"
          width={this.realProps.diameter}
          height={this.realProps.diameter}
        >
          <g ref={this.onBubblesRef} className="bubble-chart--bubbles" />
        </svg>
        <div className="bubble-chart--text-layer">
          <div ref={this.onTextsRef} className="bubble-chart--texts" />
        </div>
      </div>
    );
  }
}

Bubbles.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  hierarchies: PropTypes.arrayOf(PropTypes.string), // order of data properties
  diameter: PropTypes.number,
  colorRange: PropTypes.arrayOf(PropTypes.string),
  sortType: PropTypes.oneOf(["neutral", "ascending", "descending"]),
  showLeaves: PropTypes.bool,
  leafProperty: PropTypes.string, // specify which original property is the leaf
  leafColor: PropTypes.string,
  onZoom: PropTypes.func
};

Bubbles.defaultProps = {
  data: [],
  hierarchies: [],
  diameter: 680,
  colorRange: ["#8ee9d4", "#00a78f"],
  sortType: "ascending",
  showLeaves: true,
  leafColor: null,
  leafProperty: null,
  onZoom: noop
};
