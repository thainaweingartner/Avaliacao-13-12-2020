import styled from 'styled-components';

export const Register = styled.div`
  margin: 50px;
  
  form {
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  input {
    height: 50px;
    margin-bottom: 20px;
    padding: 0px 10px;
    background: white;
    outline: none;
    border: none;
  }

  label {
    color: #177791;
  }

  span {
    font-weight: 500;
  }

  button {
    height: 50px;
    text-transform: uppercase;
    background: none;
    outline: none;
    border: 0;
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
