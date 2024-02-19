import React, { useContext } from "react";
import "../../styles/styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-expand-md mb-5 navbar-dark fixed-top">
			<a className="navbar-brand" href="#home"><img src="https://ibb.co/FqMgJNH" alt="logo" /></a>
			<a className="navbar-toggler togg" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<i className="fas fa-bars menu "></i>
			</a>

			{/* <!-- Navbar links --> Nota: el condicional debe cambiarse por el token de iniciar sesion uso de location es temporal */}
			<div className="collapse navbar-collapse" id="collapsibleNavbar">
				{store.auth === false ? <ul className="navbar-nav navbar-t">
					<li className="nav-item">
						<a className="nav-link" href="#home">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#about">sobre nosotros</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#class" >Funciones</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#sch">Schedules</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#contact">Contacto</a>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to={'/registro'}>Registrarse</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to={'/login'}>Iniciar Sesion</Link>
					</li>
				</ul> : <ul className="navbar-nav navbar-t">
					{!store.usuario.is_premium ? <li className="nav-item">
						<Link className="nav-link" to={'/pagos'}>Hazte Premium!</Link>
					</li> : null}
					<li className="nav-item">
						<Link className="nav-link" to={'/rutinas'}>Rutinas</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to={'/recetas'}>Recetas</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to={'/perfil'}>Perfil</Link>
					</li>
					<li className="nav-item">
						<a className="nav-link" onClick={() => { actions.logout(), navigate('/') }}  > Cerrar sesión </a>
					</li>
				</ul>}

				<ul className="navbar-nav navbar-social ">
					<a href=""><i className="fab fa-facebook-f"></i></a>
					<a href=""> <i className="fab fa-instagram"></i></a>
					<i className="fab fa-twitter"> </i>
				</ul>
			</div>
		</nav>
	);
};
