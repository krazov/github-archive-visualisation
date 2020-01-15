<template>
    <a-menu
        v-model="current"
        mode="horizontal"
    >
        <a-menu-item key="opened">
            <a :href="`${tab == 'none' ? '..' : '.'}/opened-issues.html`">
                <a-icon type="heat-map" />Opened issues
            </a>
        </a-menu-item>
        <a-menu-item key="closed">
            <a :href="`${tab == 'none' ? '..' : '.'}/closed-issues.html`">
                <a-icon type="delete" />Closed issues
            </a>
        </a-menu-item>
        <a-menu-item key="prs">
            <a :href="`${tab == 'none' ? '..' : '.'}/opened-pull-requests.html`">
                <a-icon type="branches" />Opened pull requests
            </a>
        </a-menu-item>
        <a-menu-item key="merged">
            <a :href="`${tab == 'none' ? '..' : '.'}/closed-pull-requests.html`">
                <a-icon type="fork" />Closed pull requests
            </a>
        </a-menu-item>
    </a-menu>
    <!--<a-menu
        v-model="current"
        mode="horizontal"
    >
        <a-menu-item key="opened">
            <nuxt-link to="/opened-issues">
                <a-icon type="heat-map" />Opened issues
            </nuxt-link>
        </a-menu-item>
        <a-menu-item key="closed">
            <nuxt-link to="/closed-issues">
                <a-icon type="delete" />Closed issues
            </nuxt-link>
        </a-menu-item>
        <a-menu-item key="prs">
            <nuxt-link to="/opened-pull-requests">
                <a-icon type="branches" />Opened pull requests
            </nuxt-link>
        </a-menu-item>
        <a-menu-item key="merged">
            <nuxt-link to="/closed-pull-requests">
                <a-icon type="fork" />Closed pull requests
            </nuxt-link>
        </a-menu-item>
    </a-menu>-->
</template>

<script>
    import AntDesign from 'ant-design-vue';
    import { defaultArray } from '../utils/prop-types.utils';

    export default {
        name: 'navigation',
        props: {
            current: defaultArray(['opened']),
        },
        computed: {
            tab() {
                return this.current[0];
            },
        },
    };
</script>

<style scoped>

</style>
