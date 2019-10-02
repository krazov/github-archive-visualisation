<template>
    <main>
        <header-container />
        <navigation :current='["merged"]' />
        <closed-pull-requests-container/>
    </main>
</template>

<script>
    import HeaderContainer from '~/containers/header-container.vue';
    import Navigation from '~/components/navigation.vue';
    import ClosedPullRequestsContainer from '~/containers/closed-pull-requests-container.vue';

    export default {
        components: {
            HeaderContainer,
            Navigation,
            ClosedPullRequestsContainer,
        },
    };
</script>

<style scoped src="~/css/main.css"></style>
