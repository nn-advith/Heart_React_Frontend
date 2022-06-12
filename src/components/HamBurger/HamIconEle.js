import styled, {keyframes} from "styled-components";

const fadeIn =  keyframes`
    0% {
        opacity: 0;
        margin-right: -80px;
    }
    100% {
        opacity: 1;
        margin-right:0;

    }

`

export const HamIcon = styled.div`

    display:none;

    @media screen and ( max-width: 770px){
    position: absolute;
    animation: ${fadeIn} 0.3s;
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: column;
    top: 0;
    right: 0;
    width: 40px;
    height: 20px;
    cursor: pointer;
    transition: all .1s ease-in-out;
    transform: translate(0%, 100%);
    z-index: 2000;
    -webkit-tap-highlight-color: transparent;

    div {
        width: 60%;
        height: 0.2rem;
        background: #0bda12;
        transition: all .1s ease-in-out;
        transform-origin: 0px;
          
    &:nth-child(1) {
    
       transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
        }
    &:nth-child(2) {

    opacity: ${({open}) => (open ? '0%' : '100%')};
       transform: ${({open}) => (open ? 'translateX(100%)' : 'translateX(0)')};
        }
    &:nth-child(3) {

       transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0deg)')};
        }
    }
    }
`

