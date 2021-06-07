import styled from 'styled-components'

export const BrandBase = styled.div`
  /* brands */ {
  color: #313437;
  background-color: #fff;
}

  a {
    display: block;
    text-align: center;
    padding: 40px 0;
  }

  @media (max-width: 767px) {
    a {
      padding: 30px 0;
    }
  }

  a img {
    display: inline-block;
    margin: 10px 20px;
    vertical-align: middle;
  }
`