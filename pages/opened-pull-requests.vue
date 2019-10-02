<template>
    <main>
        <header-container />
        <navigation :current='["prs"]' />
        <open-pull-requests-container/>
    </main>
</template>

<script>
    import HeaderContainer from '~/containers/header-container.vue';
    import Navigation from '~/components/navigation.vue';
    import OpenPullRequestsContainer from '~/containers/open-pull-requests-container.vue';

    export default {
        components: {
            HeaderContainer,
            Navigation,
            OpenPullRequestsContainer,
        },
    };
</script>

<style scoped src="~/css/main.css"></style>
