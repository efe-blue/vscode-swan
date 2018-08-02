/**
 * @file type definition
 * @author zhuyeqing
 */

const path = require('path');
const fs = require('fs');
const vscode = require('vscode');

function copyFile(typingsDestDir) {
    let typingsSrcFile = path.join(__dirname, '../typings/swan.d.ts');
    let typingsDestFile = path.join(typingsDestDir, 'swan.d.ts');

    return fs.readFile(typingsSrcFile, (err, data) => {
        if (err) {
            vscode.window.showErrorMessage(`读取swan.d.ts命名空间文件失败: ${err}`);
        }

        fs.writeFile(typingsDestFile, data, err => {
            if (err) {
                vscode.window.showErrorMessage(`复制swan.d.ts命名空间文件失败: ${err}`);
            }
        });
    });
}

function createTypeDefinition() {
    let typingsDestDir = path.join(vscode.workspace.rootPath, 'typings');
    if (fs.existsSync(typingsDestDir)) {
        return copyFile(typingsDestDir);
    }

    return fs.mkdir(typingsDestDir, err => {
        if (err) {
            vscode.window.showErrorMessage(`创建typinds文件夹失败: ${err}`);
        }
        return copyFile(typingsDestDir);
    });
}

module.exports = createTypeDefinition;
