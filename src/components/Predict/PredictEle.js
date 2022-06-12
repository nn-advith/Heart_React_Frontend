import styled from 'styled-components'

export const ParameterGrid = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    @media screen and (max-width: 900px){
        grid-template-columns: repeat(1, 1fr);
    }
    
` 

export const Result = styled.div`
    margin: 30px 10px;
    border-bottom: 6px solid #ff3737;
    width: 50%;
    min-height: 150px;
    padding: 20px;
    background: #111;
    color: #fff;
    display: flex;
    justify-content: left;
    flex-direction: column;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    @media screen and (max-width: 770px){
        width: 70%;
    }
`

export const ResultT = styled.div`
    font-size: 0.9rem;
    font-weight: 700;
    color: #ff3737;
    letter-spacing: 2px;
    margin: 5px 0 30px 0;
`

export const ResultC = styled.div`
     display: flex;
    justify-content: left;
    flex-direction: column;
    font-size: 0.8rem;
    .res{
        font-size: 1.7rem;
        font-weight: 500;
        color: ${({result}) => result === 'Yes' ? '#ff3737': '#0bda12'}
    }
`