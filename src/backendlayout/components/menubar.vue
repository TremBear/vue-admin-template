<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="overflow: hidden">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>图书管理</span>
        </template>
        <el-menu-item index="1-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的图书</el-menu-item>
        <el-menu-item index="1-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的借阅</el-menu-item>
        <el-menu-item index="1-3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的收藏</el-menu-item>
        <el-menu-item index="1-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的关注</el-menu-item>
        <el-menu-item index="1-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的评论</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="2-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的信息</el-menu-item>
        <el-menu-item index="2-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消息</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>社交</span>
        </template>
        <el-menu-item index="3-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关注我的</el-menu-item>
        <el-menu-item index="3-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我关注的</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style>
</style>
<script>
export default {
  name: 'Menubar',
  data() {
    return {}
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>

</style>
