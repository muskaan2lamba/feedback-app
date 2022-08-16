const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/feedback',
    createProxyMiddleware({
      target: 'https://feedback-json-server-react.herokuapp.com',
      changeOrigin: true,
    })
  );
};