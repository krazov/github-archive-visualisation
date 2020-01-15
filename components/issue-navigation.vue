<template>
    <nav>
        <a href='../index.html'>Home</a> •
        <a href='../opened-issues.html' v-if='isOpenedIssue'>Opened issues</a>
        <a href='../closed-issues.html' v-else-if='isClosedIssue'>Closed issues</a>
        <a href='../opened-issues.html' v-else-if='isOpenedPullRequest'>Opened pull requests</a>
        <a href='../opened-issues.html' v-else-if='isClosedPullRequest'>Closed pull requests</a>
    </nav>
    <!--<nav>
        <nuxt-link to='/'>Home</nuxt-link> •
        <nuxt-link to='/opened-issues' v-if='isOpenedIssue'>Opened issues</nuxt-link>
        <nuxt-link to='/closed-issues' v-else-if='isClosedIssue'>Closed issues</nuxt-link>
        <nuxt-link to='/opened-issues' v-else-if='isOpenedPullRequest'>Opened pull requests</nuxt-link>
        <nuxt-link to='/opened-issues' v-else-if='isClosedPullRequest'>Closed pull requests</nuxt-link>
    </nav>-->
</template>

<script>
    import { booleanFalse } from '../utils/prop-types.utils';

    export default {
        name: 'issue-navigation',
        props: {
            isOpenedIssue: booleanFalse(),
            isClosedIssue: booleanFalse(),
            isOpenedPullRequest: booleanFalse(),
            isClosedPullRequest: booleanFalse(),
        }
    };
</script>

<style scoped>
    nav {
        margin-bottom: 1em;
    }
</style>
