import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';

function Book() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Book;