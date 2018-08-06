/**
 * @file entry
 * @author zhuyeqing
 */

const suggestApi = require('./suggestApi');

exports.activate = () => {
    suggestApi();
};

exports.deactivate = () => {};
