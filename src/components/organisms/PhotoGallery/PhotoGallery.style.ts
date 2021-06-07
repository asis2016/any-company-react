import styled from 'styled-components'

export const PhotoGalleryBase = styled.div`
  color: #313437;
  background-color: #fff;

  p {
    color: #7d8285;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 40px;
    padding-top: 40px;
    color: inherit;
  }

  @media (max-width: 767px) {
    h2 {
      margin-bottom: 25px;
      padding-top: 25px;
      font-size: 24px;
    }
  }

  .intro {
    font-size: 16px;
    max-width: 500px;
    margin: 0 auto 40px;

    p {
      margin-bottom: 0;
    }
  }

  .photos {
    padding-bottom: 20px;
  }

  .item {
    padding-bottom: 30px;
  }
`