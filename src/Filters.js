import React from "react";
import PropTypes from "prop-types";
import { DragDropContext } from "react-beautiful-dnd";
import { noop } from "./utils";
import Dropzone from "./Dropzone";

const filters = ({
  title,
  showLeaves,
  hierarchies,
  onToggleLeaves,
  dropzones,
  onDragEnd,
  onSearchChange,
  ...props
}) => (
  <div className="filters" {...props}>
    <h2>{title}</h2>
    <input type="text" onChange={onSearchChange} />
    <h2>Hierarchies</h2>

    <DragDropContext
      onDragEnd={result => {
        onDragEnd(result);
      }}
    >
      <Dropzone
        dropzone={dropzones["active-tags"]}
        hierarchies={dropzones["active-tags"].hierarchies.map(
          hierarchy => hierarchies[hierarchy]
        )}
      />
      <Dropzone
        dropzone={dropzones["inactive-tags"]}
        hierarchies={dropzones["inactive-tags"].hierarchies.map(
          hierarchy => hierarchies[hierarchy]
        )}
      />
    </DragDropContext>

    <h2>Toggle Leaves</h2>
    <div className="filters--checkbox-container">
      <input
        className="filters--checkbox-input"
        id="show-leaves"
        type="checkbox"
        checked={showLeaves}
        onChange={onToggleLeaves}
      />
      <label htmlFor="show-leaves">Show Leaves</label>
    </div>
  </div>
);

filters.propTypes = {
  hierarchies: PropTypes.object,
  showLeaves: PropTypes.bool,
  onToggleLeaves: PropTypes.func,
  onSearchChange: PropTypes.func,
  dropzones: PropTypes.object,
  onDragEnd: PropTypes.func
};

filters.defaultProps = {
  showLeaves: false,
  onToggleLeaves: noop,
  onSearchChange: noop
};

export default filters;
