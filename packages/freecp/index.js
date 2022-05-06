const chalk = require('chalk');
const { Command } = require('commander');
const program = new Command();
const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');
function checkFile(origin, dest, options) {
    const cwd = process.cwd();
    origin = path.isAbsolute(origin) ? origin : path.join(cwd, origin);
    dest = path.isAbsolute(dest) ? dest : path.join(cwd, dest);
    const fileInfo = fs.statSync(origin);
    console.log('options', options);
    const newFileName = options.rename ? options.rename : '';
    let fileName = path.basename(origin);
    if (newFileName) {
        if (fileInfo.isFile()) {
            fileName = newFileName + path.extname(origin);
        } else {
            fileName = newFileName;
        }
    }
    if (!fs.existsSync(origin)) {
        console.error('原路径不存在');
    } else {
        if (!fs.existsSync(dest)) {
            fs.mkdirpSync(dest);
            if (fileInfo.isFile()) {
                cpFile(origin, path.resolve(dest, fileName));
            } else {
                cpDirFile(origin, dest);
            }
        } else {
            if (fileInfo.isFile()) {
                cpFile(origin, path.resolve(dest, fileName));
            } else {
                cpDirFile(origin, dest);
            }
        }
    }
}

function cpFile(origin, dest) {
    fs.copyFileSync(origin, dest);
}
function cpDirFile(url, dest, newFileName = '') {
    const currentFiles = fs.readdirSync(url);
    if (currentFiles.length == 0) {
        // console.error('目录下没有文件', url);
    } else {
        // console.error('目录下有文件', url);
    }
    currentFiles.forEach(item => {
        let fileUrl = path.resolve(url, item);
        let info = fs.statSync(fileUrl);
        if (info.isFile()) {
            let destPath = path.resolve(dest, item);

            if (fs.existsSync(destPath)) {
            } else {
                fs.copyFileSync(fileUrl, path.resolve(dest, item));
            }
        }
        if (info.isDirectory()) {
            fs.copySync(fileUrl, path.resolve(dest, item));
        }
    });
}
module.exports = {
    checkFile,
};
