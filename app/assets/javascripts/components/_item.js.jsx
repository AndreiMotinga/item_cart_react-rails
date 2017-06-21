var Item = React.createClass({
  getInitialState() {
    return { editable: false }
  },

  handleEdit() {
    if(this.state.editable) {
      var id = this.props.item.id
      var name = this.refs.name.value
      var description = this.refs.description.value
      var item = {
        id,
        name,
        description
      }
      this.props.handleUpdate(item)
    }

    this.setState({ editable: !this.state.editable })
  },

  render() {
    var name
    var description

    if(this.state.editable) {
      name = <input type='text' ref="name" defaultValue={this.props.item.name} />
      description = <input type='text' ref="description" defaultValue={this.props.item.description} />
    } else {
      name = <h3>{this.props.item.name}</h3>
      description = <p>{this.props.item.description}</p>
    }

    return (
      <div>
        {name}
        {description}
        <button onClick={this.handleEdit}>
          {this.state.editable ? 'Submit' : 'Edit'}
        </button>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
});
