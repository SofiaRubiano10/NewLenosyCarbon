import React, { Component, useState } from 'react'
import "../utils/CSS/buttons.css"
import Modal from './Modal'
import { render } from '@testing-library/react'


const Buttons = () => {

    const [active, setActive] = useState(false);
    const toggle = () =>{
        setActive(!active);
    }


    return (
        <div className="contePrincipalA">
            <section className="threeButtons">
                <div>
                    <button className="bmenu" onClick={toggle}>ENTRADAS</button>
                    <Modal active={active} toggle={toggle}>
                        <h1>PRUEBA</h1>
                    </Modal>
                </div>
                <div>
                    <button className="bmenu"  onClick={toggle}>CARNES</button>
                    <Modal active={active} toggle={toggle}>
                        <h1>PRUEBA2</h1>
                    </Modal>
                </div>
                <div>
                    <button className="bmenu">SÁNDWICH</button>
                </div>
                <div>
                    <button className="bmenu">PORCIONES</button>
                </div>
                <div>
                    <button className="bmenu">POSTRES</button>

                </div>
                <div>
                    <button className="bmenu">PRUEBA</button>
                </div>
                <div>
                    <button className="bmenu">PRUEBA</button>

                </div>
                <div>
                    <button className="bmenu">PRUEBA</button>
                </div>
                <div>
                    <button className="bmenu">PRUEBA</button>
                </div>
                <div>
                    <button className="bmenu">PRUEBA</button>
                </div>
                <div>
                    <button className="bmenu">PRUEBA</button>
                </div>
                <div>
                    <button className="bmenu">PRUEBA</button>
                </div>
            </section>

            <section className="twoButtons">
                <div>
                    <button className="bmenuB">PRUEBA</button>
                </div>
                <div>
                    <button className="bmenuB">PRUEBA</button>
                </div>
                <div>
                    <button className="bmenuB">PRUEBA</button>
                </div>
                <div>
                    <button className="bmenuB">PRUEBA</button>
                </div>

            </section>

        </div>
    )
}

export default Buttons