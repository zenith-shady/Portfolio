import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
        // Close mobile menu on link click
        setMenuOpen(false);
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
      // Close menu on resize to desktop
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    });
  }, []);

  return (
    <>
      <div className={`header ${menuOpen ? "menu-open" : ""}`}>
        <a href="/#" className="navbar-title" data-cursor="disable">
          ZK
        </a>
        <a
          href="mailto:zainkhan115544@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          zainkhan115544@gmail.com
        </a>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${menuOpen ? "hamburger-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          data-cursor="disable"
        >
          <span className="hamburger-line hamburger-line-1"></span>
          <span className="hamburger-line hamburger-line-2"></span>
          <span className="hamburger-line hamburger-line-3"></span>
        </button>

        <ul className={menuOpen ? "nav-open" : ""}>
          <li>
            <a data-href="#about" href="#about" onClick={closeMenu}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={closeMenu}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" onClick={closeMenu}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="nav-overlay" onClick={closeMenu}></div>
      )}

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
