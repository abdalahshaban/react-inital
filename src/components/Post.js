import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

function Post(props) {
	// const [ id, setId ] = useState(null);
	const [ post, setPost ] = useState(null);
	useEffect(
		() => {
			console.log(props);
			// let id = props.match.params.post_id;
			// axios
			// 	.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			// 	.then((res) => setPost(res.data))
			// 	.catch((err) => console.error(err));
			// setId(id);
			setPost(props.post);
		},
		[ props ]
	);

	const handleClick = () => {
		props.deletePost(props.post.id);
		props.history.push('/');
	};

	const Post = post ? (
		<div className="post">
			<h4 className="center">{post.title}</h4>
			<p>{post.body}</p>
			<div className="center">
				<button className="btn gray" onClick={handleClick}>
					DELETE POST
				</button>
			</div>
		</div>
	) : (
		<div className="center">Loading post.....</div>
	);
	return (
		<div className="container">
			<h4>{Post}</h4>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.post_id;
	return {
		post: state.posts.find((post) => post.id === id)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deletePost: (id) => {
			dispatch(deletePost(id));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
