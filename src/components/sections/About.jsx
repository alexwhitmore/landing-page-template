import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { AboutWrapper } from '@styles';

const About = () => {
  return (
    <AboutWrapper>
      <StaticImage
        src="../../images/about.svg"
        width={300}
        quality={95}
        placeholder="blurred"
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="An image of person coding"
      />
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident.
        </p>
        <p>
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid.
        </p>
        <div className="button-wrapper d-flex justify-content-start ms-5">
          <a href="#" className="test rounded">
            Learn More
          </a>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
