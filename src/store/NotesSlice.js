import {createSlice} from "@reduxjs/toolkit";
import defaultDataForNotes from "./defaultDataForNotes";

const notesSlice = createSlice({
    name: 'notesSlice',
    initialState: {
        notes: defaultDataForNotes,
        searchValue: false,
        favoriteFilter: false,
        flexDirection: 'row',
        sort: "up",
    },
    reducers: {
        addNote(state, action){
            state.notes.unshift(action.payload.newNote)
        },
        deleteNote(state, action){
            state.notes = state.notes.filter(note => note.id !== action.payload.id)
        },
        updateNote(state, action){
            state.notes = state.notes.map(
                note=> note.id === action.payload.id ? {...note, ...action.payload.updateData}: note
            )
        },
        setFlexDirection(state, action){
            if(action.payload.direction === 'row'){
               state.flexDirection = 'row';
            }
            else if(action.payload.direction === 'column'){
                state.flexDirection = 'column';
            }
        },
        setSort(state,action){
            state.sort = action.payload.sort
        },
        setNotesFiltersStates(state, action){
           if(action.payload.type === 'search'){
               state.searchValue = action.payload.data
           }
           if(action.payload.type === 'favorite'){
               state.favoriteFilter = action.payload.data
           }
        }
    }

});

export const {addNote, deleteNote, updateNote, setSort,setFlexDirection, setNotesFiltersStates } = notesSlice.actions;
export default notesSlice.reducer;