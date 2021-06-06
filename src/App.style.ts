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

  /* features-boxed */

  .features-boxed {
    color: #313437;
    background-color: #eef4f7;
  }

  .features-boxed p {
    color: #7d8285;
  }

  .features-boxed h2 {
    font-weight: bold;
    margin-bottom: 40px;
    padding-top: 40px;
    color: inherit;
  }

  @media (max-width: 767px) {
    .features-boxed h2 {
      margin-bottom: 25px;
      padding-top: 25px;
      font-size: 24px;
    }
  }

  .features-boxed .intro {
    font-size: 16px;
    max-width: 500px;
    margin: 0 auto;
  }

  .features-boxed .intro p {
    margin-bottom: 0;
  }

  .features-boxed .features {
    padding: 50px 0;
  }

  .features-boxed .item {
    text-align: center;
  }

  .features-boxed .item .box {
    text-align: center;
    padding: 30px;
    background-color: #fff;
    margin-bottom: 30px;
  }

  .features-boxed .item .icon {
    font-size: 60px;
    color: #1485ee;
    margin-top: 20px;
    margin-bottom: 35px;
  }

  .features-boxed .item .name {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 8px;
    margin-top: 0;
    color: inherit;
  }

  .features-boxed .item .description {
    font-size: 15px;
    margin-top: 15px;
    margin-bottom: 20px;
  }

  /* project - horizontal */

  .projects-horizontal {
    color: #313437;
    background-color: #fff;
  }

  .projects-horizontal p {
    color: #7d8285;
  }

  .projects-horizontal h2 {
    font-weight: bold;
    margin-bottom: 40px;
    padding-top: 40px;
    color: inherit;
  }

  @media (max-width: 767px) {
    .projects-horizontal h2 {
      margin-bottom: 25px;
      padding-top: 25px;
      font-size: 24px;
    }
  }

  .projects-horizontal .intro {
    font-size: 16px;
    max-width: 500px;
    margin: 0 auto 10px;
  }

  .projects-horizontal .projects {
    padding-bottom: 40px;
  }

  .projects-horizontal .item {
    padding-top: 60px;
    min-height: 160px;
  }

  @media (max-width: 767px) {
    .projects-horizontal .item {
      padding-top: 40px;
      min-height: 160px;
    }
  }

  .projects-horizontal .item .name {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 15px;
    color: inherit;
  }

  @media (max-width: 991px) {
    .projects-horizontal .item .name {
      margin-top: 22px;
    }
  }

  .projects-horizontal .item .description {
    font-size: 15px;
    margin-bottom: 0;
  }

  /* highlight-phone */

  .highlight-phone {
    color: #313437;
    background-color: #eef4f7;
    padding: 50px 0 55px;
    overflow: hidden;
  }

  @media (max-width: 767px) {
    .highlight-phone {
      text-align: center;
    }
  }

  .highlight-phone p {
    color: #7d8285;
  }

  .highlight-phone h2 {
    font-weight: bold;
    margin-bottom: 35px;
    line-height: 1.5;
    padding-top: 0;
    margin-top: 0;
    color: inherit;
  }

  .highlight-phone .intro {
    font-size: 18px;
    max-width: 500px;
    line-height: 1.5;
  }

  @media (max-width: 767px) {
    .highlight-phone .intro {
      max-width: none;
    }
  }

  .highlight-phone .intro p {
    margin-bottom: 35px;
  }

  .highlight-phone .intro .btn {
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
  }

  .highlight-phone .intro .btn:hover {
    opacity: 1;
  }

  .highlight-phone .intro .btn:active {
    transform: translateY(1px);
  }

  .highlight-phone .intro .btn-primary {
    background-color: #055ada;
    color: #fff;
  }

  .highlight-phone .phone-mockup {
    position: relative;
    max-width: 260px;
    margin-top: -30px;
    margin-bottom: -230px;
    transform: rotate(-15deg);
  }

  .highlight-phone .phone-mockup img.device {
    width: 100%;
    height: auto;
  }

  .highlight-phone .phone-mockup .screen {
    position: absolute;
    width: 94%;
    height: 91%;
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

  .highlight-phone .phone-mockup .screen:before {
    content: '';
    background-color: #fff;
    position: absolute;
    width: 70%;
    height: 140%;
    top: -6%;
    right: -60%;
    transform: rotate(-19deg);
    opacity: 0.2;
  }

  /* photo-gallery */

  .photo-gallery {
    color: #313437;
    background-color: #fff;
  }

  .photo-gallery p {
    color: #7d8285;
  }

  .photo-gallery h2 {
    font-weight: bold;
    margin-bottom: 40px;
    padding-top: 40px;
    color: inherit;
  }

  @media (max-width: 767px) {
    .photo-gallery h2 {
      margin-bottom: 25px;
      padding-top: 25px;
      font-size: 24px;
    }
  }

  .photo-gallery .intro {
    font-size: 16px;
    max-width: 500px;
    margin: 0 auto 40px;
  }

  .photo-gallery .intro p {
    margin-bottom: 0;
  }

  .photo-gallery .photos {
    padding-bottom: 20px;
  }

  .photo-gallery .item {
    padding-bottom: 30px;
  }

  /* testimonials-clean */

  .testimonials-clean {
    color: #313437;
    background-color: #eef4f7;
  }

  .testimonials-clean p {
    color: #7d8285;
  }

  .testimonials-clean h2 {
    font-weight: bold;
    margin-bottom: 40px;
    padding-top: 40px;
    color: inherit;
  }

  @media (max-width: 767px) {
    .testimonials-clean h2 {
      margin-bottom: 25px;
      padding-top: 25px;
      font-size: 24px;
    }
  }

  .testimonials-clean .intro {
    font-size: 16px;
    max-width: 500px;
    margin: 0 auto;
  }

  .testimonials-clean .intro p {
    margin-bottom: 0;
  }

  .testimonials-clean .people {
    padding: 50px 0 20px;
  }

  .testimonials-clean .item {
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    .testimonials-clean .item {
      height: 220px;
    }
  }

  .testimonials-clean .item .box {
    padding: 30px;
    background-color: #fff;
    position: relative;
  }

  .testimonials-clean .item .box:after {
    content: '';
    position: absolute;
    left: 30px;
    bottom: -24px;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-width: 12px 15px;
    border-top-color: #fff;
  }

  .testimonials-clean .item .author {
    margin-top: 28px;
    padding-left: 25px;
  }

  .testimonials-clean .item .name {
    font-weight: bold;
    margin-bottom: 2px;
    color: inherit;
  }

  .testimonials-clean .item .title {
    font-size: 13px;
    color: #9da9ae;
  }

  .testimonials-clean .item .description {
    font-size: 15px;
    margin-bottom: 0;
  }

  .testimonials-clean .item img {
    max-width: 40px;
    float: left;
    margin-right: 12px;
    margin-top: -5px;
  }
  
  
  /* brands */
  .brands {
    color: #313437;
    background-color: #fff;
  }

  .brands a {
    display: block;
    text-align: center;
    padding: 40px 0;
  }

  @media (max-width:767px) {
    .brands a {
      padding: 30px 0;
    }
  }

  .brands a img {
    display: inline-block;
    margin: 10px 20px;
    vertical-align: middle;
  }














`;