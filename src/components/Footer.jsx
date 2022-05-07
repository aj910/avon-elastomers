import { NavLink } from 'react-router-dom';

const Footer = ({ websiteSetting }) => {
  return (
    <footer>
      <div className="top-footer">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="foot-logo">
                <img src={websiteSetting.footer_logo} alt="logo" />
              </div>
            </div>
            <div className="col-md-9">
              <div className="top-foot-menu-blk">
                <ul className="foot-menu-list">
                  <li>
                    <NavLink to="/about-us">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Pricing">Pricing</NavLink>
                  </li>
                  <li>
                    <NavLink to="/gallery">Gallery</NavLink>
                  </li>
                  <li>
                    <NavLink to="/team">Team</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blogs">Blog</NavLink>
                  </li>
                </ul>
                <ul className="foot-social-list">
                  <li>
                    <a href={websiteSetting.facebook_link} target="_blank" rel="noreferrer">
                      <img src="assets/images/f-fb.png" alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a href={websiteSetting.twitter_link} target="_blank" rel="noreferrer">
                      <img src="assets/images/f-t.png" alt="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href={websiteSetting.youtube_link} target="_blank" rel="noreferrer">
                      <img src="assets/images/f-s.png" alt="youtube" />
                    </a>
                  </li>
                  <li>
                    <a href={websiteSetting.instagram_link} target="_blank" rel="noreferrer">
                      <img src="assets/images/f-ins.png" alt="instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bottom-foot-menu-blk">
                <ul className="foot-menu-list">
                  <li>
                    <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/terms-and-condition">Terms of Use</NavLink>
                  </li>
                  <li>
                    <NavLink to="/refund-policy">Sales and Refunds</NavLink>
                  </li>
                  <li>
                    <NavLink to="/legal">Legal</NavLink>
                  </li>
                  <li>
                    <NavLink to="/site-map">Site Map</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-foot">© {new Date().getFullYear()} All Rights Reserved</div>
    </footer>
  );
};
export default Footer;
