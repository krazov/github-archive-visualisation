<template>
    <section>
        <a-card :title='issueTitle'>
            <span slot="extra">#{{ id }}</span>
            <h1>{{ title }}</h1>
            <p><b>Opened by:</b> <author-link :author='openedBy' /></p>
            <p><b>Opened on:</b> {{ openedOn }}</p>
            <div v-if='body' class="body" v-html='body'></div>
        </a-card>
    </section>
</template>

<script>
    import AntDesign from 'ant-design-vue';
    import remarked from 'remarked';
    import AuthorLink from '~/components/author-link.vue';
    import { requireObject } from '../utils/prop-types.utils';
    import { author, body, date, isPR } from '../utils/issues.utils';

    export default {
        name: 'issue-details',
        components: { AuthorLink },
        props: {
            issue: requireObject(),
        },
        computed: {
            id() {
                return this.issue.number || '^_^#';
            },
            issueTitle() {
                return this.issue
                    ? isPR(this.issue)
                        ? `Pull request #${this.id}`
                        : `Issue #${this.id}`
                    : `#${this.id}`;
            },
            title() {
                return this.issue.title || '';
            },
            openedBy() {
                return author(this.issue);
            },
            openedOn() {
                return date(this.issue.created_at);
            },
            body() {
                return remarked(body(this.issue));
            }
        },
    };
</script>

<style scoped src="~/css/markdown-content.css"></style>

<style scoped>
    h1 {
        font-size: 1.75em;
    }
    .body {
        border-top: 1px dotted silver;
        margin-top: 2em;
        padding-top: 2em
    }
</style>
