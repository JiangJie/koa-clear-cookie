koa-clear-cookie
================

> Add `this.cookies.clear('name')` for KOA app.

## Install
```
npm install koa-clear-cookie --save-dev
```

## Example
```js
var koa = require('koa');
var clearCookie = require('koa-clear-cookie');

var app = koa();
app.use(clearCookie());

app.use(function*(next) {
    this.cookies.clear('somename'/*, {signed: true}*/);
    yield next;
});
```

### clearCookie(options)

### options

Type: `Object`

#### options.signed
Type: `Boolean`
Default: false

Clear `name.sig` cookie as well.
