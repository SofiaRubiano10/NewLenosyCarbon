import React, { Component, useState } from 'react'
import "../utils/CSS/buttons.css"
import Modal from './Modal'
import { render } from '@testing-library/react'


const Buttons = () => {

    const [active, setActive] = useState(false);
    const toggle = () =>{
        setActive(!active);
        setTitle("gato")

    }
    const toggle2 = () =>{
        setActive(!active);
        setTitle("perro")
    }
    const [titleModal, setTitle] = useState("")


    return (
        <div className="contePrincipalA">
            <section className="threeButtons">
                <div>
                    <button className="bmenu" onClick={toggle}>ENTRADAS</button>
                    <Modal active={active} toggle={toggle} titleModal={"Carnes"} />
                </div>

                {/* <div>
                    <button className="bmenu"  onClick={toggle}>CARNES</button>
                    <Modal active={active} toggle={toggle}>
                        <h1>PRUEBA2</h1>
                    </Modal>
                </div> */}
                <div>
                    <button className="bmenu" onClick={toggle2}>SÁNDWICH</button>
                    <Modal active={active} toggle={toggle2} titleModal={titleModal} />
                </div>
                <div>
                    <button className="bmenu">PORCIONES</button>
                </div>
                <div>
                    <button className="bmenu">POSTRES</button>

                </div>
                <div>
                    <button className="bmenu">BEBIDAS</button>
                </div>
                <div>
                    <button className="bmenu">CÓCTELES</button>

                </div>
                <div>
                    <button className="bmenu">LICORES</button>
                </div>
                <div>
                    <button className="bmenu">VINOS</button>
                </div>
                <div>
                    <button className="bmenu">DESAYUNOS</button>
                </div>
                <div>
                    <button className="bmenu">JUGOS </button>
                </div>
                <div>
                    <button className="bmenu">CARNES CASA</button>
                </div>
            </section>

            <section className="twoButtons">
                <div>
                    <button className="bmenuB">ENSALADAS Y SOPAS</button>
                </div>
                <div>
                    <button className="bmenuB">OTRAS OPCIONES</button>
                </div>
                <div>
                    <button className="bmenuB">BEBIDAS CALIENTES</button>
                </div>
                <div>
                    <button className="bmenuB">KITS PARRILLEROS</button>
                </div>

            </section>

        </div>
    )
}

export default Buttons