/**
 * @file js configuration
 * @author zhuyeqing
 */

const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

module.exports = () => {
    new Promise((resolve, reject) => {
            let jsConfigDestFile = path.join(vscode.workspace.rootPath, 'jsconfig.json');
            fs.open(jsConfigDestFile, 'a', (err, fd) => {
                if (err) {
                    reject();
                }
                fs.closeSync(fd);
                resolve();
            });
        });
};
