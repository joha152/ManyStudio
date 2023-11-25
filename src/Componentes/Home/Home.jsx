import React from "react";
import uñas from "../../../imagenes/amatusuñas.png"
import style from "./Home.module.css";

const Home = () => {


    return (

        <>

            {/* <div classname={style.div}>
                <img src={uñas} alt="ama tus uñas" style={{ height: '35rem', marginTop: "5rem", marginRight: "35rem" }} />

                <p >
                    ¡Descubre la excelencia en el cuidado de tus uñas en ManyStudio!
                </p>
            </div> */}
            <div className={style.div}>

                <p className={style.p}>
                    ¡Descubre la excelencia en el cuidado de tus uñas en ManyStudio!
                </p>
                <img src={uñas} alt="ama tus uñas" className={style.img} />
            </div>


        </>
    )
}


export default Home;
