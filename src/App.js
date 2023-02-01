import Header from './components/Header/Header';
import Note from "./components/Note/Note";
import Form from "./components/Form/Form";
import {useState} from "react";
import ContextProvider from "./components/context/ContextProvider";
function App() {

    // Обработка появления модалки с формой добавления записи
    const [formDisplay, setFormDisplay] = useState(false);
    const formDisplayHandler = () => {
        setFormDisplay(prevState => !prevState);
    }


    return (
    <ContextProvider>
        <Header/>
        {formDisplay? <Form onDisplayForm = {formDisplayHandler}/> : null}
        <Note/>
    </ContextProvider>
    );
}

export default App;
