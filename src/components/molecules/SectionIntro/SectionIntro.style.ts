import styled from 'styled-components'

export const SectionIntroBase = styled.div`
  max-width: 500px;
  margin: 0 auto 40px;

  h2 {
    margin-bottom: 40px;
    padding-top: 40px;
    text-align: center;
  }
  
  p {
    text-align: center;
  }

  @media (max-width: 767px) {
    h2 {
      margin-bottom: 25px;
      padding-top: 25px;
      font-size: 24px;
    }
  }
`;