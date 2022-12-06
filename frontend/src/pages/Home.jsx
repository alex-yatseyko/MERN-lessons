import { useEffect, useState} from "react";
import NoteDetails from "../components/NoteDetails";
import { NoteForm } from '../components/NoteForm'

const Home = () => {
  const [notes, setNotes] = useState(null)

  useEffect(() => {
    const fetchNotes = async() => {
      // const response = await fetch('http://localhost:4000/api/notes')
      const response = await fetch('/api/notes')
      console.log(response)
      const json = await response.json()

      console.log(json)

      if(response.ok){
        setNotes(json)
      }
      
    }

    fetchNotes()
  }, [])

  return (
    <div className="home">
      {/* <h2>Note</h2> */}
    <div className="notes">
      {notes && notes.map(note => {
        return(<NoteDetails key={note._id} note={note}/>)
      })}
    </div>
      <NoteForm/>
    </div>
  );
};

export default Home;
