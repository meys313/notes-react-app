import React, {useEffect} from "react";
import {useState} from "react";
import Context from "./context";
import defaultData from "../../defaultData";


const ContextProvider = props => {

    // обработка изменения отображения записей row/column
    const [flexDirection, setFlexDirection] = useState('row');
    const onFlexDirectionHandler = (btn) => {
        if(btn === 'row'){
            setFlexDirection('row');
        }
        else if(btn === 'column'){
            setFlexDirection('column');
        }

    }


    // state всех записей
    const [notes, setNotes] = useState([...defaultData])



    // Добавление, удаление, изменение
    const addNote = newNote => {
        setNotes(prevState => [newNote, ...prevState]);
    }

    const deleteNote = noteId => {
        const updatedNotes = notes.filter(note => note.id !== noteId);
        setNotes(updatedNotes);
    }

    const updateNote = (noteId, update) => {
        setNotes(
            prevState => prevState.map((note) => note.id === noteId? {...note, ...update}: note)
        )
    }


    // фильтры

    const [filteredNotes, setFilteredNotes] = useState(notes);

    const [searchValue, setSearchValue] = useState(false);
    const [favoriteFilter, setFavoriteFilter] = useState(false);

    // useEffect для фильтров
    useEffect(()=>{
        setFilteredNotes(notes.filter(note=>
            (favoriteFilter?  note.isFavorite === true: note) &&
            (searchValue? note.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim()): note)
        ))
    }, [notes, favoriteFilter, searchValue])


    // Сортировка
    const [sort, setSort] = useState("up")

    const contextData = {
        notes: filteredNotes,
        addNote,
        deleteNote,
        updateNote,
        setSearchValue,
        setFavoriteFilter,
        flexDirection,
        sort,
        setSort,
        onFlexDirectionHandler,
    }

    return <Context.Provider value={contextData}>{props.children}</Context.Provider>
}

export default ContextProvider;


