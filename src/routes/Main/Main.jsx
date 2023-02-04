import React from 'react';
import { Link } from "react-router-dom";
import './main.css';

const Main = props => {
    return(
        <main className="main d-flex text-center">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <header className="mb-auto">
                        <div>
                            <h3 className="float-md-start mb-0">Notes App</h3>
                            <nav className="nav nav-masthead justify-content-center float-md-end">
                               <Link to={'about/'} className="main__link">About</Link>
                            </nav>
                        </div>
                    </header>

                    <div className="px-3 main-content">
                        <h1>Hi :) it's simple react-app</h1>
                        <p className="lead">Cover is a one-page template for building simple and beautiful home pages.
                            Download, edit the text, and add your own fullscreen background photo to make it your
                            own.</p>
                        <p className="lead">
                            <Link to={'/notes-react-app/note/'} className="btn btn-lg btn-light fw-bold border-white bg-white">Open Note</Link>
                        </p>
                    </div>

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