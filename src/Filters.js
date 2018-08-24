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
  onDemotingDragOver,
  onDemotingDragEnd,
  isDemoting,
  ...props
}) => (
  <div className="filters" {...props}>
    <p>Hierarchies</p>
    <ol>
      {hierarchies.map((hierarchy, index) => (
        <li
          className="filters--list-tag"
          draggable="true"
          aria-describedby="operation"
          onDragStart={() => console.log("onDragStart")}
          onDragOver={e => console.log("onDragOver")}
          onDragEnd={() => console.log("onDragEnd")}
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
      className={classNames({ "filters--list_is-dragged-on": isDemoting })}
      onDragOver={onDemotingDragOver}
      onDragEnd={onDemotingDragEnd}
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
            className="filters--list-tag"
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
  onDemotingDragOver: PropTypes.func,
  onDemotingDragEnd: PropTypes.func,
  isDemoting: PropTypes.bool
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
  onDemotingDragOver: noop,
  onDemotingDragEnd: noop,
  isDemoting: false
};

export default filters;
