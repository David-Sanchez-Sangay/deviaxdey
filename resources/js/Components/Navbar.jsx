import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
import { NavLink } from "react-router-dom";


const Navlinks = [
    {title: "Inicio", link: "/"},
    {title: "Nosotros", link: "/Nosotros"},
    {title: "Personal", link: "/Personal"},
    {title: "Servicios", link: "/Servicios"},
    {title: "Mesa de Partes", link: "/MesaPartes"},
    {title: "Contacto", link: "/Contacto"},
    {title: "Ingresar", link: "/Login"},
];


const Navbar = () => {
    const [open,setOpen] = useState(false);
    
    const handleMenu = () => {
        setOpen((prev) => !prev)
        console.log(open);
    };

    return (
        <div className="bg-sky-500">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                    <img className="object-contain md:object-scale-down h-14 w-10 md:h-20 md:w-30" src="https://deviaxdey.com/images/Insignia.webp" alt=" Insignia" />
                        <a href="/" className="text-white">ANTONIO RAIMONDI</a>
                    </div>
                    {/*LINKS DEL NAV*/}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {Navlinks.map((link,login)=>(
                                <NavLink key={login} className="text-white transition-all duration-500 hover:bg-sky-600 hover:text=write px-3 py-2 rounded-md text-md font-medium" to={link.link}>
                                    {link.title}
                                </NavLink>   
                            ))}
                        </div>
                    </div>
                    {/*BOTONES */}
                <div className="-mr-2 flex md:hidden">
                    <button type="button" onClick={handleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-600 focus:ring-gray-200">
                        <span className="sr-only">MENU ABIERTO</span>
                        {open == true ? <FaTimes/>:<FaBars/>}
                    </button>
                </div>
                </div> 
            </div>
        {/*Menu flexsivle */}
        {open ? (
            <div className="md:hidden">
                <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {Navlinks.map((link,login)=>(
                        <NavLink key={login}
                            className="text-white text-center hover:bg-sky-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            to={link.link}>
                            {link.title}
                        </NavLink>   
                    ))}
                </div>
            </div>
        ):null}
        </div>
    )
}
export default Navbar;