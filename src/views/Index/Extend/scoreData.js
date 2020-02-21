const scoreData = [
    {
        "startDate": "2017-2018-1",
        "courseNumber": "B031002",
        "courseName": "大学计算机基础",
        "grade": 78,
        "credit": 2,
        "totalTime": "40",
        "gardePoint": 3.3,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-1",
        "courseNumber": "B043010",
        "courseName": "无机及分析化学",
        "grade": 51,
        "credit": 4,
        "totalTime": "64",
        "gardePoint": 0,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-1",
        "courseNumber": "B043010",
        "courseName": "无机及分析化学",
        "grade": 66,
        "credit": 4,
        "totalTime": "64",
        "gardePoint": 2.1,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-1",
        "courseNumber": "B043010",
        "courseName": "无机及分析化学",
        "grade": 55,
        "credit": 4,
        "totalTime": "64",
        "gardePoint": 1,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-1",
        "courseNumber": "B043017",
        "courseName": "无机化学实验Ⅲ",
        "grade": 76,
        "credit": 0.7,
        "totalTime": "24",
        "gardePoint": 3.1,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-1",
        "courseNumber": "B071501",
        "courseName": "科技发展与学科专业概论",
        "grade": 80,
        "credit": 1,
        "totalTime": "16",
        "gardePoint": 3.5,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-1",
        "courseNumber": "B101401",
        "courseName": "大学英语Ⅰ",
        "grade": 70,
        "credit": 4,
        "totalTime": "64",
        "gardePoint": 2.5,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-1",
        "courseNumber": "B113103",
        "courseName": "高等数学Ⅱ(上)",
        "grade": 90,
        "credit": 5,
        "totalTime": "80",
        "gardePoint": 4.5,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-1",
        "courseNumber": "B151001",
        "courseName": "大学体育（1）",
        "grade": 86,
        "credit": 1,
        "totalTime": "32",
        "gardePoint": 4.1,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-1",
        "courseNumber": "B191001",
        "courseName": "大学生职业生涯规划",
        "grade": 88,
        "credit": 1,
        "totalTime": "16",
        "gardePoint": 4.3,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-1",
        "courseNumber": "B197001",
        "courseName": "军事理论与技能",
        "grade": 93,
        "credit": 2,
        "totalTime": "0",
        "gardePoint": 4.8,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-1",
        "courseNumber": "B881601",
        "courseName": "思想道德修养与法律基础",
        "grade": 67,
        "credit": 3,
        "totalTime": "64",
        "gardePoint": 2.2,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-1",
        "courseNumber": "B881610",
        "courseName": "中国传统文化概论",
        "grade": 82,
        "credit": 1,
        "totalTime": "16",
        "gardePoint": 3.7,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "0131289",
        "courseName": "Dreamweaver网站设计基础",
        "grade": 62,
        "credit": 2,
        "totalTime": "32",
        "gardePoint": 1.7,
        "properties": "公选"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B018003",
        "courseName": "工程制图",
        "grade": 66,
        "credit": 3,
        "totalTime": "56",
        "gardePoint": 2.1,
        "properties": "选修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B031003",
        "courseName": "信息检索",
        "grade": 80,
        "credit": 1,
        "totalTime": "24",
        "gardePoint": 3.5,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B031004",
        "courseName": "程序设计基础",
        "grade": 74,
        "credit": 2,
        "totalTime": "40",
        "gardePoint": 2.9,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B043005",
        "courseName": "分析化学实验",
        "grade": 89,
        "credit": 0.8,
        "totalTime": "24",
        "gardePoint": 4.4,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B043013",
        "courseName": "有机化学Ⅱ",
        "grade": 64,
        "credit": 4,
        "totalTime": "64",
        "gardePoint": 1.9,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B101402",
        "courseName": "大学英语Ⅱ",
        "grade": 54,
        "credit": 4,
        "totalTime": "64",
        "gardePoint": 0,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B101402",
        "courseName": "大学英语Ⅱ",
        "grade": 0,
        "credit": 4,
        "totalTime": "64",
        "gardePoint": 0,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B101402",
        "courseName": "大学英语Ⅱ",
        "grade": 45,
        "credit": 4,
        "totalTime": "64",
        "gardePoint": 0,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B113104",
        "courseName": "高等数学Ⅱ(下)",
        "grade": 66,
        "credit": 4,
        "totalTime": "64",
        "gardePoint": 2.1,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B151002",
        "courseName": "大学体育（2）",
        "grade": 78,
        "credit": 1,
        "totalTime": "32",
        "gardePoint": 3.3,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B151002",
        "courseName": "大学体育（2）",
        "grade": 0,
        "credit": 1,
        "totalTime": "32",
        "gardePoint": 0,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B881602",
        "courseName": "中国近现代史纲要",
        "grade": 73,
        "credit": 2,
        "totalTime": "48",
        "gardePoint": 2.8,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B881602",
        "courseName": "中国近现代史纲要",
        "grade": 43,
        "credit": 2,
        "totalTime": "48",
        "gardePoint": 0,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B881605",
        "courseName": "形势与政策1",
        "grade": 86,
        "credit": 0.5,
        "totalTime": "8",
        "gardePoint": 4.1,
        "properties": "必修"
    },
    {
        "startDate": "2017-2018-2",
        "courseNumber": "B91t002",
        "courseName": "大学读什么",
        "grade": 80,
        "credit": 1,
        "totalTime": "16",
        "gardePoint": 3.5,
        "properties": "公选"
    },
    {
        "startDate": "2018-2019-1",
        "courseNumber": "B00t122",
        "courseName": "海洋的前世今生（智慧树）",
        "grade": 51,
        "credit": 2,
        "totalTime": "32",
        "gardePoint": 0,
        "properties": "公选"
    },
    {
        "startDate": "2018-2019-1",
        "courseNumber": "B017102",
        "courseName": "工程训练",
        "grade": 78,
        "credit": 2,
        "totalTime": "2",
        "gardePoint": 3.3,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-1",
        "courseNumber": "B043014",
        "courseName": "物理化学Ⅱ",
        "grade": 27,
        "credit": 4,
        "totalTime": "64",
        "gardePoint": 0,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-1",
        "courseNumber": "B043014",
        "courseName": "物理化学Ⅱ",
        "grade": 68,
        "credit": 4,
        "totalTime": "64",
        "gardePoint": 2.3,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-1",
        "courseNumber": "B043014",
        "courseName": "物理化学Ⅱ",
        "grade": 47,
        "credit": 4,
        "totalTime": "64",
        "gardePoint": 0,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-1",
        "courseNumber": "B043018",
        "courseName": "有机化学实验Ⅲ",
        "grade": 72,
        "credit": 1,
        "totalTime": "32",
        "gardePoint": 2.7,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-1",
        "courseNumber": "B101403",
        "courseName": "大学英语Ⅲ",
        "grade": 71,
        "credit": 4,
        "totalTime": "64",
        "gardePoint": 2.6,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-1",
        "courseNumber": "B113122",
        "courseName": "线性代数Ⅱ",
        "grade": 60,
        "credit": 2.5,
        "totalTime": "40",
        "gardePoint": 1.5,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-1",
        "courseNumber": "B113203",
        "courseName": "大学物理Ⅱ",
        "grade": 63,
        "credit": 4.5,
        "totalTime": "72",
        "gardePoint": 1.8,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-1",
        "courseNumber": "B151003",
        "courseName": "大学体育（3）",
        "grade": 61,
        "credit": 1,
        "totalTime": "32",
        "gardePoint": 1.6,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-1",
        "courseNumber": "B881604",
        "courseName": "毛泽东思想和中国特色社会主义理论体系概论",
        "grade": 74,
        "credit": 6,
        "totalTime": "128",
        "gardePoint": 2.9,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-1",
        "courseNumber": "B881604",
        "courseName": "毛泽东思想和中国特色社会主义理论体系概论",
        "grade": 0,
        "credit": 6,
        "totalTime": "128",
        "gardePoint": 0,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-2",
        "courseNumber": "B00t148",
        "courseName": "英美文化概论（英文授课）（尔雅）",
        "grade": 80,
        "credit": 2,
        "totalTime": "32",
        "gardePoint": 3.5,
        "properties": "公选"
    },
    {
        "startDate": "2018-2019-2",
        "courseNumber": "B00t181",
        "courseName": "社会学与中国社会（尔雅）",
        "grade": 69,
        "credit": 2,
        "totalTime": "32",
        "gardePoint": 2.4,
        "properties": "公选"
    },
    {
        "startDate": "2018-2019-2",
        "courseNumber": "B043019",
        "courseName": "物理化学实验Ⅲ",
        "grade": 92,
        "credit": 1,
        "totalTime": "32",
        "gardePoint": 4.7,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-2",
        "courseNumber": "B078505",
        "courseName": "工程力学",
        "grade": 49,
        "credit": 2,
        "totalTime": "32",
        "gardePoint": 0,
        "properties": "选修"
    },
    {
        "startDate": "2018-2019-2",
        "courseNumber": "B078505",
        "courseName": "工程力学",
        "grade": 0,
        "credit": 2,
        "totalTime": "32",
        "gardePoint": 0,
        "properties": "选修"
    },
    {
        "startDate": "2018-2019-2",
        "courseNumber": "B078506",
        "courseName": "高分子物理",
        "grade": 60,
        "credit": 3,
        "totalTime": "64",
        "gardePoint": 1.5,
        "properties": "选修"
    },
    {
        "startDate": "2018-2019-2",
        "courseNumber": "B078507",
        "courseName": "高分子化学",
        "grade": 65,
        "credit": 3,
        "totalTime": "64",
        "gardePoint": 2,
        "properties": "选修"
    },
    {
        "startDate": "2018-2019-2",
        "courseNumber": "B113124",
        "courseName": "概率论与数理统计Ⅱ",
        "grade": 64,
        "credit": 2.5,
        "totalTime": "40",
        "gardePoint": 1.9,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-2",
        "courseNumber": "B117202",
        "courseName": "大学物理实验Ⅱ",
        "grade": 91,
        "credit": 1,
        "totalTime": "32",
        "gardePoint": 4.6,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-2",
        "courseNumber": "B151004",
        "courseName": "大学体育（4）",
        "grade": 63,
        "credit": 1,
        "totalTime": "32",
        "gardePoint": 1.8,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-2",
        "courseNumber": "B881603",
        "courseName": "马克思主义基本原理概论",
        "grade": 83,
        "credit": 3,
        "totalTime": "64",
        "gardePoint": 3.8,
        "properties": "必修"
    },
    {
        "startDate": "2018-2019-2",
        "courseNumber": "B881606",
        "courseName": "形势与政策2",
        "grade": 86,
        "credit": 0.5,
        "totalTime": "8",
        "gardePoint": 4.1,
        "properties": "必修"
    },
    {
        "startDate": "2019-2020-1",
        "courseNumber": "B00t117",
        "courseName": "多媒体课件设计与制作（智慧树）",
        "grade": 87.7,
        "credit": 2,
        "totalTime": "32",
        "gardePoint": 4.27,
        "properties": "公选"
    },
    {
        "startDate": "2019-2020-1",
        "courseNumber": "B074509",
        "courseName": "材料科学基础",
        "grade": 51,
        "credit": 6,
        "totalTime": "120",
        "gardePoint": 0,
        "properties": "必修"
    },
    {
        "startDate": "2019-2020-1",
        "courseNumber": "B074510",
        "courseName": "材料测试技术",
        "grade": 55,
        "credit": 3,
        "totalTime": "64",
        "gardePoint": 1,
        "properties": "必修"
    },
    {
        "startDate": "2019-2020-1",
        "courseNumber": "B074511",
        "courseName": "复合材料原理",
        "grade": 72,
        "credit": 2,
        "totalTime": "32",
        "gardePoint": 2.7,
        "properties": "必修"
    },
    {
        "startDate": "2019-2020-1",
        "courseNumber": "B075514",
        "courseName": "聚合物基复合材料",
        "grade": 61,
        "credit": 2,
        "totalTime": "32",
        "gardePoint": 1.6,
        "properties": "选修"
    },
    {
        "startDate": "2019-2020-1",
        "courseNumber": "B076523",
        "courseName": "先进聚合物材料",
        "grade": 60,
        "credit": 2,
        "totalTime": "32",
        "gardePoint": 1.5,
        "properties": "选修"
    },
    {
        "startDate": "2019-2020-1",
        "courseNumber": "B076525",
        "courseName": "复合材料制备新技术",
        "grade": 63,
        "credit": 1.5,
        "totalTime": "24",
        "gardePoint": 1.8,
        "properties": "选修"
    },
    {
        "startDate": "2019-2020-1",
        "courseNumber": "B076527",
        "courseName": "纳米结构与纳米材料",
        "grade": 51,
        "credit": 2,
        "totalTime": "32",
        "gardePoint": 0,
        "properties": "选修"
    },
    {
        "startDate": "2019-2020-1",
        "courseNumber": "B077532",
        "courseName": "生产实习",
        "grade": 79,
        "credit": 4,
        "totalTime": "4",
        "gardePoint": 3.4,
        "properties": "必修"
    },
    {
        "startDate": "2019-2020-1",
        "courseNumber": "B081004",
        "courseName": "创业教育与就业指导上",
        "grade": 80,
        "credit": 1.5,
        "totalTime": "24",
        "gardePoint": 3.5,
        "properties": "必修"
    }
];

export default scoreData;