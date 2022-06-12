import React, {useState, useRef, useEffect} from 'react';
import {IoIosArrowDown} from 'react-icons/io'
import { SelectList, SelectWrapper, Slabel, Soption, SOptionWrapper } from './SelectEle';

function useOutsideAlerter(ref, setOpen) {
  useEffect(() => {
    
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
     
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setOpen]);
}

const Select = ({ip, state, setState, data}) => {

  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpen)



  return (
    <>
    <SelectWrapper  ref={wrapperRef} >
      <Slabel exist={data.length}>{data}</Slabel>
        <SelectList  onClick={() => setOpen(!open) }>{state} <IoIosArrowDown className='pointer'/>
          <SOptionWrapper open={open} >
            {ip.map((i, key) => (
              <Soption key={key} open={open} onClick={() => {setState(i);  setOpen(!open)}}>{i}</Soption>
            ))}
          </SOptionWrapper>
      </SelectList>
    </SelectWrapper>
    </>
  )
}

export default Select