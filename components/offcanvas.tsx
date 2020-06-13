import * as React from "react";

type Props = {
  open: boolean;
};

export default ({ open }: Props) => {
  return (
    <nav
      className={`uc-menu _slide _black ${open ? `_is-active` : ""}`}
      id="menu"
    >
      <div className="uc-menu-wrap">
        <div className="uc-menu-list">
          <a href="/daily/aboutme.html">About</a>
          <a href="/portfolio.html">Portfolio</a>
          <a
            href="https://github.com/steelydylan"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};
