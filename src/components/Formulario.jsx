import React, { useState } from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [categoria, setCategoria] = useState("")
    const [fecha, setFecha] = useState(0)

    const handleSubmit = e => {
        e.preventDefault()
        
        if([nombre,categoria,fecha].includes("")){
            console.log("faltan datos");
        }else{
            console.log("los datos fueron enviados correctamente");
        }
    }


    return (
        <>
            <h2> Ingresar Productos</h2>
            <form
                onSubmit={handleSubmit}
            >
                <label htmlFor='nombre'>Nombre: </label>
                <input
                    type='text'
                    placeholder='Ingresar Nombre'
                    id='nombre'
                    value={nombre}
                    onChange={e =>setNombre(e.target.value)}
                />

                <label htmlFor=''>Categoría: </label>
                <input
                    type='text'
                    placeholder='Ingresar Categoría'
                />

                <label htmlFor=''>Fecha de Alta: </label>
                <input
                    type='date'
                    placeholder='Ingresar Fecha'
                />

                <input
                    type="submit"
                    value="Enviar datos"
                />

            </form>
        </>
    )
}

export default Formulario