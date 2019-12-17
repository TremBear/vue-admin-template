<template>
  <div :class="classObj" class="app-wrapper">
<!--      <div :class="{'fixed-header':fixedHeader}">-->
        <navbar />
<!--      </div>-->
    <div  style="width: 1200px;margin: 10px auto" >
      <el-row :gutter="15">
        <el-col :span="18">
          <app-main />
        </el-col>
        <el-col :span="6">
          <search-condition></search-condition>
        </el-col>
      </el-row>
    </div>
    <div style="background: #545c64;min-width: 1200px">
      <p style="padding: 30px;text-align: center;color: white">
        <span style="font-size: 12px"> Copyright © 2019 图书漂流网 版权所有 武汉网安备64546121358510 鄂ICP备20191214号-5</span>
      </p>
    </div>
  </div>
</template>

<script>
import { Navbar2, AppMain2 } from '../frontlayout/components'
import { SearchCondition } from './components'

export default {
  name: 'Searchlayout',
  components: {
    Navbar: Navbar2,
    AppMain: AppMain2,
    SearchCondition
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
