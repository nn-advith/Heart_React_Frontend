import React from 'react';
import { NumLabel, NumWrapper, NumField } from './NumInputEle';

const NumInput = ({setState,data, placeholder, key}) => {

  return (
    <>
        <NumWrapper key={key}>
          <NumLabel>{data}</NumLabel>
          <NumField type="number" onChange={(e) => setState(parseInt(e.target.value))} placeholder={placeholder}></NumField>
        </NumWrapper>
    </>
  )
}

export default NumInput