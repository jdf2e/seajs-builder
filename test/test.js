'use strict';
const expect = require('expect.js');

const urlReplace = require('../src/index');

let code = `define(function(require, exports, module) {
    var a = require('./a');
    var b = require('./b');
});`;

let cdnHandler = urlReplace.getHandler(function (nodeObj) {
    nodeObj.name = 'ab';
    nodeObj.str ='http://www.jd.com' + nodeObj.str;
    return nodeObj;
});

let aa = cdnHandler(code);
console.log(aa)
return;
describe('define路径替换', function () {
    let cdn = "//www.jd.com";
    describe('define只存在factory', function () {
        it('require个数为0', function () {
            expect(1).to.equal(1);
        });
    });
});
