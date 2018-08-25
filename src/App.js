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
    hierarchies: ["Product", "Skills"],
    flag: false,
    hierarchyString: "",
    colorRange: ["#8ee9d4", "#008673"],
    leafColor: "#fff",
    sortType: "descending",
    diameter: 680,
    isDraggingTag: false,
    // {
    //   value: String,
    //   index: number,
    //   tagType: {ACTIVE, INACTIVE}
    // }
    draggedTag: null,
    // {
    //   value: String,
    //   index: number,
    //   dropzoneType: {ACTIVE, INACTIVE}
    // }
    droppedArea: null
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
        fullHierarchies: fullHierarchies.filter(
          hierarchy => hierarchy !== "_id"
        )
      });
    });
  }

  evaluateDragDrop() {
    if (this.state.draggedTag && this.state.droppedArea) {
      // if dragging an active tag to inactive tags list
      if (
        this.state.draggedTag.type === "ACTIVE" &&
        this.state.droppedArea.type === "INACTIVE"
      ) {
        this.deactivateHierarchy(this.state.draggedTag.value);
      }
    }
  }

  deactivateHierarchy(value) {
    this.setState({
      hierarchies: this.state.hierarchies.filter(
        hierarchy => hierarchy !== value
      )
    });
  }

  render() {
    return (
      <div
        className="app"
        onDragEnd={() => {
          this.setState({
            isDraggingTag: false,
            draggedTag: null,
            droppedArea: null
          });
        }}
      >
        <div className="container">
          <div className="container--side">
            <Filters
              style={{ height: `${this.state.diameter}px` }}
              fullHierarchies={this.state.fullHierarchies}
              onMoveUpHierarchy={(e, hierarchy, index) => {
                const swappedHierarchies = [...this.state.hierarchies];
                [swappedHierarchies[index], swappedHierarchies[index - 1]] = [
                  swappedHierarchies[index - 1],
                  swappedHierarchies[index]
                ];
                this.setState({
                  hierarchies: swappedHierarchies
                });
              }}
              onMoveDownHierarchy={(e, hierarchy, index) => {
                const swappedHierarchies = [...this.state.hierarchies];
                [swappedHierarchies[index], swappedHierarchies[index + 1]] = [
                  swappedHierarchies[index + 1],
                  swappedHierarchies[index]
                ];
                this.setState({
                  hierarchies: swappedHierarchies
                });
              }}
              onPromoteHierarchy={(e, hierarchy, index) => {
                this.setState({
                  hierarchies: [...this.state.hierarchies, hierarchy]
                });
              }}
              onTagDragStart={e => {
                this.setState({
                  draggedTag: {
                    value: e.target.dataset.value,
                    index: parseInt(e.target.dataset.index, 10),
                    type: e.target.dataset.type
                  },
                  isDraggingTag: true
                });
              }}
              onDemoteHierarchy={(e, hierarchy, index) => {
                this.deactivateHierarchy(hierarchy);
              }}
              onDeactivateTagDrop={e => {
                // e.preventDefault();
                // console.dir(e.target);
                // if (!this.state.isDraggingTag) {
                //   this.setState({
                //     isDraggingTag: true
                //   });
                // }
                // console.log(this.state.isDraggingTag);
                this.setState(
                  {
                    droppedArea: {
                      type: "INACTIVE"
                    }
                  },
                  () => {
                    this.evaluateDragDrop();
                  }
                );
                console.log("onDeactivateTagDrop", e.target);
              }}
              isDraggingTag={this.state.isDraggingTag}
              showLeaves={this.state.showLeaves}
              hierarchies={this.state.hierarchies}
              onToggleLeaves={e => {
                this.setState(prevState => ({
                  showLeaves: !prevState.showLeaves
                }));
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
