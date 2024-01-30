
const url = 'http://localhost:8080/notes'

export const getNotes = async () => {
    try {
        const resp = await fetch(`${url}/findAll`, {
            method: 'GET',
            
        })
        const data = await resp.json()
        return data
    } catch (e) {
        console.log(e)
    }
}

export const createNote = async ( data ) => {
    try {
        const { titulo, autor, fecha, contenido } = data
        const resp = await fetch(`${url}/createNote?titulo=${titulo}&autor=${autor}&fecha=${fecha}&contenido=${contenido}`, {
            method: 'POST',
            
        })
        
        return resp
    } catch (e) {
        console.log(e)
    }
}