<template>
    <div>
        <!--顶部导航栏-->
        <nav-bar/>

        <!--内容-->
        <router-view/>

        <!--底部标签栏-->
        <tab-bar/>
    </div>
</template>

<script>
    import TabBar from "../../components/TabBar/TabBar";
    import NavBar from '../../components/NavBar/NavBar'

    export default {
        name: "Index",
        components: {
            TabBar,
            NavBar
        }
    }
</script>

<style scoped>

</style>