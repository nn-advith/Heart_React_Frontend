import React from 'react'
import { HoriZon, SectionWrapper, Title } from '../Reusable/Reusable';
import { AboutText } from './AboutEle';
import {AiOutlineLink} from 'react-icons/ai';
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <SectionWrapper>
      <Title>ABOUT</Title>
      <HoriZon/>
      <AboutText>
        Heart Disease Possibility Classification using Logistic Regression and Random Forest Classification.
        <br/>
        <br/>
        <br/>
        <h3>Dataset :</h3>
        <p>2020 annual CDC survey data of 400k adults related to their health status.</p>
        <p><AiOutlineLink/> <a href='https://www.kaggle.com/datasets/kamilpytlak/personal-key-indicators-of-heart-disease' >Personal Key Indicators of Heart Disease</a></p>
      </AboutText>
    </SectionWrapper>
  )
}

export default About