<template>
    <issues-list
        :issues='issues'
    />
</template>

<script>
    import issues from '~/wad/issues.json';
    import IssuesList from '~/components/issues-list.vue';
    import { isClosedIssue } from '../utils/issues.utils';

    export default {
        name: 'closed-issues-container',
        components: { IssuesList },
        data: () => ({
            issues: issues.filter(isClosedIssue),
            IssuesList,
        }),
    };
</script>
