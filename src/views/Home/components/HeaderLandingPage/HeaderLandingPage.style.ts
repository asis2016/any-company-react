import {Container} from 'react-bootstrap'
import styled from 'styled-components'

export const HeaderLandingPageBase = styled(Container)`
  margin-top: 20px;
  text-align: center;

  h1 {
    color: #fff;
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 15px;
    font-weight: 300;
    line-height: 1.4;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    margin-top: 60px;
    text-align: left;
  }

  @media (min-width: 992px) {
    h1 {
      margin-top: 190px;
      margin-bottom: 24px;
      line-height: 1.2;
    }

    .phone-holder {
      text-align: right;
    }

    div.phone-mockup {
      position: relative;
      max-width: 300px;
      margin: 20px;
      display: inline-block;
      z-index: 1;
    }

    .phone-mockup {
      img.device {
        width: 100%;
        height: auto;
      }

      .screen {
        position: absolute;
        width: 94%;
        height: 98%;
        top: 1%;
        left: 3%;
        border: 1px solid #444;
        border-radius: 20px;
        background-color: #aaa;
        overflow: hidden;
        background: url(https://raw.githubusercontent.com/asis2016/any-company-react/main/src/assets/images/screen-content-phone.jpg);
        background-size: cover;
        background-position: center;
        z-index: -1;

        &:before {
          content: "";
          background-color: #fff;
          position: absolute;
          width: 70%;
          height: 140%;
          top: -12%;
          right: -60%;
          transform: rotate(-19deg);
          opacity: 0.2;
        }
      }
    }
`