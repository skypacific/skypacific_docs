<template>
    <div>
        <div v-for="post in posts">
            <hr/>

            <h2>
                <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
            </h2>

            <p>{{ post.frontmatter.excerpt }}</p>

            <span><p><i>{{ post.frontmatter.categories }} @ {{ post.frontmatter.date.substring(0,10) }}</i></p><p> <router-link :to="post.path">Read more</router-link></p></span>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            posts() {
                return this.$site.pages
                    .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index)
                    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
            }
        }
    }
</script>
