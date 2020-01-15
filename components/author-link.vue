<template>
    <a :href='`..${url}.html`'>{{ author }}</a>
    <!--<nuxt-link :to='url'>{{ author }}</nuxt-link>-->
</template>

<script>
    import { requireString } from '../utils/prop-types.utils';

    export default {
        name: 'author-link',
        props: {
            author: requireString(),
        },
        computed: {
            url() {
                return `/issues-by/${this.author}`;
            },
        },
    };
</script>
