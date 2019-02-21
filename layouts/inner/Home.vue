<template>
  <div class="home-container">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-4 has-text-centered" v-if="$frontmatter.logo">
              <img :src="$frontmatter.logo" width="200px"/>
            </div>
            <div class="column">
              <h1 class="title">{{ $site.title }}</h1>
              <p class="subtitle">{{ $site.description }}</p>
              <div class="content" v-if="$frontmatter.intro">
                <p v-if="typeof($frontmatter.intro)=='string'" v-html="$frontmatter.intro"></p>
                <div v-else>
                  <p v-for="(para, i) in $frontmatter.intro" :key="i" v-html="para"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="content"><Content/></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
