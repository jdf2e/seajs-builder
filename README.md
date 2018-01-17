## 关于seajs-builder

seajs模块在写的时候一般不写id和deps，但是引用的时候，这些模块发布到了cdn上，因此需要给模块加上cdn

自动化指定cdn是这个工具的初衷。

## 安装
```
npm install jdf-seajs-builder --save
```

## 使用
```javascript
const builder = require('jdf-seajs-builder');

let code = `define(function(require, exports, module) {
    let a = require('./a');
    let b = require('./b');
});`;

let cdnHandler = builder.getHandler(function (node) {
    node.name = 'ab';   // seajs的id
    node.str ='http://www.jd.com' + node.str;  // seajs require中的字符串

    return node; // 必须返回nodeObj，
});

let result = cdnHandler(code);

console.log(result);
```