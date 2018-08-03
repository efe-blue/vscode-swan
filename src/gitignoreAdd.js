/**
 * @file gitignore add
 * @author zhuyeqing
 * @param {string} data
 */

const fs = require('fs');
const path = require('path');
const vscode = require('vscode');

module.exports = data => {
    let gitignorePath = path.join(vscode.workspace.rootPath, '.gitignore');
    return fs.open(gitignorePath, 'r+', (err, fd) => {
        if (err) {
            return;
        }
        fs.write(fd, data, err => {
            if (err) {
                return;
            }
            fs.closeSync(fd);
        });
    });
};
