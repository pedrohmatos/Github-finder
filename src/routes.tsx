import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageDefault from "./pages/PageDefault";
import Repositories from "./pages/Repositories";

const RoutesApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageDefault />}>
                    <Route index element={<Home />} />
                    <Route path="repos/:login" element={<Repositories />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp
