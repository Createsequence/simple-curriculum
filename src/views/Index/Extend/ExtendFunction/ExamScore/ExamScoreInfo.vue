<template>
    <!--如果不重课-->
    <van-cell-group>
        <van-cell>课程：{{ score.courseName }}</van-cell>
        <van-cell>开课时间：{{ score.startDate }}</van-cell>
        <van-cell>课程编号：{{ score.courseNumber }}</van-cell>
        <van-cell>成绩：{{ score.grade }}</van-cell>
        <van-cell>学分：{{ score.credit }}</van-cell>
        <van-cell>学时：{{ score.totalTime }}</van-cell>
        <van-cell>绩点：{{ score.gardePoint }}</van-cell>
        <van-cell>课程性质：{{ score.properties }}</van-cell>
    </van-cell-group>
</template>

<script>

    const defaultScore = {
        "startDate": "2018-2019-2",
        "courseNumber": "B881606",
        "courseName": "形势与政策2",
        "grade": 86,
        "credit": 0.5,
        "totalTime": "8",
        "gardePoint": 4.1,
        "properties": "必修"
    };

    export default {
        name: "ExamScoreInfo",
        props: {
            score: {
                default: defaultScore
            }
        }
    }
</script>

<style scoped>

</style>