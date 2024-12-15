import React, { Component } from "react";
import logo from "../../img/electricidad.png";

export const Footer = () => (
	<footer className="container-fluid mt-auto py-3 text-center">
		<div className="d-flex justify-content-around">
			<div className="p-2">
				<img src={logo} className="img rounded float-start" alt="Electrica GyG" />
				<p className="text-danger"> 
					<i className="p-2 fa-brands fa-linkedin" />
					<i className="p-2 fa-brands fa-square-instagram" />
					<i className="p-2 fa-brands fa-square-facebook" />
				</p>
			</div>
			<div className="p-2">
				<h6>Contacto</h6>
				<p>+222222222 +56912341234</p>
				<p>contacto@electricidadgyg.cl</p>
				<p>El olivar 1045, San Bernardo. Santiago</p>
			</div>
			<div className="p-2">
				<h6>G&G ELECTRICIDAD</h6>
				<p>G & G Electricidad SpA, es una empresa del rubro eléctrico,<br /> que cuenta con profesionales y técnicos certificados <br />
					para el desarrollo de proyectos y servicios, <br />posicionándonos como una empresa competitiva dentro del mercado. </p>
			</div>
		</div>
		<div className="linea"></div>
		<div className="container mt-4">
			<p>
			Copyright © 2024 G&G ELECTRCIDAD. Todos los derechos reservados.
			</p>
		
		</div>
		
	</footer>
);
