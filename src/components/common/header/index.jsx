import { useNavigate } from "react-router-dom";

const dropdownItems = [
  "Home",
  "Category",
  "Single Blog",
  "Regular Page",
  "Contact",
];

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg">
              <div
                className="navbar-brand"
                href="#"
                onClick={(e) => navigate("/")}
              >
                <img src="" alt="Logo" />
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#worldNav"
                aria-controls="worldNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="worldNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      {dropdownItems.map((item) => (
                        <a
                          key={item}
                          className="dropdown-item"
                          href="index.html"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Gadgets
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Lifestyle
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Video
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
                {/* Search Form  */}
                <div id="search-wrapper">
                  <form action="#">
                    <input
                      type="text"
                      id="search"
                      placeholder="Search something..."
                    />
                    <div id="close-icon" />
                    <input className="d-none" type="submit" defaultValue />
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
