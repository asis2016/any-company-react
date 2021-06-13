import styled from 'styled-components'

export const TestimonialBase = styled.div`
  color: #313437;
  background-color: #eef4f7;

  p {
    color: #7d8285;
  }

  .row {
    padding: 50px 0 20px;

    .item {
      margin-bottom: 32px;

      .box {
        padding: 30px;
        background-color: #fff;
        position: relative;

        .description {
          font-size: 15px;
          margin-bottom: 0;
        }

        &:after {
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
      }

      .author {
        margin-top: 28px;
        padding-left: 25px;

        img {
          max-width: 40px;
          float: left;
          margin-right: 12px;
          margin-top: -5px;
        }

        h5 {
          font-weight: bold;
          margin-bottom: 2px;
          color: inherit;
        }

        p {
          font-size: 13px;
          color: #9da9ae;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .item {
      height: 220px;
    }
  }
`