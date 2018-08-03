/**
 * @file js configuration
 * @author zhuyeqing
 */

const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

module.exports = () => {
    let jsConfigDestFile = path.join(vscode.workspace.rootPath, 'jsconfig.json');
    return fs.open(jsConfigDestFile, 'a', (err, fd) => {
        fs.closeSync(fd);
    });
};
