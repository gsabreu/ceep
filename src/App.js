import React, { Component } from 'react'
import NotesList from './components/NotesList'
import RegisterForm from './components/RegisterForm'
import './assets/App.css'
import './assets/index.css'

class App extends Component {
  render () {
    return (
      <section className="conteudo">
        <RegisterForm />
        <NotesList />
      </section>
    )
  }
}

export default App
