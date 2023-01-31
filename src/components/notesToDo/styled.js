import styled from "styled-components";

export const Notepad = styled.div`

    background-color: #fff;
    box-shadow: 0 0 14px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    padding: 20px 20px 10px 20px;
    width: 250px;
    grid-row-end: span ${props => props.row};
    
    strong{
        display: block;
        font-size:16px;
        color: #333;
    }
            textarea{
                padding: 7px;
                margin-top: 7px;
                margin-bottom: 5px;
                width: 100%;
                height: 75%;
                font-size: 14px;
                color: #666;
                border: none;
                background-color: #fff;
                resize: none;
                cursor: auto;
                display: inline-block;


            ::-webkit-scrollbar{
                width: 10px;
                background-color: var(--color-primary);
            }  ::-webkit-scrollbar-thumb {

                background-color: var(--color-action);
            }

            }
            .titleHeader{
                
                display: flex;
                
                justify-content: space-between;
            }
            .close{

                cursor: pointer;

                font-weight: bold;

                border: none;
                background-color: transparent;

                :hover{
                    color: var(--color-primary);
                    transition: 0.2s;
                }
            }
            .alert{
                color: #c4c4c4;
                cursor: pointer;
                

                border: none;
                background-color: transparent;


                :hover{
                    color: var(--color-primary);
                    transition: 0.2s;
                }
            }
`