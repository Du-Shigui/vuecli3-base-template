# 云于天官网

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

## 性能优化

### 利用 import()异步引入组件实现按需引入

```js
function loadView(component) {
  // [request]表示实际解析的文件名
  return () => import(/* webpackChunkName: "[request]" */ `views/${component}`)
}
```

### 打包分析图

```shell
npm install webpack-bundle-analyzer --save-dev
```

`vue.config.js` 中配置：

```js
module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  },
}
```

运行 `npm run serve` 即弹出报告图。

### externals 提取依赖包

```js
module.exports = {
  configureWebpack: (config) => {
    config.externals = {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
      jquery: 'jQuery',
    }
  },
}
```

`index.html` 中引入 cdn ：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <title><%= htmlWebpackPlugin.options.title %></title>
    <!-- Load required Bootstrap and BootstrapVue CSS -->
    <link
      href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.bootcdn.net/ajax/libs/bootstrap-vue/2.16.0/bootstrap-vue.min.css"
      rel="stylesheet"
    />

    <!-- Load polyfills to support older browsers -->
    <script
      src="//polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver"
      crossorigin="anonymous"
    ></script>

    <!-- Load Vue followed by BootstrapVue -->

    <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.runtime.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/bootstrap-vue/2.6.1/bootstrap-vue.min.js"></script>
    <!-- Load the following for BootstrapVueIcons support -->
    <!-- <script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue-icons.min.js"></script> -->
  </head>
  <body>
    <noscript>
      <strong
        >We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
        properly without JavaScript enabled. Please enable it to
        continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <!-- 引入 iconfont -->
    <script src="https://at.alicdn.com/t/font_2002270_irvdc1go0fn.js"></script>

    <script src="https://cdn.bootcdn.net/ajax/libs/vue-router/3.2.0/vue-router.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/vuex/3.2.0/vuex.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
  </body>
</html>
```

### 图片压缩

安装：

```shell
npm install image-webpack-loader --save-dev
```

`vue.config.js` 中配置：

```js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('imageWebpackLoader')
      .loader('image-webpack-loader')
  },
}
```
