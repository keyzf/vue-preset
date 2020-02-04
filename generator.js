module.exports = (api, options, rootOptions) => {
    // 安装一些基础公共库
    api.extendPackage({
      dependencies: {
        "axios": "^0.19.0",
        "core-js": "^3.4.3",
        "preloader.js": "^1.2.2",
        "weixin-js-sdk": "^1.4.0-test",
        "vant": "^2.2.0",
        "amfe-flexible": "^2.2.1"
      },
      devDependencies: {
        "babel-eslint": "^10.0.3",
        "babel-plugin-import": "^1.12.0",
        "eslint": "^4.19.1",
        "eslint-plugin-vue": "^6.0.1",
        "less": "^3.8.1",
        "less-loader": "^5.0.0",
        "node-sass": "^4.13.1",
        "postcss-pxtorem": "^4.0.1",
        "sass-loader": "^8.0.2",
        "vue-template-compiler": "^2.6.10"
      }
    });

    // 公共基础目录和文件
    api.render('./template/default/', rootOptions);
}