<template>
    <div class="article-container">
        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                            <h1 class="title">{{ $frontmatter.title }}</h1>
                            <p class="subtitle">{{ $frontmatter.excerpt }}</p>
                            <div class="content" v-if="$frontmatter.intro">
                                <p v-if="typeof($frontmatter.intro)=='string'" v-html="$frontmatter.intro"></p>
                                <div v-else>
                                    <p v-for="(para, i) in $frontmatter.intro" :key="i" v-html="para"></p>
                                </div>
                            </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="content">
                    <Content/>
                </div>
            </div>
        </section>
        <Toc/>
    </div>
</template>

<script>
    import Toc from '../partial/table-of-contents/Toc.vue'

    export default {
        components: {Toc}
    }
</script>

<style>

</style>
