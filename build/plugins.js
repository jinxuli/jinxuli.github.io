import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite' // 组件自动全局注册
import AutoImport from 'unplugin-auto-import/vite' // vue方法自动引入
import VitePrettier from 'vite-plugin-prettier' // 代码格式化
import prettierConfig from './prettier.js'
const plugins = [
  vue(),
  Components({
    dirs: ['src/baseComponents'], //自动导入组件-指定组件位置，默认是src/components
    include: [/\.vue$/, /\.vue\?vue/, /\.jsx$/], // 用于转换目标的过滤器
    dts: 'src/components.d.ts', // 配置文件生成位置-自动生成
    deep: true, // 搜索子目录
  }),
  AutoImport({
    // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    imports: ['vue'],
  }),
  VitePrettier(prettierConfig()),
]
export default plugins
