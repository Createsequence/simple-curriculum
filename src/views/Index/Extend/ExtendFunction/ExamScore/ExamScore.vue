<template>
    <div>
        <!--选择时间段的日期下拉菜单-->
        <van-sticky>
            <van-dropdown-menu active-color="#79A0CA">
                <van-dropdown-item v-model="schoolYear"
                                   :options="years"
                                   @change="filterData()"/>
            </van-dropdown-menu>
        </van-sticky>

        <!--成绩列表-->
        <van-cell-group>
            <van-cell v-for="score in scores" @click="showInfo(score)">
                <span slot="title">{{ score.courseName }}</span>
                <span class="exam-score" :class="{ 'exam-score-fail' : score.grade < 60 }">{{ score.grade }}</span>
            </van-cell>
        </van-cell-group>

        <!--展示详细信息的上拉菜单-->
        <van-action-sheet v-model="show" title="课程成绩">
            <exam-score-info :score="scoreInfo"/>
        </van-action-sheet>

        <div class="fill"/>
    </div>
</template>

<script>
    import scoreData from "../../scoreData";
    import ExamScoreInfo from "./ExamScoreInfo";
    import { Toast } from 'vant'

    export default {
        name: "ExamScore",
        components: {
            ExamScoreInfo
        },
        data() {
            return {
                schoolYear: 0,
                //是否展示上拉菜单
                show: false,
                //上拉菜单展示对象
                scoreInfo: {},
                years: [{text:'查询全部成绩', value: 0}],
                //用于展示的数据
                scores: scoreData,
                //源数据
                originScores: scoreData
            }
        },
        methods: {
            //根据选择的日期筛选要显示的课程成绩
            filterData() {
                let showYear = this.schoolYear;
                //判断是否展示全部
                if (showYear == 0) {
                    //如果展示全部，就还原数据
                    this.scores = this.originScores
                }else {
                    //否则根据学年筛选
                    let data = this.originScores.filter(score => score.startDate === showYear);
                    this.scores = data;
                }
                //如果没有数据就提示
                if (this.scores.length == 0) {
                    Toast.fail('该学年没有课程!');
                }
            },
            /*展示课程信息*/
            showInfo(score) {
                this.scoreInfo = score;
                this.show = true;
            }
        },
        created() {
            //获取当前年份
            let nowYear = new Date().getFullYear();
            //将最近四年的时间插入填入选项
            let i = 1;
            while (i < 5) {
                //拼接学年
                let startYear = nowYear - i;
                let endYear = nowYear - i + 1;

                //将每学年两学期分别填入集合
                let schoolYear1 = startYear + '-' + endYear + '-2';
                this.years.push({text: schoolYear1, value: schoolYear1})
                let schoolYear2 = startYear + '-' + endYear + '-1';
                this.years.push({text: schoolYear2, value: schoolYear2})

                i++;
            }
        }
    }
</script>

<style scoped>
    .exam-score {
        color: var(--main-green);
    }
    .exam-score-fail {
        color: var(--main-red);
    }
    .fill {
        border-bottom: 0;
    }
</style>