<template>
    <issues-list
        :issues='issues'
    />
</template>

<script>
    import issues from '~/wad/issues.json';
    import IssuesList from '~/components/issues-list.vue';
    import { isOpenedIssue } from '../utils/issues.utils';

    export default {
        name: 'open-issues-container',
        components: { IssuesList },
        data: () => ({
            issues: issues.filter(isOpenedIssue),
            IssuesList,
        }),
    };
</script>
