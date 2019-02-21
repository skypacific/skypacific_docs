<template>
  <div class="page-container">
    <Header/>
    <Home v-if="$frontmatter.layout=='home'"/>
    <Article v-else/>
    <Footer/>
  </div>
</template>

<script>
import Vue from 'vue'
import dayjs from 'dayjs'
import nprogress from 'nprogress'

import Header from './partial/Header.vue'
import Footer from './partial/Footer.vue'

import Home from './inner/Home.vue'
import Article from './inner/Article.vue'

export default {
  components: { Header, Footer, Home, Article },
  created: function() {
    // Convert date string to dayjs object
    this.$site.pages.forEach(page => {
      page.date = page.frontmatter.date ?
        dayjs(page.frontmatter.date) :
        dayjs(page.lastUpdated)
    })
  },
  mounted: function() {
    document.addEventListener("touchstart", function(){}, true)
    // nprogress
    nprogress.configure({ showSpinner: false })
    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start()
      }
      next()
    })
    this.$router.afterEach(function() {
      nprogress.done()
    })
  }
}
</script>

<style src="@fortawesome/fontawesome-free/css/all.min.css"></style>
<style src="bulma-jupiter/dist/bulma-jupiter.min.css"></style>
<style src="../styles/nprogress.css"></style>
<style src="../styles/fix.css"></style>

<style>
@import url("https://fonts.proxy.ustclug.org/css?family=IBM+Plex+Sans:400,400i,600,600i|IBM+Plex+Mono");
@import url("/css/nerd-fonts-generated.css");
</style>
