import React, { Component } from 'react'
import './style.css'
import { ReactComponent as DeleteSVG} from '../../assets/img/delete.svg'

class NotesCard extends Component {

  delete(){
    this.props.deleteNote(this.props.noteIndex)
  }
  render () {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.title}</h3>
          <DeleteSVG onClick= {this.delete.bind(this)}/>
          <h4>{this.props.category}</h4>
        </header>
        <p className="card-nota_texto">{this.props.text}</p>
      </section>
    )
  }
}

export default NotesCard
