import React from 'react';
import { Link } from "react-router-dom";
import './about.css';

const About = props => {
    return(
        <main className="about d-flex text-center">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header className="mb-auto">
                    <div>
                        <h3 className="float-md-start mb-0">Notes App</h3>
                    </div>
                </header>

                <div className="px-3 about-content">
                    <h1>About Note App</h1>
                    <p className="lead">Cover is a one-page template for building simple and beautiful home pages.
                        Download, edit the text, and add your own fullscreen background photo to make it your
                        own.Cover is a one-page template for building simple and beautiful home pages.
                        Download, edit the text, and add your own fullscreen background photo to make it your
                        own.Cover is a one-page template for building simple and beautiful home pages.
                        Download, edit the text, and add your own fullscreen background photo to make it your
                        own.Cover is a one-page template for building simple and beautiful home pages.
                        Download, edit the text, and add your own fullscreen background photo to make it your
                        own.Cover is a one-page template for building simple and beautiful home pages.
                        Download, edit the text, and add your own fullscreen background photo to make it your
                        own.

                    </p>
                    <p className="lead">
                        <Link to={'/notes-react-app'} className="link-light">back</Link>
                        <Link to={'/notes-react-app/note'} className="btn btn-lg btn-light fw-bold border-white bg-white">Open Note</Link>
                    </p>
                </div>

                <footer className="mt-auto text-white-50 about-footer">
                    <p> go to <a href={"https://github.com/meys313/notes-react-app"} className="text-white">
                        Repository
                    </a></p>
                </footer>
            </div>

        </main>
    )
}

export default About;