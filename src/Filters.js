import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { noop } from "./utils";

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
  isDraggingTag,
  onTagDragStart,
  ...props
}) => (
  <div className="filters" {...props}>
    <p>Hierarchies</p>
    <ol>
      {hierarchies.map((hierarchy, index) => (
        <li
          className="filters--list-tag filters--list-tag_active"
          draggable="true"
          aria-describedby="operation"
          onDragStart={onTagDragStart}
          data-value={hierarchy}
          data-index={index}
          data-type="ACTIVE"
        >
          {hierarchy}
          <button
            onClick={e => {
              onMoveUpHierarchy(e, hierarchy, index);
            }}
            disabled={index === 0}
          >
            up
          </button>
          <button
            onClick={e => {
              onMoveDownHierarchy(e, hierarchy, index);
            }}
            disabled={index === hierarchies.length - 1}
          >
            down
          </button>
          <button
            onClick={e => {
              onDemoteHierarchy(e, hierarchy, index);
            }}
          >
            Demote
          </button>
        </li>
      ))}
    </ol>
    <ul
      className={classNames({ "filters--list_is-droppable": isDraggingTag })}
      onDragOver={e => {
        e.preventDefault();
      }}
      onDrop={onDeactivateTagDrop}
    >
      {fullHierarchies
        // make sure list here only shows remaining hierarchies not used
        .filter(hierarchy => {
          return hierarchies.reduce((accumulator, current) => {
            if (hierarchy === current) {
              accumulator = false;
            }
            return accumulator;
          }, true);
        })
        .map((hierarchy, index) => (
          <li
            className="filters--list-tag filters--list-tag_inactive"
            draggable="true"
            aria-describedby="operation"
          >
            {hierarchy}
            <button
              onClick={e => {
                onPromoteHierarchy(e, hierarchy, index);
              }}
            >
              up
            </button>
          </li>
        ))}
    </ul>

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
  hierarchies: PropTypes.arrayOf(PropTypes.string),
  fullHierarchies: PropTypes.arrayOf(PropTypes.string),
  showLeaves: PropTypes.bool,
  onToggleLeaves: PropTypes.func,
  onMoveUpHierarchy: PropTypes.func,
  onMoveDownHierarchy: PropTypes.func,
  onPromoteHierarchy: PropTypes.func,
  onDemoteHierarchy: PropTypes.func,
  onTagDragStart: PropTypes.func,
  onDeactivateTagDrop: PropTypes.func,
  isDraggingTag: PropTypes.bool
};

filters.defaultProps = {
  hierarchies: [],
  fullHierarchies: [],
  showLeaves: false,
  onToggleLeaves: noop,
  onMoveUpHierarchy: noop,
  onMoveDownHierarchy: noop,
  onPromoteHierarchy: noop,
  onDemoteHierarchy: noop,
  onTagDragStart: noop,
  onDeactivateTagDrop: noop,
  isDraggingTag: false
};

export default filters;
