import styled from 'styled-components'
import {light} from '../../../theme'

export const TestimonialBase = styled.div`
  background-color: ${light.background.secondary};

  .row {
    padding: 50px 0 20px;

    .item {
      margin-bottom: 32px;

      .box {
        padding: 30px;
        background-color: #fff;
        position: relative;

        p {
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
          margin-bottom: 2px;
        }

        p {
          font-size: small;
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