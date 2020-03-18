// forma antigua de hacer
//   import React from 'react';
import React, { Component } from 'react';

// forma antigua de hacer
//   class Buscador extends React.Component {
class Buscador extends Component {

    busquedaRef = React.createRef();

    // obtenerDatos(evento){
    // }          funcion que debes escribir mas, por tanto usaremos una arrow funcion
    
    obtenerDatos = (e) => {
        
        // prevenimos que si le das a buscar salgan los datos en parte superior 
        e.preventDefault();  
        
        // tomamos el valor del input
        const termino = this.busquedaRef.current.value;
        //console.log(termino);
        // termino que se envia del padre al hijo por Props pero retorna el valor por medio del mismo Prop
        // lo enviamos al componente principal App
        this.props.datosBusqueda(termino);
    }

    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control
                        form-control-lg" placeholder="busca tu imagen - ejemplo: Futbol"/>                                
                    </div>
                    <div className="form-group col-md-4">
                    <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar..."/>                                
                    </div>
                </div>
            </form>
        )
    }
}
// en JavaScript puro hariamos esto
// document.querySelector('form').addEventListener('submit', function(){
// pero en React manejamos los eventos directamente en la etiqueta <form> del JSX del Return

export default Buscador;
