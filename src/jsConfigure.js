/**
 * @file js configuration
 * @author zhuyeqing
 */

const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

module.exports = () => {
    let jsConfigDestFile = path.join(vscode.workspace.rootPath, 'jsconfig.json');
    fs.open(jsConfigDestFile, 'a', err => {
        if (err) {
            vscode.window.showErrorMessage(`jsconfig.json文件创建或打开失败：${err}`);
        }
    });
};
