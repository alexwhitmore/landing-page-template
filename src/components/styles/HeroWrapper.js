import styled from 'styled-components';

export const HeroWrapper = styled.section`
  margin-bottom: 8.5px;
  display: flex;
  flex-direction: column;
  height: 90vh;

  @media (min-width: 800px) {
    flex-direction: row;
  }

  .left,
  .right {
    width: 100%;
    height: 91vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .hero-left {
    background-color: #ec6367;
  }

  .left {
    a {
      padding: 15px 15px 15px 20px;
    }
  }

  .right {
    a {
      padding: 15px 15px 15px 20px;
    }
  }

  .caption {
    position: relative;
  }

  .caption h1 {
    text-transform: uppercase;
    letter-spacing: 10px;
    margin-bottom: 25px;
  }

  .button {
    border: 2px solid #212529;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 10px;
    transition: 0.25s ease all;
    letter-spacing: 5px;

    &:hover {
      background: #212529;
      color: white !important;
    }
  }
`;
