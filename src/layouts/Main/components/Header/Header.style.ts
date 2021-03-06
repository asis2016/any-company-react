//import bg from '../../../../assets/images/bg-main-1.jpg'
import styled from 'styled-components'

interface HeaderBaseProps {
    bg: string
}

export const HeaderBase = styled.div<HeaderBaseProps>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    padding-bottom: 120px;
  }
`;