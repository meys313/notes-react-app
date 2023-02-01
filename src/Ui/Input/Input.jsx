import React from 'react';
import styles from './Input.module.css';
const Input = props => {
    const {id='', type, placeholder=""} = props;

    if(type === 'textarea'){
        return  <textarea className={`form-control ${styles.input}`} id={id} rows="6" required ></textarea>
    }
    return(
        <input type={type} className={`form-control ${styles.input}`} placeholder={placeholder} required id={id}/>
    )
}

export default Input;