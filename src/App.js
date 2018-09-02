import React, { Component } from "react";
import * as d3 from "d3";
import "./App.css";
import Bubbles from "./Bubbles";
import Filters from "./Filters";
import { extractName } from "./utils";

class App extends Component {
  state = {
    fullData: [],
    data: [],
    flag: false,
    colorRange: ["#8ee9d4", "#008673"],
    leafColor: "#fff",
    sortType: "descending",
    diameter: 680,
    showLeaves: true,
    // { "hierarchy-1": { id: "hierarchy-1", content: "Product" }, ... }
    hierarchies: {},
    search: "",
    title: "All",
    dropzones: {
      "active-tags": {
        id: "active-tags",
        title: "Active tags",
        hierarchies: [] // array of string hierarchy id's
      },
      "inactive-tags": {
        id: "inactive-tags",
        title: "Inactive tags",
        hierarchies: []
      }
    }
  };

  constructor(props) {
    super(props);
    this.onHierarchiesDragEnd = this.onHierarchiesDragEnd.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

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

      let hierarchies =
        transformation.length > 0 && transformation[0] instanceof Object
          ? Object.keys(transformation[0])
          : [];

      let inactiveHierarchies = [];
      let activeHierarchies;

      hierarchies = hierarchies
        // blacklist any tags
        .filter(
          hierarchy =>
            hierarchy !== "_id" &&
            hierarchy !== "Employee" &&
            hierarchy !== "name"
        )
        // transform into dictionary db
        .reduce((accumulator, current, index) => {
          const id = `hierarchy-${index}`;
          inactiveHierarchies.push(id);
          return {
            ...accumulator,
            [id]: {
              id,
              content: current
            }
          };
        }, {});

      [activeHierarchies, ...inactiveHierarchies] = inactiveHierarchies;

      this.setState({
        data: transformation,
        fullData: transformation,
        hierarchies,
        dropzones: {
          "active-tags": {
            ...this.state.dropzones["active-tags"],
            hierarchies: [activeHierarchies]
          },
          "inactive-tags": {
            ...this.state.dropzones["inactive-tags"],
            hierarchies: inactiveHierarchies
          }
        }
      });
    });
  }

  onHierarchiesDragEnd(result) {
    const { destination, source, draggableId } = result;

    // if destination is nothing, do nothing
    if (!destination) {
      return;
    }

    // if source and destination is same, do nothing
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // if dragging in same dropzone
    if (destination.droppableId === source.droppableId) {
      const dropzone = this.state.dropzones[source.droppableId];
      // insert source index to destination index
      const newHierarchies = dropzone.hierarchies.slice(0);
      newHierarchies.splice(source.index, 1);
      newHierarchies.splice(destination.index, 0, draggableId);

      const newDropzone = {
        ...dropzone,
        hierarchies: newHierarchies
      };

      const newState = {
        ...this.state,
        dropzones: {
          ...this.state.dropzones,
          [newDropzone.id]: newDropzone
        }
      };

      this.setState(newState);
    } else {
      // if dragging to different dropzone

      let sourceDropzone = this.state.dropzones[source.droppableId];
      let destinationDropzone = this.state.dropzones[destination.droppableId];
      let sourceHierarchies = sourceDropzone.hierarchies.slice(0);
      sourceHierarchies.splice(source.index, 1);
      let destinationHierarchies = destinationDropzone.hierarchies.slice(0);
      destinationHierarchies.splice(destination.index, 0, draggableId);
      sourceDropzone = {
        ...sourceDropzone,
        hierarchies: sourceHierarchies
      };
      destinationDropzone = {
        ...destinationDropzone,
        hierarchies: destinationHierarchies
      };

      const newState = {
        ...this.state,
        dropzones: {
          [sourceDropzone.id]: sourceDropzone,
          [destinationDropzone.id]: destinationDropzone
        }
      };

      this.setState(newState);
    }
  }

  onSearchChange(e) {
    // this.setState({
    //   search: e.target.value
    // });
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="container--side">
            <Filters
              style={{ height: `${this.state.diameter}px` }}
              title={this.state.title}
              showLeaves={this.state.showLeaves}
              hierarchies={this.state.hierarchies}
              onToggleLeaves={e => {
                this.setState(prevState => ({
                  showLeaves: !prevState.showLeaves
                }));
              }}
              dropzones={this.state.dropzones}
              onDragEnd={this.onHierarchiesDragEnd}
              onSearchChange={this.onSearchChange}
            />
          </div>
          <div className="container--main">
            <Bubbles
              data={this.state.data}
              hierarchies={this.state.dropzones["active-tags"].hierarchies.map(
                id => this.state.hierarchies[id].content
              )}
              leafColor={this.state.leafColor}
              sortType={this.state.sortType}
              colorRange={this.state.colorRange}
              showLeaves={this.state.showLeaves}
              diameter={this.state.diameter}
              onZoom={focus => {
                // const focus = cloneDeep(focus);
                // console.log(focus);
                // console.log(this);
                // setTimeout(() => {
                //   this.setState(
                //     {
                //       title: "h"
                //     },
                //     () => {
                //       console.log(focus, focus.data.data.children.length);
                //     }
                //   );
                // }, 1000);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
