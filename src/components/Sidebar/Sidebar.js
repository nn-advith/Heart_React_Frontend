import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SidebarItems, SidebarWrapper, SideItem } from './SidebarEle'

const Sidebar = ({toggle, open}) => {
    const url =window.location.href.length;
    const [active, setActive] = useState(url === 29 ? 1:0);

    const changeActive = (i) => {
        if (active !== i){
            setActive(i)
        }
    }
  return (
    <>
        <SidebarWrapper open={open}>
            <SidebarItems>
            <Link to='/' className='link' >
                <SideItem active={active} a={0} onClick={() => {changeActive(0); toggle()}} >About</SideItem>
            </Link>
            <Link to='/predict' className='link' >
                <SideItem active={active} a={1} onClick={() => {changeActive(1); toggle()}} >Predict</SideItem>
            </Link>
            </SidebarItems>
        </SidebarWrapper>
    </>
  )
}

export default Sidebar