import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'; // 组件自动全局注册
import AutoImport from  'unplugin-auto-import/vite' // vue方法自动引入
import VitePrettier from 'vite-plugin-prettier' // 代码格式化
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
      imports: ['vue']
    }),
    VitePrettier({
        singleQuote: true,// 字符串是否使用单引号
        printWidth: 200, //行宽
        semi: true, //分号
        useTabs: false, //使用 tab 缩进
        tabWidth: 4, //缩进
        trailingComma: 'es5', //后置逗号，多行对象、数组在最后一行增加逗号
        arrowParens: 'avoid', //箭头函数只有一个参数的时候可以忽略括号
        bracketSpacing: true, //括号内部不要出现空格
        proseWrap: 'preserve', //换行方式 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
        endOfLine: 'auto', // 结尾是 \n \r \n\r auto
        jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
        jsxBracketSameLine: false, //在jsx中把'>' 是否单独放一行
        stylelintIntegration: false, //不让prettier使用stylelint的代码格式进行校验
        eslintIntegration: false, //不让prettier使用eslint的代码格式进行校验
        tslintIntegration: false, // 不让prettier使用tslint的代码格式进行校验
        // disableLanguages: ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
        htmlWhitespaceSensitivity: 'css',
        ignorePath: '.prettierignore', // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
        requireConfig: false, // Require a 'prettierconfig' to format prettier
    })
]
export default plugins