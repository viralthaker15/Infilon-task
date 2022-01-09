/* ============ Import ========  */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRow';
import { startGetData } from '../actions/tableAction';
import EditModal from './EditModal';

/* =========== Code =========== */
const Table = (props) => {
	/* state to get the data from selected Idx of Edit button */
	const [currentIdx, setCurrentIdx] = useState(0);
	const { tableData, startGetData } = props;
	useEffect(() => {
		/* Call API action on Component mount */
		startGetData();
	}, []);
	if (!(tableData?.data?.length > 0)) return <div>No data found</div>;

	let headerArr = Object.keys(tableData.data[0]);

	return (
		<div>
			<table className="table-component table table-hover table-responsive-xs">
				<thead>
					<tr>{headerArr.map((header, idx) => <th scope="col" key={idx}>{header}</th>)}</tr>
				</thead>
				<tbody>
					{tableData.data.map((row, key) => <TableRow changeCurrentIdx={(idx) => setCurrentIdx(idx)} idx={key} key={key} rowData={row} />)}
				</tbody>
			</table>
			<EditModal currentIdx={currentIdx} />
		</div>
	);
};

const mapStateToProps = state => ({
	tableData: state.table
});

const mapDispatchToProps = dispatch => ({
	startGetData: (data) => dispatch(startGetData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);