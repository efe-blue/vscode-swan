/**
 * @file 入口
 * @author zhuyeqing
 */

const apiSuggest = require('./apiSuggest');

exports.activate = () => {
    apiSuggest();
};

exports.deactivate = () => {};
