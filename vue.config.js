const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 75   //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
})

module.exports = {
  runtimeCompiler: true,
  lintOnSave: false,
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {//配置代理
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true,
        //
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}