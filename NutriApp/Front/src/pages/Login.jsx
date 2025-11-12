import { useState } from 'react';
import { Link } from 'react-router';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col sm:flex-row h-screen">
            {/* Imagen de fondo */}
            <div className="w-full sm:w-1/2 h-1/3 sm:h-screen bg-[url('/public/images/image-login.png')] 
            bg-no-repeat bg-cover bg-center sm:block hidden">
            </div>

            {/* Contenedor de formulario */}
            <div className="w-full sm:w-1/2 h-screen bg-white flex justify-center items-center p-4">
                <div className="md:w-4/5 sm:w-full max-w-md">
                    {/* Título */}
                    <h1 className="text-3xl font-semibold mb-2 text-center uppercase text-green-700">
                        Bienvenido
                    </h1>
                    {/* Subtítulo */}
                    <small className="text-gray-400 block my-4 text-sm text-center">
                        Ingresa para monitorear tu nutrición
                    </small>

                    <form>
                        {/* Correo electrónico */}
                        <div className="mb-3">
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Correo electrónico</label>
                            <input 
                                type="email" 
                                placeholder="Ingresa tu correo electrónico" 
                                className="block w-full rounded-md border border-gray-300 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 py-2 px-3 text-gray-700" 
                            />
                        </div>

                        {/* Contraseña */}
                        <div className="mb-3 relative">
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Contraseña</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="****************"
                                    className="block w-full rounded-md border border-gray-300 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 py-2 px-3 text-gray-700 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 hover:text-green-600"
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.418 0-8.165-2.928-9.53-7a10.005 10.005 0 0119.06 0 10.05 10.05 0 01-1.845 3.35M9 15l6-6m0 6L9 9" /></svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Botón de iniciar sesión */}
                        <div className="my-5">
                            <Link 
                                to="/dashboard" 
                                className="py-2 w-full block text-center bg-green-600 text-white border rounded-xl hover:scale-105 duration-300 hover:bg-green-700"
                            >
                                Iniciar sesión
                            </Link>
                        </div>
                    </form>

                    {/* Separador con opción de "O" */}
                    <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">O</p>
                        <hr className="border-gray-400" />
                    </div>

                    {/* Botón de inicio de sesión con Google */}
                    <button className="bg-white border border-gray-300 py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm text-gray-700 hover:scale-105 duration-300 hover:bg-gray-100">
                        <img className="w-5 mr-2" src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google icon" />
                        Ingresar con Google
                    </button>

                    {/* Olvidaste tu contraseña */}
                    <div className="mt-5 text-center text-sm">
                        <Link to="/forgot/id" className="underline text-gray-500 hover:text-green-600">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>

                    {/* Enlaces para volver o registrarse */}
                    <div className="mt-5 text-sm flex justify-between items-center">
                        <Link to="/" className="underline text-gray-500 hover:text-green-600">
                            Regresar
                        </Link>
                        <Link 
                            to="/register" 
                            className="py-2 px-5 bg-green-600 text-white border rounded-xl hover:scale-110 duration-300 hover:bg-green-700"
                        >
                            Registrarse
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;