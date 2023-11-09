import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {EpisodsPage, PersonsPage} from "./pages"

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'episode'}/>},
            {path: 'episode', element: <EpisodsPage/>},
            {path: 'persons', element: <PersonsPage/>}
        ]
    }
]);

export {
    router
}