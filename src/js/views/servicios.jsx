import React from "react";
import {Card} from "../components/card.jsx";
import imagen1 from "../../img/estudios.jpg";
import imagen2 from "../../img/mantenimiento.jpg";
import imagen3 from "../../img/diagnostico.jpg";
import imagen4 from "../../img/planimetria.png";

export const Servicios = () => {
    return (
        <div className="container-fluid malla mt-3 text-light p-1" id="servicios">
            <h1 className="text-center mb-4"> Nuestros Servicios</h1>
            <div className="d-flex flex-column flex-md-row p-3">
            <Card title="Estudios" imagen={imagen1} texto="Se presupuesta la medición de las variables eléctricas." />
            <Card title="Mantenimietos" imagen={imagen2} texto="Se considera la realización de un mantenimiento preventivo y uno predictivo."/>
            <Card title="Diagnosticos" imagen={imagen3} texto="Diagnostico de banco de condensadores fijo y con etapas" />
            <Card title="Planimetría" imagen={imagen4} texto="Planimetría de instalación eléctrica interior proyectado" />
            </div>
        </div>           
    );
};