import styled from "styled-components";

export const AppBase = styled.div`
  

  /* highlight-phone */

  .highlight-phone {
    color: #313437;
    background-color: #eef4f7;
    padding: 50px 0 55px;
    overflow: hidden;
  }

  @media (max-width: 767px) {
    .highlight-phone {
      text-align: center;
    }
  }

  .highlight-phone p {
    color: #7d8285;
  }

  .highlight-phone h2 {
    font-weight: bold;
    margin-bottom: 35px;
    line-height: 1.5;
    padding-top: 0;
    margin-top: 0;
    color: inherit;
  }

  .highlight-phone .intro {
    font-size: 18px;
    max-width: 500px;
    line-height: 1.5;
  }

  @media (max-width: 767px) {
    .highlight-phone .intro {
      max-width: none;
    }
  }

  .highlight-phone .intro p {
    margin-bottom: 35px;
  }

  .highlight-phone .intro .btn {
    padding: 16px 32px;
    border: none;
    background: none;
    box-shadow: none;
    text-shadow: none;
    opacity: 0.9;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 13px;
    letter-spacing: 0.4px;
    line-height: 1;
  }

  .highlight-phone .intro .btn:hover {
    opacity: 1;
  }

  .highlight-phone .intro .btn:active {
    transform: translateY(1px);
  }

  .highlight-phone .intro .btn-primary {
    background-color: #055ada;
    color: #fff;
  }

  .highlight-phone .phone-mockup {
    position: relative;
    max-width: 260px;
    margin-top: -30px;
    margin-bottom: -230px;
    transform: rotate(-15deg);
  }

  .highlight-phone .phone-mockup img.device {
    width: 100%;
    height: auto;
  }

  .highlight-phone .phone-mockup .screen {
    position: absolute;
    width: 94%;
    height: 91%;
    top: 1%;
    left: 3%;
    border: 1px solid #444;
    border-radius: 20px;
    background-color: #aaa;
    overflow: hidden;
    background: url(https://amaharjan.com/projects/any-company/assets/images/screen-content-phone.jpg);
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .highlight-phone .phone-mockup .screen:before {
    content: '';
    background-color: #fff;
    position: absolute;
    width: 70%;
    height: 140%;
    top: -6%;
    right: -60%;
    transform: rotate(-19deg);
    opacity: 0.2;
  }

  


  
`;