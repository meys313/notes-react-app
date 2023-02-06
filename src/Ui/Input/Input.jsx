import React from 'react';
import styles from './Input.module.css';


const Input = React.forwardRef(
    (props, ref) => {
        const {id='', type, placeholder="", defaultValue = "", onChange=null} = props;

        if(type === 'textarea'){
            return  <textarea ref={ref} className={`form-control ${styles.input}`} id={id} rows="6" required defaultValue={defaultValue}></textarea>
        }
        return(
            <input ref={ref}
                   type={type}
                   className={`form-control ${styles.input}`}
                   placeholder={placeholder}
                   required
                   id={id}
                   onChange={onChange}
                   defaultValue={defaultValue}
            />
        )
    }

)

export default Input;