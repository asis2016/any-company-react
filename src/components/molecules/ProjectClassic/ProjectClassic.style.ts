import {Col} from 'react-bootstrap'
import styled from 'styled-components'

export const ProjectClassicBase = styled(Col)`
  padding-top: 60px;
  min-height: 160px;

  @media (max-width: 767px) {
    padding-top: 40px;
    min-height: 160px;
  }

  h3 {
    a {
      font-weight: bold;
      font-size: 16px;
      margin-top: 20px;
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 991px) {
    h3 {
      margin-top: 22px;
    }
  }

  p {
    font-size: 15px;
    margin-bottom: 0;
  }
`