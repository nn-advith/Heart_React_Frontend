import styled from "styled-components";

export const SidebarWrapper = styled.div`
    width: 110%; 
    background: #222;
    min-height: 110%;
    position: absolute;
    top: -10px;
    right: ${({open}) => open ? '-10px' : '-1200px'};
    z-index: 1000;
    transition: 0.3s ease-in-out;

    @media screen and (min-width: 900px){
        display: none;
    }
`

export const SidebarItems = styled.div`
top: 100px;
    display: flex;
    flex-direction: column;
    background: transparent;
    align-items: center;
    width: 100%;
    padding: 30px 0px;
    padding-top: 50px;
    margin: 70px 0;

    .link{
        width: 70%;
        margin: 10px 10px;
    }
`

export const SideItem = styled.div`
 cursor: pointer;
    color: ${({active, a}) => (active === a) ? ' #000' : ' #fff' };
    z-index: 100;
    font-weight:400;
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    border-bottom:${({active, a}) => (active === a) ? '3px solid #000' : '3px solid #0BDA51' };
    padding: 10px;
    letter-spacing: 3px;
    min-height: 40px;
    background: ${({active, a}) => (active === a) ? '#0BDA51' : '#111' };
    font-size: 1rem;
    transition: 0.15s all ease-in-out;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`