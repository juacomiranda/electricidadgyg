import React from "react";
import { useForm } from '@formspree/react';


    

export const Contacto = () => {
    const [state, handleSubmit] = useForm("movvzpjv");
    if (state.succeeded) {
        return <p>Te contactaremos pronto!</p>;
    }
    
    return (
        <div className="container mt-5 pt-5" id="contacto">
            <h2 className="text-center  ">¿Quieres ponerte en contacto con nosotros?</h2>
            <div className="container bg-contacto">
                <form action="https://formspree.io/f/movvzpjv" method="POST" id="contactform" className="bg-light py-2" onSubmit={handleSubmit}>
                    <div className="mb-3 mx-2 mt-2">
                        <input type="text" className="form-control" id="nombre" placeholder="Nombre"/>
                    </div>
                    <div className="mb-3 mx-2">
                        <input type="email" className="form-control" id="email" placeholder="Correo electornico"/>
                    </div>
                    <div className="mb-3 mx-2">
                        <input type="number" className="form-control" id="movil" placeholder="Telefono de contacto"/>
                    </div>
                    <div className="mb-3 mx-2">
                        <textarea className="form-control" id="message" rows="4" required />
                    </div>
                    <button type="submit" disabled={state.submitting} class="btn btn-danger ms-3">Enviar</button>
                </form>
            </div>
        </div>
    );
};