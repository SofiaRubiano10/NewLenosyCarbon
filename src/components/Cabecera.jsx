// importacion React
import React from 'react'
// importacion estilos CSS
import '../utils/CSS/cabecera.css'
// importacion imagen
import Logolen from '../utils/imagenes/LogoLenosHeader.png'

const Cabecera = () => {
    return(
        <div className="cabeceraa">
            <img src={Logolen} alt="es Logolen"/>
        </div>
        
    )
}

export default Cabecera