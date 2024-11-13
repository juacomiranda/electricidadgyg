import React from "react";
import { Link } from "react-router-dom";
import  logo  from "../../img/electricidad.png";

export const Navbar = () => {
	return (
        <div className="container-fluid">
        <nav className="navbar navbar-expand-sm fixed-top bg-body-tertiary">
            <div className="container-fluid mx-5">
                <a className="navbar-brand" href="#">
                    <img className="img" src={logo} alt="Electricidad G&G" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#nosotros">Empresa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicios">Servicios</a>
                        </li>
                        {/*<li className="nav-item dropdown">
                            <a className="nav-link" href="#servicios" role="button" data-bs-toggle="dropdown" aria-expanded="false">Servicios</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"></hr></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>*/}
                        <li className="nav-item">
                            <a className="nav-link" href="#areas">Áreas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
    );
};      