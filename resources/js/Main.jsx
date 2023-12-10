import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Inicio from "./Components/Inicio";
import Nosotros from "./Components/Nosotros";
import Personal from "./Components/Personal";
import Servicios from "./Components/Servicios";
import MesaPartes from "./Components/MesaPartes";
import Contacto from "./Components/Contacto";
import Login from "./Components/Login";

function Main() {
    const routes = [
        { path: "/", element: <Inicio /> },
        { path: "Nosotros", element: <Nosotros /> },
        { path: "Personal", element: <Personal /> },
        { path: "Servicios", element: <Servicios /> },
        { path: "MesaPartes", element: <MesaPartes /> },
        { path: "Contacto", element: <Contacto /> },
        { path: "Login", element: <Login /> },
    ];

    return (
        <>
            <Navbar />
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </>
    );
}

export default Main;
