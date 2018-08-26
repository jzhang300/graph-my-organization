import React from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

export default class Column extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.column.title}</div>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}
