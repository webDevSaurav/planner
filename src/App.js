import React, { Component } from 'react'
import './App.css';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import Cockpit from './components/Cockpit/Cockpit';


class App extends Component {
  
  state = {
    data : [
      {
        id : "1",
        title : "abc",
        tasks : [
          {
            id: "1",
            title : "one",
            content : "",
            remainder : ""
          },
          {
            id: "2",
            title : "two",
            content : "",
            remainder : ""
          },
          {
            id: "3",
            title : "three",
            content : "",
            remainder : ""
          }
        ]
      },
      {
        id : "2",
        title : "pqr",
        tasks : [
          {
            id: "1",
            title : "one",
            content : "",
            remainder : ""
          },
          {
            id: "2",
            title : "two",
            content : "",
            remainder : ""
          },
          {
            id: "3",
            title : "three",
            content : "",
            remainder : ""
          }
        ]
      },
      {
        id : "3",
        title : "ayx",
        tasks : [
          {
            id: "1",
            title : "one",
            content : "",
            remainder : ""
          },
          {
            id: "2",
            title : "two",
            content : "",
            remainder : ""
          },
          {
            id: "3",
            title : "three",
            content : "",
            remainder : ""
          }
        ]
      }
    ]
  }

  render(){
    return (
      <Container maxWidth="sm">
        <Cockpit data = {this.state.data}></Cockpit>
      </Container>
    )
  }
}

export default App;
