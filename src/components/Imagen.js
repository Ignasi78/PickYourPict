import React, { Component } from 'react';


// los class components tienen state, tienen this, y componente del ciclo de vida del component
// esto no esta en una functional component... que es lo que haremos ahora, una funcion
const Imagen = (props) => {

    // elegimos que campos vamos a mostrar desde los Props de la imagen
    const {largeImageURL, likes, previewURL, tags, views} = props.imagen;

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">            
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">{likes} Me gusta</p>
                    <p className="card-text">{views} Vistas</p>
                    <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block">Ver imagen</a>
                </div>
            </div>
        </div>
    )
}

export default Imagen;
