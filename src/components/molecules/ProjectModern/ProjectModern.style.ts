import {Col} from 'react-bootstrap'
import styled from 'styled-components'

export const ProjectModernBase = styled(Col)`
  padding-top: 50px;
  min-height: 425px;
  text-align: center;

  h3 {
    margin: 15px 0;
    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .action {
    font-size: 24px;
    width: 24px;
    margin: 22px auto 0;
    line-height: 1;
    display: block;
    color: #4f86c3;
    opacity: 0.85;
    transition: opacity 0.2s;
    text-decoration: none;

    &:hover {
      opacity: 1;
    }
  }
`