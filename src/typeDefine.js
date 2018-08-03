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
            return;
        }

        fs.writeFile(typingsDestFile, data, err => {
            if (err) {
                return;
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
            return;
        }
        return copyFile(typingsDestDir);
    });
};
