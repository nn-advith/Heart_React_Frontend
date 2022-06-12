import styled from 'styled-components'

export const SLWrapper = styled.div`
    position: relative;
    background-color: transparent;
    width: 90vw;
    padding: 20px;
    display: flex;
    justify-content: left;
    min-height: 80vh;
    @media screen and (max-width: 770px){
        width: 85vw;
        flex-direction: column
    }
`

export const Divider  = styled.div`
    width: 2px;
    min-height: 100%;
    background-color: #222;
    margin: 0px 40px;
    margin-left: 25%;
    @media screen and (max-width: 770px){
        display: none;
    }
`

export const Section = styled.div`
    width: 80%;
    overflow: auto;
    max-height: 80vh;
    margin: 0px 5px;
    padding:0 20px 0 0;
    

    @media screen and (max-width: 770px){
       width: 100%;
       &::-webkit-scrollbar
    {
        display:none
    }
    }
    &::-webkit-scrollbar-track
    {
        border-radius:5px;
        background-color: #444;
    }
    &::-webkit-scrollbar
    {
        width: 5px;
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb
    {   border-radius: 5px;
        background-color: #0bda12;	
    }
`