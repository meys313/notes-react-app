import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {updateNote} from "../../../../store/NotesSlice";
import './updateNote.css';
import Input from "../../../../Ui/Input/Input";
import Modal from "../../../../Ui/Modal/Modal";

const UpdateNote = props => {

    const noteItem = props.noteItem;

    const dispatch = useDispatch();

    // рефы для инпутов
    const titleRef = useRef();
    const descRef = useRef();
    const submitFormHandler = (event) => {
        event.preventDefault();
        const newNote = {
            id: noteItem.id,
            title: titleRef.current.value,
            desc: descRef.current.value,
            date: new Date().toLocaleString(),
            isFavorite: noteItem.isFavorite
        }

        dispatch(updateNote({id: noteItem.id, updateData: { ...newNote }}))
        props.onDisplayForm();
    }
    return(
        <Modal className="modal--form"
               modalConfig={{type:'update note'}}
               onDisplayForm = {props.onDisplayForm}
        >
            <form className="form" onSubmit={submitFormHandler}>
                <div className="mb-3">
                    <label htmlFor="inputTitle" className="form-label">Title</label>
                    <Input ref={titleRef} type="text" id="inputTitle" defaultValue={noteItem.title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputDesc" className="form-label">Description</label>
                    <Input ref={descRef} type="textarea" id="inputDesc" defaultValue={noteItem.desc}/>
                </div>

                <button type="submit" className="btn btn-primary form-btn form-btn--add">update note</button>
                <button type="button"
                        className="btn  btn-outline-secondary form-btn form-btn--cancel"
                        onClick={()=> props.onDisplayForm()}
                >отмена</button>

            </form>
        </Modal>
    )
}

export default UpdateNote;