import React, {useContext} from 'react';
import './note.css';
import Context from "../context/context";

const NoteItem = props => {
    const {id, title, desc, date, isFavorite} = props
    const context = useContext(Context);
    return (
        <div className="card note__item">
            <div className="card-body">
                <h5 className="card-title">{title.length >=40 ? `${title.slice(0,40)} ......`  : title}</h5>
                <p className="card-text">{desc.length >=140 ? `${desc.slice(0,140)} ......`  : desc}.</p>
                <p className="note__date">{date.toLocaleString()}</p>
            </div>
            <button
                type="button"
                className="btn btn-outline-dark btn-del"
                onClick={()=> context.deleteNote(id)}
            >
                <i className="bi bi-x-lg"></i>
            </button>


            <button className="btn btn-fav" onClick={()=> context.updateNote(id, {isFavorite: !isFavorite})}>
                {!isFavorite ? <i className="bi bi-heart"></i> : <i className="bi bi-heart-fill fav-active"></i>}
            </button>
        </div>
    )
}

export default NoteItem;