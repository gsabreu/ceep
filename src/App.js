import React, { Component } from 'react'
import NotesList from './components/NotesList'
import RegisterForm from './components/RegisterForm'
import './assets/App.css'
import './assets/index.css'

class App extends Component {

  constructor(){
    super()
    this.state = {
      notes:[]
    }
  }

  createNote(title, text) {
    const newNote = {title, text}
    const newNotesArray = [...this.state.notes, newNote]
    const newState = {
      notes:newNotesArray
    }
    this.setState(newState)
  }

  render () {
    return (
      <section className="conteudo">
        <RegisterForm createNote={this.createNote.bind(this)} />
        <NotesList notes={this.state.notes}/>
      </section>
    )
  }
}

export default App
