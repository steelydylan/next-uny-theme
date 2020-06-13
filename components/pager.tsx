import * as React from "react";
import Link from "next/link";

type Props = {
  type: "index" | "post";
  max?: number;
  current?: number;
};

export default (props: Props) => {
  const lis: React.ReactNode[] = [];
  const { max, current } = props;

  if (max && current) {
    for (let i = 1; i <= max; i += 1) {
      if (i === current) {
        lis.push(
          <li className="_current">
            <span>{i}</span>
          </li>
        );
      } else if (i === 1 && i !== current) {
        lis.push(
          <Link href="/">
            <a href="/">
              <span>1</span>
            </a>
          </Link>
        );
      } else if (Math.abs(i - current) < 4) {
        lis.push(
          <li>
            <Link href="/page/[id]" as={`/page/${i}`}>
              <a href={`/page/${i}`}>
                <span>{i}</span>
              </a>
            </Link>
          </li>
        );
      } else if (i === max && i !== current) {
        lis.push(
          <Link href="/page/[id]" as={`/page/${max}`}>
            <a href={`/page/${max}`}>
              <span>{max}</span>
            </a>
          </Link>
        );
      }
    }
  }

  return (
    <div className="uc-pager-unit _center">
      {props.type === "post" && (
        <div className="uc-btn">
          <Link href="/">
            <a href="/">Home</a>
          </Link>
        </div>
      )}
      {props.type === "index" && <ul className="uc-pager">{lis}</ul>}
    </div>
  );
};
