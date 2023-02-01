import React from 'react';
import styles from './Filter.module.css';
const Filter = props => {
    return(
        <div className={styles.filter}>
            <div>
                <input className="form-control" type="search" placeholder="Find your note" aria-label="Search"/>
            </div>

            <div>
                <button type="button" className="btn btn-outline-dark"><i className="bi bi-grid-3x2-gap-fill"></i></button>
                <button type="button" className="btn btn-outline-dark"><i className="bi bi-list"></i></button>
            </div>
        </div>
    )
}

export default Filter;