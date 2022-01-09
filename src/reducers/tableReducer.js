import tableTypes from "../types/tableTypes";

const INITIAL_STATE = {};

const tableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tableTypes.GET_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default tableReducer;