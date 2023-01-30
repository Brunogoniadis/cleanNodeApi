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

            <NotesToDo title="title" text="Lembrar de codar o Input"></NotesToDo>

            <NotesToDo title="Teste de anotação" text="Teste de texto no front em react"></NotesToDo>

            <NotesToDo title="Anotação Loren Ipsum" text="Loren Ipsum"></NotesToDo>


          </ul>
        </div>
    </MainDiv>
  )
}

export default App;
