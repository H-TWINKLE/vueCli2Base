const path = require('path')
const fs = require('fs')
const mockDirPath = path.resolve(__dirname, './mock')

function mockProxy(app, mockDir) {
    fs.readdirSync(mockDir).forEach(function (file) {
        if (file !== 'utils.ts' && !file.endsWith('.json')) {
            const filePath = path.resolve(mockDir, file)
            if (fs.statSync(filePath).isDirectory()) {
                mockProxy(app, filePath)
            } else {
                const mock = require(filePath)
                // 请求转发，可跨域
                app.use(mock.api, function (req, res) {
                    mock.response(req, res, fs)
                })
            }
        }
    })
}

const isMock = process.env.VUE_APP_MOCK
const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
    if (isMock) {
        console.log('\x1B[33m%s\x1b[0m', '===================== mock ===================')
    } else {
        console.log('\x1B[33m%s\x1b[0m', '===================== debugging ===================')
    }
}

const configProxy = 'http://127.0.0.1:8080'
module.exports = {
    publicPath: '/',
    productionSourceMap: false,
    indexPath: 'static/index.html',
    assetsDir: 'static/',
    runtimeCompiler: true,
    devServer: {
        open: true,
        port: 9010,
        before: function (app) {
            if (process.env.VUE_APP_MOCK) {
                mockProxy(app, mockDirPath)
            }
        },
        proxy: isDev && !isMock ? configProxy : ''
    },
    //  全局使用less变量
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/less/public.less')
            ]
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({
                        // 换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
                        rootValue: 102.4,
                        // 允许REM单位增长到的十进制数字。
                        unitPrecision: 5,
                        // 默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                        propWhiteList: [],
                        // 黑名单
                        propBlackList: [],
                        // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                        // 要忽略并保留为px的选择器
                        selectorBlackList: [],
                        // （boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                        ignoreIdentifier: false,
                        // （布尔值）替换包含REM的规则，而不是添加回退。
                        replace: true,
                        // （布尔值）允许在媒体查询中转换px。
                        mediaQuery: false,
                        // 设置要替换的最小像素值(3px会被转rem)。 默认 0
                        minPixelValue: 3
                    })
                ]
            }
        }
    }
}
