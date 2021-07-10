import React, { Component } from 'react'
import "./style.css"

export default class CategoryList extends Component {
    _handleInputEvent(event){
        if(event.key === 'Enter'){
            let categoryValue =event.target.value
            this.props.addCategory(categoryValue)
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categories.map((category, index) => {
                        return <li key={index} className="lista-categorias_item">{category}</li>
                    })}
                </ul>
                <input 
                    type="text" 
                    className="lista-categorias_input" 
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleInputEvent.bind(this)}
                />
            </section>
        )
    }
}
