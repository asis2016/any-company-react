import styled from 'styled-components'
import {HeaderBase} from '../../layouts/Main/components/Header/Header.style'

export const SingleBase = styled.div`

  ${HeaderBase} {
    padding-bottom: 0;

    @media (min-width: 768px) {
      padding-bottom: 0;
    }
  }
  
  .intro {
    font-size: 16px;
    margin: 0 auto 30px;
    text-align: center;

    h1 {
      font-size: 32px;
      margin-bottom: 15px;
      padding-top: 20px;
      line-height: 1.5;
      color: inherit;
      margin-top: 20px;;
    }

    p {
      color: #929292;
      font-size: 12px;

      a {
        color: #333;
        text-transform: uppercase;
        padding-left: 3px;
      }

      .by {
        font-style: italic;
      }

      .date {
        text-transform: uppercase;
        padding: 4px 0 4px 10px;
        margin-left: 10px;
        border-left: 1px solid #ddd;
      }
    }

    img {
      margin-top: 20px;
    }
  }

  .content {
    figure {
      text-align: center;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        margin-bottom: 12px;
        max-width: 100%;
      }
    }

    h2 {
      margin-top: 28px;
      margin-bottom: 20px;
      line-height: 1.45;
      font-size: 16px;
      font-weight: bold;
      color: #333;
    }

    p {
      margin-bottom: 20px;
      line-height: 1.45;
    }
  }

  @media (min-width: 768px) {
    .content {
      h2 {
        font-size: 20px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 1199px){
    .single-container{
      padding: 100px 0 170px 0;
    }
  }
`