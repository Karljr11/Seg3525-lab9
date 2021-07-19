import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Programs() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Pricing />
    </>
  );
}

export default Programs;
