export const xssOptions = {
    // 默认白名单参考 xss.whiteList
    whiteList: {
        p: ['style']
    },
    stripIgnoreTag: true, // 去掉不在白名单上的标签   true：去掉不在白名单上的标签
    stripIgnoreTagBody: ['script', 'style'] // 去掉不在白名单上的标签及标签体
}
