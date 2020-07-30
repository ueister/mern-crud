import React from 'react';
import axios from 'axios';
//import { data } from './data';

export class TodosDelete extends React.Component {
	componentDidMount() {
		this.removeTodo();
	}

	removeTodo() {
		axios.delete('http://localhost:4000/api/todos/delete/'+this.props.match.params.id)
			.then(res => console.log(res.data));

		window.location.href = '/';
	}

  render() {
    return (
      <div>
      </div>
    );
  }
}