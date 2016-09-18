var AllExercises = React.createClass({
	handleDelete(id) {
		this.props.handleDelete(id);
	},

	onUpdate(exercise) {
		this.props.onUpdate(exercise);
	},

	render() {
		var exercises = this.props.exercises.map((exercise) => {
			return (
				<div key={exercise.id} >
					<Exercise exercise={exercise}
							  handleDelete={this.handleDelete.bind(this, exercise.id)}
							  onUpdate={this.onUpdate} />
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