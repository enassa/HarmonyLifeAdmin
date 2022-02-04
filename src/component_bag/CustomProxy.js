// module.exports = app => {
//   app.use(
//     "/api",
//     proxy({
//       target: "http://localhost:4000",
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api": "/api/v1"
//       }
//     })
//   );
const { createProxyMiddleware } = require("http-proxy-middleware");
const { default: App } = require("../App");
const app = App;

module.exports = app => {
  app.use(
      createProxyMiddleware('delivery/save',
        {
            target: 'https://api.mysay.io',
            changeOrigin: true
        }
  ));
};