module.exports = {
  // 指定环境
  env: {
    // 可以使用浏览器的全局变量
    browser: true,
    // 添加所有 ECMAScript 2021 的全局变量，并自动将解析器选项 ecmaVersion 设置为 12
    es2021: true,
    // 添加node全局变量
    node: true,
  },
  // 自定义全局变量
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    $confirm: "readonly",
    $message: "readonly",
    $notify: "readonly",
    $alert: "readonly",
    $storage: "readonly",
    $loading: "readonly",
    localStorage: "off",
    sessionStorage: "off",
  },
  // vue文件解析器
  parser: "vue-eslint-parser",
  parserOptions: {
    // es 语法的版本
    ecmaVersion: "latest",
    // 代码类型
    sourceType: "module",
  },
  extends: [
    "./.eslintrc-auto-import.json",
    // https://zh-hans.eslint.org/docs/latest/rules/ 推荐配置
    "eslint:recommended",
    // https://eslint.vuejs.org/
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    // https://github.com/prettier/eslint-plugin-prettier
    "plugin:prettier/recommended",
  ],
  plugins: ["vue", "prettier"],
  rules: {
    // 校验prettier规则
    "prettier/prettier": "warn",
    // 箭头函数规范
    "arrow-body-style": "off",
    // 使用箭头函数作为参数传递
    "prefer-arrow-callback": "off",
    // debugger
    "no-debugger": "off",
    // 为空的代码块
    "no-empty": "off",
    // 未使用的变量
    "no-unused-vars": "off",
    // 强制使用===
    eqeqeq: ["error", "always"],
    // 组件命名格式
    "vue/multi-word-component-names": "off",
    "vue/no-unused-components": "off",
    "vue/no-unused-vars": "off",
    // 组件参数格式
    "vue/max-attributes-per-line": "off",
    // 单个标签内容格式
    "vue/singleline-html-element-content-newline": "off",
  },
};
