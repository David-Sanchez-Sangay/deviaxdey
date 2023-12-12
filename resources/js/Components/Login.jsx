const Login = () =>{
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full ">
                <div className="hidden sm:block bg-gray-100">
                    <img className="w-full h-full  object-cover  rounded-r-[40px]" src="https://deviaxdey.com/images/colegio.webp" alt=""/>
                </div>
                <div className="bg-gray-100	flex flex-col justify-center">
                    <form className="max-w-[400px] w-full mx-auto bg-sky-200 p-8 px-8 rounded-lg shadow-xl shadow-gray-500/20">
                        <h2 className="text-4xl dark:text-gray-50 font-bold text-center">INGRESAR</h2>
                        <div className="flex flex-col text-gray-500 py-2 font-semibold">
                            <label>USUARIO</label>
                            <input className="rounded-lg bg-gray mt-2 p-2 focus:border-sky-500 focus:bg-gray-100 focus:outline-none shadow-lg hover:shadow-gray-500/30" type="text"/>
                        </div>
                        <div className="flex flex-col text-gray-500 py-2 font-semibold">
                            <label>CONTRASEÑA</label>
                            <input className="p-2 rounded-lg bg-gray mt-2 p-2 focus:border-sky-500 focus:bg-gray-100 focus:outline-none shadow-lg hover:shadow-gray-500/30" type="password"/>
                        </div>
                        <div>
                        </div>
                        <button className="w-full my-5 py-2 bg-sky-400 shadow-lg shadow-gray-500/40 hover:shadow-gray-500/30 text-white font-bold rounded-lg">ENTRAR</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;

// shadow-lg hover:shadow-gray-500/30
// shadow-inner shadow-gray-600/40
