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
        fullHierarchies: fullHierarchies.filter(
          hierarchy => hierarchy !== "_id"
        )
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
              onDemoteHierarchy={(e, hierarchy, index) => {
                this.setState({
                  hierarchies: this.state.hierarchies.filter(
                    item => item !== hierarchy
                  )
                });
              }}
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
