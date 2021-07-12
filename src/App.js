import React, { Component } from 'react'
import NotesList from './components/NotesList'
import CategoryList from './components/CategoryList'
import RegisterForm from './components/RegisterForm'
import './assets/App.css'
import './assets/index.css'

class App extends Component {

  constructor(){
    super()
    this.state = {
      notes:[],
      categories:[],
    }
  }

  createNote(title, text, category) {
    const newNote = {title, text, category}
    const newNotesArray = [...this.state.notes, newNote]
    const newState = {
      notes:newNotesArray
    }
    this.setState(newState)
  }

  deleteNote(index){
    let notesArray = this.state.notes
    notesArray.splice(index, 1)
    this.setState({notes:notesArray})
  }

  addCategory(categoryName){
    const newCategoriesArray = [...this.state.categories, categoryName]
    const newState = {...this.state, categories:newCategoriesArray}
    this.setState(newState)
  }

  render () {
    return (
      <section className="conteudo">
        <RegisterForm
          categories={this.state.categories}
          createNote={this.createNote.bind(this)} 
        />
        <main className="conteudo-principal">
          <CategoryList 
            addCategory={this.addCategory.bind(this)}
            categories={this.state.categories}
          />
          <NotesList 
            deleteNote={this.deleteNote.bind(this)}
            notes={this.state.notes}/>
        </main>
      </section>
    )
  }
}

export default App
