module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'airbnb-base'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue'],
      },
    },
    'import/core-modules': ['vite', '@vitejs/plugin-vue'],
  },
  plugins: ['vue'],
  rules: {
    // eslint alert 關閉警報
    'no-alert': 'off',
    // 字數限制、排列
    // 'max-len': ['error', { code: 100, ignoreUrls: true, wrap: 'always' }],
  },
};
