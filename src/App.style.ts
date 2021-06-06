import styled from "styled-components";

export const AppBase = styled.div`

  /* header-blue */

  .header-blue {
    background: linear-gradient(135deg, #172a74, #21a9af);
    background-color: #184e8e;
    padding-bottom: 80px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  @media (min-width: 768px) {
    .header-blue {
      padding-bottom: 120px;
    }
  }

  .header-blue .navbar {
    background: transparent;
    padding-top: .75rem;
    padding-bottom: .75rem;
    color: #fff;
    border-radius: 0;
    box-shadow: none;
    border: none;
  }

  @media (min-width: 768px) {
    .header-blue .navbar {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  .header-blue .navbar .navbar-brand {
    font-weight: bold;
    color: inherit;
  }

  .header-blue .navbar .navbar-brand:hover {
    color: #f0f0f0;
  }

  .header-blue .navbar .navbar-collapse {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin-top: .5rem;
  }

  @media (min-width: 768px) {
    .header-blue .navbar .navbar-collapse {
      border-color: transparent;
      margin: 0;
    }
  }

  .header-blue .navbar .navbar-collapse span .login {
    color: #d9d9d9;
    margin-right: .5rem;
    text-decoration: none;
  }

  .header-blue .navbar .navbar-collapse span .login:hover {
    color: #fff;
  }

  .header-blue .navbar .navbar-toggler {
    border-color: rgba(255, 255, 255, 0.3);
  }

  .header-blue .navbar .navbar-toggler:hover, .header-blue .navbar-toggler:focus {
    background: none;
  }

  @media (min-width: 768px) {
    .header-blue .navbar-nav .nav-link {
      padding-left: .7rem;
      padding-right: .7rem;
    }
  }

  @media (min-width: 992px) {
    .header-blue .navbar-nav .nav-link {
      padding-left: 1.2rem;
      padding-right: 1.2rem;
    }
  }

  .header-blue .navbar .navbar-nav > li > .dropdown-menu {
    margin-top: -5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .1);
    background-color: #fff;
    border-radius: 2px;
  }

  .header-blue .navbar .dropdown-menu .dropdown-item:focus, .header-blue .navbar .dropdown-menu .dropdown-item {
    line-height: 2;
    color: #37434d;
  }

  .header-blue .navbar .dropdown-menu .dropdown-item:focus, .header-blue .navbar .dropdown-menu .dropdown-item:hover {
    background: #ebeff1;
  }

  .header-blue .action-button, .header-blue .action-button:not(.disabled):active {
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

  .header-blue .action-button:hover {
    color: #fff;
  }

  .header-blue .navbar form label {
    color: #d9d9d9;
  }

  .header-blue .navbar form .search-field {
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

  .header-blue .navbar form .search-field:focus {
    border-bottom: 1px solid #ccc;
  }

  .header-blue .hero {
    margin-top: 20px;
    text-align: center;
  }

  @media (min-width: 768px) {
    .header-blue .hero {
      margin-top: 60px;
      text-align: left;
    }
  }

  .header-blue .hero h1 {
    color: #fff;
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 15px;
    font-weight: 300;
    line-height: 1.4;
  }

  @media (min-width: 992px) {
    .header-blue .hero h1 {
      margin-top: 190px;
      margin-bottom: 24px;
      line-height: 1.2;
    }
  }

  .header-blue .hero p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: 300;
  }

  .header-blue .phone-holder {
    text-align: right;
  }

  .header-blue div.phone-mockup {
    position: relative;
    max-width: 300px;
    margin: 20px;
    display: inline-block;
    z-index: 1;
  }

  .header-blue .phone-mockup img.device {
    width: 100%;
    height: auto;
  }

  .header-blue .phone-mockup .screen {
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
  }

  .header-blue .phone-mockup .screen:before {
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

  /* header-phone */

  .header-blue {
    background: linear-gradient(135deg, #172a74, #21a9af);
    background-color: #184e8e;
    padding-bottom: 80px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  @media (min-width: 768px) {
    .header-blue {
      padding-bottom: 120px;
    }
  }

  .header-blue .navbar {
    background: transparent;
    padding-top: .75rem;
    padding-bottom: .75rem;
    color: #fff;
    border-radius: 0;
    box-shadow: none;
    border: none;
  }

  @media (min-width: 768px) {
    .header-blue .navbar {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  .header-blue .navbar .navbar-brand {
    font-weight: bold;
    color: inherit;
  }

  .header-blue .navbar .navbar-brand:hover {
    color: #f0f0f0;
  }

  .header-blue .navbar .navbar-collapse {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin-top: .5rem;
  }

  @media (min-width: 768px) {
    .header-blue .navbar .navbar-collapse {
      border-color: transparent;
      margin: 0;
    }
  }

  .header-blue .navbar .navbar-collapse span .login {
    color: #d9d9d9;
    margin-right: .5rem;
    text-decoration: none;
  }

  .header-blue .navbar .navbar-collapse span .login:hover {
    color: #fff;
  }

  .header-blue .navbar .navbar-toggler {
    border-color: rgba(255, 255, 255, 0.3);
  }

  .header-blue .navbar .navbar-toggler:hover, .header-blue .navbar-toggler:focus {
    background: none;
  }

  @media (min-width: 768px) {
    .header-blue .navbar-nav .nav-link {
      padding-left: .7rem;
      padding-right: .7rem;
    }
  }

  @media (min-width: 992px) {
    .header-blue .navbar-nav .nav-link {
      padding-left: 1.2rem;
      padding-right: 1.2rem;
    }
  }

  .header-blue .navbar .navbar-nav > li > .dropdown-menu {
    margin-top: -5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .1);
    background-color: #fff;
    border-radius: 2px;
  }

  .header-blue .navbar .dropdown-menu .dropdown-item:focus, .header-blue .navbar .dropdown-menu .dropdown-item {
    line-height: 2;
    color: #37434d;
  }

  .header-blue .navbar .dropdown-menu .dropdown-item:focus, .header-blue .navbar .dropdown-menu .dropdown-item:hover {
    background: #ebeff1;
  }

  .header-blue .action-button, .header-blue .action-button:not(.disabled):active {
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

  .header-blue .action-button:hover {
    color: #fff;
  }

  .header-blue .navbar form label {
    color: #d9d9d9;
  }

  .header-blue .navbar form .search-field {
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

  .header-blue .navbar form .search-field:focus {
    border-bottom: 1px solid #ccc;
  }

  .header-blue .hero {
    margin-top: 20px;
    text-align: center;
  }

  @media (min-width: 768px) {
    .header-blue .hero {
      margin-top: 60px;
      text-align: left;
    }
  }

  .header-blue .hero h1 {
    color: #fff;
    font-size: 40px;
    margin-top: 0;
    margin-bottom: 15px;
    font-weight: 300;
    line-height: 1.4;
  }

  @media (min-width: 992px) {
    .header-blue .hero h1 {
      margin-top: 190px;
      margin-bottom: 24px;
      line-height: 1.2;
    }
  }

  .header-blue .hero p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: 300;
  }

  .header-blue .phone-holder {
    text-align: right;
  }

  .header-blue div.phone-mockup {
    position: relative;
    max-width: 300px;
    margin: 20px;
    display: inline-block;
    z-index: 1;
  }

  .header-blue .phone-mockup img.device {
    width: 100%;
    height: auto;
  }

  .header-blue .phone-mockup .screen {
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
  }

  .header-blue .phone-mockup .screen:before {
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


  /* article-list */

  .article-list {
    color: #313437;
    background-color: #fff;
  }

  .article-list p {
    color: #7d8285;
  }

  .article-list h2 {
    font-weight: bold;
    margin-bottom: 40px;
    padding-top: 40px;
    color: inherit;
  }

  @media (max-width: 767px) {
    .article-list h2 {
      margin-bottom: 25px;
      padding-top: 25px;
      font-size: 24px;
    }
  }

  .article-list .intro {
    font-size: 16px;
    max-width: 500px;
    margin: 0 auto;
  }

  .article-list .intro p {
    margin-bottom: 0;
  }

  .article-list .articles {
    padding-bottom: 40px;
  }

  .article-list .item {
    padding-top: 50px;
    min-height: 425px;
    text-align: center;
  }

  .article-list .item .name {
    font-weight: bold;
    font-size: 16px;
    margin-top: 20px;
    color: inherit;
  }

  .article-list .item .description {
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 0;
  }

  .article-list .item .action {
    font-size: 24px;
    width: 24px;
    margin: 22px auto 0;
    line-height: 1;
    display: block;
    color: #4f86c3;
    opacity: 0.85;
    transition: opacity 0.2s;
    text-decoration: none;
  }

  .article-list .item .action:hover {
    opacity: 1;
  }



`;