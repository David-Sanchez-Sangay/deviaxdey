import {Link} from "react-scroll";

const Nav = () => {
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
                <Link to="Inicio">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Inicio</li>
                </Link>
                <Link to="Nosotros">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Nosotros</li>
                </Link>
                <Link to="Personal">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Personal</li>
                </Link>
                <Link to="Servicios">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Servicios</li>
                </Link>
                <Link to="MesaPartes">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Mesa de Partes</li>
                </Link>
                <Link to="Contacto">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contacto</li>
                </Link>
                <Link to="Ingresar">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Ingresar</li>
                </Link>
            </ul>
        </div>
    </>
    return(
            <nav>
                <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
                    <div className="flex items-center flex-1">
                        <span className="text-3xl font-bold">INSIGNIA DEL COLEGIO</span>
                    </div>
                    <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                        <div className="flex-10">
                            <ul className="flex gap-8 mr-16 text-[18px]">
                                <Link to="Inicio">
                                    <li>Inicio</li>
                                </Link>
                                <Link to="Nosotros">
                                    <li>Nosotros</li>
                                </Link>
                                <Link to="Personal">
                                    <li>Personal</li>
                                </Link>
                                <Link to="Servicios">
                                    <li>Servicios</li>
                                </Link>
                                <Link to="MesaPartes">
                                    <li>Mesa de Partes</li>
                                </Link>
                                <Link to="Contacto">
                                    <li>Contacto</li>
                                </Link>
                                <Link to="Ingresar">
                                    <li>Ingresar</li>
                                </Link>
                            </ul> 
                        </div>
                    </div>
                </div>
            </nav>
    );
};
export default Nav
