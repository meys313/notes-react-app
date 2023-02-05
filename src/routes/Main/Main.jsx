import React from 'react';
import {Outlet} from "react-router-dom";
import './main.css';

const Main = props => {
    return(
        <main className="main d-flex text-center">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

                    <Outlet/>

                    <footer className="mt-auto text-white-50 main-footer">
                        <p> go to <a href={"https://github.com/meys313/notes-react-app"} className="text-white">
                            Repository
                        </a></p>
                    </footer>
                </div>

        </main>
    )
}

export default Main;