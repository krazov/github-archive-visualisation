<template>
    <main>
        <header-container />
        <navigation :current='["closed"]' />
        <closed-issues-container/>
    </main>
</template>

<script>
    import HeaderContainer from '~/containers/header-container.vue';
    import Navigation from '~/components/navigation.vue';
    import ClosedIssuesContainer from '~/containers/closed-issues-container.vue';

    export default {
        components: {
            HeaderContainer,
            Navigation,
            ClosedIssuesContainer,
        },
    };
</script>

<style scoped src="~/css/main.css"></style>
