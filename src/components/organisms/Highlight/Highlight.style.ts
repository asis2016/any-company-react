import styled from "styled-components";
import screenContentPhoneImg from '../../../assets/images/screen-content-phone.jpg'
import {light} from "../../../theme";

export const HighlightBase = styled.div`
  background-color: ${light.background.secondary};
  padding: 50px 0 55px;
  overflow: hidden;

  h2 {
    margin-bottom: 35px;
    line-height: 1.5;
    padding-top: 0;
    margin-top: 0;
  }

  .intro {
    max-width: 500px;
    line-height: 1.5;

    p {
      margin-bottom: 35px;
    }
  }

  @media (max-width: 767px) {
    text-align: center;
    .intro {
      max-width: none;
    }
  }

  .phone-mockup {
    position: relative;
    max-width: 260px;
    margin-top: -30px;
    margin-bottom: -230px;
    transform: rotate(-15deg);

    img.device {
      width: 100%;
      height: auto;
    }

    .screen {
      position: absolute;
      width: 94%;
      height: 91%;
      top: 1%;
      left: 3%;
      border: 1px solid #444;
      border-radius: 20px;
      background-color: #aaa;
      overflow: hidden;
      background: url(${screenContentPhoneImg});
      background-size: cover;
      background-position: center;
      z-index: -1;

      &:before {
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
    }
  }
`;