import styled from 'styled-components'

export const FooterBase = styled.div`
  padding: 50px 0;
  color: #fff;
  background-color: #282d32;

  h3 {
    color: #fff;
    margin-top: 0;
    margin-bottom: 12px;
  }

  h6 {
    color: #fff;
  }

  ul {
    padding: 0;
    list-style: none;
    line-height: 1.6;
    font-size: 14px;
    margin-bottom: 0;
  }

  p {
    color: #fff;
  }

  ul {
    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 767px) {
    .item:not(.social) {
      text-align: center;
      padding-bottom: 20px;
    }
  }

  .item.text {
    margin-bottom: 36px;
  }

  .item.social {
    text-align: center;
  }

  @media (max-width: 991px) {
    .item.social {
      text-align: center;
      margin-top: 20px;
    }
  }

  .item.social > a {
    font-size: 20px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
    margin: 0 8px;
    color: #fff;
    opacity: 0.75;
  }

  .item.social > a:hover {
    opacity: 0.9;
  }

  .copyright {
    color: #fff;
    text-align: center;
    padding-top: 35px;
    font-size: small;
    margin-bottom: 0;
  }
`