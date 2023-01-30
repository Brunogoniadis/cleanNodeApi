import { MainDiv } from "./App"
import { NotesToDo } from "./components/notesToDo";


function App() {

  return (
    <MainDiv>
      <div className="aside">
          <strong>Caderno de notas</strong>

          <form>
            <div className="inputBlock">
              <label htmlFor="title">Titulo da anotação</label>
              <input className="title" type="text" />

            </div>
          
            <div className="inputBlock">
              <label htmlFor="nota">Anotações</label>
              <input className="anotatiton" type="text" />

            </div>

            <button type="submit"> Salvar</button>
          </form>
      </div>

      <div className="main">
          <ul>
            <li className="notepadInfos">
              <NotesToDo></NotesToDo>
            </li>
          </ul>
        </div>
    </MainDiv>
  )
}

export default App;
