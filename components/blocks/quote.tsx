import * as React from "react";
import Link from "next/link";
import axios from "axios";

type Props = {
  url: string;
};

export default (props: Props) => {
  const [meta, setMeta] = React.useState<Record<string, string>>({});
  const scrapeMeta = async (url: string) => {
    const data = await axios
      .get("/api/meta", {
        data: {
          url
        }
      })
      .then(res => res.data)
      .catch(() => ({}));
    setMeta(data);
  };
  React.useEffect(() => {
    scrapeMeta(props.url);
  }, []);

  return (
    <Link href={props.url}>
      <blockquote>
        <div className="quoteImageContainer">
          <img src={meta.image} className="quoteImage" width="154" alt="" />
        </div>
        <div>
          <p className="quoteTitle">
            <a
              href={props.url}
              className="quoteTitleLink bl-bigger"
              target="_blank"
              rel="noopener noreferrer"
            >
              {meta.title}
            </a>
          </p>
          <p className="quoteSiteName">{meta.siteName}</p>
          <p className="quoteDescription">{meta.description}</p>
        </div>
      </blockquote>
    </Link>
  );
};
