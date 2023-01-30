import { Notepad } from "./styled"

export const NotesToDo = () =>{
    return(
        <Notepad>
            <strong>Fazer Compras</strong>
                <div className="close">x</div>
                <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</textarea>
            <span>!</span>
        </Notepad>

    )

}