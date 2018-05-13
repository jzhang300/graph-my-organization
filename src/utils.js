import * as d3 from "d3";
import rename from "deep-rename-keys";

export const extractName = employeeId => employeeId.split("/")[0];

/**
 * Adds a new `value` property set to `1` for each element in array.
 * This is useful to pre-set each leaf node a value for the visualization
 * @param  {Object[]} data [description]
 * @return {Object[]} data with value
 */
export const populateValues = data =>
  data.map(item => ({
    ...item,
    value: 1
  }));

/**
 * Adds a new `name` property set to {property}.
 * This is useful to pre-set each leaf node the name property.
 * @param  {Object[]} data
 * @param  {String} property
 * @return {Object[]} data with name property
 */
export const populateNames = (data, property) =>
  property ? data.map(item => ({ ...item, name: item[property] })) : data;

/**
 * Export a nested hierarchical dataset
 * @param  {Object[]} data Array of objects
 * @param  {String[]} hierarchies Array of hierarchy properties
 * @param  {boolean} includeLeaves
 * @return {Object}     Keys and Values Tree
 */
export const nest = (data, hierarchies, includeLeaves) => {
  let nestedData = d3.nest();
  if (hierarchies && hierarchies.length > 0) {
    hierarchies.forEach(hierarchy => {
      nestedData = nestedData.key(d => d[hierarchy]);
    });
  }
  nestedData = includeLeaves
    ? nestedData.entries(data)
    : nestedData.rollup(leaves => leaves.length).entries(data);
  return nestedData;
};

/**
 * Converts the key and values properties from d3.nest() to `name` and `children`.
 * @param  {Object} tree a tree that comes in { key, values }
 */
export const convertToNameChildren = tree =>
  rename(tree, key => {
    if (key === "key") return "name";
    if (key === "values") return "children";
    return key;
  });

/**
 * Generates a hierarchical tree from flat data array based on the order of the hierarchies specified
 * @param  {Object[]} data
 * @param  {String[]} hierarchies    array of properties that define order of hierarchy
 * @return {Object} hierarchical tree
 */
export const generateHierarchicalData = (
  data,
  leafNameProperty,
  hierarchies,
  includeLeaves
) => {
  let transformation;
  // give each element value property
  transformation = populateValues(data);
  // give each element name property
  transformation = populateNames(transformation, leafNameProperty);
  // nest the data to hierarchical data
  transformation = nest(transformation, hierarchies, includeLeaves);
  // convert `key` and `values` props to `name` and `children`
  transformation = convertToNameChildren(transformation);
  // establish root level hierarchy
  transformation = { name: "root", children: transformation };
  // put into hierarchy context and calculate `value` for non-leaf nodes
  transformation = d3.hierarchy(transformation).sum(d => d.value);
  return transformation;
};

/**
 * Reusable empty function
 * @return {function} noop
 */
export const noop = () => {};
