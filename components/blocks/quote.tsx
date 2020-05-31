import * as React from "react";
import Link from "next/link";
import axios from "axios";

type Props = {
  url: string;
};

export default (props: Props) => {
  const scrapeMeta = async (url: string) => {
    const data = await axios
      .get(url)
      .then(res => res.data)
      .catch(() => ({}));
  };
  React.useEffect(() => {
    scrapeMeta(props.url);
  }, []);

  return (
    <Link href={props.url}>
      <blockquote>
        <div className="quoteImageContainer">
          <img
            src="https://karakuri-ai.co.jp/wp-content/uploads/2018/07/ogp.png"
            className="quoteImage"
            width="154"
            alt=""
          />
        </div>
        <div>
          <p className="quoteTitle">
            <a
              href="https://karakuri-ai.co.jp/"
              className="quoteTitleLink bl-bigger"
              target="_blank"
              rel="noopener noreferrer"
            >
              カラクリ株式会社 | 今までにないカラクリで世の中を豊かに
            </a>
          </p>
          <p className="quoteSiteName">カラクリ株式会社</p>
          <p className="quoteDescription">
            カラクリ株式会社は「今までにないカラクリで世の中を豊かに」をミッションに、世の中を楽しく、楽に、豊かにする仕組みを提供していきます。先進AIテクノロジーを使用した、誰でも簡単に活...
          </p>
        </div>
      </blockquote>
    </Link>
  );
};
