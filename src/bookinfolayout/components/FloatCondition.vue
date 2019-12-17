<template>
  <div>
    <el-card class="box-card" style="font-size: 13px;margin-top: 20px" shadow="hover" body-style="padding:0px">
      <!--<div slot="header" class="clearfix">-->
      <!--<span>关于本站</span>-->
      <!--</div>-->
      <el-divider content-position="left"><span style="font-weight: bold;color: #5a5e66"><i class="el-icon-menu" /> 漂流动态</span></el-divider>
      <div style="padding:0 5px 5px 20px;font-color:#222;">
        <div v-for="size in 8" :key="size" style="margin-bottom: 20px">
          <el-col :span="4">
            <el-avatar
              shape="square"
              size="medium"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </el-col>
          <el-col :span="18">
            <div>
              <span style="color: #b98d3d">trembear </span>发布了一本<span style="color: #b98d3d">《呼吸水电费水电费》</span>
            </div>
            <div style="margin-top: 10px">
              <span style="color: #888">2019-12-16 13:12:15</span>
            </div>
          </el-col>
          <div style="clear: both" />
        </div>
      </div>
    </el-card>
    <el-card class="box-card" style="font-size: 13px;margin-top: 20px" shadow="hover" body-style="padding:0px">
      <!--<div slot="header" class="clearfix">-->
      <!--<span>关于本站</span>-->
      <!--</div>-->
      <el-divider content-position="left"><span style="font-weight: bold;color: #5a5e66"><i class="el-icon-menu" /> 联系我们</span></el-divider>
      <div style="padding:0 20px 20px 20px;font-color:#222;line-height: 150%">
        <p>
          <i class="el-icon-phone" /> 联系电话：<span style="color: #b98d3d;font-size: 15px;font-weight: bold">13125029492</span><br>
          <i class="el-icon-s-check" /> 联系Q Q ：<span style="color: #b98d3d;font-size: 15px;font-weight: bold">1424479171</span><br>
          <i class="el-icon-s-home" /> 联系地址：<span style="color: #b98d3d;font-size: 15px;font-weight: bold">湖北省武汉市</span><br>
        </p>
      </div>
    </el-card>

  </div>
</template>
<style>
  .el-collapse-item__content{
    font-size: 10px;
  }

  .el-card__body{
      padding: 0;
  }
</style>
<script>
export default {
  name: 'FloatCondition',
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
