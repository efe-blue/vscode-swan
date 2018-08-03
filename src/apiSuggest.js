/**
 * @file api suggester
 * @author varsha
 */

const path = require('path');
const fs = require('fs');
const vscode = require('vscode');

const typeDefine = require('./typeDefine');
const jsConfigure = require('./jsConfigure');
const gitignoreAdd = require('./gitignoreAdd');


module.exports = () => {
    // 工作目录读取失败时，不支持 api 提示
    if (!vscode.workspace.rootPath) {
        return Promise.reject();
    }
    // 工作根目录下没有 project.swan.json 认为不是小程序项目，不支持 api 提示
    let jsonFilePath = path.join(vscode.workspace.rootPath, 'project.swan.json');
    if (!fs.existsSync(jsonFilePath)) {
        return Promise.reject();
    }

    return Promise.all([
        // 安装swan.d.ts
        typeDefine(),
        // 创建swan.d.ts启动方式
        jsConfigure(),
        // 添加.gitignore
        gitignoreAdd('typings\n')
    ]);
};
