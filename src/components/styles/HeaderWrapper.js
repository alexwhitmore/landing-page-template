import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  align-items: center;
  background: #ec6367;
  position: sticky;
  top: 0;
  transition: top 0.3s;
  z-index: 100;

  a {
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: none;
    transition-property: border-bottom;
    transition-duration: 4s;
    float: left;
    display: block;
    margin-left: 20px;

    &:after {
      display: block;
      content: '';
      border-bottom: 1px solid white;
      transform: scaleX(0);
      transition: transform 250ms ease;
      transform-origin: 0% 50%;
    }

    &:hover:after {
      transform: scaleX(1);
    }
  }

  ul {
    color: white;
    text-transform: uppercase;
    font-size: 15px;
    list-style: none;
    display: flex;
    margin: 0 10px 0 0;

    a {
      margin: 10px;
    }
  }
`;
