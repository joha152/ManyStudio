import React from "react";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css"


const Navbar = () => {

    return (
        <>
        <nav className={style.nav}>

 
            <NavLink to="/">
                <div className={style.button}>
                <Button color="secondary" style={{ fontSize: '20px',  margin: '10px', padding: '8px'}}>HOME</Button>
                </div>
            </NavLink>

            <NavLink to="/quienesSomos">
            <div className={style.button}>
                <Button color="secondary" style={{ fontSize: '20px',  margin: '10px', padding: '8px' }}>QUIENES SOMOS</Button>
                </div>
            </NavLink>

            <NavLink to="/galeria">
                <Button color="secondary" style={{ fontSize: '20px',  margin: '10px', padding: '8px' }}>GALERIA</Button>
            </NavLink>

            <NavLink to="/contacto">
                <Button color="secondary" style={{ fontSize: '20px',  margin: '10px', padding: '8px' }}>CONTACTO</Button>
            </NavLink>

        </nav>
        </>
    )


}


export default Navbar;