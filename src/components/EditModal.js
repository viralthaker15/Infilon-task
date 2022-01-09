import React from 'react';
import { connect } from 'react-redux';
import { } from '../actions/tableAction';

const EditModal = (props) => {
	const { tableData, currentIdx } = props;
	if (!(tableData?.data?.length > 0)) return <React.Fragment></React.Fragment>;

	const selectedData = tableData.data[currentIdx];
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
								return <div key={idx}>
									<label>{key}</label>
									<input type='text' value={selectedData[key]} />
								</div>;
							})}
						</div>
						<div className='modal-footer'>
							<button type='button' className='btn btn-primary'>Save changes</button>
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

const mapDispatchToProps = {

};

export default connect(mapStateToProps, undefined)(EditModal);
