var AllExercises = React.createClass({
	render() {
		var exercises = this.props.exercises.map((exercise) => {
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