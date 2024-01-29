import React from 'react'

const FormNotes = () => {
  return (
    <div>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label text-white">Titulo</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label text-white">Autor</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label text-white">Autor</label>
                <input type="date" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label text-white">Nota</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
    
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default FormNotes;
