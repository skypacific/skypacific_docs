<template>
  <div class="page-container">
    <div class="hero is-fullheight is-primary">
      <Header/>
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">404</h1>
          <p><router-link to="/">Go home</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './partial/Header.vue'
export default {
  components: { Header }
}
</script>

<style src="@fortawesome/fontawesome-free/css/all.min.css"></style>
<style src="bulma-jupiter/dist/bulma-jupiter.min.css"></style>
<style src="../styles/fix.css"></style>

<style>
@import url("https://fonts.proxy.ustclug.org/css?family=IBM+Plex+Sans:400,400i,600,600i|IBM+Plex+Mono");
@import url("/css/nerd-fonts-generated.css");
</style>
