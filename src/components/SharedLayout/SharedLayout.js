import React from 'react';
import { Outlet } from 'react-router-dom';
import { SLWrapper, Divider, Section } from './SharedLayoutEle';
import NavPanel from '../NavPanel/NavPanel';

const SharedLayout = () => {
  return (
    <>
    <SLWrapper>
    <NavPanel/>
    <Divider />
    <Section>

      <Outlet />
    </Section>
    </SLWrapper>
    </>
  )
}

export default SharedLayout