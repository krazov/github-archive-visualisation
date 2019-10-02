<template>
    <main>
        <header-container />
        <navigation :current='["opened"]' />
        <open-issues-container/>
    </main>
</template>

<script>
    import HeaderContainer from '~/containers/header-container.vue';
    import Navigation from '~/components/navigation.vue';
    import OpenIssuesContainer from '~/containers/open-issues-container.vue';

    export default {
        components: {
            HeaderContainer,
            Navigation,
            OpenIssuesContainer,
        },
    };
</script>

<style scoped src="~/css/main.css"></style>
