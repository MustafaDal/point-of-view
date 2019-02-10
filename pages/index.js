import React from 'react'
import styled from 'styled-components'
import 'isomorphic-unfetch'
import Cats from '../components/cats'

const Title = styled.h1`
  font-family: sans-serif, serif, arial;
  color: blue;
  font-size: 3rem;
  font-weight: 500;
`

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  componentDidMount () {
    fetch('//localhost:4000/cats').then(res => res.json()).then(json => {
      this.setState({ cats: json })
    })
  }

  render () {
    return (
      <div>
        <Cats></Cats>
        <p>This is home page!</p>
        {this.props.userAgent}
        <ul>
          {this.state.cats.map(i => <li key={i.name}>i.name</li>)}
        </ul>
        <Title>My page</Title>
      </div>
    )
  }
}