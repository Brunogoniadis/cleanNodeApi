import styled from "styled-components";

export const MainDiv = styled.main`


    

    .aside{
        width: 250px;

        position: fixed;



        margin-bottom: 3vh;
        padding: 30px 20px;
        background-color: #fff;
        border-radius: 10px;

        strong{
            font-size: 20px;
            text-align: center;
            display: block;
            color:#333;
        }

        form{
            margin-top: 30px;
        }

        .inputBlock{

            margin-top: 20px;
            label{
                color: #acacac;
                font-size: 14px;
                font-weight: bold;
            }

            .title{

                border: none;
                border-bottom: 1px solid #D9D9D9;
                width: 100%;
            }

            .anotatiton{

                border: none;
                border-bottom: 1px solid #D9D9D9;
                height: 200px;
                width: 100%;
            }
        }
        button{
            width: 100%;
            margin-top: 30px;
            background-color: #ffd3ca;

            border: none;
            border-radius: 10px;

            padding: 15px 20px;
            
            font-size: 16px;
            font-weight: bold;
            color: #fff;

        }
    }
    .main{
        
    }
`