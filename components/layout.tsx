import * as React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { DefaultSeo } from "next-seo";
import {
  faTwitter,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import Head from "next/head";
import Pager from "@/components/pager";
import Offcanvas from "@/components/offcanvas";
import Side from "@/components/side";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

type Props = {
  children: React.ReactNode;
  title?: string;
  type: "index" | "post";
  current?: number;
  max?: number;
};

const nextSeoConfig = {
  openGraph: {
    type: "website",
    site_name: "HoricDesign",
    title: "JavaScript好きなエンジニアのブログ",
    images: [
      {
        url: `${process.env.APP_ROOT_URL}/images/og.png`
      }
    ]
  },
  twitter: {
    cardType: "summary_large_image"
  },
  titleTemplate: "%s | HoricDesign"
};

library.add(faTwitter, faInstagram, faGithub);

const { useState } = React;

export default (props: Props) => {
  const [openOffcanvas, setOpenOffcanvas] = useState(false);

  return (
    <div className="_theme-blog _theme-entry">
      <DefaultSeo {...nextSeoConfig} />
      <Head>
        <link rel="stylesheet" href="/blog-theme.css" />
        <link rel="stylesheet" href="/bundle.css" />
      </Head>
      <Header open={openOffcanvas} onClick={() => setOpenOffcanvas(!openOffcanvas)} />
      <Offcanvas open={openOffcanvas} />
      <Hero title={props.title} />
      <main className="uc-content content">
        <div className="uc-section">
          <div className="uc-grid _small-col-full">
            <div className="entry uc-grid-cell _col-fit">
              <div className="uc-grid _col-2 _small-col-full _gutter">
                {props.children}
              </div>
            </div>
            <div className="uc-sidebar uc-grid-cell _col-4">
              <Side />
            </div>
          </div>
        </div>
      </main>
      <Pager type={props.type} current={props.current} max={props.max} />
      <Footer />
    </div>
  );
};
