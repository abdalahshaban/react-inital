const initState = {
	posts: [
		{
			id: '1',
			title: 'title1',
			body:
				'Culpa minim sit magna laborum adipisicing officia aute velit enim dolor. Duis cillum laborum laboris eiusmod. Ipsum dolor dolore eiusmod commodo excepteur aliquip ad labore id aliquip fugiat veniam sit. Incididunt est veniam magna dolore consectetur incididunt sint sint adipisicing. Elit ut commodo do sint sit sint nulla sunt dolor labore elit commodo labore nisi. Laborum tempor pariatur do esse id commodo et minim veniam adipisicing nostrud. Duis aliquip aliquip qui consequat irure Lorem veniam et.'
		},
		{
			id: '2',
			title: 'title2',
			body:
				'Culpa minim sit magna laborum adipisicing officia aute velit enim dolor. Duis cillum laborum laboris eiusmod. Ipsum dolor dolore eiusmod commodo excepteur aliquip ad labore id aliquip fugiat veniam sit. Incididunt est veniam magna dolore consectetur incididunt sint sint adipisicing. Elit ut commodo do sint sit sint nulla sunt dolor labore elit commodo labore nisi. Laborum tempor pariatur do esse id commodo et minim veniam adipisicing nostrud. Duis aliquip aliquip qui consequat irure Lorem veniam et.'
		},
		{
			id: '3',
			title: 'title3',
			body:
				'Culpa minim sit magna laborum adipisicing officia aute velit enim dolor. Duis cillum laborum laboris eiusmod. Ipsum dolor dolore eiusmod commodo excepteur aliquip ad labore id aliquip fugiat veniam sit. Incididunt est veniam magna dolore consectetur incididunt sint sint adipisicing. Elit ut commodo do sint sit sint nulla sunt dolor labore elit commodo labore nisi. Laborum tempor pariatur do esse id commodo et minim veniam adipisicing nostrud. Duis aliquip aliquip qui consequat irure Lorem veniam et.'
		}
	]
};
function rootReducer(state = initState, action) {
	console.log(action);
	if (action.type === 'DELETE_POST') {
		let newPosts = state.posts.filter((post) => {
			return action.id !== post.id;
		});
		return {
			...state,
			posts: newPosts
		};
	}
	return state;
}

export default rootReducer;
