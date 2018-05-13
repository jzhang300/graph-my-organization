import React from "react";
import PropTypes from "prop-types";
import { noop } from "./utils";

const filters = ({
  showLeaves,
  onToggleLeaves,
  onButtonClick,
  onHierarchiesChanged,
  onSubmitHierarchies,
  onArrangementChange,
  onBaseColorChange,
  onTopColorChange,
  onSizeChange,
  onLeafColorChange,
  ...props
}) =>
  <div className="filters" {...props}>
    <p>Hierarchies</p>
    <textarea onChange={onHierarchiesChanged} />
    <button onClick={onSubmitHierarchies}>Submit Hierarchies</button>

    <p>Toggle Leaves</p>
    <input
      id="show-leaves"
      type="checkbox"
      checked={showLeaves}
      onChange={onToggleLeaves}
    />
    <label htmlFor="show-leaves">Show Leaves</label>

    <p>Leaf Color</p>
    <textarea onChange={onLeafColorChange} />

    <p>Base Color</p>
    <textarea onChange={onBaseColorChange} />

    <p>Top Color</p>
    <textarea onChange={onTopColorChange} />

    <p>Arrangement</p>
    <select name="sortType" id="sortType" onChange={onArrangementChange}>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
      <option value="neutral">None</option>
    </select>

    <p>Toggle!</p>
    <button onClick={onButtonClick}>Click Me!</button>

    <p>Size</p>
    <input type="text" onChange={onSizeChange} />
  </div>;

filters.propTypes = {
  hierarchies: PropTypes.arrayOf(PropTypes.string),
  showLeaves: PropTypes.bool,
  onButtonClick: PropTypes.func,
  onHierarchyChecked: PropTypes.func,
  onArrangementChange: PropTypes.func,
  onLeafColorChange: PropTypes.func,
  onBaseColorChange: PropTypes.func,
  onTopColorChange: PropTypes.func,
  onSizeChange: PropTypes.func,
  onToggleLeaves: PropTypes.func
};

filters.defaultProps = {
  hierarchies: [],
  showLeaves: false,
  onToggleLeaves: noop,
  onButtonClick: noop,
  onHierarchyChecked: noop,
  onArrangementChange: noop,
  onBaseColorChange: noop,
  onTopColorChange: noop,
  onSizeChange: noop,
  onLeafColorChange: noop
};

export default filters;
