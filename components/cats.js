import React from 'react'

class Cats extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cats: {}
    }
  }

  render () {
    return (
      <span>Kediler</span>
    )
  }
}

export default Cats
