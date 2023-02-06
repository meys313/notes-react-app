import {Link, useParams} from "react-router-dom";
import './showNote.css';
import NotFound from "../../../notFound/notFound";
import {useSelector} from "react-redux";
import UpdateNote from "../../components/UpdateNote/UpdateNote";
import {useState} from "react";



const ShowNote = props => {

    // Обработка появления модалки с формой изменения записи
    const [formDisplay, setFormDisplay] = useState(false);
    const formDisplayHandler = () => {
        setFormDisplay(prevState => !prevState);
    }

    const states = useSelector(state => state.notes)
    const params = useParams();


    const noteItem = states.notes.filter(note => note.id === params.noteId)[0]

    if(!noteItem){
       return (
           <NotFound/>
       )
    }



    return(
            <div className="showNote">
                <div className="showNote-header">
                    <h3 className="showNote-title">{noteItem.title}</h3>
                    <span className="showNote-time">{noteItem.date.toLocaleString()}</span>
                </div>

                <div className="showNote-content">
                    <p>
                        {noteItem.desc}
                    </p>
                </div>

                <button type="button" className="btn btn-primary form-btn form-btn--add"
                onClick={formDisplayHandler}>edite note</button>
                <Link to={'/note'} type="button" className="btn btn-outline-secondary">Go Back</Link>

                {formDisplay? <UpdateNote onDisplayForm = {formDisplayHandler} noteItem={noteItem}/> : null}

             </div>

    )
}

export default ShowNote;