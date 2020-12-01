import React, { Component } from 'react';
import "./estilo.css";

class ListaDeCategorias extends Component {

  _handleEventoInput(e) {
    if (e.key === 'Enter') {
      console.log(e)
      const valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, i) => {
            return <li className="lista-categorias_item" key={i}>{categoria}</li>
          })}
        </ul>
        <input
          className="lista-categorias_input"
          type="text"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;