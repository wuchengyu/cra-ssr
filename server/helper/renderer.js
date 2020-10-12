import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';

import Routes from '../../src/Routes';

export default (req, context) => {
  const content = renderToString(
    <React.StrictMode>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </React.StrictMode>
  );
  /* Basic HTML */
  return `
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
};