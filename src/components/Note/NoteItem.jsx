import React from 'react';
import './note.css';

const NoteItem = props => {
    return (
        <div className="card note__item">
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <p className="note__date">30.10.2022, 17:26:33</p>
            </div>
            <button type="button" className="btn btn-outline-dark btn-del"><i className="bi bi-x-lg"></i></button>
            <button className="btn btn-fav"><i className="bi bi-heart"></i></button>
        </div>
    )
}

export default NoteItem;