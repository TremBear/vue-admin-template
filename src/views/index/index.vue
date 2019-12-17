<template>
  <div>
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item" style="background: #99a9bf;border-radius: 10px">
        <!--        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"/>-->
        <!--<h3>{{ item }}</h3>-->
      </el-carousel-item>
    </el-carousel>
    <div style="margin-bottom: 40px">
      <el-divider content-position="left"><span style="font-weight: bold;color: #5a5e66"><i class="el-icon-menu"></i> 新书速递</span>
      </el-divider>
      <el-row :gutter="10" >
        <el-col :span="4" style="margin-bottom: 20px"  v-for="size in 12" :key="size">
          <div style="font-size:13px" @click="$router.push('/book/info')">
            <div style="height: 160px;background: #bfcbd9"></div>
            <div style="margin: 10px 0;color: #b98d3d" >彗星来的那一夜</div>
            <div>欧·亨利</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="margin-bottom: 40px">
      <el-divider content-position="left"><span style="font-weight: bold;color: #5a5e66"><i class="el-icon-menu"></i> 漂流贡献榜</span>
      </el-divider>
      <div>
        <el-row :gutter="50" >
          <el-col :span="1"  v-for="size in 12" :key="size">
            <el-tooltip content="Bottom center" placement="top" effect="light">
              <el-avatar
                shape="square"
                size="large"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
            </el-tooltip>
          </el-col>
        </el-row>
      </div>
    </div>
    <div style="font-size: 13px">
      <el-divider content-position="left"><span style="font-weight: bold;color: #5a5e66"><i class="el-icon-menu"></i> 高分好书榜</span>
      </el-divider>
      <el-row :gutter="10">
        <el-col :span="8" v-for="size in 9" :key="size" style="margin-bottom: 20px">
          <el-row :gutter="10">
            <el-col :span="12" style="height: 160px;background: #bfcbd9"></el-col>
            <el-col :span="12">
              <div style="color: #b98d3d;margin-bottom: 10px">呼吸</div>
              <el-rate
                v-model="starValue"
                disabled
                :colors="starColor">
              </el-rate>
              <div style="margin: 10px 0">作者：[美] 特德·姜</div>
              <div style="margin-bottom: 10px">科幻 / 美国</div>
              <div style="margin-bottom: 10px">阅读者：trembear</div>
              <el-button type="warning" size="mini">借阅</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .el-rate__icon{
    margin-right: -1px
  }
</style>
<script>
export default {
  name: 'Index',
  data() {
    return {
      iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'],
      starColor: ['#f7ba2a', '#f7ba2a', '#f7ba2a'],
      starValue: 5
    }
  }
}
</script>

<style scoped>

</style>
