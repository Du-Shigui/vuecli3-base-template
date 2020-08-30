<template>
    <div class="page">
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </b-container>

    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data () {
        return {
            items: [{
                text: '资讯',
                href: '#'
            },
            {
                text: '正文',
                href: '#'
            },]
        }
    },
    components: {

    },
    created () {

    },
    mounted () {

    },
    methods: {

    },
    watch: {},
}
</script>

<style scoped>
/* @import url(); 引入公共css类 */
</style>
