import { MainDiv } from "./App"


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

        <div className="main">
          
        </div>
      </div>
    </MainDiv>
  )
}

export default App;
