import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount () {
    // this.props.match.params.class    matches the identifier with the one in the server
    // return (
      axios.get(`http://localhost:3005/students?class=${ this.props.match.params.class }`).then( (response) => {
        console.log( response.data )
        this.setState({ students: response.data })
      }).catch( console.log() ) 
    // )
  }

  render() {
    let students = this.state.students.map( (e, i) => {
      return  <Link to={`/student/${ e.id }`} key={i}>
                <h3>{ e.first_name } { e.last_name }</h3>
              </Link> 
    })

    return (
      <div className="box">
        <h1>{ this.props.match.params.class }</h1>
        <h2>ClassList:</h2>
        { students }
      </div>
    )
  }
    
}