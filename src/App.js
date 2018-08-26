import React, { Component } from "react";
import * as d3 from "d3";
import "./App.css";
import Bubbles from "./Bubbles";
import Filters from "./Filters";
import { extractName } from "./utils";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Column from "./Column";

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

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
    showLeaves: false,
    dragOverTagIndex: -1,
    isDraggingTag: false,
    isDroppingToInactiveTags: false,
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
    droppedArea: null,
    tasks: {
      "task-1": { id: "task-1", content: "Take out the garbage" },
      "task-2": { id: "task-2", content: "Take out the garbage again" },
      "task-3": { id: "task-3", content: "Take out the garbage one more time" },
      "task-4": {
        id: "task-4",
        content: "Stop forgetting to take out the garbage!"
      }
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "To do",
        taskIds: ["task-1", "task-2", "task-3", "task-4"]
      }
    },
    columnOrder: ["column-1"],
    items: getItems(10)
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

  resetDragDrop() {
    this.setState({
      isDraggingTag: false,
      isDroppingToInactiveTags: false,
      draggedTag: null,
      droppedArea: null
    });
  }

  onDragEnd(result) {
    console.log("result");
  }

  render() {
    return (
      <div
        className="app"
        onDragEnd={() => {
          this.resetDragDrop();
        }}
      >
        <div className="container">
          <div className="container--side">
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {this.state.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
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
                    index: e.target.dataset.index
                      ? parseInt(e.target.dataset.index, 10)
                      : null,
                    type: e.target.dataset.type
                  },
                  isDraggingTag: true
                });
              }}
              onDemoteHierarchy={(e, hierarchy, index) => {
                this.deactivateHierarchy(hierarchy);
              }}
              onDeactivateTagDrop={e => {
                this.setState(
                  {
                    droppedArea: {
                      type: "INACTIVE"
                    }
                  },
                  () => {
                    this.evaluateDragDrop();
                    this.resetDragDrop();
                  }
                );
              }}
              onActiveTagDragEnter={e => {
                // if (e.target.dataset.index === this.state.dragOverTagIndex) {
                //   console.log(
                //     e.target.dataset.index,
                //     this.state.dragOverTagIndex
                //   );
                //
                // }
                e.preventDefault();
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                const index = e.target.dataset.index;
                this.setState(
                  {
                    dragOverTagIndex: index ? parseInt(index, 10) : -1
                  },
                  () => {
                    console.log(
                      "onActiveTagDragEnter",
                      index,
                      this.state.dragOverTagIndex
                    );
                  }
                );
              }}
              onActiveTagDragOver={e => {
                e.preventDefault();
                const index = e.target.dataset.index
                  ? parseInt(e.target.dataset.index, 10)
                  : -1;
                console.log(
                  "onActiveTagDragOver",
                  index,
                  this.state.dragOverTagIndex,
                  this.state.dragOverTagIndex !== index
                );
                if (this.state.dragOverTagIndex !== index) {
                  this.setState({
                    dragOverTagIndex: index
                  });
                }
              }}
              onActiveTagDragLeave={e => {
                e.preventDefault();
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                this.setState(
                  {
                    dragOverTagIndex: -1
                  },
                  () => {
                    console.log(
                      "onActiveTagDragLeave",
                      this.state.dragOverTagIndex
                    );
                  }
                );
              }}
              onInactiveTagsDragOver={() => {
                if (!this.state.isDroppingToInactiveTags) {
                  console.log(this.state.isDroppingToInactiveTags);
                  // this.setState({
                  //   isDroppingToInactiveTags: true
                  // });
                }
              }}
              onInactiveTagsDragLeave={e => {
                this.setState({
                  isDroppingToInactiveTags: false
                });
              }}
              isDraggingTag={this.state.isDraggingTag}
              isDroppingToInactiveTags={
                this.state.isDraggingTag && this.state.isDroppingToInactiveTags
              }
              dragOverTagIndex={this.state.dragOverTagIndex}
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
