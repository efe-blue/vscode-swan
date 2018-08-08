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
 * @return {Promise<null>} promise
 */
module.exports = data => new Promise((resolve, reject) => {
    let gitignorePath = path.join(vscode.workspace.rootPath, '.gitignore');
    fs.open(gitignorePath, 'r+', (err, fd) => {
        if (err) {
            reject();
        }
        fs.write(fd, data, err => {
            if (err) {
                reject();
            }
            fs.closeSync(fd);
            resolve();
        });
    });
});
