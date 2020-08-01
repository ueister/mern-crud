import React from 'react';
//import PropTypes from 'prop-types';

class CommentsForm extends React.Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.onSubmit}>
					<div className="form-group">
						<label>User</label>
						<input type="text" className="form-control" name="author" id="author" onChange={this.props.handleAuthor} value={this.props.author} />
					</div>
					<div className="form-group">
						<label>Comment</label>
						<input type="text" className="form-control" name="text" id="text" onChange={this.props.handleText} value={this.props.text} />
					</div>
					<div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CommentsForm;
/*
CommentsForm.propTypes = {
	author: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired.
};

CommentsForm.defaultProps = {
	author: '',
	text: ''
};
*/