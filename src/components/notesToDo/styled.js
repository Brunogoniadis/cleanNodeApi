import styled from "styled-components";

export const Notepad = styled.div`

    background-color: #fff;
    box-shadow: 0 0 14px 0 rgba(0,0,0,0.2);
    border-radius: 10px;
    padding: 20px 20px 10px 20px;
    height: 250px;
    width: 250px;
    
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
                height: 150px;
                font-size: 14px;
                color: #666;
                border: none;
                background-color: #fff;
                resize: none;
            }
            .close{
                position: relative;
                left: 100%;
                bottom: 15%;

                cursor: pointer;

                font-weight: bold;

                border: none;
                background-color: transparent;

                :hover{
                    color: #eb8f7a;
                    transition: 0.2s;
                }
            }
            .alert{
                color: #c4c4c4;
                cursor: pointer;



                border: none;
                background-color: transparent;

                svg{
                    width: auto;
                    height: 100%;
                    transform: scaleY(1.2);
                    transform: scaleX(2);
                }

                :hover{
                    color: #eb8f7a;
                    transition: 0.2s;
                }
            }
`