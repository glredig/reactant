var NewExercise = React.createClass({
	handleClick() {
		var name = this.refs.name.value;
		var description = this.refs.description.value;

		$.ajax({
			url: '/api/v1/exercises',
			type: 'POST', 
			data: { exercise: { name: name, description: description } },
			success: (exercise) => {
				this.props.handleSubmit(exercise);
			}
		})
	},

	render() {
		return (
			<div>

				<input ref='name' placeholder='Exercise name' />
				<input ref='description' placeholder='Description' />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
})