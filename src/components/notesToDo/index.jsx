import { Notepad } from "./styled"

import {IoAlert} from "react-icons/io5"
import {IoMdClose} from "react-icons/io"


export const NotesToDo = ({title, text}) =>{
    
    var countLines = 10
    countLines += Math.round(text.length * 0.025);


    return(
        <Notepad row= {countLines}>
            <div className="titleHeader">
                <strong>{title}</strong>
                <button className="alert"><IoAlert/></button>   
                <button className="close"><IoMdClose/></button>          

            </div>
                <textarea>
                    {text}
                </textarea>
                
        </Notepad>

    )

}