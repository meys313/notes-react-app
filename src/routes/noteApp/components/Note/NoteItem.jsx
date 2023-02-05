import React from 'react';
import {useDispatch} from "react-redux";
import {deleteNote, updateNote} from "../../../../store/NotesSlice";
import { useNavigate } from "react-router-dom";
import './note.css';


const NoteItem = props => {
    const {id, title, desc, date, isFavorite} = props
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onClickItemHandler = () => {
        navigate(`${id}`)
    }
    return (
        <div className="card note__item" onClick={onClickItemHandler}>
            <div className="card-body">
                <h5 className="card-title">{title.length >=40 ? `${title.slice(0,40)} ......`  : title}</h5>
                <p className="card-text">{desc.length >=140 ? `${desc.slice(0,140)} ......`  : desc}.</p>
                <p className="note__date">{date}</p>
            </div>
            <button
                type="button"
                className="btn btn-outline-dark btn-del"
                onClick={(e)=> {
                    e.stopPropagation()
                    return dispatch(deleteNote({id: id}))
                    }
                 }
            >
                <i className="bi bi-x-lg"></i>
            </button>


            <button className="btn btn-fav"
                onClick={(e)=> {
                    e.stopPropagation()
                    return  dispatch(updateNote({id: id, updateData: {isFavorite: !isFavorite}}))
                    }
                }
            >
                {!isFavorite ? <i className="bi bi-heart"></i> : <i className="bi bi-heart-fill fav-active"></i>}
            </button>
        </div>
    )
}

export default NoteItem;