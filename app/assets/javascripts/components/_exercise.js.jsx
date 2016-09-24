var Exercise = React.createClass({
	getInitialState() {
	    return {
	        editable: false  
	    };
	},

	handleEdit() {
		if (this.state.editable) {
			var name = this.refs.name.value;
			var id = this.props.exercise.id;
			var description = this.refs.description.value;
			var exercise = { id: id, name: name, description: description };
			this.props.onUpdate(exercise);
		}
		this.setState({ editable: !this.state.editable })
	},

	render() {
		var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.exercise.name} /> : <h3>{this.props.exercise.name}</h3>;
		var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.exercise.description} /> : <p>{this.props.exercise.description}</p>;

		return (
			<div>
				{ name }
				{ description }
				<span onClick={this.props.handleDelete}>Delete</span> 
				<span onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit'}</span>
			</div>
		)
	}
})