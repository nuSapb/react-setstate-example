import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    name: 'John',
    age: 5,
    skills: [{ id: 3, name: 'Java' }, { id: 4, name: 'C++' }, { id: 5, name: 'Swift' }]
  }
  handleChangeName = () => {
    this.setState({ name: 'Smith' })
  }

  handleChangeAge = () => {
    this.setState({ age: 20 })
  }

  handleChangeSkill = () => {
    this.setState({
      skills: [{ id: 1, name: 'Go' }, { id: 6, name: 'Python' }, { id: 7, name: 'C++' }]
    })
  }

  render() {
    return (
      <div>
        <p>name: {this.state.name}</p>
        <p>age: {this.state.age}</p>
        <ul>
          {this.state.skills.map(skill => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
        <button onClick={this.handleChangeName}>change name</button>
        <br />
        <button onClick={this.handleChangeAge}>change age</button>
        <br />
        <button onClick={this.handleChangeSkill}>change skills</button>
      </div>
    )
  }
}

export default App
