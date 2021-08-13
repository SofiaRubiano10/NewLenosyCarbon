import React, { Component } from 'react'
import Portal from './Portal'
import "../utils/CSS/modal.css"

export default class Modal extends Component{
    render() {
        const { children, toggle, active, titleModal } = this.props;

        return (
            <Portal>
                {active  && (
                    <div className="wrapperMo">
                        <div className="window">
                            <button className="closeBtn" onClick={toggle}>X</button>
                            <div>
                                <h1>{titleModal}</h1>
                            </div>

                        </div>

                    </div>
                )}
            </Portal>
        )
    }
}