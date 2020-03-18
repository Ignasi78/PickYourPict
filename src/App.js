import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {

  // para hacer el state, como es un objeto, algunos hacen con el constructor
  // constructor() {
  //    state .....
  //}
  // pero vamos a usar de forma simplificada:
  state = {
    termino : '',
    imagenes : [],
    pagina : ''
  }

  scroll = () => {
      const elemento = document.querySelector('.jumbotron');
      elemento.scrollIntoView({behavior: 'smooth'},{block: 'start'});
  }

  paginaAnterior = () => {
    console.log('anterior...');
    // leer el state de la pagina actual
    let pagina = this.state.pagina;

    // si pagina es 1, ya no ir mas atras
    if (pagina === 1) return null;

    // restar uno a la pagina actual
    pagina -= 1;

    // agregar el cambio al state
    this.setState(
          {pagina},
          () => { this.consultarApi(); this.scroll() }
        );

        console.log(pagina);
  }
  
  paginaSiguiente = () => {
      console.log('siguiente...');
      // leer el state de la pagina actual
      let pagina = this.state.pagina;

      // sumar uno a la pagina actual
      pagina += 1;

      // agregar el cambio al state
      this.setState({
          pagina
        }, () => { this.consultarApi(); this.scroll() }
        );

        console.log(pagina);
  }

  consultarApi = () => {
    const criterio = this.state.termino;    
    const paginado = this.state.pagina;
    console.log('criterio = '+ criterio);
    console.log('paginado = '+ paginado);
    const url = `https://pixabay.com/api/?key=15637944-3a759ae5b2efdf97ff20e3182&q=${criterio}&per_page=30&page=${paginado}`;

    console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}))
  }


  // funcion para recoger PROPS pasados de hijo (Componente Buscador) al padre (App)
  // 'termino' es lo que teclea el usuario como criterio de busqueda
  datosBusqueda = (termino) => {
    // console.log(termino);
    // ahora vamos a grabar en el state la palabra termino o criterio que ha escrito el usuario
    // y tambien una llamada a la funcion que consulta la API y refresca datos segun el termino criterio 
    this.setState(
      { termino : termino,
        pagina: 1
      }, 
      () => { this.consultarApi(); }
    )
  }
  // por esto es famoso react, porque reacciona rapidamente en el momento que el State cambia
  // y no actualiza toda la pagina sino solamente el trozo de pantalla del componente que cambia

  render(){
    return (  
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Pick your Pict</p>
          {/* parametro 'datosBusqueda' es un PROPS que pasamos de padre App a hijo Component Buscador*/}
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
            <Resultado 
              imagenes={this.state.imagenes} 
              paginaAnterior={this.paginaAnterior} 
              paginaSiguiente={this.paginaSiguiente} 
            />
        </div>        
      </div>
    );
  }
}

export default App;
