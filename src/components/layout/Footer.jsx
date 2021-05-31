import React from 'react';
import { FooterWrapper } from '@styles';
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin';
import { AiFillTwitterSquare } from '@react-icons/all-files/ai/AiFillTwitterSquare';
import { AiFillFacebook } from '@react-icons/all-files/ai/AiFillFacebook';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="link-wrapper">
        <AiFillLinkedin className="link-wrapper--item" />
        <AiFillTwitterSquare className="link-wrapper--item" />
        <AiFillFacebook className="link-wrapper--item" />
      </div>
      <div>Copyright &#169; 2021 - Landing Page</div>
    </FooterWrapper>
  );
};

export default Footer;
