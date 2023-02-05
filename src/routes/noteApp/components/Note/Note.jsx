import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setNotesFiltersStates} from "../../../../store/NotesSlice";
import './note.css';
import NoteItem from "./NoteItem";



const Note = props => {
    const states = useSelector(state=> state.notes)
    const dispatch = useDispatch();
    const onChangeSelectHandler = (event) => {
        if (event.target.value === "all") {
            dispatch(setNotesFiltersStates({type:'favorite', data: false}))
        } else if (event.target.value === "favorite") {
            dispatch(setNotesFiltersStates({type:'favorite', data: true}))
        }
    }
    const [filteredNotes, setFilteredNotes] = useState(states.notes)
    useEffect(()=>{
        setFilteredNotes(states.notes.filter(note=>
            (states.favoriteFilter?  note.isFavorite === true: note) &&
            (states.searchValue? note.title.toLowerCase().trim().includes(states.searchValue.toLowerCase().trim()): note)
        ))
    }, [states.notes, states.favoriteFilter, states.searchValue])


    return (
        <div className="note">
            <div className="note-filter">
                <select className="form-select note-filter__select" aria-label="" onChange={onChangeSelectHandler}>
                    <option value="all" >All</option>
                    <option value="favorite">Favorite</option>
                </select>
                <div className="note-filter__date">
                    <i className="bi bi-calendar3-week note-filter__icon"></i>

                    <button className="note-filter__btn"
                            // onClick={()=> dispatch(setSort({sort: 'up'}))}
                    >
                            <i className="bi bi-arrow-up-circle-fill" style={{color:"var(--primaryColor)"}}></i>

                    </button>

                    <button className="note-filter__btn"
                            // onClick={()=> dispatch(setSort({sort: 'down'}))}
                    >
                            <i className="bi bi-arrow-down-circle"></i>
                    </button>
                </div>
            </div>

            <div className={`note__list ${states.flexDirection !== 'row'? 'column': ""}`}>
                {filteredNotes === 0 ?
                    <h4 style={{margin:'0 auto',color:'var(--primaryColor)'}}>didn't find anything</h4> :
                    filteredNotes.map(note => <NoteItem key={Math.random().toString()} {...note}/>)
                }
            </div>
        </div>

    )
}

export default Note;