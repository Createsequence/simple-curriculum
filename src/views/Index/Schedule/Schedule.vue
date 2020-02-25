<template>
    <div>
        <!--日期-->
        <div class="box days">
            <div class="boxItem" v-for="day in days">
                {{ day }}
            </div>
        </div>

        <!--课表栏-->
        <div class="coursesBox">
            <div class="box courses" v-for="data in schedules">
                <button class="boxItem course"
                        v-for="course in data"
                        :class="{ 'course-mult'
                        : hasChild(course)}"
                        @click="showInfo(course)"
                >

                    <!--不显示空课-->
                    <span v-if="!course.isEmptyCourse && course.children == null">
                        {{ course.courseName + '@' + course.courseClassroom }}
                    </span>

                    <!--重课只显示第一节-->
                    <span v-if="course.children != null">
                    <div class="course-mult-tip">[重课]</div>
                    {{ course.children[0].courseName + '@' + course.children[0].courseClassroom}}
                </span>

                </button>
            </div>
        </div>

        <!--展示详细信息的上拉菜单-->
        <van-action-sheet v-model="show" title="课程信息">
            <schedule-info :course="courseInfo" />
        </van-action-sheet>

        <!--用于垫高表格防止被标签栏遮住-->
        <div class="fill" />
    </div>
</template>

<script>
    import ScheduleInfo from "./ScheduleInfo";
    import storage from "../../../model/storage";
    import { requestSchedule } from '../../../network/request';

    export default {
        name: "Schedule",
        components: {
            ScheduleInfo
        },
        data() {
            return {
                days: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
                show: false,
                schedules: [],
                courseInfo: {}
            }
        },
        methods: {
            /*判断是否重课*/
            hasChild(course) {
                return course.children != null;
            },
            /*判断是否空课*/
            showInfo(course) {
                if (!course.isEmptyCourse){
                    this.courseInfo = course;
                    this.show = true;
                }
            }
        },
        mounted() {
            //判断课表是否缓存
            if (!storage.contains("schedules")) {
                //无缓存时查询
                requestSchedule()
                    .then(req => {
                        console.log("课表未缓存，已请求成功");
                        this.schedules = req;
                        //缓存课表
                        storage.set("schedules", req);
                    });
            } else {
                //否则直接调用缓存数据
                console.log("已有缓存数据，直接从缓存中获取课表");
                this.schedules = storage.get("schedules");
            }
        }
    }
</script>

<style scoped>
    .box {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;

        text-align: center;
        font-size: 14px;
    }
    .boxItem {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }
    /*日期*/
    .days {
        padding: 3px 0px;
    }
    /*课表*/
    .coursesBox {
        border-bottom: white ridge 1px;
    }
    .courses {
        border-right: white ridge 1px;
    }
    .course {
        border: white ridge 1px;
        border-left: white ridge 0;
        border-bottom: white ridge 0;
        padding: 3px;

        background-color: var(--main-blue);

        height: 130px;

        font-size: 12px;
        font-weight: bold;
    }
    .course-mult {
        background-color: var(--main-red);
    }
    .course-mult-tip {
        color: white;
    }
</style>