import React from 'react';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from "./routes/Main/Main";
import About from "./routes/About/About";
import NoteApp from "./routes/noteApp/NoteApp";
import NotFound from "./routes/notFound/notFound";

function App() {

    const router = createBrowserRouter([
        {
            path:"/notes-react-app",
            element: <Main/>
        },
        {
            path:'/notes-react-app/about/',
            element: <About/>
        },
        {
            path: "/notes-react-app/note/",
            element: <NoteApp/>
        },
        {
            path: "*",
            element: <NotFound/>
        }
    ])
    return (
        <>
            <RouterProvider router={router} basename={'/notes-react-app'}/>
        </>
    );
}

export default App;
