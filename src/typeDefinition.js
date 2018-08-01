/**
 * @file type definition
 * @author zhuyeqing
 */

const path = require('path');
const fs = require('fs');
const vscode = require('vscode');

const typingsSrcFile = path.join(__dirname, '../typings/swan.d.ts');
const typingsDestDir = path.join(vscode.workspace.rootPath, 'typings');
const typingsDestFile = path.join(typingsDestDir, 'swan.d.ts');


function copyFile() {
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
    if (fs.existsSync(typingsDestDir)) {
        return copyFile();
    }
    return fs.mkdir(typingsDestDir, err => {
        if (err) {
            vscode.window.showErrorMessage(`创建typinds文件夹失败: ${err}`);
        }
        return copyFile();
    });
}

module.exports = createTypeDefinition;

