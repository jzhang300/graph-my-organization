import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { DragDropContext } from "react-beautiful-dnd";
import { noop } from "./utils";
import Dropzone from "./Dropzone";

const filters = ({
  showLeaves,
  hierarchies,
  fullHierarchies,
  onMoveUpHierarchy,
  onMoveDownHierarchy,
  onPromoteHierarchy,
  onDemoteHierarchy,
  onToggleLeaves,
  onDeactivateTagDrop,
  onActiveTagDragEnter,
  onActiveTagDragOver,
  onActiveTagDragLeave,
  onInactiveTagsDragOver,
  onInactiveTagsDragLeave,
  isDraggingTag,
  isDroppingToInactiveTags,
  dragOverTagIndex,
  onTagDragStart,
  dropzones,
  onDragEnd,
  ...props
}) => (
  <div className="filters" {...props}>
    <p>Hierarchies</p>

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

    <p>Toggle Leaves</p>
    <input
      id="show-leaves"
      type="checkbox"
      checked={showLeaves}
      onChange={onToggleLeaves}
    />
    <label htmlFor="show-leaves">Show Leaves</label>
  </div>
);

filters.propTypes = {
  hierarchies: PropTypes.obj,
  fullHierarchies: PropTypes.arrayOf(PropTypes.string),
  showLeaves: PropTypes.bool,
  onToggleLeaves: PropTypes.func,
  dropzones: PropTypes.obj,
  onDragEnd: PropTypes.func
};

filters.defaultProps = {
  showLeaves: false,
  onToggleLeaves: noop,
  dragOverTagIndex: -1
};

export default filters;
