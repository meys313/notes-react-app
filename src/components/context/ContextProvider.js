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
    // use effect для сортировки
    useEffect(()=>{
        if(sort === 'down'){
            setFilteredNotes(prevState => prevState.sort((a,b)=> b.date - a.date))
        }
        else{
            setFilteredNotes(prevState => prevState.sort((a,b)=> a.date - b.date))
        }
    }, [filteredNotes, sort])

    const contextData = {
        notes: filteredNotes,
        addNote: addNote,
        deleteNote: deleteNote,
        updateNote: updateNote,
        setSearchValue: setSearchValue,
        setFavoriteFilter: setFavoriteFilter,
        flexDirection: flexDirection,
        sort: sort,
        setSort:setSort,
        onFlexDirectionHandler: onFlexDirectionHandler,
    }

    return <Context.Provider value={contextData}>{props.children}</Context.Provider>
}

export default ContextProvider;


