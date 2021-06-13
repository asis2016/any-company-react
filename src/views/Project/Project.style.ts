import styled from 'styled-components'
import { HeaderBase } from '../../layouts/Main/components/Header/Header.style'

export const ProjectBase = styled.div`
  ${HeaderBase} {
    padding-bottom: 0;

    @media (min-width: 768px) {
      padding-bottom: 0;
    }
  }

  @media (min-width: 1199px){
    .projects-container{
      padding: 120px 0 170px 0;
    }
  }
`