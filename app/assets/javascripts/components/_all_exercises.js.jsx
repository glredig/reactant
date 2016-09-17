var AllExercises = React.createClass({
	getInitialState() {
		return { exercises: [] }
	},

	componentDidMount() {
		$.getJSON('/api/v1/exercises.json', (response) => { this.setState({ exercises: response }) });
	},

	render() {
		var exercises = this.state.exercises.map((exercise) => {
			return (
				<div key={exercise.id} >
					<h3>{exercise.name}</h3>
					<p>{exercise.description}</p>
				</div>
			);
		});

		return (
			<div>
				<h2>All Exercises</h2>
				{ exercises }
			</div>
		)
	}
});