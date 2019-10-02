<template>
    <h1>{{ header }}</h1>
</template>

<script>
    import { metaData } from '../meta/meta-data';

    export default {
        name: 'header-container',
        data: () => ({
            header: metaData.header,
        }),
    };
</script>

<style scoped>
    h1 {
        color: #35495e;
        display: block;
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 42px;
        font-weight: 300;
        letter-spacing: 1px;
        text-align: center;
    }
</style>
