import React, {useContext} from 'react';
import './note.css';
import NoteItem from "./NoteItem";
import Context from "../context/context";

const testItem = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, 16];
const Note = props => {
    const context = useContext(Context);


    return (
        <div className="note">
            <div className="note-filter">
                <select className="form-select note-filter__select" aria-label="">
                    <option value="all" >All</option>
                    <option value="favorite">Favorite</option>
                </select>
                <div className="note-filter__date">
                    <i className="bi bi-calendar3-week note-filter__icon"></i>

                    <button className="note-filter__btn"><i className="bi bi-arrow-up-circle"></i></button>
                    <button className="note-filter__btn"><i className="bi bi-arrow-down-circle"></i></button>
                </div>
            </div>

            <div className={`note__list ${context.flexDirection !== 'row'? 'column': ""}`}>
                {testItem.map( item => <NoteItem key={item}/>)}
            </div>
        </div>

    )
}

export default Note;