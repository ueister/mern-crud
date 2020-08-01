import React from 'react';
import axios from 'axios';
import CommentsList from './CommentsList';
import CommentsForm from './CommentsForm';
//import { data } from './data';

export class Comments extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			comments: [],
			author: '',
			text: '',
			id: ''
		};

		this.loadData = this.loadData.bind(this);
		this.handleAuthor = this.handleAuthor.bind(this);
		this.handleText = this.handleText.bind(this);
		this.getComment = this.getComment.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		this.loadData();
	}

	loadData() {
		axios.get('http://localhost:4000/api/comments/')
			.then(response => {
				this.setState({ comments: response.data.comments });
			})
			.catch(function (error){
				console.log(error);
		})
	}

	test() {
		alert("test");
	}

	getComment(id) {
/*
		const comment = this.state.comments.find((x) => x._id === id);
		if (!comment) {
			console.log("No id");
		} else {
			this.setState({
				id: comment._id,
				author: comment.author,
				text: comment.text
			});
		}
*/
		axios.get('http://localhost:4000/api/comments/'+id)
			.then(response => {
				this.setState({
						id: id,
						author: response.data.author,
						text: response.data.text
					});
			})
			.catch(function (error){
				console.log(error);
		});
	}

	handleAuthor(e) {
		this.setState({
			author: e.target.value
		});
	}

	handleText(e) {
		this.setState({
			text: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		console.log(this.state.id);
		console.log(this.state.author);
		console.log(this.state.text);

		const comment = {
			author: this.state.author,
			text: this.state.text
		};

		if (!this.state.id) {
			 axios.post('http://localhost:4000/api/comments/add/', comment)
				.then(res => console.log(res.data));
		} else {
			 axios.post('http://localhost:4000/api/comments/update/'+this.state.id, comment)
				.then(res => console.log(res.data));
		}

		this.setState({
			id: '',
			author: '',
			text: ''
		});

		window.location.href = '/comments';
	}

	removeComment(id) {
		axios.delete('http://localhost:4000/api/comments/delete/'+id)
			.then(res => console.log(res.data));

		window.location.href = '/comments';
	}

	render() {
		return (
			<div>
				<CommentsList data={this.state.comments} test={this.test} getComment={this.getComment} removeComment={this.removeComment} />
				<CommentsForm author={this.state.author} text={this.state.text} handleAuthor={this.handleAuthor} handleText={this.handleText} onSubmit={this.onSubmit} />
			</div>
		);
	}
}