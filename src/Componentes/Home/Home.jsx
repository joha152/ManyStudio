import React from "react";
import uñas from "../../../imagenes/amatusuñas.png"
import style from "./Home.module.css";

const Home = () => {


    return (

        <>

            <div classname={style.div}>
                <img src={uñas} alt="ama tus uñas" style={{ height: '35rem', marginTop: "5rem", marginRight: "35rem" }} />

                <p >
                    ¡Descubre la excelencia en el cuidado de tus uñas en ManyStudio!


                </p>
            </div>

        </>
    )
}


export default Home;
