import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editRow } from '../actions/tableAction';

const EditModal = (props) => {
	const { tableData, currentIdx, editRow } = props;
	if (!(tableData?.data?.length > 0)) return <React.Fragment></React.Fragment>;

	/* Modal local states */
	const selectedData = tableData.data[currentIdx];
	const [modalData, setModalData] = useState(selectedData);

	const saveRowData = () => {
		/* Call Edit row action */
		editRow({ idx: currentIdx, data: modalData });
		document.querySelector('.close').click();
	};

	/* Handle On change events in modal */
	const handleOnChange = (event) => {
		let currentVal = event.target.value;
		let key = event.target.name;
		const newModalData = { ...modalData, [key]: currentVal };
		setModalData(newModalData);
	};

	return (
		<div className='modal-container'>
			<div className='modal fade' id='editDataModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
				<div className='modal-dialog modal-dialog-centered' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>Edit row</h5>
							<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>
							{Object.keys(selectedData).map((key, idx) => {
								return <div key={idx} className='field-wrapper'>
									<label>{key}</label>
									<input type='text' name={key} value={modalData[key]} onChange={handleOnChange} />
								</div>;
							})}
						</div>
						<div className='modal-footer'>
							<button onClick={saveRowData} type='button' className='btn btn-primary'>Save changes</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	tableData: state.table
});

const mapDispatchToProps = dispatch => ({
	editRow: (data) => dispatch(editRow(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditModal);