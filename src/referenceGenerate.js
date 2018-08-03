/**
 * @file reference generation
 * @author zhuyeqing
 */
const path = require('path');
const fs = require('fs');
const vscode = require('vscode');


// 方式一：使用复制jsconfig.json的方式
// 方式二：使用复制swan.d.ts到项目根目录即采用reference的启动方式
// 使用方式二

module.exports = () => {
    let referenceSrcFile = path.join(__dirname, '../swan.d.ts');
    let referenceDestFile = path.join(vscode.workspace.rootPath, 'swan.d.ts');
    return fs.readFile(referenceSrcFile, (err, data) => {
        if (err) {
            vscode.window.showErrorMessage(`读取swan.d.ts配置文件失败: ${err}`);
        }
        fs.writeFile(referenceDestFile, data, err => {
            if (err) {
                vscode.window.showErrorMessage(`复制swan.d.ts配置文件失败: ${err}`);
            }
        });
    });
};
