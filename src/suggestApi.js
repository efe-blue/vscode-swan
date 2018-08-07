/**
 * @file api suggester
 * @author varsha
 */

const fs = require('fs');
const path = require('path');
const vscode = require('vscode');

const defineType = require('./defineType');
const addJsconfig = require('./addJsconfig');
const addGitignore = require('./utils/addGitignore');
const getConfig = require('./utils/getConfig');


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

    // 用户禁用了 api 提示
    if (getConfig('disableAPISuggestion')) {
        return Promise.reject();
    }

    // 用户未禁用 api 提示
    return Promise.all([
        // 安装swan.d.ts
        defineType(),
        // 创建swan.d.ts启动方式
        addJsconfig(),
        // 添加.gitignore
        addGitignore('typings\n')
    ]);
};
