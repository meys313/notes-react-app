import React, {useEffect, useState} from 'react';
import './formButton.css';


const FormButton = props => {
    const[classes, setClasses] = useState('')

    useEffect(()=>{
        if(classes.length === 0){
            return;
        }
        const timer = setTimeout(()=> setClasses(''), 1000);

        return () => {
            clearTimeout(timer)
        }
    }, [classes])

    const onClickHandler = func => {
        setClasses('effect');
        func();
    }
    return(
        <button className={`form-button--add ${classes}`} onClick={()=>onClickHandler(props.onDisplayForm)}>
            <i className="bi bi-plus-circle-fill"></i>
        </button>
    )
}

export default FormButton;