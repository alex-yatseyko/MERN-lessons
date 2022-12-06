import {Link} from 'react-router-dom'

const NoteDetails = ({ note }) => {
    return(
            <div className="note-details">
                <h4>{note.title}</h4>
                <p>{note.body}</p>
                <Link to="/">
                    <h5>Note Details</h5>
                </Link>
                <p>{note.createdAt}</p>
            </div>
    )
}

export default NoteDetails;