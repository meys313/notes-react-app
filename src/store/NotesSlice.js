import {createSlice} from "@reduxjs/toolkit";
import defaultDataForNotes from "./defaultDataForNotes";

const notesSlice = createSlice({
    name: 'notesSlice',
    initialState: {
       defaultData: defaultDataForNotes
    },
    reducers: {

    }

});

export default notesSlice.reducer;