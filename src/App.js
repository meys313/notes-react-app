import React from 'react';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from "./routes/Main/Main";
import About from "./routes/About/About";
import NotesApp from "./routes/noteApp/path/NotesApp";
import IndexNotes from "./routes/noteApp/indexNotes";
import NotFound from "./routes/notFound/notFound";
import ShowNote from "./routes/noteApp/path/ShowNote/ShowNote";

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
            element: <IndexNotes/>,
            children: [
                {
                    path: "",
                    element: <NotesApp/>
                },
                {
                    path: ":noteId",
                    element: <ShowNote/>
                }
            ]
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
