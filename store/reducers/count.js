// @ts-check
import { ACTION_TYPES } from "../actions";

const initialState = {
  count: 0,
  lastAction: null
};

const countReducer = (state = initialState, action) => {
  switch (action.types) {
    case ACTION_TYPES.ADD_NUM:
      return {
        count: state.count + action.payload,
        ...state
      };
    case ACTION_TYPES.SUB_NUM:
      return {
        count: state.count - action.payload,
        ...state
      };
    case ACTION_TYPES.SET_ACTION:
      return {
        lastAction: action.payload,
        ...state
      };
    default:
      return state;
  }
};

export default countReducer;
