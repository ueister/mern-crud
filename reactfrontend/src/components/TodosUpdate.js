import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
//import { data } from './data';

export class TodosUpdate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			_id: this.props.match.params.id,
			todo_responsible: '',
			todo_priority: '',
			todo_completed: false,
			todo_description: ''
		};

		this.handleResponsible = this.handleResponsible.bind(this);
		this.handlePriority = this.handlePriority.bind(this);
		this.handleCompleted = this.handleCompleted.bind(this);
		this.handleDescription = this.handleDescription.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
//		this.getData(this.props.match.params.id);
		axios.get('http://localhost:4000/api/todos/'+this.props.match.params.id)
			.then(response => {
				this.setState({ 
						_id: this.props.match.params.id,
						todo_responsible: response.data.todo_responsible,
						todo_priority: response.data.todo_priority,
						todo_completed: response.data.todo_completed,
						todo_description: response.data.todo_description
					});
			})
			.catch(function (error){
				console.log(error);
			})
	}
/*
	getData(id) {
		let todo = data.find(x => x._id === this.props.match.params.id);

		this.setState({
			_id: this.props.match.params.id,
			todo_responsible: todo.todo_responsible,
			todo_priority: todo.todo_priority,
			todo_completed: todo.todo_completed,
			todo_description: todo.todo_description
		});
	}
*/
	handleResponsible(e) {
		this.setState({
			todo_responsible: e.target.value
		});
	}

	handlePriority(e) {
		this.setState({
			todo_priority: e.target.value
		});
	}

	handleCompleted(e) {
		this.setState({
			todo_completed: !this.state.todo_completed
		});
	}

	handleDescription(e) {
		this.setState({
			todo_description: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		console.log(this.props.match.params.id);
		console.log(this.state.todo_responsible);
		console.log(this.state.todo_description);
		console.log(this.state.todo_priority);
		console.log(this.state.todo_completed);
		
		const todo = {
			todo_responsible: this.state.todo_responsible,
			todo_priority: this.state.todo_priority,
			todo_completed: this.state.todo_completed,
			todo_description: this.state.todo_description
		};

		 axios.post('http://localhost:4000/api/todos/update/'+this.props.match.params.id, todo)
			.then(res => console.log(res.data));

//		this.props.history.push('/');
		window.location.href = '/';
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Responsible</label>
						<input type="text" className="form-control" name="todo_responsible" id="todo_responsible" onChange={this.handleResponsible} value={this.state.todo_responsible} />
					</div>
					<div className="form-group">
						<label>Description</label>
						<input type="text" className="form-control" name="todo_description" id="todo_description" onChange={this.handleDescription} value={this.state.todo_description} />
					</div>
					<div>
						<div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="todo_priority" onChange={this.handlePriority} checked={this.state.todo_priority==='Low'} value="Low" />
							<label className="form-check-label">Low</label>
						</div>
						<div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="todo_priority" onChange={this.handlePriority} checked={this.state.todo_priority==='Medium'} value="Medium" />
							<label className="form-check-label">Medium</label>
						</div>
						<div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="todo_priority" onChange={this.handlePriority} checked={this.state.todo_priority==='Large'} value="Large" />
							<label className="form-check-label">Large</label>
						</div>
					</div>
					<div>
						<div className="form-check form-check-inline">
							<input className="form-check-input" type="checkbox" name="todo_completed" onChange={this.handleCompleted} checked={this.state.todo_completed} value={this.state.todo_completed} />
							<label className="form-check-label">Complete</label>
						</div>
					</div>
					<div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

TodosUpdate.propTypes = {
	_id: PropTypes.string.isRequired,
	todo_responsible: PropTypes.string.isRequired,
	todo_priority: PropTypes.string.isRequired,
	todo_completed: PropTypes.bool.isRequired,
	todo_description: PropTypes.string.isRequired
};

TodosUpdate.defaultProps = {
	_id: '',
	todo_responsible: '',
	todo_priority: '',
	todo_completed: false,
	todo_description: ''
};