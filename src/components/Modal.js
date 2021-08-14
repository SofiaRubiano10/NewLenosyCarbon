import React, { useEffect, useState } from 'react'
import Portal from './Portal'
import "../utils/CSS/modal.css"
import { db } from '../firebase';

 const Modal =(props) =>{
   
    const { children, toggle, active, titleModal, products} = props;



    return (
        <Portal>
            {active  && (
                <div className="wrapperMo">
                    <div className="window">
                        <button className="closeBtn" onClick={toggle}>X</button>
                        <div>
                            <h1>{titleModal}</h1>
                            {products && products.map((e, i) => {
                                return(
                                    <div className="info">
                                        <div className="nombre">
                                            <h2 className="thin">{e.nombre}</h2>
                                        </div>
                                        <div className="precio">
                                            <h2 className="thin">${e.precio}</h2>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                </div>
            )}
        </Portal>
    )

}

export default Modal