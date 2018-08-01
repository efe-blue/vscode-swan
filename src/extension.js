/**
 * @file 入口
 * @author zhuyeqing
 */

const vscode = require('vscode');
const path = require('path');
const fs = require('fs');
const jsonFilePath = path.join(vscode.workspace.rootPath, 'project.swan.json');
const createTypeDefinition = require('./typeDefinition');
const generateReference = require('./referenceGeneration');


// 激活插件(activated)
function activate() {
    // 判断project.swan.json是否存在
    fs.open(jsonFilePath, 'r', err => {
        if (err) {
            vscode.window.showWarningMessage('未找到project.swan.json文件，API智能提示功能将不生效');
            return;
        }
        Promise.all([
            // 安装swan.d.ts
            createTypeDefinition(),
            // 创建swan.d.ts启动方式
            generateReference()
        ]);
    });
}
exports.activate = activate;

// 停用插件(deactivated)
function deactivate() {
}
exports.deactivate = deactivate;
