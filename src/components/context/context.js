import React from 'react';
const Context = React.createContext({
    notes: [],
    addNote: (props) => {},
    deleteNote: (props)=>{},
    updateNote: (props)=> {},
    setSearchValue: (props)=> {},
    setFavoriteFilter: (props)=> {},
    sort: String,
    setSort:(props)=> {},
    flexDirection: String,
    onFlexDirectionHandler: (props)=>{},
});

export default Context;