import styled from 'styled-components'
import {light} from '../../../theme'

export const ContactBase = styled.div`
  background: ${light.background.secondary};
  padding: 80px 0;

  @media (max-width: 767px) {
    padding: 20px 0;
  }

  form {
    max-width: 480px;
    width: 90%;
    margin: 0 auto;
    background-color: #fff;
    padding: 40px;
    border-radius: 4px;
    color: #505e6c;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

    .form-control {
      background: #fff;
      border-radius: 2px;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
      outline: none;
      color: inherit;
      padding-left: 12px;
      height: 42px;

      &:focus {
        border: 1px solid #b2b2b2;
      }

      .btn {
        padding: 16px 32px;
        border: none;
        background: none;
        box-shadow: none;
        text-shadow: none;
        opacity: 0.9;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px;
        letter-spacing: 0.4px;
        line-height: 1;
        outline: none !important;
      }
    }
  }

  @media (max-width: 767px) {
    form {
      padding: 30px;
    }
  }

  h2 {
    margin-bottom: 35px;
  }

  form textarea.form-control {
    min-height: 100px;
    max-height: 260px;
    padding-top: 10px;
    resize: vertical;
  }

  form .btn:hover {
    opacity: 1;
  }

  form .btn:active {
    transform: translateY(1px);
  }

  form .btn-primary {
    background-color: #055ada !important;
    margin-top: 15px;
    color: #fff;
  }
`