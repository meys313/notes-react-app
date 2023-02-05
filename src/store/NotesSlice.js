import {createSlice} from "@reduxjs/toolkit";
import defaultDataForNotes from "./defaultDataForNotes";

const notesSlice = createSlice({
    name: 'notesSlice',
    initialState: {
        notes: defaultDataForNotes,
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
        sortUpdate(state,action){
            state.sort = action.payload.sort
        }
    }

});

export default notesSlice.reducer;