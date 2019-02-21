<template>
  <header class="header-container">
    <nav class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
          <router-link :to="$site.base" class="navbar-item"><span class="site-brand" @click="forcedUntoggle">{{ $themeConfig.brand }}</span></router-link>
          <div class="navbar-burger" :class="{ 'is-active': isActive }" data-target="main-navbar-menu" @click="toggle">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': isActive }" id="main-navbar-menu">
          <div class="navbar-end">
            <router-link class="navbar-item" v-for="item in $themeConfig.nav" :key="item.text" :to="item.link"><div @click="forcedUntoggle">{{ item.text }}</div></router-link>
            <a class="navbar-item" :href="githubLink" v-if="githubLink">GitHub</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false
    }
  },
  computed: {
    githubLink: function() {
      return (
        this.$themeConfig.github ?
        "https://github.com/" + this.$themeConfig.github :
        null
      )
    }
  },
  methods: {
    toggle: function() {
      this.isActive = !this.isActive;
    },
    forcedUntoggle: function() {
      this.isActive = false;
    }
  }
}
</script>

<style scoped>
.header-container {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 10;
}
.site-brand {
  font-weight: bold;
}

@media screen and (max-width: 751px) {
  .navbar-menu {
    max-height: 320px;
    overflow-y: scroll;
    display: none;
    z-index: 5;
    position: absolute;
  }
  .navbar-menu.is-active {
    box-shadow: 0 10px 15px -4px rgba(0, 0, 0, .5);
    display: block;
    transform: translate(0, 52px);
    position: absolute;
    top: 0px;
    width: 65%;
    right: -15px;
  }
}
</style>
