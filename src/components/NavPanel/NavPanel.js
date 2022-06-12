import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { NavWrapper, NavItem} from './NavPanelEle';

const NavPanel = () => {
    const url =window.location.href.length;
    const [active, setActive] = useState(url === 29 ? 1:0);

    const changeActive = (i) => {
        if (active !== i){
            setActive(i)
        }
    }

  return (
    <>
        <NavWrapper>
            <Link to='/' className='link'>
                <NavItem active={active} a={0} onClick={() => {changeActive(0)}}>About</NavItem>
            </Link>
            <Link to='/predict' className='link' >
                <NavItem active={active} a={1} onClick={() => {changeActive(1)}}>Predict</NavItem>
            </Link>
        </NavWrapper>
    </>
  )
}

export default NavPanel