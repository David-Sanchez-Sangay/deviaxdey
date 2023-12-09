import { useState } from "react";
import {Link} from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
import {Outlet} from "react-router-dom";

// crea un array con los links de abajo
const links = [
    {id: 1, name: "Inicio", to: "Inicio"},
    {id: 2, name: "Nosotros", to: "Nosotros"},
    {id: 3, name: "Personal", to: "Personal"},
    {id: 4, name: "Servicios", to: "Servicios"},
    {id: 5, name: "Mesa de Partes", to: "MesaPartes"},
    {id: 6, name: "Contacto", to: "Contacto"},
    {id: 7, name: "Ingresar", to: "Login"},
]

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content = <>    
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-sky-600 transition">
            <ul className="text-center text-xl p-20">                
                {links.map((link) => {
                    return(
                        <Link spy={true} smooth={true} to={link.to}>
                            <li className="my-4 py-4 border-b border-sky-300 hover:bg-sky-700 hover:rounded">{link.name}</li>
                        </Link>
                    )
                })}
            </ul>
        </div>
        <Outlet/>
    </>
    return(
        <nav>
            <div className="h-10vh flex justify-between z-10 text-stone-100 lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1">
                    <img className="object-contain md:object-scale-down h-14 w-20 md:h-20 md:w-30" src="https://deviaxdey.com/images/Insignia.webp" alt=" Insignia" />
                    <span className="text-sm font-bold md:text-3xl">  ANTONIO RAIMONDI</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-center font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px] text-center">                            
                            {links.map((link) => {
                            return(
                                <Link spy={true} smooth={true} to={link.to}>
                                    <li className="hover:text-sky-800 transition border-sky-900 hover:border-sky-800 cursor-pointer">{link.name}</li>
                                </Link>
                            )})}
                        </ul> 
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>
            </div>
        </nav>
        );
};
export default Nav
