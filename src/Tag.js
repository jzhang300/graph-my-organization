import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default class Tag extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.hierarchy.id} index={this.props.index}>
        {provided => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.hierarchy.content}
          </div>
        )}
      </Draggable>
    );
  }
}
