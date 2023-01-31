import { MainDiv } from "./App"
import { NotesToDo } from "./components/notesToDo";
import { useState, useEffect} from "react";

import api from "./services/api"

function App() {

  const [title, setTitles] = useState('');
  const [notes, setNotes] = useState('');
  const [ allNotes, setAllNotes] = useState ([]);

  useEffect(() => {
    async function getAllNotes() {
      const response = await api.get('/annotations');
      setAllNotes(response.data);
    }
    
    getAllNotes();
  }, []);

  async function handleSubmit(e){
    e.preventDefault();



    const response = await api.post('/annotations',{
      title,
      notes,
      priority: false
    })
    
    setTitles(' ');
    setNotes(' ');
    getAllNotes();
  }
    
  return (
    <MainDiv>

      <div className="asideDiv">
        <div className="asideCard">
            <strong>Caderno de notas</strong>

            <form onSubmit={handleSubmit}>
              <div className="inputBlock">
                <label htmlFor="title">Titulo da anotação</label>
                <input className="title" type="text" 
                  required
                  value={title}
                  onChange = {e => setTitles(e.target.value)}
                  />
                  
              </div>
            
              <div className="inputBlock">
                <label htmlFor="nota">Anotações</label>
                <textarea className="anotatiton" type="text" 
                  required
                  value={notes}
                  onChange = {e => setNotes(e.target.value)}
                  />
              
                  
  
              </div>

              <button type="submit"> Salvar</button>
            </form>
        </div>
      </div>


      <div className="dashboard">
          <ul>
            
          {allNotes.map(note => (
            <NotesToDo title={note.title} notes={note.notes} id={note.id} />
          ))}


            




          </ul>
        </div>
    </MainDiv>
  )
}

export default App;
