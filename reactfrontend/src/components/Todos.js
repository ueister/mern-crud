import React from 'react';
import axios from 'axios';
//import { data } from './data';
import TodosShow from './TodosShow';
//import PropTypes from 'prop-types';

export class Todos extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: []
		};
	}

	componentDidMount() {
		axios.get('http://localhost:4000/api/todos/')
			.then(response => {
				this.setState({ todos: response.data.todos });
			})
			.catch(function (error){
				console.log(error);
			})
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
/*
	showTodos() {

			console.log(this.state.todos);
		return data.map(this.showData);
		return this.state.todos.map(function(x,i) {
			return <TodosShow 
				key={i}
				id={x._id}
				created={x.createdAt}
				todo_responsible={x.todo_responsible}
				todo_priority={x.todo_priority}
				todo_completed={x.todo_completed}
				todo_description={x.todo_description}
				/>;
		});
		return this.state.todos.map(this.showData);
	}
*/
	
  render() {
    const showTodos = this.state.todos.map(this.showData);
    return (
      <div>
        {showTodos}
      </div>
    );
  }
}
/*
export const Todos = (props) => {
    const data = props.data.map((x) => <TodosShow todo_description={x.todo_description}></TodosShow>);
    return (
      <div>
        {data}
      </div>
    );
}

Todos.propTypes = {
  todo_description: PropTypes.string.isRequired
};
*/