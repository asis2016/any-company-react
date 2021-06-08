import styled from 'styled-components'

export const SingleBase = styled.div`
  color: #56585b;
  background-color: #fff;
  font-family: 'Lora', serif;
  font-size: 14px;

  .intro {
    font-size: 16px;
    margin: 0 auto 30px;
  }

  .intro h1 {
    font-size: 32px;
    margin-bottom: 15px;
    padding-top: 20px;
    line-height: 1.5;
    color: inherit;
    margin-top: 20px;
  }

  .intro p {
    color: #929292;
    font-size: 12px;
  }

  .intro p .by {
    font-style: italic;
  }

  .intro p .date {
    text-transform: uppercase;
    padding: 4px 0 4px 10px;
    margin-left: 10px;
    border-left: 1px solid #ddd;
  }

  .intro p a {
    color: #333;
    text-transform: uppercase;
    padding-left: 3px;
  }

  .intro img {
    margin-top: 20px;
  }

  .text p {
    margin-bottom: 20px;
    line-height: 1.45;
  }

  @media (min-width: 768px) {
    .text p {
      font-size: 16px;
    }
  }

  .text h2 {
    margin-top: 28px;
    margin-bottom: 20px;
    line-height: 1.45;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }

  @media (min-width: 768px) {
    .text h2 {
      font-size: 20px;
    }
  }

  .text figure {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .text figure img {
    margin-bottom: 12px;
    max-width: 100%;
  }
`