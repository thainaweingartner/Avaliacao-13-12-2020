import styled from 'styled-components';

export const Foot = styled.footer`
  display: flex;
  padding: 15px 35px;
  justify-content: center;
  height: 250px;
  background: #177791;
  flex-wrap: wrap;

  img {
    width: 320px;
    padding: 0 15px;
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px 0;
  }

  .contact p{
    margin-top: 10px;
  }

  .contact svg{
    margin-bottom: -5px;
  }
  
  .social {
    display: flex;
    justify-content: flex-start;
    align-items: left;
  }

  .social img {
    width: 40px; 
    color: white;
    margin: 10px 10px 0 0;
    padding: 0;
  }

  @media (max-width: 890px) {
    display: flex;
    flex-direction: column;
    padding: 15px;
    height: fit-content;

    img {
      margin-bottom: 10px;
    }

    .content {
      display: flex;
      width: 100vw;
      justify-content: space-around;
    }

    button {
      margin: 0;
      padding: 10px 25px;
    }
  }
`;
