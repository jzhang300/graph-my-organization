import React, { Component } from "react";
import * as d3 from "d3";
import "./App.css";
import Bubbles from "./Bubbles";
import Filters from "./Filters";
import { extractName } from "./utils";

class App extends Component {
  state = {
    fullData: [],
    fullHierarchies: [],
    data: [],
    hierarchies: ["Product Family", "Skills"],
    flag: false,
    hierarchyString: "",
    colorRange: ["#8ee9d4", "#008673"],
    leafColor: "#fff",
    sortType: "ascending",
    diameter: 680
  };
  componentDidMount() {
    d3.csv("data/result.csv", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      const transformation = data.map(item => ({
        ...item,
        name: extractName(item.Employee)
      }));

      const fullHierarchies =
        transformation.length > 0 && transformation[0] instanceof Object
          ? Object.keys(transformation[0])
          : [];

      this.setState({
        data: transformation,
        fullData: transformation,
        fullHierarchies
      });
    });
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="container--side">
            <Filters
              style={{ height: `${this.state.diameter}px` }}
              onHierarchiesChanged={e => {
                this.setState({ hierarchyString: e.target.value });
              }}
              onSubmitHierarchies={() => {
                this.setState(prevState => ({
                  hierarchies: JSON.parse(prevState.hierarchyString)
                }));
              }}
              onButtonClick={() => {
                if (this.state.flag) {
                  this.setState({
                    data: this.state.fullData,
                    hierarchies: ["Location", "Product Family"],
                    flag: false
                  });
                } else {
                  this.setState({
                    data: this.state.fullData.filter(
                      item => item["Product Family"] !== "Conversation"
                    ),
                    hierarchies: ["Location", "Product Family"],
                    flag: true
                  });
                }
              }}
              onLeafColorChange={e => {
                this.setState({ leafColor: e.target.value });
              }}
              onBaseColorChange={e => {
                this.setState({
                  colorRange: [e.target.value, this.state.colorRange[1]]
                });
              }}
              onTopColorChange={e => {
                this.setState({
                  colorRange: [this.state.colorRange[0], e.target.value]
                });
              }}
              onArrangementChange={e => {
                this.setState({ sortType: e.target.value });
              }}
              showLeaves={this.state.showLeaves}
              onToggleLeaves={e => {
                this.setState(prevState => ({
                  showLeaves: !prevState.showLeaves
                }));
              }}
              onSizeChange={e => {
                this.setState({ diameter: e.target.value });
              }}
            />
          </div>
          <div className="container--main">
            <Bubbles
              data={this.state.data}
              hierarchies={this.state.hierarchies}
              leafColor={this.state.leafColor}
              sortType={this.state.sortType}
              colorRange={this.state.colorRange}
              showLeaves={this.state.showLeaves}
              diameter={this.state.diameter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
