import styled from 'styled-components';

// color: #ec6367;

export const FooterWrapper = styled.section`
  background: #0d2438;
  color: #fff;
  text-align: center;
  padding: 35px 0 10px 0;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;

  .link-wrapper {
    font-size: 30px;

    .link-wrapper--item {
      margin: 15px;
      transition: all 0.2s ease-in;

      &:hover {
        color: #ec6367;
        transform: translateY(-2px);
      }
    }
  }
`;
