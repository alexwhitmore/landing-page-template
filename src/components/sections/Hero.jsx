import React from 'react';

import { HeroWrapper } from '@styles';

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="side left">
        <div className="image hero-left" />
        <div className="caption">
          <h1 className="text-light">Left</h1>
          <a className="button rounded text-dark" href="#">
            Left Button
          </a>
        </div>
      </div>

      <div className="side right">
        <div className="image hero-right" />
        <div className="caption">
          <h1 className="text-dark">Right</h1>
          <a className="button rounded text-dark" href="#">
            Right Button
          </a>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
