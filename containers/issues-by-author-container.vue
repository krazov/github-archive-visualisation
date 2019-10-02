<template>
    <issues-list
        :issues='issues'
        :header='issuesBy'
    />
</template>

<script>
    import issues from '~/wad/issues.json';
    import IssuesList from '~/components/issues-list.vue';
    import { findIssuesByAuthor, isNotPR } from '../utils/issues.utils';
    import { requireString } from '../utils/prop-types.utils';

    export default {
        name: 'open-issues-container',
        components: { IssuesList },
        props: {
            author: requireString(),
        },
        data: () => ({
            issues: [],
        }),
        computed: {
            issuesBy() {
                return `Issues by: ${this.author}, issues: ${this.issues.length}`;
            },
        },
        created() {
            this.issues = findIssuesByAuthor(issues, this.author).filter(isNotPR);
        }
    };
</script>
