import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

function Home(props) {
	console.log(props);
	const [ posts, setPosts ] = useState([]);

	useEffect(
		() => {
			// axios
			// 	.get('https://jsonplaceholder.typicode.com/posts')
			// 	.then((res) => setPosts(res.data.slice(0, 3)))
			// 	.catch((err) => console.error(err));
			setPosts(props.posts);
		},
		[ props.posts ]
	);

	const postList = posts.length ? (
		posts.map((post) => {
			return (
				<div className="post card" key={post.id}>
					<img src={Pokeball} alt="a Pokeball" />
					<div className="card-content">
						<Link to={'/' + post.id}>
							<span className="card-title red-text"> {post.title}</span>
						</Link>
						<p>{post.body}</p>
					</div>
				</div>
			);
		})
	) : (
		<div className="center">No posts yet</div>
	);
	return (
		<div className="container home">
			<h4 className="center"> Home</h4>
			{postList}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	};
};

export default connect(mapStateToProps)(Home);
