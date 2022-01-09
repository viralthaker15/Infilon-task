import React from 'react';
import { connect } from 'react-redux';
import { deleteRow } from '../actions/tableAction';

const TableRow = (props) => {
	const { rowData, key, idx, deleteRowAction, changeCurrentIdx } = props;

	/* Function to call delete action */
	const deleteRow = id => deleteRowAction(id);

	return (
		<tr key={key}>
			{Object.keys(rowData).map((attr, key) =>
				<td key={key}>
					{rowData[attr].toString().includes('https') ? <img src={rowData[attr]}></img> : rowData[attr]}
				</td>
			)}
			<td className='delete-btn'>
				<button onClick={() => deleteRow(rowData['id'])} className='btn btn-danger'>DELETE</button>
				<button onClick={() => changeCurrentIdx(idx)} type='button' className='btn btn-primary' data-toggle='modal' data-target='#editDataModal'>
					Edit
				</button>
			</td>
		</tr>
	);
};

const mapDispatchToProps = dispatch => ({
	deleteRowAction: (id) => dispatch(deleteRow(id))
});

export default connect(undefined, mapDispatchToProps)(TableRow);