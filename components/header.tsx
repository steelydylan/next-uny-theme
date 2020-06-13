import * as React from "react";
import Link from "next/link";

type Props = {
  open: boolean;
  onClick: () => void;
};

export default ({ onClick, open }: Props) => {
  return (
    <>
      <header className="uc-header _ghost">
        <div className="uc-header-logo">
          <Link href="/">
            <a href="/">Horic Design</a>
          </Link>
        </div>
        <div className="uc-header-menu _hide-small" role="navigation">
          <Link href="/[categoryId]/[id]" as="/daily/aboutme">
            <a href="/daily/aboutme">About</a>
          </Link>
          <Link href="/[categoryId]/[id]" as="/daily/portfolio">
            <a href="/daily/portfolio">Portfolio</a>
          </Link>
          <a href="https://github.com/steelydylan">GitHub</a>
        </div>
        <div
          className={`uc-menu-btn _hide-medium _hide-large${
            open ? " _is-active" : ""
          }`}
          data-open-target="#menu"
        >
          <button type="button" onClick={onClick}>
            <i className="uc-menu-btn-icon" />
          </button>
        </div>
      </header>

      <nav className="uc-menu _slide _black" id="menu">
        <div className="uc-menu-wrap">
          <div className="uc-menu-list">
            <Link href="/[categoryId]/[id]" as="/daily/aboutme">
              <a href="/daily/aboutme">About</a>
            </Link>
            <Link href="/[categoryId]/[id]" as="/daily/portfolio">
              <a href="/portfolio.html">Portfolio</a>
            </Link>
            <a href="https://github.com/steelydylan">GitHub</a>
          </div>
        </div>
      </nav>
    </>
  );
};
