import React from "react";
import Tag from "./Tag";
import { Droppable } from "react-beautiful-dnd";

export default class Dropzone extends React.Component {
  render() {
    return (
      <div className="dropzone">
        <h5>{this.props.dropzone.title}</h5>
        <Droppable droppableId={this.props.dropzone.id}>
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {this.props.hierarchies.map((hierarchy, index) => (
                <Tag key={hierarchy.id} hierarchy={hierarchy} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}
