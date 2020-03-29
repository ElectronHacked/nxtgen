// ./pages/_document.js
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import htmlescape from 'htmlescape';
import config from 'config';

export default class MyDocument extends Document {
  render() {
    // The main reason I put the value here is that the package I use to copy templates, `copy-template-dir` when generating the code, causes
    // Issues each time it sees double `{`. It expects that to be a template
    const dangerouslySetInnerHTML = {
      __html: `
      __CONFIG__ = ${htmlescape(config)}
    `,
    };

    return (
      <html>
        <Head />
        <body>
          <Main />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
