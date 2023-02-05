import {Link} from "react-router-dom";

const AboutContent = props => {
    return(
        <>
            <header className="mb-auto">
                <div>
                    <h3 className="float-md-start mb-0">Notes App</h3>
                </div>
            </header>

            <div className="px-3 main-content">
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
                    <Link to={'/'} className="link-light">back</Link>
                    <Link to={'/note'} className="btn btn-lg btn-light fw-bold border-white bg-white">Open Note</Link>
                </p>
            </div>
        </>
    )
}

export default AboutContent;