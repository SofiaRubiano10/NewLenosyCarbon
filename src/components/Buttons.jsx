import React, { useState, useEffect} from 'react'
import "../utils/CSS/buttons.css"
import Modal from './Modal'
import { db } from '../firebase';
import { render } from '@testing-library/react'


const Buttons = () => {
    //CONSTANS DECLARATION

    const [titleModal, setTitle] = useState("ENTRADAS")
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);

    const toggle = () =>{
        setActive(!active);
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
        setActive(!active);
        setTitle("POSTRES")
    }
    const toggle6 = () =>{
        setActive(!active);
        setTitle("BEBIDAS")
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
            <section className="threeButtons">
                <div>
                    <button className="bmenu" onClick={toggle}>ENTRADAS</button>
                    <Modal active={active} toggle={toggle} titleModal={titleModal} products={products} />
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
                    <Modal active={active} toggle={toggle5} titleModal={titleModal} />

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