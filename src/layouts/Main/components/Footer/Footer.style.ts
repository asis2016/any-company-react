import styled from 'styled-components' 

export const FooterBase = styled.div`
  /* footer-dark */
   {
    padding: 50px 0;
    color: #f0f9ff;
    background-color: #282d32;
  }

   h3 {
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 16px;
  }

   ul {
    padding: 0;
    list-style: none;
    line-height: 1.6;
    font-size: 14px;
    margin-bottom: 0;
  }

   ul a {
    color: inherit;
    text-decoration: none;
    opacity: 0.6;
  }

   ul a:hover {
    opacity: 0.8;
  }

  @media (max-width:767px) {
     .item:not(.social) {
      text-align: center;
      padding-bottom: 20px;
    }
  }

   .item.text {
    margin-bottom: 36px;
  }

  @media (max-width:767px) {
     .item.text {
      margin-bottom: 0;
    }
  }

   .item.text p {
    opacity: 0.6;
    margin-bottom: 0;
  }

   .item.social {
    text-align: center;
  }

  @media (max-width:991px) {
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
    box-shadow: 0 0 0 1px rgba(255,255,255,0.4);
    margin: 0 8px;
    color: #fff;
    opacity: 0.75;
  }

   .item.social > a:hover {
    opacity: 0.9;
  }

   .copyright {
    text-align: center;
    padding-top: 24px;
    opacity: 0.3;
    font-size: 13px;
    margin-bottom: 0;
  }
`