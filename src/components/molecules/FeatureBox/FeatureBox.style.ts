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
      margin-top: 20px;
      margin-bottom: 35px;
    }

    h3 {
      margin-bottom: 8px;
      margin-top: 0;
    }

    p {
      margin-top: 15px;
      margin-bottom: 20px;
    }
  }
`;