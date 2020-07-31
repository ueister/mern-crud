import React from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CommentsShow = (props) => {
    return (
		<div className="row" id={props.id}>
			<div className="col">{props.author}</div>
			<div className="col">{props.text}</div>
			<div className="col"><span onClick={() => { props.handleTest(); }}>Delete</span></div>
			{/* <div className="col"><Link to={"/update/"+props.id}>Update</Link></div>
			<div className="col"><Link to={"/delete/"+props.id}>Delete</Link></div>
			<div className="col"><span onClick={() => { removeTodo(props.id); }}>Delete</span></div> */}
		</div>
    );
}

CommentsShow.propTypes = {
	id: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	handleTest: PropTypes.func.isRequired,
};

export default CommentsShow;
