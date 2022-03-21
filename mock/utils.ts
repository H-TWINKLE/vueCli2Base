// @ts-nocheck
module.exports.readFile = (fs, path) => {
    try {
        const data = fs.readFileSync(path)
        return JSON.parse(data.toString())
    } catch (err) {
        console.error('读取文件失败：', err)
        return '读取失败'
    }
}

module.exports.writeFile = (fs, path, data) => {
    try {
        data = JSON.stringify(data)
        fs.writeFileSync(path, data)
        return true
    } catch (err) {
        console.error('写入失败：', err)
        return false
    }
}
