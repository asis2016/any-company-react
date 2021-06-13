import {Col} from 'react-bootstrap';
import styled from 'styled-components'

export const FeatureBoxBase = styled(Col)`
  text-align: center;

  .box {
    text-align: center;
    padding: 30px;
    background-color: #fff;
    margin-bottom: 30px;

    i {
      font-size: 60px;
      color: #1485ee;
      margin-top: 20px;
      margin-bottom: 35px;
    }

    h3 {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 8px;
      margin-top: 0;
      color: inherit;
    }

    p {
      font-size: 15px;
      margin-top: 15px;
      margin-bottom: 20px;
    }
  }
`;