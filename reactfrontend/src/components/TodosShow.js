import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import ReactMarkdown from 'react-markdown';
//import PropTypes from 'prop-types';

class TodosShow extends React.Component {
	removeTodo(id) {
		axios.delete('http://localhost:4000/api/todos/delete/'+id)
			.then(res => console.log(res.data));

		window.location.href = '/';
	}

	render() {
		return (
			<div>
				<div className="row" id={this.props.id}>
					<div className="col">{this.props.todo_responsible}</div>
					<div className="col">{this.props.todo_description}</div>
					<div className="col">{this.props.todo_completed.toString()}</div>
					<div className="col">{this.props.todo_priority}</div>
					<div className="col"><Link to={"/update/"+this.props.id}>Update</Link></div>
					{/* <div className="col"><Link to={"/delete/"+this.props.id}>Delete</Link></div> */}
					<div className="col"><span onClick={() => { this.removeTodo(this.props.id); }}>Delete</span></div>
				</div>
			</div>
		);
	}
}
/*
const TodosShow = (props) => {
    return (
      <div>
        <p>{props.todo_description}</p>
      </div>
    );
}

TodosShow.propTypes = {
  todo_description: PropTypes.string.isRequired
};
*/
export default TodosShow;
