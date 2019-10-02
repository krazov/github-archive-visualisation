<template>
    <issues-list
        :issues='issues'
    />
</template>

<script>
    import issues from '~/wad/issues.json';
    import IssuesList from '~/components/issues-list.vue';
    import { isOpenedPR} from '../utils/issues.utils';

    export default {
        name: 'open-pull-requests-container',
        components: { IssuesList },
        data: () => ({
            issues: issues.filter(isOpenedPR),
            IssuesList,
        }),
    };
</script>
