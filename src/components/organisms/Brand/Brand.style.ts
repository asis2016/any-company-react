import styled from 'styled-components'

export const BrandBase = styled.div`
  color: #313437;
  background-color: #fff;
  display: block;
  text-align: center;
  padding: 40px 0;

  img {
    display: inline-block;
    margin: 10px 20px;
    vertical-align: middle;
  }

  @media (max-width: 767px) {
    padding: 30px 0;
  }
`