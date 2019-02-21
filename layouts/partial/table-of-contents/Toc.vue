<template>
  <div class="toc-container" v-if="$frontmatter.toc">
    <transition name="toc-transition"><Sidebar v-show="isActive"/></transition>
    <div class="toggle-mask" v-show="isActive" @click="isActive = false"></div>
    <button class="toc-button button is-primary" @click="isActive = !isActive">
      <transition name="toc-button-transition-contents"><span v-if="!isActive" class="toc-button-text">목차보기</span></transition>
      <transition name="toc-button-transition-hide"><span v-if="isActive" class="toc-button-text">목차감춤</span></transition>
    </button>
  </div>
</template>

<script>
import util from './util'
import Sidebar from './Sidebar.vue'
export default {
  components: { Sidebar },
  data: function() {
    return { isActive: false }
  },
  mounted() {
    util.toc()
  },
  watch: {
    '$route' () {
      util.clear()
      util.toc()
    }
  }
}
</script>

<style scoped>
.toc-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 70px;
  height: 30px;
  border: none;
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);
  z-index: 50;
  cursor: pointer;
  transition: all 300ms ease-in-out;
}
.toc-button-text {
  position: fixed;
  right: 30px;
  bottom: 25px;
  width: 70px;
  height: 30px;
  font-size: 0.9rem;
}

.toc-transition-enter-active, .toc-transition-leave-active {
  transition: all 300ms;
}
.toc-transition-enter, .toc-transition-leave-to {
  opacity: 0;
  transform: translate(100%, 0);
}

.toc-button-transition-contents-enter-active, .toc-button-transition-contents-leave-active {
  transition: all 300ms;
}
.toc-button-transition-contents-enter {
  opacity: 0;
  transform: translate(20px, 0);
}
.toc-button-transition-contents-leave-to {
  opacity: 0;
  transform: translate(-20px, 0);
}

.toc-button-transition-hide-enter-active, .toc-button-transition-hide-leave-active {
  transition: all 300ms;
}
.toc-button-transition-hide-enter {
  opacity: 0;
  transform: translate(20px, 0);
}
.toc-button-transition-hide-leave-to {
  opacity: 0;
  transform: translate(-20px, 0);
}

.toggle-mask {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 25;
}
</style>
