import Header from '../components/Header/Header';
import Note from "../components/Note/Note";
import Form from "../components/Form/Form";
import FormButton from "../components/Form/FormButton";
import {useState} from "react";

function NotesApp() {

    // Обработка появления модалки с формой добавления записи
    const [formDisplay, setFormDisplay] = useState(false);
    const formDisplayHandler = () => {
        setFormDisplay(prevState => !prevState);
    }


    return (
        <>
            <Header/>
            <FormButton onDisplayForm = {formDisplayHandler}/>
            {formDisplay? <Form onDisplayForm = {formDisplayHandler}/> : null}
            <Note/>
        </>


    );
}

export default NotesApp;
