import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-area">
        <div id="sticky-header" className="main-header-area">
          <div className="container-fluid">
            <div className="header_bottom_border">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-2">
                  <div className="logo">
                    <a href="/">
                      <img src="img/logo.png" alt="Logo" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="main-menu d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li><a className="active" href="/">home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/track">Tracks</a></li>
                        <li>
                          <a href="#">Blog <i className="ti-angle-down"></i></a>
                          <ul className="submenu">
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/single-blog">Single Blog</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Pages <i className="ti-angle-down"></i></a>
                          <ul className="submenu">
                            <li><a href="/elements">Elements</a></li>
                          </ul>
                        </li>
                        <li><a href="/contact">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                  <div className="social_icon text-right">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
