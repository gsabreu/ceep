import React, { Component } from 'react'
import NotesCard from '../NotesCard'
import './style.css'

class NotesList extends Component {

  render () {
    return (
      <ul className="lista-notas"> 
        {this.props.notes.map((note, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <NotesCard title={note.title} text={note.text} />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NotesList
