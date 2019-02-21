<template>
  <footer class="section footer-container">
    <hr>
    <div class="container has-text-grey">
      <p>{{ footerString }}</p>
    </div>
  </footer>
</template>

<script>
import dayjs from 'dayjs'

export default {
  computed: {
    footerString: function() {
      return (
        this.$themeConfig.footer ?
        this.$themeConfig.footer :
        dayjs().format('YYYY') + ' @ ' + this.$site.title
      )
    }
  }
}
</script>

<style>

</style>
