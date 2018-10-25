// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
   name: '',
 })

 handleChange(event) {
   this.setState({
     text: event.target.value
   });
 }

  }
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Bands</label>
        <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name}/>
        <input type="submit" />
     </form>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  addTodo: formData => dispatch({ type: 'ADD_BAND', payload: formData })
})

export default connect(null, mapDispatchToProps)(BandInput);
