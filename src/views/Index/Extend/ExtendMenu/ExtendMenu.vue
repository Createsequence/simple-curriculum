<template>
    <div>
        <!--扩展功能菜单-->
        <extend-menu-list title="成绩工具">
            <extend-menu-list-item fa-icon="fa-list" text="成绩查询" to="/index/extend/examScore"/>
<!--            <extend-menu-list-item fa-icon="fa-bar-chart" text="成绩分析" to="www.baidu.com"/>-->
        </extend-menu-list>

        <!--<extend-menu-list title="考试工具">
            <extend-menu-list-item fa-icon="fa-home" text="考场查询"/>
        </extend-menu-list>-->
    </div>
</template>

<script>
    import ExtendMenuList from "./ExtendMenuList";
    import ExtendMenuListItem from "./ExtendMenuListItem";

    export default {
        name: "ExtendMenu",
        components: {
            ExtendMenuList,
            ExtendMenuListItem
        }
    }
</script>

<style scoped>

</style>