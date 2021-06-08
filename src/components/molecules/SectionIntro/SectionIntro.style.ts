import styled from 'styled-components'

export const SectionIntroBase = styled.div`

  font-size: 16px;
  max-width: 500px;
  margin: 0 auto 40px;

  h2 {
    font-weight: bold;
    margin-bottom: 40px;
    padding-top: 40px;
    color: inherit;
  }
  
  p {
    color: #7d8285;
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    h2 {
      margin-bottom: 25px;
      padding-top: 25px;
      font-size: 24px;
    }
  }
  

`;