/**
 * @file config acquisition
 * @author zhuyeqing
 */

const vscode = require('vscode');

// 可配置项描述
// 1. disableAPISuggestion：默认值为false，用户可通过此配置开启或关闭 api 的提醒功能

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
