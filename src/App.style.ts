import styled from "styled-components";
import {light} from './theme/'

export const AppBase = styled.div`
  h1, h2, h3, h4, h5, h6 {
    color: ${light.heading.primary};
    font-weight: bold;
  }

  h2 {
    font-weight: bold;
    color: ${light.heading.primary};
  }

  h3 {
    font-weight: bold;
    font-size: ${light.h3.size};
  }

  p {
    color: ${light.text.primary};
    font-size: ${light.text.size};
  }

  i {
    color: ${light.i.primary};
  }
`;