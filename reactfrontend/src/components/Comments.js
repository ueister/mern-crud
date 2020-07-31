import React from 'react';
import axios from 'axios';
import CommentsList from './CommentsList';
//import CommentsShow from './CommentsShow';
//import PropTypes from 'prop-types';
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

		this.handleAuthor = this.handleAuthor.bind(this);
		this.handleText = this.handleText.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
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

		console.log(this.state.author);
		console.log(this.state.text);

		const comment = {
			author: this.state.author,
			text: this.state.text
		};

		 axios.post('http://localhost:4000/api/comments/add/', comment)
			.then(res => console.log(res.data));

		window.location.href = '/comments';
	}

	render() {
		return (
			<div>
				<CommentsList data={this.state.comments} test={this.test} />
			</div>
		);
	}
}