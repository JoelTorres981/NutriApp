import { useState } from 'react'

const PersonalData = () => {
    const [formData, setFormData] = useState({
        fechaNacimiento: '',
        estatura: '',
        peso: '',
        alergias: '',
        preferencias: '',
        sexo: '',
        actividadFisica: '',
        dieta: '',
        comidasAlDia: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Datos guardados:', formData)
    }

    return (
        <>
            <div>
                <h1 className='text-3xl font-semibold mb-2 text-center uppercase text-green-700'>Datos Personales</h1>
                <hr className='my-4 border-t-2 border-gray-300' />
                <p className='mb-8 text-gray-400 text-center'>Este módulo te permite gestionar tu información personal y datos de salud</p>
            </div>

            <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-lg'>
                
                {/* Información Personal */}
                <fieldset className="border-2 border-gray-500 p-6 rounded-lg shadow-lg">
                    <legend className="text-xl font-bold text-gray-700 bg-gray-200 px-4 py-1 rounded-md">
                        Información Personal
                    </legend>

                    {/* Fecha de Nacimiento */}
                    <div className='mb-5'>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">Fecha de Nacimiento</label>
                        <input
                            type="date"
                            name="fechaNacimiento"
                            value={formData.fechaNacimiento}
                            onChange={handleChange}
                            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        />
                    </div>

                    {/* Sexo */}
                    <div className='mb-5'>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">Sexo</label>
                        <select
                            name="sexo"
                            value={formData.sexo}
                            onChange={handleChange}
                            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        >
                            <option value="">--- Seleccionar ---</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="otro">Otro</option>
                            <option value="prefiero_no_decir">Prefiero no decir</option>
                        </select>
                    </div>

                </fieldset>

                {/* Información de Salud y Medidas */}
                <fieldset className="border-2 border-gray-500 p-6 rounded-lg shadow-lg mt-10">
                    <legend className="text-xl font-bold text-gray-700 bg-gray-200 px-4 py-1 rounded-md">
                        Información de Salud y Medidas
                    </legend>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {/* Estatura */}
                        <div>
                                <label className="mb-2 block text-sm font-semibold text-gray-700">Estatura (cm)</label>
                            <input
                                type="number"
                                name="estatura"
                                value={formData.estatura}
                                onChange={handleChange}
                                placeholder="Ingresa tu estatura en centímetros"
                                step="0.1"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>

                        {/* Peso */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Peso (kg)</label>
                            <input
                                type="number"
                                name="peso"
                                value={formData.peso}
                                onChange={handleChange}
                                placeholder="Ingresa tu peso en kilogramos"
                                step="0.1"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                    </div>

                    {/* Alergias */}
                    <div className='mt-5 mb-5'>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">Alergias</label>
                        <textarea
                            name="alergias"
                            value={formData.alergias}
                            onChange={handleChange}
                            placeholder="Ingresa tus alergias conocidas en alimentos"
                            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 h-20"
                        />
                    </div>

                    {/* Preferencias */}
                    <div className='mb-5'>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">Preferencias</label>
                        <textarea
                            name="preferencias"
                            value={formData.preferencias}
                            onChange={handleChange}
                            placeholder="Ingresa tus preferencias en comidas"
                            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 h-20"
                        />
                    </div>
                </fieldset>

                {/* Información de Estilo de Vida */}
                <fieldset className="border-2 border-gray-500 p-6 rounded-lg shadow-lg mt-10">
                    <legend className="text-xl font-bold text-gray-700 bg-gray-200 px-4 py-1 rounded-md">
                        Información de Estilo de Vida
                    </legend>

                    {/* Actividad Física */}
                    <div className='mb-5'>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">Actividad Física</label>
                        <select
                            name="actividadFisica"
                            value={formData.actividadFisica}
                            onChange={handleChange}
                            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        >
                            <option value="">--- Seleccionar ---</option>
                            <option value="nada">Nada</option>
                            <option value="1-3_dias">1-3 días por semana</option>
                            <option value="3-5_dias">3-5 días por semana</option>
                            <option value="mas_5_dias">Más de 5 días a la semana</option>
                        </select>
                    </div>

                    {/* Dieta */}
                    <div className='mb-5'>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">Tipo de Dieta</label>
                        <select
                            name="dieta"
                            value={formData.dieta}
                            onChange={handleChange}
                            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        >
                            <option value="">--- Seleccionar ---</option>
                            <option value="omnivoro">Omnívoro</option>
                            <option value="vegetariano">Vegetariano</option>
                            <option value="vegano">Vegano</option>
                            <option value="keto">Keto</option>
                            <option value="sin_gluten">Sin Gluten</option>
                            <option value="paleo">Paleo</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>

                    {/* Comidas al Día */}
                    <div className='mb-5'>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">Comidas al Día</label>
                        <input
                            type="number"
                            name="comidasAlDia"
                            value={formData.comidasAlDia}
                            onChange={handleChange}
                            placeholder="Ingresa número de comidas al día"
                            min="1"
                            max="10"
                            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        />
                    </div>
                </fieldset>

                {/* Botón de envío */}
                <button
                    type="submit"
                    className="py-2 w-full block text-center bg-green-600 text-white border rounded-xl hover:scale-105 duration-300 hover:bg-green-700 mt-8"
                >
                    Guardar Datos Personales
                </button>
            </form>
        </>
    )
}

export default PersonalData
