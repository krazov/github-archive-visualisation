<template>
    <main>
        <issue-navigation
            :is-opened-issue='isOpenedIssue'
            :is-closed-issue='isClosedIssue'
            :is-opened-pull-request='isOpenedPullRequest'
            :is-closed-pull-request='isClosedPullRequest'
        />
        <issue-details :issue='issue'/>
        <issue-comments :comments='comments' />
    </main>
</template>

<script>
    import issues from '~/wad/issues.json';
    import comments from '~/wad/comments.json';
    import IssueNavigation from '~/components/issue-navigation.vue';
    import IssueDetails from '~/components/issue-details.vue';
    import IssueComments from '~/components/issue-comments.vue';
    import { findIssueById, isClosedIssue, isClosedPR, isOpenedIssue, isOpenedPR } from '../../utils/issues.utils';

    export default {
        name: '_id.vue',
        components: {
            IssueNavigation,
            IssueDetails,
            IssueComments,
        },
        data: () => ({
            issue: {},
            comments: [],
        }),
        asyncData: async ({ params: { id } }) => ({
            issue: findIssueById(issues, id) || {},
            comments: comments[id] || [],
        }),
        computed: {
            isOpenedIssue() {
                return isOpenedIssue(this.issue);
            },
            isClosedIssue() {
                return isClosedIssue(this.issue);
            },
            isOpenedPullRequest() {
                return isOpenedPR(this.issue);
            },
            isClosedPullRequest() {
                return isClosedPR(this.issue);
            },
        }
    };
</script>

<style scoped src="~/css/main.css"></style>
