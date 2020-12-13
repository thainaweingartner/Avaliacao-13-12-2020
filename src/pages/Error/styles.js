import styled from 'styled-components';

export const Erro = styled.div`
  color: #177791;

  .error-container {
    text-align: center;
    font-size: 180px;
    font-weight: 800;
  }
  .error-container > span {
    display: inline-block;
    line-height: 0.7;
    position: relative;
    color: #b8dbde;
  }
  .error-container > span {
    display: inline-block;
    position: relative;
    vertical-align: middle;
  }
  .error-container > span:nth-of-type(1) {
    color: #54abbf;
    animation: colordancing 4s infinite;
  }
  .error-container > span:nth-of-type(3) {
    color: #177791;
    animation: colordancing2 4s infinite;
  }
  .error-container > span:nth-of-type(2) {
    width: 120px;
    height: 120px;
    border-radius: 999px;
  }
  .error-container > span:nth-of-type(2):before,
  .error-container > span:nth-of-type(2):after {
    border-radius: 0%;
    content:"";
    position: absolute;
    top: 0; left: 0;
    width: inherit; height: inherit;
    border-radius: 999px;
    box-shadow: inset 30px 0 0 #b8dbde66,
          inset 0 30px 0 #84c4d266,
          inset -30px 0 0 #54abbf66,	
          inset 0 -30px 0 #17779166;
    animation: shadowsdancing 4s infinite;
  }
  .error-container > span:nth-of-type(2):before {
    -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
        transform: rotate(45deg);
  }

  .screen-reader-text {
      position: absolute;
      top: -9999em;
      left: -9999em;
  }
  @keyframes shadowsdancing {
    0% {
      box-shadow: inset 30px 0 0 #b8dbde66,
          inset 0 30px 0 #84c4d266,
          inset -30px 0 0 #54abbf66,	
          inset 0 -30px 0 #17779166;
    }
    25% {
      box-shadow: inset 30px 0 0 #17779166,
          inset 0 30px 0 #b8dbde66,
          inset -30px 0 0 #84c4d266,	
          inset 0 -30px 0 #54abbf66;
    }
    50% {
      box-shadow: inset 30px 0 0 #54abbf66,
          inset 0 30px 0 #17779166,
          inset -30px 0 0 #b8dbde66,	
          inset 0 -30px 0 #84c4d266;
    }
    75% {
    box-shadow: inset 30px 0 0 #84c4d266,
          inset 0 30px 0 #54abbf66,
          inset -30px 0 0 #17779166,	
          inset 0 -30px 0 #b8dbde66;
    }
    100% {
      box-shadow: inset 30px 0 0 #b8dbde66,
          inset 0 30px 0 #84c4d266,
          inset -30px 0 0 #54abbf66,	
          inset 0 -30px 0 #17779166;
    }
  }
  @keyframes colordancing {
    0% {
      color: #b8dbde;
    }
    25% {
      color: #84c4d2;
    }
    50% {
      color: #54abbf;
    }
    75% {
      color: #2792ac;
    }
    100% {
      color: #177791;
    }
  }
  @keyframes colordancing2 {
    0% {
      color: #2792ac;
    }
    25% {
      color: #177791;
    }
    50% {
      color: #b8dbde;
    }
    75% {
      color: #84c4d2;
    }
    100% {
      color: #54abbf;
    }
  }


  h1 {
    text-align: center;
    margin: 50px 0 25px;
  }
  .zoom-area { 
    max-width: 420px;
    margin: 30px auto 0;
    font-size: 19px;
    text-align: center;
  }
  .link-container {
    text-align: center;
  }
  a.more-link {
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
