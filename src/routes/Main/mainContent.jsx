import {Link} from "react-router-dom";

const mainContent = props => {
    return(
        <>
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
                    <Link to={'note/'} className="btn btn-lg btn-light fw-bold border-white bg-white">Open Note</Link>
                </p>
            </div>
        </>
    )
}
export default mainContent;