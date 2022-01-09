/* ============ Import ========  */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { startGetData } from '../actions/tableAction';

/* =========== Code =========== */
const Table = (props) => {
  const { tableData, startGetData } = props;
  useEffect(() => {
    startGetData()
  }, []);

  if (!(Object.keys(tableData).length > 0)) return <></>;

  /* ReFactor Data */

  let headerArr = Object.keys(tableData.data[0]);

  /* Function to showcase row data */
  const getTableRow = (row, idx) => <tr key={idx}>{Object.keys(row).map((attr, key) => <td key={key}>{row[attr].toString().includes('https') ? <img src={row[attr]}></img> : row[attr]}</td>)}</tr>;

  return (
    <div>
      <table className="table-component table table-hover table-responsive-xs">
        <thead>
          <tr>{headerArr.map((header, idx) => <th scope="col" key={idx}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {tableData.data.map((row, key) => getTableRow(row, key))}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({
  tableData: state.table
});

const mapDispatchToProps = dispatch => ({
  startGetData: (data) => dispatch(startGetData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
