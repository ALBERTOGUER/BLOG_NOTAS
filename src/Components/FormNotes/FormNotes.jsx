import React, { useState } from 'react'
import { createNote } from '../../services/notes/notesServices'

const FormNotes = ({setNotes, setLoading, connection}) => {
    const [ state, setState ] = useState({
        titulo: '',
        autor: '',
        contenido: '',
        fecha: '',
    })

    const handleState = ({ target }) => {
        setState({
            ...state,
            [target.name] : target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const data =  await createNote(state)
        setLoading(false)
        if (data.ok) {
            // Aquí se podría mostrar un componente que sirva como alerta por cuestiones de tiempo utilicé el que nos proporciona javaScript
            alert('Creado exitosamente')
            setNotes()
        } else {
            alert('Error al crear la nota')
        }
        setState({
            titulo: '',
            autor: '',
            contenido: '',
            fecha: '',
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white">Titulo</label>
                    <input type="text" name="titulo" value={state.titulo} onChange={handleState} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-white">Autor</label>
                    <input type="text" name="autor" value={state.autor} onChange={handleState} className="form-control" id="exampleInputPassword1" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-white">Fecha</label>
                    <input type="date" name="fecha" onChange={handleState} className="form-control" id="exampleInputPassword1" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-white">Nota</label>
                    <textarea className="form-control" value={state.contenido} onChange={handleState} name="contenido" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
        
                <button type="submit" disabled={connection} className="btn btn-primary">Submit</button>
            </form>
            {connection &&
                <div className="alert alert-danger mt-3" role="alert">
                    No hay conexión a internet
                </div>
            }
        </div>
    )
}

export default FormNotes;
