import { Notepad } from "./styled"

import {IoAlert} from "react-icons/io5"
import {IoMdClose} from "react-icons/io"


export const NotesToDo = ({title, notes}) =>{
    
    var countLines = 10
    countLines += Math.round(notes.length * 0.025);


    return(
        <Notepad row= {countLines}>
            <div className="titleHeader">
                <strong>{title}</strong>
                <button className="alert"><IoAlert/></button>   
                <button className="close"><IoMdClose/></button>          

            </div>
                <textarea rows={500} defaultValue={notes} >
                    
                </textarea>
        </Notepad>

    )

}