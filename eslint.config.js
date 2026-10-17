import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    ignores: ['out/**', 'dist_electron/**', 'src/renderer/src/assets/**']
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['src/main/**', 'src/preload/**', '*.config.js'],
    languageOptions: {
      globals: globals.node
    }
  },
  {
    files: ['src/renderer/**'],
    languageOptions: {
      globals: globals.browser
    }
  }
]
