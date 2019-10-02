<template>
    <main>
        <header-container />
        <navigation :current='["none"]' />
        <issues-by-author-container :author='author' />
    </main>
</template>

<script>
    import issues from '~/wad/issues.json';
    import HeaderContainer from '~/containers/header-container.vue';
    import Navigation from '~/components/navigation.vue';
    import IssuesByAuthorContainer from '~/containers/issues-by-author-container.vue';

    export default {
        components: {
            HeaderContainer,
            Navigation,
            IssuesByAuthorContainer,
        },
        data: () => ({
            author: '',
        }),
        asyncData: async ({ params: { author }}) => ({
            author,
        }),
    };
</script>

<style scoped src="~/css/main.css"></style>
