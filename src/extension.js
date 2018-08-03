/**
 * @file entry
 * @author zhuyeqing
 */

const apiSuggest = require('./apiSuggest');

exports.activate = () => {
    apiSuggest();
};

exports.deactivate = () => {};
