import React, {useContext} from "react";
import { Link } from "react-router-dom";
import './header.css';
import Input from "../../../../Ui/Input/Input";
import Context from "../context/context";
const Header = props => {

    const context = useContext(Context);

    const onChangeSearchInputHandler = (event) => {
           if(event.target.value.length === 0){
               context.setSearchValue(false);
               return;
           }
           context.setSearchValue(event.target.value);
    }

    return(
        <header className="header">

            <Link to={'/notes-react-app/'} className="header__title">Notes App</Link>


            <Input type="search" placeholder="Find your note" onChange={onChangeSearchInputHandler}/>

            <div className="header__btn--directions">

                <button type="button"
                className="btn btn-outline-dark"
                style={context.flexDirection === 'row' ?
                    {backgroundColor:'var(--primaryColor)', color:"#fff", borderColor: "var(--primaryColor)"}: {}}
                        onClick={()=> context.onFlexDirectionHandler("row")}
                ><i className="bi bi-grid-3x2-gap-fill"></i></button>



                <button type="button"
                    style={context.flexDirection === 'column' ?
                        {backgroundColor:'var(--primaryColor)', color:"#fff", borderColor: "var(--primaryColor)"}: {}}
                    className="btn btn-outline-dark"
                        onClick={()=> context.onFlexDirectionHandler("column")}
                ><i className="bi bi-list"></i></button>
            </div>


        </header>
    )
}

export default Header;