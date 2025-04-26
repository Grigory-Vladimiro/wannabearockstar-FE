const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-top footer-padding">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
              <div className="single-footer-caption mb-50">
                <div className="single-footer-caption">
                  <div className="footer-logo">
                    <a href="/"><img src="img/logo.png" alt="logo" /></a>
                  </div>
                  <div className="footer-tittle">
                    <p>Keeping rock alive — one track at a time 🤘</p>
                  </div>
                  <div className="footer-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#albums">Albums</a></li>
                    <li><a href="#shows">Shows</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="footer-copy-right text-center">
                <p>
                  © {new Date().getFullYear()} Wanna Be a Rockstar. All rights reserved. Based on Musico template by themewagon.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;