import styled from 'styled-components';
import banner from '../../assets/back.jpg';

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 0 50px 50px;
    height: calc(100vh - 120px);
    background: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;

  h1 {
    width: 80%;
    margin: auto;
    font-size: 55px;
    line-height: 60px;
    margin-bottom: 20px;
    font-weight: 800;
    color: rgb(255, 255, 255);
    text-shadow: 0 0 5px rgba(0,0,0,0.3); 
  }

  p {
    width: 100%;
    margin: auto auto 0;
    font-size: 28px;
    line-height: 30px;
    color: rgb(255, 255, 255, 0.9);
    text-shadow: 0 0 5px rgba(0,0,0,0.3); 
  }

  @media (max-width: 1050px) {
      align-items: center;
      justify-content: center;
      padding: 50px 0;
      margin: auto;
      text-align: center;
    
    p {
      width: 80%;
      margin: auto;
    }
  }
`;

export const ProductTable = styled.div`
    margin: 50px;
        
    img {
      width: 100px;
    }

    .cabecalho {
      font-size: 16px;
    }

    .title {
      font-size: 16px;
    }

    .description {
      font-weight: 500;
    }

    .price {
      font-size: 18px;
    }
`;

export const Button = styled.div`
  text-align: center;
  
  a {
    text-transform: uppercase;
    font-size: 13px;
    background-color: #177791;
    padding: 10px 15px;
    border-radius: 0;
    color: white;
    display: inline-block;
    margin-bottom: 50px;
    text-decoration: none;
    margin-top: 20px;
    letter-spacing: 1px;
    cursor: pointer;
  }
        
`;
