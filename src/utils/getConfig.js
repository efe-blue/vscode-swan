/**
 * @file config acquisition
 * @author zhuyeqing
 */

const vscode = require('vscode');


/**
 * 获得配置项的值
 *
 * @param {string} configName 配置项名称
 * @param {any} defaultVal 配置项默认值
 * @return {any} 配置项值
 */
module.exports = (configName, defaultVal) => {
    let swanConfig = vscode.workspace.getConfiguration('vscode-swan');
    return swanConfig.get(configName, defaultVal);
};
