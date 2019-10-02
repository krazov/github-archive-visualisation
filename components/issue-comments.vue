<template>
    <section>
        <h2 v-if='hasComments'>Comments:</h2>
        <issue-comment
            v-for='comment of comments'
            :key='comment.id'
            :comment='comment'
        />
    </section>
</template>

<script>
    import IssueComment from '~/components/issue-comment.vue';
    import { requireArray } from '../utils/prop-types.utils';

    export default {
        name: 'issue-comments',
        components: { IssueComment },
        props: {
            comments: requireArray(),
        },
        computed: {
            hasComments() {
                return this.comments.length > 0;
            },
        },
    };
</script>

<style scoped>
    h2 {
        margin-top: 1em;
    }
</style>
