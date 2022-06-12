import styled from "styled-components";

export const NumWrapper = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: 40px 10px;
`

export const NumLabel = styled.label`
    text-align: left;
    font-size: 1rem;
    width: 100%;
    word-wrap: break-word;
    line-height: 1.5rem;
    font-style: italic;
    height: 90px;
`

export const NumField = styled.input`
    border: none;
    outline: none;
    width: 200px;
    height: 40px;
    padding: 10px 30px;
    background: white;
    margin: 10px 0;
    border-bottom: 3px solid #0BDA51;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`