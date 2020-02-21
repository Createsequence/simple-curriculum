<template>
    <div>

        <extend-list title="成绩工具">
            <extend-list-item fa-icon="fa-list" text="成绩查询" to="www.baidu.com"/>
            <extend-list-item fa-icon="fa-bar-chart" text="成绩分析" to="www.baidu.com"/>
        </extend-list>

        <extend-list title="考试工具">
            <extend-list-item fa-icon="fa-home" text="考场查询" to="www.baidu.com"/>
        </extend-list>

    </div>
</template>

<script>
    import ExtendList from "./ExtendList/ExtendList";
    import ExtendListItem from './ExtendList/ExtendListItem';

    export default {
        name: "Extend",
        components: {
            ExtendList,
            ExtendListItem
        }
    }
</script>

<style scoped>

</style>