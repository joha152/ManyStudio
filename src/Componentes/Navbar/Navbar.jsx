import React from "react";
import logo from "../../../imagenes/ManyStudio.png"
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css"


const Navbar = () => {

    return (
        <>
            <nav className={style.nav}>

                <NavLink to="/" >
                    <button className={style.button}>HOME</button>
                </NavLink>

                <NavLink to="/quienessomos">
                    <button className={style.button}>QUIENES SOMOS</button>
                </NavLink>

                <img src={logo} alt="logo" style={{ height: '6 rem' }} />

                <NavLink to="/galeria">
                    <button className={style.button}>GALERIA</button>
                </NavLink>

                <NavLink to="/contacto">
                    <button className={style.button}>CONTACTO</button>
                </NavLink>

            </nav>

        </>
    )


}


export default Navbar;