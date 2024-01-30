import React, { useState } from 'react'
import { createNote } from '../../services/notes/notesServices'

const FormNotes = ({setNotes}) => {
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
        
        const data =  await createNote(state)
        if (data.ok) {
            alert('Creado exitosamente')
            setNotes()
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
        
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormNotes;
