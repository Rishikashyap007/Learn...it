import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mainContext } from "../../Context";
import { toast } from "react-hot-toast";
import "./Navbar.css";

const Nav = () => {
  const navigate = useNavigate();
  const context = useContext(mainContext);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [user, setUser] = useState(context);

  useEffect(() => {
    const storedUser = localStorage.getItem("userid");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [context]);

  const token = localStorage.getItem("token");

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const closeNavbar = () => {
    setIsNavbarActive(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    navigate("/");
    toast.success("Logged out successfully!");
    closeNavbar();
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <div className={`App ${isNavbarActive ? "active" : ""}`}>
      <div className="App">
        <header className="header flex justify-between items-center py-2 px-4 bg-black shadow-md">
          <Link to="/" onClick={closeNavbar}>
            <h1 className="text-white text-3xl font-semibold">Learn...it</h1>
          </Link>

          <nav
            className={`navbar ${
              isNavbarActive ? "block" : "hidden"
            } md:flex md:items-center`}
          >
            <ul className="navbar-list flex flex-col md:flex-row md:items-center">
              <Link className="navbar-link" to="/" onClick={closeNavbar}>
                Home
              </Link>
              <Link
                className="navbar-link"
                to="/About-us"
                onClick={closeNavbar}
              >
                About
              </Link>
              <Link className="navbar-link" to="/Courses" onClick={closeNavbar}>
                Courses
              </Link>
              <Link
                className="navbar-link"
                to="/Testimonial"
                onClick={closeNavbar}
              >
                Testimonial
              </Link>
              <Link
                className="navbar-link"
                to="/contact-us"
                onClick={closeNavbar}
              >
                Contact
              </Link>

              {!token ? (
                <div className="navbar-buttons flex flex-col md:flex-row">
                  <Link to="/Login" onClick={closeNavbar}>
                    <button className="login-btn bg-green-500 text-white rounded-lg">
                      Log in
                    </button>
                  </Link>
                  <Link to="/Sign_Up" onClick={closeNavbar}>
                    <button className="signup-btn bg-purple-700 text-white rounded-lg">
                      Sign Up
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-0">
                  <Link to={`/profile/${user.id}`} onClick={closeNavbar}>
                    <div className="initials bg-slate-400 text-white rounded-full py-1 px-3 md:mt-2 flex items-center justify-center">
                      {user.name}
                    </div>
                  </Link>
                  <button
                    className="logout-btn bg-green-500 text-white py-1 px-3 rounded-lg"
                    onClick={handleLogout}
                  >
                    LogOut
                  </button>
                  <Link to="/cart" onClick={closeNavbar}>
                    <span className="material-symbols-outlined text-white text-3xl md:mt-2">
                      shopping_cart
                    </span>
                  </Link>
                </div>
              )}
            </ul>
          </nav>

          <div className="md:hidden" onClick={toggleNavbar}>
            <div className="flex flex-col justify-between w-6 h-5">
              <span
                className={`block h-0.5 bg-white transition-transform duration-300 ${
                  isNavbarActive ? "transform rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-white transition-opacity duration-300 ${
                  isNavbarActive ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-white transition-transform duration-300 ${
                  isNavbarActive ? "transform -rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Nav;
