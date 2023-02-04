import React from 'react';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from "./routes/Main/Main";
import About from "./routes/About/About";
import NoteApp from "./routes/noteApp/NoteApp";
import NotFound from "./routes/notFound/notFound";

function App() {

    const router = createBrowserRouter([
        {
            path:"/",
            element: <Main/>
        },
        {
            path:'about/',
            element: <About/>
        },
        {
            path: "note/",
            element: <NoteApp/>
        },
        {
            path: "*",
            element: <NotFound/>
        }
    ], {basename:'/notes-react-app'})
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
