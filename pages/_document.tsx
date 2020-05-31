import * as React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document<{
  styleTags: JSX.Element;
}> {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    try {
      const page = ctx.renderPage(App => props =>
        // eslint-disable-next-line
        sheet.collectStyles(<App {...props} />)
      );
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...page,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}

export default MyDocument;
