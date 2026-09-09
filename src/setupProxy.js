const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function setupProxy(app) {
  app.use(
    "/rainviewer",
    createProxyMiddleware({
      target: "https://tilecache.rainviewer.com",
      changeOrigin: true,
      pathRewrite: {
        "^/rainviewer": "",
      },
    }),
  );
};
