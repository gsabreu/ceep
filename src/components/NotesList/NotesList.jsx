import React, { Component } from 'react'
import NotesCard from '../NotesCard'
import './style.css'

class NotesList extends Component {
  render () {
    return (
      <ul className="lista-notas"> 
        {Array.of('Trabalho', 'Trabalho', 'Estudos').map((type, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <div>{type}</div>
              <NotesCard />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NotesList
