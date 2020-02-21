<template>
    <div>
        <van-cell-group class="schedule-info" v-if="course.children == null">
            <van-cell>{{ course.courseName }}</van-cell>
            <van-cell>教室：{{ course.courseClassroom }}</van-cell>
            <van-cell>讲师：{{ course.courseTeacher }}</van-cell>
            <van-cell>时间：{{ course.courseDate }}</van-cell>
        </van-cell-group>

        <van-cell-group v-else v-for="(course,index) in course.children">
            <span slot="title">第{{ index + 1 }}节课</span>
            <van-cell>{{ course.courseName }}</van-cell>
            <van-cell>教室：{{ course.courseClassroom }}</van-cell>
            <van-cell>讲师：{{ course.courseTeacher }}</van-cell>
            <van-cell>时间：{{ course.courseDate }}</van-cell>

        </van-cell-group>

    </div>
</template>

<script>
    const defaultCourse = {
        "courseName": "复合材料结构设计基础",
        "courseClassroom": "文科楼236",
        "courseDate": "5-12(周)",
        "courseTeacher": "沈燕讲师,赵军副教授,郭云力",
        "isEmptyCourse": false,
        "children": null
    }

    export default {
        name: "ScheduleInfo",
        props: {
            course: defaultCourse
        },
        data() {
            return {
                courseList: []
            }
        },
        computed: {}
    }
</script>

<style scoped>
</style>