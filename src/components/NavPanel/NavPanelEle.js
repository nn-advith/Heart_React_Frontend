import styled from 'styled-components'

export const NavWrapper = styled.nav`
    position: fixed;
    top: 100px;
    display: flex;
    flex-direction: column;
    background: transparent;
    align-items: center;
    width: 20%;
    padding: 30px 0px;
    padding-top: 50px;
    margin: 0px 10px;

    .link{
        width: 80%;
        margin: 10px 0px;
    }

    @media screen and (max-width: 770px){
        display: none;
    }
`

export const NavItem = styled.div`
    cursor: pointer;
    color: ${({active, a}) => (active === a) ? ' #000' : ' #fff' };
    z-index: 100;
    font-weight:400;
    width: 90%;
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

    ${'' /* @media screen and (max-width: 770px){
        position: relative;
        top: 0; 
    } */}

`
