import React from "react";
import style from "./QuienesSomos.module.css";
import { NavLink } from "react-router-dom";

const QuienesSomos = () => {

    return (
        <>
            <div className={style.conteiner}>

                <h1>Nuestra Misión</h1>
                <h3>
                    En ManyStudio, nos enorgullece ofrecer servicios de manicura de alta calidad que van más allá de embellecer tus uñas. Nuestra misión es brindar experiencias relajantes y personalizadas que resalten la belleza natural de tus manos y te hagan sentir segura y radiante.
                </h3>
                <hr />
                <h1> Servicios Exclusivos</h1>

                <h2> Manicura Profesional</h2>
                <p>
                    Nuestro equipo de manicuristas altamente capacitadas se esfuerza por proporcionar tratamientos profesionales que van desde manicuras clásicas hasta las últimas tendencias en nail art. Nos especializamos en cuidar la salud de tus uñas, utilizando productos de primera calidad.
                </p>

                <h2>Tratamientos de Spa para Manos</h2>
                <p>
                    Sumérgete en la indulgencia con nuestros tratamientos de spa para manos, diseñados para rejuvenecer y revitalizar la piel. Desde exfoliaciones hasta masajes relajantes, cada detalle está pensado para ofrecerte una experiencia sensorial única.
                </p>

                <h2>Extensiones y Diseños Personalizados</h2>
                <p>
                    Si buscas un cambio de look o simplemente quieres lucir uñas impactantes, nuestro equipo experto te ofrece una variedad de opciones, desde extensiones de uñas hasta diseños personalizados que reflejan tu estilo único.
                </p>

                <h2>Ambiente Relajante</h2>
                <p>
                    En ManyStudio, creamos un ambiente acogedor y relajante donde puedes escapar del estrés diario. Nuestro espacio está diseñado para que te sientas como en casa mientras recibes los mejores cuidados para tus manos y uñas.
                </p>

                <h2>Compromiso con la Higiene</h2>
                <p>
                    La salud y seguridad de nuestros clientes son nuestra máxima prioridad. Seguimos estrictos protocolos de higiene y esterilización para garantizar un entorno seguro y libre de riesgos.
                </p>
                <hr />
                <NavLink to="/contacto">
                    <button className={style.button}>AGENDAR CITA</button>
                </NavLink>


            </div>
        </>
    )
}

export default QuienesSomos;