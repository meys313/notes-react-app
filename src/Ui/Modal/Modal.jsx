import React from "react";
import ReactDOM from 'react-dom';
import './modal.css';



const BackDrop = props => {
    return <div className="modal-backdrop" onClick={props.onDisplayForm}></div>
}

const ModalWindow = props => {
    const modalConfig = props.modalConfig;
    return <div className={`${props.classes} modal-window`}>
        { modalConfig.type ?
            <h1 className="modal-title" style={{color:"var(--primaryColor)"}}>{modalConfig.type}</h1> : null}
            {props.children}
    </div>
}


const Modal = props => {
    const portalElement = document.getElementById("overlays");

    return <>
            {ReactDOM.createPortal(<BackDrop onDisplayForm = {props.onDisplayForm}/>, portalElement)}
            {ReactDOM.createPortal(<ModalWindow classes={props.className} modalConfig={props.modalConfig}>{props.children}</ModalWindow>, portalElement)}
        </>
}

export default Modal