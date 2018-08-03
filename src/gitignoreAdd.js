/**
 * @file gitignore add
 * @author zhuyeqing
 */

const fs = require('fs');
const path = require('path');
const vscode = require('vscode');

/**
 * 为.gitignore增加文件或者文件夹
 *
 * @param {string} data 添加到.gitignore中的文件或者文件夹
 * @return {Object}
 */
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
