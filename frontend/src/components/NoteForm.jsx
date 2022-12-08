import {useState} from 'react'
// import { json } from 'react-router-dom'
import { useNotesHook } from '../hooks/useNotesHook'

export const NoteForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const { dispatch} = useNotesHook()

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
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setTitle('')
            setBody('')
            setError(null)
            setEmptyFields([])
            console.log('New note was added', json)
            dispatch({type: 'CREATE_NOTE', payload: json})
        }
    }

    return(
        <form action="" className="create" onSubmit={handleSubmit}>
            <h3>Add new note</h3>

            <label htmlFor="">Note title:</label>
            <input 
                type="text" 
                onChange={e => setTitle(e.target.value)} 
                value={title} 
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <br/>
            <label htmlFor="">Note body:</label>
            <textarea 
                type="text" 
                onChange={e => setBody(e.target.value)} 
                value={body} 
                className={emptyFields.includes('body') ? 'error' : ''}
            />
            <button>Add Note</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}