import styled from "styled-components";

export const AppBase = styled.div`

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

  @media (max-width: 767px) {
    .brands a {
      padding: 30px 0;
    }
  }

  .brands a img {
    display: inline-block;
    margin: 10px 20px;
    vertical-align: middle;
  }

  /* contact-clean */

  .contact-clean {
    background: #f1f7fc;
    padding: 80px 0;
  }

  @media (max-width: 767px) {
    .contact-clean {
      padding: 20px 0;
    }
  }

  .contact-clean form {
    max-width: 480px;
    width: 90%;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 40px;
    border-radius: 4px;
    color: #505e6c;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 767px) {
    .contact-clean form {
      padding: 30px;
    }
  }

  .contact-clean h2 {
    margin-top: 5px;
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 36px;
    color: inherit;
  }

  .contact-clean form .form-control {
    background: #fff;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
    outline: none;
    color: inherit;
    padding-left: 12px;
    height: 42px;
  }

  .contact-clean form .form-control:focus {
    border: 1px solid #b2b2b2;
  }

  .contact-clean form textarea.form-control {
    min-height: 100px;
    max-height: 260px;
    padding-top: 10px;
    resize: vertical;
  }

  .contact-clean form .btn {
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

  .contact-clean form .btn:hover {
    opacity: 1;
  }

  .contact-clean form .btn:active {
    transform: translateY(1px);
  }

  .contact-clean form .btn-primary {
    background-color: #055ada !important;
    margin-top: 15px;
    color: #fff;
  }
  
  /* footer-dark */
  .footer-dark {
    padding: 50px 0;
    color: #f0f9ff;
    background-color: #282d32;
  }

  .footer-dark h3 {
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 16px;
  }

  .footer-dark ul {
    padding: 0;
    list-style: none;
    line-height: 1.6;
    font-size: 14px;
    margin-bottom: 0;
  }

  .footer-dark ul a {
    color: inherit;
    text-decoration: none;
    opacity: 0.6;
  }

  .footer-dark ul a:hover {
    opacity: 0.8;
  }

  @media (max-width:767px) {
    .footer-dark .item:not(.social) {
      text-align: center;
      padding-bottom: 20px;
    }
  }

  .footer-dark .item.text {
    margin-bottom: 36px;
  }

  @media (max-width:767px) {
    .footer-dark .item.text {
      margin-bottom: 0;
    }
  }

  .footer-dark .item.text p {
    opacity: 0.6;
    margin-bottom: 0;
  }

  .footer-dark .item.social {
    text-align: center;
  }

  @media (max-width:991px) {
    .footer-dark .item.social {
      text-align: center;
      margin-top: 20px;
    }
  }

  .footer-dark .item.social > a {
    font-size: 20px;
    width: 36px;
    height: 36px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.4);
    margin: 0 8px;
    color: #fff;
    opacity: 0.75;
  }

  .footer-dark .item.social > a:hover {
    opacity: 0.9;
  }

  .footer-dark .copyright {
    text-align: center;
    padding-top: 24px;
    opacity: 0.3;
    font-size: 13px;
    margin-bottom: 0;
  }
















`;