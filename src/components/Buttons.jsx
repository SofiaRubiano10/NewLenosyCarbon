import React, { useState, useEffect} from 'react'
import "../utils/CSS/buttons.css"
import Modal from './Modal'
import { db } from '../firebase';
import Prod from '../utils/imagenes/pro.png'
import {Link} from 'react-router-dom'
import { render } from '@testing-library/react'

const Buttons = () => {
    //CONSTANS DECLARATION

    const [titleModal, setTitle] = useState("ENTRADA")
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);
    const [active6, setActive6] = useState(false);
    const [active7, setActive7] = useState(false);
    const [active8, setActive8] = useState(false);
    const [active9, setActive9] = useState(false);
    const [active10, setActive10] = useState(false);
    const [active11, setActive11] = useState(false);
    const [active12, setActive12] = useState(false);
    const [active13, setActive13] = useState(false);
    const [active14, setActive14] = useState(false);
    const [active15, setActive15] = useState(false);
    const [active16, setActive16] = useState(false);

    // FOR EACH MODAL 

    const toggle = () =>{
        setActive(!active);
        setTitle("ENTRA")

    }
    const toggle1 = () =>{
        setActive1(!active1);
        setTitle("ENTRADAS")

    }
    const toggle2 = () =>{
        setActive2(!active2);
        setTitle("CARNES")
    }
    const toggle3 = () =>{
        setActive3(!active3);
        setTitle("SANDWICH")
    }
    const toggle4 = () =>{
        setActive4(!active4);
        setTitle("PORCIONES")
    }

    const toggle5 = () =>{
        setActive5(!active5);
        setTitle("POSTRES")
    }
    const toggle6 = () =>{
        setActive6(!active6);
        setTitle("BEBIDAS")
    }
    const toggle7 = () =>{
        setActive7(!active7);
        setTitle("CÓCTELES")
    }
    const toggle8 = () =>{
        setActive8(!active8);
        setTitle("LICORES")
    }
    const toggle9 = () =>{
        setActive9(!active9);
        setTitle("VINOS")
    }
    const toggle10 = () =>{
        setActive10(!active10);
        setTitle("DESAYUNOS")
    }
    const toggle11 = () =>{
        setActive11(!active11);
        setTitle("JUGOS")
    }
    const toggle12 = () =>{
        setActive12(!active12);
        setTitle("CARNES CASA")
    }
    const toggle13 = () =>{
        setActive13(!active13);
        setTitle("ENSALADAS Y SOPAS")
    }
    const toggle14 = () =>{
        setActive14(!active14);
        setTitle("OTRAS OPCIONES")
    }
    const toggle15 = () =>{
        setActive15(!active15);
        setTitle("BEBIDAS CALIENTES")
    }
    const toggle16 = () =>{
        setActive16(!active16);
        setTitle("KITS PARRILLEROS")
    }

    const [products, setProducts] = useState ([])

    const getProducts = async() => {
        await db.collection(titleModal.toLowerCase()).onSnapshot(query => {
            const docs = []
            query.forEach(doc => {
                docs.push({...doc.data(), id:doc.id})
            })
            setProducts(docs)
            console.log (docs)
        }) 
    }

    useEffect(()=>{
        getProducts()
    }, [titleModal])


    return (
        <div className="contePrincipalA">
            <div className="tiPro">
                <img src={Prod} alt="es Prod"/>
            </div>
            <section className="threeButtons">
                <div>
                    <button className="bmenu"  onClick={toggle1}>ENTRADAS</button>
                    <Modal active={active1} toggle={toggle1} titleModal={titleModal} products={products} />
                </div>

                <div>
                    <button className="bmenu"  onClick={toggle2}>CARNES</button>
                    <Modal active={active2} toggle={toggle2} titleModal={titleModal} products={products} />
                </div>
                <div>
                    <button className="bmenu" onClick={toggle3}>SANDWICH</button>
                    <Modal active={active3} toggle={toggle3} titleModal={titleModal} products={products}/>
                </div>
                <div>
                    <button className="bmenu" onClick={toggle4}>PORCIONES</button>
                    <Modal active={active4} toggle={toggle4} titleModal={titleModal} products={products}/>
                </div>
                <div>
                    <button className="bmenu" onClick={toggle5}>POSTRES</button>
                    <Modal active={active5} toggle={toggle5} titleModal={titleModal} products={products}/>

                </div>
                <div>
                    <button className="bmenu" onClick={toggle6}>BEBIDAS</button>
                    <Modal active={active6} toggle={toggle6} titleModal={titleModal} products={products}/>
                </div>
                <div>
                    <button className="bmenu" onClick={toggle7}>CÓCTELES</button>
                    <Modal active={active7} toggle={toggle7} titleModal={titleModal} products={products}/>
                </div>
                <div>
                    <button className="bmenu" onClick={toggle8}>LICORES</button>
                    <Modal active={active8} toggle={toggle8} titleModal={titleModal} products={products}/>
                </div>
                <div>
                    <button className="bmenu" onClick={toggle9}>VINOS</button>
                    <Modal active={active9} toggle={toggle9} titleModal={titleModal} products={products}/>
                </div>
                <div>
                    <button className="bmenu" onClick={toggle10}>DESAYUNOS</button>
                    <Modal active={active10} toggle={toggle10} titleModal={titleModal} products={products}/>
                </div>
                <div>
                    <button className="bmenu" onClick={toggle11}>JUGOS </button>
                    <Modal active={active11} toggle={toggle11} titleModal={titleModal} products={products}/>
                </div>
                <div>
                    <button className="bmenu" onClick={toggle12}>CARNES CASA</button>
                    <Modal active={active12} toggle={toggle12} titleModal={titleModal} products={products}/>
                </div>

            </section>

            <section className="twoButtons">

                <div>
                    <button className="bmenuB" onClick={toggle13}>ENSALADAS Y SOPAS</button>
                    <Modal active={active13} toggle={toggle13} titleModal={titleModal} products={products}/>
                </div>
                <div>
                    <button className="bmenuB" onClick={toggle14}>OTRAS OPCIONES</button>
                    <Modal active={active14} toggle={toggle14} titleModal={titleModal} products={products}/>
                </div>
                <div>
                    <button className="bmenuB" onClick={toggle15}>BEBIDAS CALIENTES</button>
                    <Modal active={active15} toggle={toggle15} titleModal={titleModal} products={products}/>
                </div>
                <div>
                    <button className="bmenuB" onClick={toggle16}>KITS PARRILLEROS</button>
                    <Modal active={active16} toggle={toggle16} titleModal={titleModal} products={products}/>
                </div>

            </section>
             <section className="oneButton">
                <div id="boton2">
                    <Link to="/table">
                        <button type="button" id="sig">VOLVER A MESAS</button>
                    </Link>
                </div>  
             </section>
        </div>
    )
}

export default Buttons