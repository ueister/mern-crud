import React from 'react';
//import { data } from './data';
import CommentsShow from './CommentsShow';
import PropTypes from 'prop-types';

/*
export class CommentsList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: []
		};
	}

	showData(x,i) {
//	console.log(x._id);
		return <TodosShow 
			key={i}
			id={x._id}
			created={x.createdAt}
			todo_responsible={x.todo_responsible}
			todo_priority={x.todo_priority}
			todo_completed={x.todo_completed}
			todo_description={x.todo_description}
			/>;
	}
	
  render() {
    const showTodos = this.state.todos.map(this.showData);
    return (
      <div>
        {showTodos}
      </div>
    );
  }
}
*/
const CommentsList = (props) => {
    const data = props.data.map((x,i) => <CommentsShow key={i} id={x._id} author={x.author} text={x.text} handleTest={props.test} />);
    return (
      <div>
        {data}
      </div>
    );
}

CommentsList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		author: PropTypes.string,
		id: PropTypes.string,
		text: PropTypes.string,
		updatedAt: PropTypes.string,
	})),
	test: PropTypes.func.isRequired,
};

export default CommentsList;