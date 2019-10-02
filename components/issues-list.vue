<template>
    <a-list
        :data-source='issues'
        :header='headerText'
    >
        <a-list-item
            slot="renderItem"
            slot-scope="item"
        >
            <a-list-item-meta>
                <nuxt-link
                    slot="title"
                    :to='`/issue/${item.number}`'
                >
                    <code>[{{ item.number }}]</code>
                    <b>{{ item.title }}</b>
                    <i>{{ item.comments ? `(${item.comments} comment${item.comments == 1 ? '' : 's'})` : '' }}</i>
                </nuxt-link>
            </a-list-item-meta>
        </a-list-item>
    </a-list>
</template>

<script>
    import AntDesign from 'ant-design-vue';
    import { emptyArray, booleanFalse, emptyString } from '../utils/prop-types.utils';

    export default {
        name: 'issues-list',
        props: {
            issues: emptyArray(),
            showStatus: booleanFalse(),
            header: emptyString(),
        },
        computed: {
            headerText() {
                return this.header || `Issues: ${this.issues.length}`;
            }
        },
    };
</script>
