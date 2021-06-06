import styled from "styled-components";

export const HeaderBlueBase = styled.div`
  background: linear-gradient(135deg, #172a74, #21a9af);
  background-color: #184e8e;
  padding-bottom: 80px;
  font-family: 'Source Sans Pro', sans-serif;

  @media (min-width: 768px) { {
    padding-bottom: 120px;
  }
  }

  .navbar {
    background: transparent;
    padding-top: .75rem;
    padding-bottom: .75rem;
    color: #fff;
    border-radius: 0;
    box-shadow: none;
    border: none;

    .navbar-brand {
      font-weight: bold;
      color: inherit;

      &:hover {
        color: #f0f0f0;
      }
    }

    .navbar-collapse {
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      margin-top: .5rem;

      span .login {
        color: #d9d9d9;
        margin-right: .5rem;
        text-decoration: none;

        &:hover {
          color: #fff;
        }
      }
    }

    .navbar-toggler {
      border-color: rgba(255, 255, 255, 0.3);
    }

    navbar-toggler:hover, .navbar-toggler:focus {
      background: none;
    }

    form {
      label {
        color: #d9d9d9;
      }

      .search-field {
        display: inline-block;
        width: 80%;
        background: none;
        border: none;
        border-bottom: 1px solid transparent;
        border-radius: 0;
        color: #ccc;
        box-shadow: none;
        color: inherit;
        transition: border-bottom-color 0.3s;
      }

      .search-field:focus {
        border-bottom: 1px solid #ccc;
      }

    }

  }

  @media (min-width: 768px) {
    .navbar {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  @media (min-width: 768px) {
    .navbar .navbar-collapse {
      border-color: transparent;
      margin: 0;
    }
  }

  @media (min-width: 768px) {
    .navbar-nav .nav-link {
      padding-left: .7rem;
      padding-right: .7rem;
    }
  }

  @media (min-width: 992px) {
    .navbar-nav .nav-link {
      padding-left: 1.2rem;
      padding-right: 1.2rem;
    }
  }

  .navbar .navbar-nav > li > .dropdown-menu {
    margin-top: -5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .1);
    background-color: #fff;
    border-radius: 2px;
  }

  .navbar .dropdown-menu .dropdown-item:focus, .navbar .dropdown-menu .dropdown-item {
    line-height: 2;
    color: #37434d;
  }

  .navbar .dropdown-menu .dropdown-item:focus, .navbar .dropdown-menu .dropdown-item:hover {
    background: #ebeff1;
  }

  .action-button, .action-button:not(.disabled):active {
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 40px;
    color: #ebeff1;
    box-shadow: none;
    text-shadow: none;
    padding: .3rem .8rem;
    background: transparent;
    transition: background-color 0.25s;
    outline: none;
  }

  .action-button:hover {
    color: #fff;
  }


  .hero {
    margin-top: 20px;
    text-align: center;

    h1 {
      color: #fff;
      font-size: 40px;
      margin-top: 0;
      margin-bottom: 15px;
      font-weight: 300;
      line-height: 1.4;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 20px;
      margin-bottom: 30px;
      font-weight: 300;
    }
  }

  @media (min-width: 768px) {
    .hero {
      margin-top: 60px;
      text-align: left;
    }
  }

  @media (min-width: 992px) {
    .hero h1 {
      margin-top: 190px;
      margin-bottom: 24px;
      line-height: 1.2;
    }
  }


  .phone-holder {
    text-align: right;
  }

  div.phone-mockup {
    position: relative;
    max-width: 300px;
    margin: 20px;
    display: inline-block;
    z-index: 1;
  }

  .phone-mockup {
    img.device {
      width: 100%;
      height: auto;
    }

    .screen {
      position: absolute;
      width: 94%;
      height: 98%;
      top: 1%;
      left: 3%;
      border: 1px solid #444;
      border-radius: 20px;
      background-color: #aaa;
      overflow: hidden;
      background: url(https://amaharjan.com/projects/any-company/assets/images/screen-content-phone.jpg);
      background-size: cover;
      background-position: center;
      z-index: -1;

      &:before {
        content: '';
        background-color: #fff;
        position: absolute;
        width: 70%;
        height: 140%;
        top: -12%;
        right: -60%;
        transform: rotate(-19deg);
        opacity: 0.2;
      }
    }
  }
`;