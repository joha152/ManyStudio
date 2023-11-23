import React from "react";
import uñas from "../../../imagenes/amatusuñas.png"
import style from "./Home.module.css";

const Home = () => {


    return (

        <>

            <div classname={style.div}>
                 <img src={uñas} alt="ama tus uñas"  style={{ height: '35rem', marginTop: "5rem", marginRight: "35rem"}}/>

<p >
    hola somos nail many studio, un lugar en donde te cortan los dedos y sos feliz
</p>
            </div>

        </>
    )
}


export default Home;
