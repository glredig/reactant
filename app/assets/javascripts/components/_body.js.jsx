var Body = React.createClass({
	getInitialState() {
		return { exercises: [] }
	},

	componentDidMount() {
		$.getJSON('/api/v1/exercises.json', (response) => { this.setState({ exercises: response }) });
	},

	handleExerciseSubmit(exercise) {
		var newState = this.state.exercises.concat(exercise);
		this.setState({ exercises: newState });
	},

	handleExerciseDelete(id) {
		$.ajax({
			url: `/api/v1/exercises/${id}`,
			type: 'DELETE',
			success: () => {
				this.removeExerciseById(id);
			}

		});
	},

	handleExerciseUpdate(exercise) {
		$.ajax({
			url: `/api/v1/exercises/${exercise.id}`,
			type: 'PUT',
			data: { exercise: exercise },
			success: () => {
				this.updateExercises(exercise);
			}
		});
	},

	updateExercises(exercise) {
		console.log('update');
		var exercises = this.state.exercises.filter((i) => {
			return i.id != exercise.id
		});
		exercises.push(exercise);

		this.setState({exercises: exercises});
	},

	removeExerciseById(id) {
		var newState = this.state.exercises.filter((exercise) => {
				return exercise.id != id;
			});

		this.setState({ exercises: newState });
	},

	render() {
	  return (
	  	<div>
	  		<NewExercise handleSubmit={this.handleExerciseSubmit} />
	  		<AllExercises exercises={this.state.exercises} handleDelete={this.handleExerciseDelete} onUpdate={this.handleExerciseUpdate} />
	  	</div>
	  )
	}
});