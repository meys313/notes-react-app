import {Link, useParams} from "react-router-dom";
import './showNote.css';
import NotFound from "../../../notFound/notFound";
import {useSelector} from "react-redux";



const ShowNote = props => {
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

            <Link to={'/note'} type="button" className="btn btn-outline-secondary">Go Back</Link>

        </div>


    )
}

export default ShowNote;