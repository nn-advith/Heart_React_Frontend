import styled from 'styled-components'

export const SelectWrapper = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: 40px 10px;
`

export const SelectList = styled.div`
    position: relative;
    font-family: 'Roboto', sans-serif;
    width: 200px;
    height: 40px;
    padding: 10px 30px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    border-bottom: 3px solid #0BDA51;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    .pointer{
        cursor: pointer;
    }
`

export const SOptionWrapper = styled.div`
    position: absolute;
    max-height: ${({open}) => open ? '300px': '0px'};
    z-index: 10;
    overflow: auto;
    top: 60px;
    width: 100%;
    left: 0px;
    display: flex;
    transition: 0.3s ease-in-out;
    flex-direction: column;

    &::-webkit-scrollbar {
    display: none;
    }

`

export const Soption = styled.div`
    width: 200px;
    padding: 10px 30px;

    display: flex;
    align-items: center;
    min-height: ${({open}) => open ? '40px': '0px'};
    opacity: ${({open}) => open ? '1': '0'};
    transition: 0.2s ease-in-out;
    background: #0BDA51;

    &:hover{
        background: #222;
        color: #fff;
    }
    
`

export const Slabel = styled.label`
    text-align: left;
    font-size: 1rem;
    width: 100%;
    word-wrap: break-word;
    line-height: 1.5rem;
    font-style: italic;
    height:${({exist}) => exist!==0 ? '90px': '0px'};
`