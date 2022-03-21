// @ts-nocheck
module.exports = {
    api: '/baseServiceApi',
    response: function (req, res, fs) {
        const result = require('../utils.ts').readFile(fs, './mock/base_service/respData.json')
        res.json(result)
    }
}
