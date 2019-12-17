<template>
  <div>
    <div>
      <el-card class="box-card" style="font-size: 13px" shadow="hover" body-style="padding:0px">
        <!--<div slot="header" class="clearfix">-->
        <!--<span>关于本站</span>-->
        <!--</div>-->
        <el-divider content-position="left"><span style="font-weight: bold;color: #5a5e66"><i class="el-icon-menu"></i> 关于本站</span></el-divider>
        <div style="padding:0 20px 20px 20px;font-color:#222;line-height: 150%">
          <p>
            如今电子阅读大行其道，纸质书本渐行渐远，那一抹书香似乎随风而逝，看见了有太多有价值的图书在架上蒙尘，心里不禁为之惋惜。通过这个平台，你可以将书籍分享给他人，也可以免费获取别人的图书，让书籍在交换中发挥更大的价值。你也可以在书籍共享的过程中，寻找一些志同道合的朋友。
          </p>
          <p>
            会员人数：<span style="color: #b98d3d;font-size: 25px;font-weight: bold">20</span> 人<br/>
            本站现有书籍：<span style="color: #b98d3d;font-size: 25px;font-weight: bold">101</span> 册
          </p>
          <el-button type="warning" size="mini" plain>借阅规则</el-button>
          <el-button type="success" size="mini" plain>推荐好友</el-button>
        </div>
      </el-card>
      <el-card class="box-card" style="font-size: 13px;margin-top: 20px" shadow="hover" body-style="padding:0px">
        <!--<div slot="header" class="clearfix">-->
        <!--<span>关于本站</span>-->
        <!--</div>-->
        <el-divider content-position="left"><span style="font-weight: bold;color: #5a5e66"><i class="el-icon-menu"></i> 漂流动态</span></el-divider>
        <div style="padding:0 5px 5px 20px;font-color:#222;">
          <div style="margin-bottom: 20px" v-for="size in 8" :key="size">
            <el-col :span="4">
              <el-avatar
                shape="square"
                size="medium"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
            </el-col>
            <el-col :span="18">
              <div>
                <span style="color: #b98d3d">trembear </span>发布了一本<span style="color: #b98d3d">《呼吸水电费水电费》</span>
              </div>
              <div style="margin-top: 10px">
                <span style="color: #888">2019-12-16 13:12:15</span>
              </div>
            </el-col>
            <div style="clear: both"></div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card" style="font-size: 13px;margin-top: 20px" shadow="hover" body-style="padding:0px">
        <!--<div slot="header" class="clearfix">-->
        <!--<span>关于本站</span>-->
        <!--</div>-->
        <el-divider content-position="left"><span style="font-weight: bold;color: #5a5e66"><i class="el-icon-menu"></i> 联系我们</span></el-divider>
        <div style="padding:0 20px 20px 20px;font-color:#222;line-height: 150%">
          <p>
            <i class="el-icon-phone"></i> 联系电话：<span style="color: #b98d3d;font-size: 15px;font-weight: bold">13125029492</span><br/>
            <i class="el-icon-s-check"></i> 联系Q Q ：<span style="color: #b98d3d;font-size: 15px;font-weight: bold">1424479171</span><br/>
            <i class="el-icon-s-home"></i> 联系地址：<span style="color: #b98d3d;font-size: 15px;font-weight: bold">湖北省武汉市</span><br/>

          </p>
        </div>
      </el-card>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style scoped>
  .el-card__body{
    padding: 0;
  }
</style>
