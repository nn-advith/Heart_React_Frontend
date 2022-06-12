import React from 'react';
import { HamIcon } from './HamIconEle';

const HamIcon2 = ({toggle, open}) => {
  return (<div onClick={toggle}>
      <HamIcon  open={open}>
            <div />
            <div />
            <div />
        </HamIcon>
  </div>);
};

export default HamIcon2;
