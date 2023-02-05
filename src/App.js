import React from 'react';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Main from "./routes/Main/Main";
import NotesApp from "./routes/noteApp/path/NotesApp";
import IndexNotes from "./routes/noteApp/indexNotes";
import NotFound from "./routes/notFound/notFound";
import ShowNote from "./routes/noteApp/path/ShowNote/ShowNote";
import MainContent from "./routes/Main/mainContent";
import AboutContent from "./routes/Main/aboutContent";

function App() {

    const router = createBrowserRouter([
        {
            path:"/",
            element: <Main/>,
            children: [
                {
                    path: "",
                    element: <MainContent/>
                },
                {
                    path: "about/",
                    element: <AboutContent/>
                }
            ]
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
