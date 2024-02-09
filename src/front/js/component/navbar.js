import React from "react";

import logo from "../../img/logo.png"

export const Navbar = () => {
  return (
    <nav classname="navbar navbar-expand-md  navbar-dark fixed-top">

      <a classname="navbar-brand" href="#home"><img src="../../img/logo.png" /></a>

      <a classname="navbar-toggler togg" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">

        <i classname="fas fa-bars menu "></i>
      </a>


      <div classname="collapse navbar-collapse" id="collapsibleNavbar">
        <ul classname="navbar-nav navbar-t">
          <li classname="nav-item">
            <a classname="nav-link" href="#home">Home</a>
          </li>
          <li classname="nav-item">
            <a classname="nav-link" href="#about">sobre nosotros</a>
          </li>
          <li classname="nav-item">
            <a classname="nav-link" href="#class">Clases</a>
          </li>
          <li classname="nav-item">
            <a classname="nav-link" href="#sch">Schedules</a>
          </li>
          <li classname="nav-item">
            <a classname="nav-link" href="#contact">Contacto</a>
          </li>
        </ul>
        <ul classname="navbar-nav navbar-social ">
          <a href=""><i classname="fab fa-facebook-f"></i></a>
          <a href=""> <i classname="fab fa-instagram"></i></a>
          <i classname="fab fa-twitter"> </i>

        </ul>

      </div>
    </nav>
  );
};
