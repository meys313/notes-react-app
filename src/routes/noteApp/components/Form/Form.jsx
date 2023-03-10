import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {addNote} from "../../../../store/NotesSlice";
import './form.css';
import Input from "../../../../Ui/Input/Input";
import Modal from "../../../../Ui/Modal/Modal";

const UpdateForm = props => {


    const dispatch = useDispatch();

    // рефы для инпутов
    const titleRef = useRef();
    const descRef = useRef();
    const submitFormHandler = (event) => {
        event.preventDefault();
        const newNote = {
            id: Math.random().toString(),
            title: titleRef.current.value,
            desc: descRef.current.value,
            date: new Date().toLocaleString(),
            isFavorite: false
        }

        dispatch(addNote({newNote: newNote}))
        props.onDisplayForm();
    }
    return(
        <Modal className="modal--form"
               modalConfig={{type:'new_note'}}
               onDisplayForm = {props.onDisplayForm}
        >
            <form className="form" onSubmit={submitFormHandler}>
                <div className="mb-3">
                    <label htmlFor="inputTitle" className="form-label">Title</label>
                    <Input ref={titleRef} type="text" id="inputTitle"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputDesc" className="form-label">Description</label>
                    <Input ref={descRef} type="textarea" id="inputDesc"/>
                </div>

                <button type="submit" className="btn btn-primary form-btn form-btn--add">new note</button>
                <button type="button"
                        className="btn  btn-outline-secondary form-btn form-btn--cancel"
                        onClick={()=> props.onDisplayForm()}
                >отмена</button>

            </form>
        </Modal>
    )
}

export default UpdateForm;