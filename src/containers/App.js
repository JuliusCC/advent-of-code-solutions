import React, { Component } from 'react'
import Header from '../components/Header'
import SolutionForm from './SolutionForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SolutionForm />
      </div>
    )
  }
}

export default App
