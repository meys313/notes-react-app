import React from "react";
import './form.css';
import Input from "../../Ui/Input/Input";
import Modal from "../../Ui/Modal/Modal";
const Form = props => {
    return(
        <Modal className="modal--form"
               modalConfig={{type:'new_note'}}
               onDisplayForm = {props.onDisplayForm}
        >
            <form className="form">
                <div className="mb-3">
                    <label htmlFor="inputTitle" className="form-label">Title</label>
                    <Input type="text" id="inputTitle"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputDesc" className="form-label">Description</label>
                    <Input type="textarea" id="inputDesc"/>
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

export default Form;