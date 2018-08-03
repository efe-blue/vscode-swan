/**
 * @file type definition
 * @author zhuyeqing
 */

const path = require('path');
const fs = require('fs');
const vscode = require('vscode');

function copyFile(typingsDestDir) {
    let typingsSrcFile = path.join(__dirname, '../res/typings/swan.d.ts');
    let typingsDestFile = path.join(typingsDestDir, 'swan.d.ts');

    return fs.readFile(typingsSrcFile, (err, data) => {
        if (err) {
            vscode.window.showErrorMessage(`读取swan.d.ts文件失败: ${err}`);
        }

        fs.writeFile(typingsDestFile, data, err => {
            if (err) {
                vscode.window.showErrorMessage(`复制swan.d.ts文件失败: ${err}`);
            }
        });
    });
}

module.exports = () => {
    let typingsDestDir = path.join(vscode.workspace.rootPath, 'typings');
    if (fs.existsSync(typingsDestDir)) {
        return copyFile(typingsDestDir);
    }

    return fs.mkdir(typingsDestDir, err => {
        if (err) {
            vscode.window.showErrorMessage(`创建typings文件夹失败: ${err}`);
        }
        return copyFile(typingsDestDir);
    });
};
