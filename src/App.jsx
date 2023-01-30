import { MainDiv } from "./App"
import { NotesToDo } from "./components/notesToDo";


function App() {

  return (
    <MainDiv>

      <div className="asideDiv">
        <div className="asideCard">
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
      </div>


      <div className="dashboard">
          <ul>

            <NotesToDo title="title" text="teste" ></NotesToDo>

            <NotesToDo title="Teste de anotação" text="Teste de texto no front em react Teste de texto no front em react Teste de texto no front em react Teste de texto no front em react Teste de texto no front em react Teste de texto no front em react Teste de texto no front em react Teste de texto no front em react Teste de texto no front em react Teste de texto no front em react Teste de texto no front em react Teste de texto no front em react Teste de texto no front em react Teste de texto no front em react Teste de texto no front em react Teste de texto no front em react " ></NotesToDo>

            <NotesToDo title="Anotação Loren Ipsum" text="Teste de texto com algumas letras Teste de texto com algumas letras Teste de texto com algumas letras Teste de texto com algumas letras "></NotesToDo>

            <NotesToDo title="Anotação Loren Ipsum" text="Loren Ipsum"></NotesToDo>
            <NotesToDo title="Anotação Loren Ipsum" text="Loren Ipsum"></NotesToDo>
            <NotesToDo title="Anotação Loren Ipsum" text="Loren Ipsum"></NotesToDo>

          </ul>
        </div>
    </MainDiv>
  )
}

export default App;
