import React from "react";



export const Card = (props) => {
    return (
        <div className="card m-2">
            <img src={props.imagen} className="card-img-top" alt="rayo" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.texto}</p>
                <a href="#" className="btn btn-primary">Detalle</a>
            </div>
        </div>
    );   
};

