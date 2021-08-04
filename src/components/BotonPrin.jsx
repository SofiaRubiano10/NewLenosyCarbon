import React from 'react'
// importacion estilos CSS
import '../utils/CSS/botonprin.css'
// importacion de links 
// import {Link} from 'react-router-dom'

export const BotonPrincipal = () => {
    return (
        <div className="contePrincipal">
            <div id="boton1">
                {/* <Link to="siguiente"> */}
                    <button type="button" id="iniciar">REGISTRAR PEDIDO EN MESA</button>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default BotonPrincipal;