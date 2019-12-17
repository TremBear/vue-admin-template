<template>
  <div>
    <div style="font-size: 18px;font-weight: bold;margin: 20px 0 20px 0;color: #555">
      搜索: 村上春树
    </div>
    <div>
      <el-row :gutter="15" v-for="item in 10" :key="item" style="margin-bottom: 20px">
        <el-col :span="2">
          <div style="height: 75px;background-color: #8c939d"></div>
        </el-col>
        <el-col :span="21" style="line-height: 150%;font-size: 12px">
          <el-link type="warning" @click="$router.push('/book/info')">挪威的森林</el-link><br/>
          <el-rate
            v-model="star"
            disabled>
          </el-rate>
          [日] 村上春树 / 林少华 / 上海译文出版社 / 2001-2<br/>
          <el-tag type="warning" size="mini">可借阅</el-tag>
        </el-col>
      </el-row>
      <el-pagination
        small
        layout="prev, pager, next"
        style="text-align:center"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Booksearch',
  data() {
    return {
      star: 2
    }
  }
}
</script>

<style>
  .el-rate__icon {
    margin-right: -1px
  }
  .el-pager li.active{
    color: #b98d3d;
  }
  .el-pager li:hover {
    color: #b98d3d;
  }
</style>
