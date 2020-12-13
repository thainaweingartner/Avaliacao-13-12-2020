import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 35px;
  justify-content: space-between;
  height: 120px;
  background: #ffffff;
  flex-wrap: wrap;

  a {
    margin: 0 15px;
    padding: 0 25px;
  }

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
  }
  .menu {
    width: 55vw;
  }
  
  button {
    text-align: left;
    background: none;
    outline: none;
    border: 0;
    padding: 10px 25px;
    color: #177791;
    cursor: pointer;

    &:hover{
      background: #dedede;
    }
  }

  @media (max-width: 890px) {
    display: flex;
    flex-direction: column;
    padding: 15px;
    height: fit-content;

    img {
      margin-bottom: 10px;
    }

    .menu {
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
