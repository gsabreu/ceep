import React, { Component } from 'react'
import './style.css'

class RegisterForm extends Component {

  constructor(props){
    super(props)
    this.title = ''
    this.text = ''
  }

  _handleTitleChange(event){
    event.stopPropagation()
    this.title = event.target.value
  }

  _handleTextChange(event){
    event.stopPropagation()
    this.text = event.target.value
  }

  _createNote(event){
    event.preventDefault()
    event.stopPropagation()
    this.props.createNote(this.title, this.text)
  }

  render () {
    return (
      <form className="form-cadastro"
      onSubmit={this._createNote.bind(this)}>
        <input 
          type='text' 
          placeholder='Título' 
          className="form-cadastro_input"
          onChange={this._handleTitleChange.bind(this)}
        />
        <textarea 
          rows = {15}
          placeholder='Escreva sua nota...' 
          className="form-cadastro_input"
          onChange={this._handleTextChange.bind(this)}
        />
        <button className=" form-cadastro_input form-cadastro_submit ">
          Criar Nota
        </button>
      </form>
    )
  }
}

export default RegisterForm
