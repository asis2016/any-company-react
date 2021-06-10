import styled from 'styled-components'

export const NavigationBase = styled.div`
  .navbar {
    background: transparent;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
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
      margin-top: 0.5rem;

      span .login {
        color: #d9d9d9;
        margin-right: 0.5rem;
        text-decoration: none;

        &:hover {
          color: #fff;
        }
      }
    }

    .navbar-toggler {
      border-color: rgba(255, 255, 255, 0.3);
    }

    navbar-toggler:hover,
    .navbar-toggler:focus {
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
      padding-left: 0.7rem;
      padding-right: 0.7rem;
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 2px;
  }

  .navbar .dropdown-menu .dropdown-item:focus,
  .navbar .dropdown-menu .dropdown-item {
    line-height: 2;
    color: #37434d;
  }

  .navbar .dropdown-menu .dropdown-item:focus,
  .navbar .dropdown-menu .dropdown-item:hover {
    background: #ebeff1;
  }

  .action-button,
  .action-button:not(.disabled):active {
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 40px;
    color: #ebeff1;
    box-shadow: none;
    text-shadow: none;
    padding: 0.3rem 0.8rem;
    background: transparent;
    transition: background-color 0.25s;
    outline: none;
  }

  .action-button:hover {
    color: #fff;
  }
`