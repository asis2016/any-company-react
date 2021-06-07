import {Col} from 'react-bootstrap'
import styled from 'styled-components'

export const ProjectClassicBase = styled(Col)`
  padding-top: 60px;
  min-height: 160px;

  @media (max-width: 767px) {
    padding-top: 40px;
    min-height: 160px;
  }

  .name {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 15px;
    color: inherit;
  }

  @media (max-width: 991px) {
    .name {
      margin-top: 22px;
    }
  }

  .description {
    font-size: 15px;
    margin-bottom: 0;
  }
`