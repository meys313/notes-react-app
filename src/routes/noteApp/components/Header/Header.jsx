import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {setFlexDirection, setNotesFiltersStates} from "../../../../store/NotesSlice";
import { Link } from "react-router-dom";
import './header.css';
import Input from "../../../../Ui/Input/Input";
const Header = props => {


    const states = useSelector(state=> state.notes);
    const dispatch = useDispatch();

    const onChangeSearchInputHandler = (event) => {
        if(event.target.value.length === 0){
            dispatch(setNotesFiltersStates({type:'search', data: false}))
            return;
        }
        dispatch(setNotesFiltersStates({type:'search', data: event.target.value}))
    }

    return(
        <header className="header">

            <Link to={'/'} className="header__title">Notes App</Link>


            <Input type="search" placeholder="Find your note"
                   onChange={onChangeSearchInputHandler}
            />

            <div className="header__btn--directions">

                <button type="button"
                className="btn btn-outline-dark"
                style={states.flexDirection === 'row' ?
                    {backgroundColor:'var(--primaryColor)', color:"#fff", borderColor: "var(--primaryColor)"}: {}}
                        onClick={()=> dispatch(setFlexDirection({direction: "row"}))}
                ><i className="bi bi-grid-3x2-gap-fill"></i></button>



                <button type="button"
                    style={states.flexDirection === 'column' ?
                        {backgroundColor:'var(--primaryColor)', color:"#fff", borderColor: "var(--primaryColor)"}: {}}
                    className="btn btn-outline-dark"
                        onClick={()=> dispatch(setFlexDirection({direction: 'column'}))}
                ><i className="bi bi-list"></i></button>
            </div>


        </header>
    )
}

export default Header;