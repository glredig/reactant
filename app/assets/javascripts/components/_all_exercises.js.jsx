var AllExercises = React.createClass({
	handleDelete(id) {
		this.props.handleDelete(id);
	},

	render() {
		var exercises = this.props.exercises.map((exercise) => {
			return (
				<div key={exercise.id} >
					<h3>{exercise.name}</h3>
					<p>{exercise.description}</p>
					<button onClick={this.handleDelete.bind(this, exercise.id)}>Delete</button>
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