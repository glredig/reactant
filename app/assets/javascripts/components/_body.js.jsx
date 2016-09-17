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

	render() {
	  return (
	  	<div>
	  		<NewExercise handleSubmit={this.handleExerciseSubmit}/>
	  		<AllExercises exercises={this.state.exercises} />
	  	</div>
	  )
	}
});