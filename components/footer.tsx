import * as React from "react";
import Link from "next/link";

export default () => {
  return (
    <footer className="uc-footer _dark">
      <div className="uc-footer-menu">
        <Link href="/[categoryId]/[id]" as="/daily/aboutme">
          <a href="/daily/aboutme">About</a>
        </Link>
        <Link href="/[categoryId]/[id]" as="/daily/portfolio">
          <a href="/daily/portfolio">Portfolio</a>
        </Link>
        <a href="https://github.com/steelydylan">GitHub</a>
      </div>
      <div className="uc-footer-logo">
        <cite>Horic Design</cite>
      </div>
      <p>
        This page was made using
        <a
          href="https://unitscss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          UNITS
        </a>
        .
      </p>
      <small>&copy; 2017 Horic Design</small>
    </footer>
  );
};
