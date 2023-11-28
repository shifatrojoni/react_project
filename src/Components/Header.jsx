import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  
  return (
    <>
        <header className="header_section">
        <div className="container"  style={{backgroundColor : "aqua"}}>
          <div className="top_contact-container">
            <div className="tel_container">
              <a href>
                <img src="assets/images/telephone-symbol-button.png" alt="" /> Call : +01 1234567890
              </a>
            </div>
            <div className="social-container">
              <a href>
                <img src="assets/images/fb.png" alt="" className="s-1" />
              </a>
              <a href>
                <img src="assets/images/twitter.png" alt="" className="s-2" />
              </a>
              <a href>
                <img src="assets/images/instagram.png" alt="" className="s-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
            <Link className="navbar-brand" to="/">
              <img src="assets/images/logo.png" alt="" />
              <span>
                Medion
              </span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex  flex-column flex-lg-row align-items-center w-100 justify-content-between">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about"> About </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/medicine"> Medicine </NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="buy.html"> Online Buy </a>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/news"> News </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                  </li>
                </ul>
                <form className="form-inline ">
                  <input type="search" placeholder="Search" />
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit" />
                </form>
                <div className="login_btn-contanier ml-0 ml-lg-5">
                  <a href>
                    <img src="assets/images/user.png" alt="" />
                    <span>
                      Login
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header