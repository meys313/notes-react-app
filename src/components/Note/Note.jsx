import React, {useContext} from 'react';
import './note.css';
import NoteItem from "./NoteItem";
import Context from "../context/context";


const Note = props => {
    const context = useContext(Context);
    const onChangeSelectHandler = (event) =>{
        if(event.target.value === "all"){
            context.setFavoriteFilter(false)
        }
        else if(event.target.value === "favorite"){
            context.setFavoriteFilter(true);
        }
    }
    return (
        <div className="note">
            <div className="note-filter">
                <select className="form-select note-filter__select" aria-label="" onChange={onChangeSelectHandler}>
                    <option value="all" >All</option>
                    <option value="favorite">Favorite</option>
                </select>
                <div className="note-filter__date">
                    <i className="bi bi-calendar3-week note-filter__icon"></i>

                    <button className="note-filter__btn" onClick={()=> context.setSort('up')}>
                        {context.sort === 'up' ?
                            <i className="bi bi-arrow-up-circle-fill" style={{color:"var(--primaryColor)"}}></i>:
                            <i className="bi bi-arrow-up-circle"></i>
                        }
                    </button>

                    <button className="note-filter__btn" onClick={()=> context.setSort('down')}>
                        {context.sort === 'down' ?
                            <i className="bi bi-arrow-down-circle-fill" style={{color:"var(--primaryColor)"}}></i>:
                            <i className="bi bi-arrow-down-circle"></i>
                        }
                    </button>
                </div>
            </div>

            <div className={`note__list ${context.flexDirection !== 'row'? 'column': ""}`}>
                {context.notes.length === 0 ?
                    <h4 style={{margin:'0 auto',color:'var(--primaryColor)'}}>didn't find anything</h4> :
                context.notes.map( note => <NoteItem key={Math.random().toString()} {...note}/>)}
            </div>
        </div>

    )
}

export default Note;