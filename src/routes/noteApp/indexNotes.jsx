import { Outlet } from "react-router-dom";
import ContextProvider from "./components/context/ContextProvider";

const IndexNotes = props => {
    return (
        <ContextProvider>
            <Outlet/>
        </ContextProvider>
    )
}
export default IndexNotes;