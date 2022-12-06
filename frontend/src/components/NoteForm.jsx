import {useState} from 'react'
import { json } from 'react-router-dom'

export const NoteForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async e => {
        e.preventDefault()

        const note = {title, body}
        const response = await fetch('/api/notes', {
            method: "POST",
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setBody('')
            setError(null)
            console.log('New note was added', json)
        }
    }

    return(
        <form action="" className="create" onSubmit={handleSubmit}>
            <h3>Add new note</h3>

            <label htmlFor="">Note title:</label>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>

            <br/>
            <label htmlFor="">Note body:</label>
            <textarea type="text" onChange={e => setBody(e.target.value)} value={body}/>
            <button>Add Note</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}