/**
 * action types available
 * @type {Object}
 * @property {string} ADD_NUM
 * @property {string} SUB_NUM
 */
export const ACTION_TYPES = {
  ADD_NUM: "ADD_NUM",
  SUB_NUM: "SUB_NUM",
  SET_ACTION: "SET_ACTION"
};

/**
 * addition function
 * @function
 * @param {number} num - number you want to add
 */
export const addNum = num => ({
  type: ACTION_TYPES.ADD_NUM,
  payload: num
});

/**
 * subtraction function
 * @function
 * @param {number} num - number you want to subtract
 */
export const subNum = num => ({
  type: ACTION_TYPES.SUB_NUM,
  payload: num
});

/**
 * change latest action
 * @function
 * @param {string} action - name of action
 */
export const setAction = action => ({
  type: ACTION_TYPES.SET_ACTION,
  payload: action
});

export default {
  ACTION_TYPES,
  addNum,
  subNum,
  setAction
};
