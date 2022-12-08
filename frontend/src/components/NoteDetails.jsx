import {Link} from 'react-router-dom'
import { useNotesHook } from '../hooks/useNotesHook'
import formateDistanceToNow from 'date-fns/formatDistanceToNow'

const NoteDetails = ({ note }) => {
    const { dispatch} = useNotesHook()

    const handleClick = async () => {
        const response = await fetch(`/api/notes/${note._id}`, {
            method: "DELETE",
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({
                type: 'DELETE_NOTE',
                payload: json
            })
        }
    }

    const handleLike = () => {
        console.log('You liked it!')
    }

    return(
            <div className="note-details">
                <h4>{note.title}</h4>
                <p>{note.body}</p>
                <Link to="/">
                    <h5>Note Details</h5>
                </Link>
                <p>{formateDistanceToNow(new Date(note.createdAt), {addSuffix: true})}</p>
                {/* <p>{note.createdAt}</p> */}
                <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
                {/* <span onClick={handleLike}>Like it!</span> */}
            </div>
    )
}

export default NoteDetails;