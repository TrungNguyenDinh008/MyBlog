import * as React from "react";
import { Link } from "gatsby";
import {
  font,
  navBarGrid,
  navBarFlex,
  navBarLogo,
  navBarItem,
  navBarLink,
  footer,
  footerFlex,
  footerItem,
  footerText,
  footerLink,
} from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <body className={font}>
      <nav className={navBarGrid}>
        <div>
          <Link to="/" className={navBarLogo}>
            <b>MY BLOG</b>
          </Link>
        </div>
        <div>
          <ul className={navBarFlex}>
            <li className={navBarItem}>
              <Link to="/" className={navBarLink}>
                Home
              </Link>
            </li>
            <li className={navBarItem}>
              <Link to="/about" className={navBarLink}>
                About
              </Link>
            </li>
            <li className={navBarItem}>
              <Link to="/blog" className={navBarLink}>
                Blog
              </Link>
            </li>
            <li className={navBarItem}>
              <Link to="/project" className={navBarLink}>
                Project
              </Link>
            </li>
            <li className={navBarItem}>
              <Link to="/newsletter" className={navBarLink}>
                Newsletter
              </Link>
            </li>
          </ul>
          </div>
      </nav>
      <main>{children}</main>
      <footer className={footer}>
        <ul className={footerFlex}>
          <li className={footerItem}>
            <p className={footerText}>© 2023</p>
          </li>
          <li className={footerItem}>
            <a
              href="https://stackoverflow.com/users/21977203/nguy%e1%bb%85n-%c4%90%c3%acnh-trung"
              className={footerLink}
            >
              {" "}
              Stack Overflow
            </a>
          </li>
          <li className={footerItem}>
            <a
              href="https://github.com/TrungNguyenDinh008"
              className={footerLink}
            >
              {" "}
              Github
            </a>
          </li>
          <li className={footerItem}>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCbfNPgrflDTqflRjQnrqztbsGgBJQmPvqqxrfQXhkrchbqwvMrGvdhnpqnKKZFcKWbGrL"
              className={footerLink}
            >
              {" "}
              Email
            </a>
          </li>
          <li className={footerItem}>
            <a href="https://twitter.com/Andrew_IsMe" className={footerLink}>
              {" "}
              Twitter
            </a>
          </li>
          <li className={footerItem}>
            <a href="https://www.instagram.com/" className={footerLink}>
              {" "}
              Instagram
            </a>
          </li>
        </ul>
      </footer>
    </body>
  );
};

export default Layout;
