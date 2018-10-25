import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Band'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, id) => <Band key={id} name={band} />)
  render() {
    return(
      <div>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
return {
  bands: state.bands
}
}

export default connect(mapStateToProps)(BandsContainer)
