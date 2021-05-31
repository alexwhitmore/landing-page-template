import styled from 'styled-components';

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0d2438;
  width: 100vw;
  min-height: 800px;
  color: white;
  padding-top: 70px;

  p {
    margin: 30px 45px 35px 45px;
    text-align: center;

    @media (min-width: 800px) {
      &:nth-child(2) {
        margin: 30px 45px 75px 45px;
      }
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: center !important;
    margin-left: 0 !important;

    @media (max-width: 460px) {
      padding-bottom: 50px;
    }
  }

  a {
    background: transparent;
    border: 2px solid #ec6367;
    padding: 13px 20px 13px 20px;
    margin-top: 20px;
    text-decoration: none;
    color: #ec6367;
    text-transform: uppercase;
    letter-spacing: 5px;

    &:hover {
      background: #ec6367;
      color: #0d2438;
    }
  }
`;
