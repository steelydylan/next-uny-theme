import * as React from "react";
import Link from "next/link";

type Props = {
  type: "index" | "post";
};

export default (props: Props) => {
  return (
    <div className="uc-pager-unit _center">
      {props.type === "post" && (
        <div className="uc-btn">
          <Link href="/">
            <a href="/">Home</a>
          </Link>
        </div>
      )}
      {props.type === "index" && (
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
      )}
    </div>
  );
};
