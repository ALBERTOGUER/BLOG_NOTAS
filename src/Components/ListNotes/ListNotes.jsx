import React, { useState } from 'react'
import './styles.css'


const ListNotes = ({notes}) => {
    const [textosCompletos, setTextosCompletos] = useState([]);

    const toggleTextoCompleto = (indice) => {
        const nuevosTextosCompletos = [...textosCompletos];
        nuevosTextosCompletos[indice] = !nuevosTextosCompletos[indice];
        setTextosCompletos(nuevosTextosCompletos);
    };

    return (
        <div>
            {
                notes?.map((item, index) =>
                    <div className="card mt-3" key={index}>
                        <div className="card-body expansible-container">
                            <h5 className="card-title">{item.titulo}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{item.autor}</h6>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{item.fecha}</h6>
                            <p className={`card-text ${textosCompletos[index] ? 'expandido' : 'recortado'}`}>{textosCompletos[index] ? item.contenido : item.contenido.slice(0, 70)}.</p>
                            
                            {item.contenido.length > 70 && (
                                <button className='btn btn-primary' onClick={() => toggleTextoCompleto(index)}>
                                    {textosCompletos[index] ? 'Mostrar menos' : 'Mostrar más'}
                                </button>
                            )}
                            
                        </div>
                    </div>)
            }
        </div>
    )
}
export default ListNotes;
