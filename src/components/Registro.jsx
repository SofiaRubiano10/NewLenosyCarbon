import React from 'react'
// importacion estilos CSS
import '../utils/CSS/registro.css'
// importacion de links 
// import {Link} from 'react-router-dom'

export const Registro = () => {
    let mesa =[{nombre:"MESA 1", estado:"ocupada"}, {nombre:"MESA 2", estado:"ocupada"}, {nombre:"MESA 3", estado:"vacia"}, {nombre:"MESA 4", estado:"vacia"}, {nombre:"MESA 5", estado:"vacia"}, {nombre:"MESA 6", estado:"vacia"},];
    let mesero =["JUANITO", "JUANITE", "JUANITA"];
    return (
        <div className="superPrincipal">

            <div className="contePrincipal">
                <div class="desple">
                    <select name="mesa" id="mesa"> 
                        <option value="">MESA</option>
                        {mesa && mesa.map((element,index)=>{
                            return(
                                <option value={index+1}>{element.nombre}</option>
                            )
                        })}
                    </select>
                    <select name="mesero" id="mesero">
                        <option value="">MESERO</option>
                        {mesero && mesero.map((element,index)=>{
                            return(
                                <option value={index+1}>{element}</option>
                            )
                        })}
                    </select>
                    <div className="ocupadas">
                        {mesa && mesa.filter(element=>element.estado != "vacia").map((element,index)=>{
                            console.log(element.estado === "ocupada")
                            return (
                                <div key={index+1}>{element.nombre}</div>
                            )
                        })}
                    </div>
                </div>
                

                <div id="boton2">
                {/* <Link to="menu"> */}
                    <button type="button" id="sig">SIGUIENTE</button>
                {/* </Link> */}
                </div>               

            </div>
        </div>
        
            
        
    )
}

export default Registro;