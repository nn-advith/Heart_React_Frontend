import styled from "styled-components";

export const Title = styled.div`
    font-size: 2rem;
    padding: 30px 15px;
    text-align: left;
    color: #0BDA51;
    font-weight: 700;
    letter-spacing: 5px;
    width: 85%;
    background: #222;
    border-bottom: 4px solid #0bda12;
`

export const SectionWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: left;
    @media screen and (max-width: 770px){
        margin-top: -20px;
    }

`

export const HoriZon = styled.div`
    width: 90%;
    height: 1px;
    background-color: #444;
    margin: 10px 0;
`

export const Subhead = styled.div`
    font-size: 1.3rem;
    font-weight: 500;
    padding: 5px;
    margin: 10px;
`

export const Submit = styled.div`
    width: 150px;
    height: 50px;
    margin: 40px 10px;
    line-height: 50px;
    background: #222;
    color: white;
    text-align: center;
    border-bottom: 3px solid #0bda12;
    letter-spacing: 1px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: 0.2s all ease-in-out;

    &:hover{
        background: #0bda12;
        border-bottom: 3px solid #222;
        transition: 0.2s all ease-in-out;
        color: #222;
    }
`

