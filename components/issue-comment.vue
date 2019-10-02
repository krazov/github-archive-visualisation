<template>
    <section>
        <a-card :title='commentedBy'>
            <span slot="extra">{{ commentedOn }}</span>
            <div class="body" v-html='body'></div>
        </a-card>
    </section>
</template>

<script>
    import AntDesign from 'ant-design-vue';
    import remarked from 'remarked';
    import AuthorLink from '~/components/author-link.vue';
    import { requireObject } from '../utils/prop-types.utils';
    import { author, body, date } from '../utils/issues.utils';

    export default {
        name: 'issue-comment',
        props: {
            comment: requireObject,
        },
        computed: {
            id() {
                return this.comment.id;
            },
            commentedBy() {
                return this.$createElement(AuthorLink, {
                    props: {
                        author: author(this.comment),
                    }
                });
            },
            commentedOn() {
                return date(this.comment.created_at);
            },
            body() {
                return remarked(body(this.comment));
            },
        },
    };
</script>

<style scoped src="~/css/markdown-content.css"></style>

<style scoped>
    section {
        margin-top: 1em;
    }
</style>
