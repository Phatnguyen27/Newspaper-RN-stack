export const Footer = () => (
  <footer className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="footer-single-widget">
            <a href="#">
              <img src="img/core-img/logo.png" alt="" />
            </a>
            <div className="copywrite-text mt-30">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © | Made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
              <p>
                Proudly distributed by{" "}
                <a href="https://themewagon.com" target="_blank">
                  ThemeWagon
                </a>
              </p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              <p />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="footer-single-widget">
            <ul className="footer-menu d-flex justify-content-between">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Fashion</a>
              </li>
              <li>
                <a href="#">Lifestyle</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Gadgets</a>
              </li>
              <li>
                <a href="#">Video</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="footer-single-widget">
            <h5>Subscribe</h5>
            <form action="#" method="post">
              <input
                type="email"
                name="email"
                id="eemail"
                placeholder="Enter your mail"
              />
              <button type="button">
                <i className="fa fa-arrow-right" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
