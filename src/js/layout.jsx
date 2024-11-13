import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Home } from "./views/home";
import {Nosotros} from "./views/nosotros";
import {Servicios} from "./views/servicios";
import {Contacto} from "./views/contacto";
import {Areas} from "./views/areas";

const Layout = () => {
	

	return (
		
		<div className="d-flex flex-column min-vh-100">
			<BrowserRouter>
               <ScrollToTop>
					<Navbar />
					<Home />
					<Nosotros />
					<Servicios />
					<Areas />
					<Contacto />
					<Routes>

						
					</Routes>	
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	
	);
};

export default Layout;