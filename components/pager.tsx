import * as React from "react";

export default () => {
  return (
    <div className="uc-pager-unit _center">
      <ul className="uc-pager">
        <li className="_current">
          <span>1</span>
        </li>
        <li>
          <a href="/page/2">
            <span>2</span>
          </a>
        </li>
        <li>
          <a href="/page/3">
            <span>3</span>
          </a>
        </li>
        <li>
          <a href="/page/4">
            <span>4</span>
          </a>
        </li>
        <li className="_ghost">...</li>
        <li className="pager-item">
          <a href="/page/30">
            <span>30</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
