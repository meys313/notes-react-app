import React from 'react';
import styles from './Input.module.css';


const Input = React.forwardRef(
    (props, ref) => {
        const {id='', type, placeholder="", onChange=null} = props;

        if(type === 'textarea'){
            return  <textarea ref={ref} className={`form-control ${styles.input}`} id={id} rows="6" required ></textarea>
        }
        return(
            <input ref={ref}
                   type={type}
                   className={`form-control ${styles.input}`}
                   placeholder={placeholder}
                   required
                   id={id}
                   onChange={onChange}
            />
        )
    }

)

export default Input;