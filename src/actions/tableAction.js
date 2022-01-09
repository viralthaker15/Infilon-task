import tableTypes from "../types/tableTypes";

/* Action => Get Data from Thunk Action  */
export const getData = (payload) => ({
  type: tableTypes.GET_DATA,
  payload
});

/* Action => Get Data from API & call getData Action */
export const startGetData = () => {
  return async (dispatch) => {
    let resData = await fetch('https://reqres.in/api/users?page=1');
    resData = await resData.json();
    resData = resData.data ? resData.data : resData;
    dispatch(getData(resData));
    console.log(resData);
  }
}