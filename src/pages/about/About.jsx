import React from 'react'
import Banner from './components/Banner'
import Brands from '../home/components/Brands'
import Counter from './components/Counter';

const About = () => {
  return (
    <div className="relative section_bg overflow-hidden">
      <Banner />
      <div className="container mx-auto">
        <Counter />
      </div>
      <div className="py10 bgwhite">
        <Brands />
      </div>
    </div>
  );
}

export default About
