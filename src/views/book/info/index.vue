<template>
    <div>
        <div style="font-size: 18px;font-weight: bold;margin: 20px 0 20px 0;color: #555">
            挪威的森林
        </div>
        <div>
            <el-row :gutter="15" style="margin-bottom: 20px;font-size: 13px">
                <el-col :span="14">
                    <el-row>

                        <el-col :span="8">
                            <el-badge value="推荐" class="item">
                                <div style="height: 200px;width: 140px;background-color: #8c939d"/>
                            </el-badge>
                        </el-col>
                        <el-col :span="16" style="line-height: 150%">
                            <span style="font-weight: bold">作者：</span><span>[德] 阿尔伯特·施韦泽</span><br/>
                            <span style="font-weight: bold">出版社：</span><span>华东师范大学出版社</span><br/>
                            <span style="font-weight: bold">图书发布者：</span><el-link type="warning">trembear</el-link><br/>
                            <span style="font-weight: bold">现任借阅者：</span><el-link type="warning">trembear</el-link><br/>
                            <span style="font-weight: bold">漂流次数：</span><el-link type="warning">14</el-link> 次<br/>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="10" style="line-height: 200%;font-size: 12px; border-left: 1px solid #AAA">
                    <span style="color: #b98d3d">本站评分</span><br>
                    <el-rate
                            v-model="star"
                            show-score
                            disabled
                    />
                    <span style="line-height: 30px;color: #666">&nbsp;共有34位评价者</span>
                </el-col>
            </el-row>
        </div>
        <div style="font-size: 13px">
            <div>
                <el-button size="mini" style="float: left" type="warning" plain>借阅</el-button>
                <el-button size="mini" style="float: left" type="success" plain>收藏</el-button>
                <span style="float: left;font-size:13px;margin-top: 8px">&nbsp;&nbsp;我的评价:</span>
                <el-rate
                        v-model="myrateValue"
                        class="myrate"
                        style="float: left;margin-top: 5px"
                        show-text
                />
                <div style="clear: both"></div>
            </div>
            <div>
                <br/>
                <el-link type="warning" ><i class="el-icon-edit"></i>写书评</el-link>
            </div>
        </div>
        <div>
            <el-divider content-position="left"><span style="font-weight: bold;color: #5a5e66"><i class="el-icon-menu"></i> 内容简介</span>
            </el-divider>
            <div style="font-size: 14px;color: #555;line-height: 150%;padding-left: 8px">
                <p>本书是阿尔伯特•施韦泽，诺贝尔和平奖获得者，为音乐大师巴赫书写的一部传记。它是西方音乐研究中的必读巨著、经典，甚至，它是一座里程碑。迄今，它已被译成10余种语言文字，在全世界范围内出版发行。

                    施韦泽的《论巴赫》为历代的巴赫研究者所青睐，深受专家们的好评。该书在美学理论与实践两端皆具有极高价值，为诸多巴赫研究中的晦涩地带带来曙光。作者论证了巴赫作品的来源、他的管风琴作品、受难曲和康塔塔，分析了巴赫乐思中的图像化倾向，引导人们重新调整对音乐美学的总体观念。此外，施韦泽对巴赫作品的正确演奏方法进行了推敲与讨论，尤其为该领域带来了新曙光。本书的出版将填补国内巴赫研究中长期存在的极大空白。

                    毫无疑问，施韦泽的《论巴赫》是整个历史上影响最深远的巴赫巨作。

                    ——C.伍尔夫（莱比锡巴赫档案馆前馆长，哈佛大学音乐学教授）

                    这是一本经典名著——两位伟人，一位是音乐家，另一位是哲学家和宗教学家，他们代表了西方文化的一个重要人文传统，而后者研究前者，其心得远远超过一般水平。译者也是学问渊博的年轻学者，精通音乐和文学，相得益彰。此书值得精读。
                </p>
            </div>
            <el-divider content-position="left"><span style="font-weight: bold;color: #5a5e66"><i class="el-icon-menu"></i> 短评</span>
            </el-divider>
            <div style="font-size: 14px;color: #555;line-height: 150%">
                <div style="margin-bottom: 20px;font-size: 14px;">
                    <el-link type="warning" style="font-weight: bold">热门</el-link> /
                    <el-link type="info" style="font-weight: bold">最新</el-link>
                    <el-link type="warning" style="float: right"><i class="el-icon-edit"></i>我来写</el-link>
                </div>
                <div  v-for="item in 5" :key="item" style="margin-bottom: 8px;font-size: 13px">
                    <el-link type="warning" >trembear</el-link><span>（2019-12-16 17:21:52）</span>
                    <el-link type="info" style="float: right">&nbsp;&nbsp;<i class="el-icon-warning" />举报</el-link>
                    <el-link type="danger" style="float: right">喜欢(10)&nbsp;&nbsp;</el-link>
                    <div style="padding-left: 8px">
                        <div>
                            这是一本经典名著——两位伟人，一位是音乐家，另一位是哲学家和宗教学家，他们代表了西方文化的一个重要人文传统，而后者研究前者，其心得远远超过一般水平。译者也是学问渊博的年轻学者，精通音乐和文学，相得益彰。此书值得精读。
                        </div>
                    </div>
                </div>

                <el-pagination
                        small
                        layout="prev, pager, next"
                        style="text-align:center"
                        :total="50">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Bookinfo',
  data() {
    return {
      star: 2.4,
      myrateValue: 0
    }
  }
}
</script>

<style>
    .el-rate__icon {
        margin-right: -1px
    }

    .el-rate__text {
        font-size: 25px;
        margin-left: 10px;
    }

    .myrate .el-rate__text {
        font-size: 13px;
    }

    .el-pager li.active {
        color: #b98d3d;
    }
    .activeComment {
         color: #b98d3d;
    }
    .el-pager li:hover {
        color: #b98d3d;
    }
</style>
