import tableTypes from "../types/tableTypes";

const INITIAL_STATE = {};

const tableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tableTypes.GET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case tableTypes.DELETE_ROW:
      let newData = state.data.filter(row => row.id !== parseInt(action.payload));
      return {
        ...state,
        data: newData
      }
    default:
      return state;
  }
};

export default tableReducer;