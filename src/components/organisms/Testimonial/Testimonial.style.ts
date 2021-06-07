import styled from 'styled-components'

export const TestimonialBase = styled.div`
  /* testimonials-clean */ {
  color: #313437;
  background-color: #eef4f7;
}

  p {
    color: #7d8285;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 40px;
    padding-top: 40px;
    color: inherit;
  }

  @media (max-width: 767px) {
    h2 {
      margin-bottom: 25px;
      padding-top: 25px;
      font-size: 24px;
    }
  }

  .intro {
    font-size: 16px;
    max-width: 500px;
    margin: 0 auto;
  }

  .intro p {
    margin-bottom: 0;
  }

  .people {
    padding: 50px 0 20px;
  }

  .item {
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    .item {
      height: 220px;
    }
  }

  .item .box {
    padding: 30px;
    background-color: #fff;
    position: relative;
  }

  .item .box:after {
    content: '';
    position: absolute;
    left: 30px;
    bottom: -24px;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-width: 12px 15px;
    border-top-color: #fff;
  }

  .item .author {
    margin-top: 28px;
    padding-left: 25px;
  }

  .item .name {
    font-weight: bold;
    margin-bottom: 2px;
    color: inherit;
  }

  .item .title {
    font-size: 13px;
    color: #9da9ae;
  }

  .item .description {
    font-size: 15px;
    margin-bottom: 0;
  }

  .item img {
    max-width: 40px;
    float: left;
    margin-right: 12px;
    margin-top: -5px;
  }
`