import { useRoutes, BrowserRouter } from "react-router-dom"
import { NavBar } from "../../Components/NavBar"
import { Home } from "../Home"
import { Education } from "../Education"
import { Projects } from "../Projects"
import { NotFound } from "../NotFound"

const AppRoutes = () =>{
    const routes = useRoutes([
        {path: "/", element: <Home/>},
        {path: "/education", element: <Education/>},
        {path: "/projects", element: <Projects/>},
        {path: "/*", element: <NotFound/>}
    ])
    return routes
}
const AppUI = () => {
    return (
        <BrowserRouter>
            <AppRoutes/>
            <NavBar/>
        </BrowserRouter>
        
    )
}

export { AppUI }