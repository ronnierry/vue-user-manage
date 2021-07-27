module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8090',
          ws: true,
          changeOrigin: true
        },
        '/foo': {
          target: 'www.baidu.com'
        }
      }
    }
  }