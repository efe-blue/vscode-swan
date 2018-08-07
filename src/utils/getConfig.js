/**
 * @file config acquisition
 * @author zhuyeqing
 */

const vscode = require('vscode');

 /**
  * 默认配置项
  */
const defaultConf = {
    // 默认值为false，用户可通过此配置开启或关闭 api 的提醒功能
    disableAPISuggestion: false
};

 /**
 * 获得配置项的值
 *
 * @param {string} configName 配置项名称
 * @return {Mixed} 配置项值
 */
module.exports = configName => {
    let swanConfig = vscode.workspace.getConfiguration('vscode-swan');
    return swanConfig.get(configName, defaultConf[configName]);
};
