import { defineConfig } from 'vite';
// 插件配置
import plugins from './build/plugins';
import path from 'path';
export default defineConfig({
    plugins,
    resolve: {
        alias: {
            // 添加一个别名 "@components" 指向 "src/components" 目录
            '@components': path.resolve(__dirname, 'src/components'),
            '@assets': path.resolve(__dirname, 'src/assets'),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                // 配置全局less变量
                javascriptEnabled: true,
                additionalData: `@import "${path.resolve(__dirname, 'src/theme/theme.less')}";`,
            },
        },
    },
    base: './',
});
