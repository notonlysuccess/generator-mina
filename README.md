# Generator-mina [![npm package](https://img.shields.io/npm/v/vue-cli.svg)](https://www.npmjs.com/package/generator-mina)

***It's only personal project, not official way to build weapp. Please use with caution.***

A simple generator for MINA with gulp, async/await support.

### Installation

Prerequisites: [Node.js](https://nodejs.org/en/) and [Yeoman](http://yeoman.io/).

``` bash
$ npm i -g yo generator-mina
```

### Usage

- Generate mina template.

``` bash
$ mkdir <project-name> && cd <project-name>
$ yo mina
```

Example:

``` bash
$ mkdir hello-mina && cd hello-mina
$ yo mina
```

- Install node_modules.
``` bash
$ npm i
```

- Run scripts.
  `build` for building, `dev` for watching
``` bash
$ npm run build
```
``` bash
$ npm run dev
```
- Use [微信web开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html?t=1474644089359) to open `hello-mina/dist`.

- await/async usage

You need require `assets/runtime.js` first when you want to use async. see the example in `src/utils/login.js`

```js
const regeneratorRuntime = require('asstes/runtime.js')
```
### Caution

Weapp is running on JsCore, so not all package can be used. ***It's not official way, please use with caution.***

### License

[MIT](http://opensource.org/licenses/MIT)
