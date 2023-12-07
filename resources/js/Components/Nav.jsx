import { useState } from "react";
import {Link} from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
import {Outlet} from "react-router-dom";


const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-sky-600 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Inicio">
                    <li className="my-4 py-4 border-b border-sky-300 hover:bg-sky-700 hover:rounded">Inicio</li>
                </Link>
                <Link spy={true} smooth={true} to="Nosotros">
                    <li className="my-4 py-4 border-b border-sky-300 hover:bg-sky-700 hover:rounded">Nosotros</li>
                </Link>
                <Link spy={true} smooth={true} to="Personal">
                    <li className="my-4 py-4 border-b border-sky-300 hover:bg-sky-700 hover:rounded">Personal</li>
                </Link>
                <Link spy={true} smooth={true} to="Servicios">
                    <li className="my-4 py-4 border-b border-sky-300 hover:bg-sky-700 hover:rounded">Servicios</li>
                </Link>
                <Link spy={true} smooth={true} to="MesaPartes">
                    <li className="my-4 py-4 border-b border-sky-300 hover:bg-sky-700 hover:rounded">Mesa de Partes</li>
                </Link>
                <Link spy={true} smooth={true} to="Contacto">
                    <li className="my-4 py-4 border-b border-sky-300 hover:bg-sky-700 hover:rounded">Contacto</li>
                </Link>
                <Link spy={true} smooth={true} to="Login">
                    <li className="my-4 py-4 border-b border-sky-300 hover:bg-sky-700 hover:rounded">Ingresar</li>
                </Link>
            </ul>
        </div>
        <Outlet/>
    </>
    return(
        <nav>
            <div className="h-10vh flex justify-between z-10 text-stone-100 lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1">
                    <img className="object-contain md:object-scale-down h-14 w-20" src="https://deviaxdey.com/images/Insignia.webp" alt=" Insignia" />
                    <span className="text-3xl font-bold">  ANTONIO RAIMONDI</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-center font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px] text-center">
                            <Link spy={true} smooth={true} to="Inicio">
                                <li className="hover:text-sky-800 transition border-sky-900 hover:border-sky-800 cursor-pointer">Inicio</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Nosotros">
                                <li className="hover:text-sky-800 transition border-sky-900 hover:border-sky-800 cursor-pointer">Nosotros</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Personal">
                                <li className="hover:text-sky-800 transition border-sky-900 hover:border-sky-800 cursor-pointer">Personal</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Servicios">
                                <li className="hover:text-sky-800 transition border-sky-900 hover:border-sky-800 cursor-pointer">Servicios</li>
                            </Link>
                            <Link spy={true} smooth={true} to="MesaPartes">
                                <li className="hover:text-sky-800 transition border-sky-900 hover:border-sky-800 cursor-pointer">Mesa de Partes</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contacto">
                                <li className="hover:text-sky-800 transition border-sky-900 hover:border-sky-800 cursor-pointer">Contacto</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Login">
                                <li className="hover:text-sky-800 transition border-sky-900 hover:border-sky-800 cursor-pointer">Ingresar</li>
                            </Link>
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
