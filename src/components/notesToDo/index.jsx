import { Notepad } from "./styled"

import {IoAlert} from "react-icons/io5"
import {IoMdClose} from "react-icons/io"


export const NotesToDo = ({title, text}) =>{
    return(
        <Notepad>
            <strong>{title}</strong>
                <button className="close"><IoMdClose/></button>
                <textarea>{text}</textarea>
                <button className="alert"><IoAlert/></button>
        </Notepad>

    )

}