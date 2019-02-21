// This file helps VuePress resolve and get the correct themePath
// See https://vuepress.vuejs.org/theme/writing-a-theme.html

module.exports = {
  plugins: [
    [ 'shiki', { theme: 'light_plus' } ],
    'latex'
  ]
}
