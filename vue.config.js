module.exports = {
    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch')
    },
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: "dist",
};