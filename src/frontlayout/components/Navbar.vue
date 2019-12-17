<template>
  <div  background-color="#545c64">
    <div  class="navbar" style="background-color: #545c64;min-width: 1200px">
      <div style="width: 1200px;margin: 0 auto;background-color: #545c64">
          <el-col :span="22">
            <el-row>
              <el-col :span="4"><div style="color: #E6A23C;font-size: 20px;font-weight:bold;padding-top: 15px"><router-link to="/"  replace><i class="el-icon-notebook-1"/>&nbsp;图书漂流网</router-link></div></el-col>
              <el-col :span="19">
                <div style="float: left">
                  <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    background-color="#545c64"
                    mode="horizontal"
                    @select="handleSelect"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="1">图书广场</el-menu-item>
                    <el-menu-item index="2" disabled>同城活动</el-menu-item>
                    <el-menu-item index="3" disabled>论坛</el-menu-item>
                    <el-menu-item index="4" disabled>技能交换</el-menu-item>
                    <el-menu-item index="5">意见栏</el-menu-item>
<!--                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
                  </el-menu>
                </div>
                <div style="float:left;padding-top: 15px;margin-left: 20px">
                  <el-input placeholder="请输入内容" v-model="input2" size="mini">
                  <el-button slot="append" icon="el-icon-search" @click="$router.push('/book/search')"></el-button>
                  </el-input>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="2">
            <div class="right-menu">
              <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                  <!--<img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">-->
                  <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="user-avatar">
                  <i class="el-icon-caret-bottom" />
                </div>
                <el-dropdown-menu slot="dropdown" class="user-dropdown">
                  <router-link to="/person">
                    <el-dropdown-item >
                        个人中心
                    </el-dropdown-item>
                  </router-link>
                  <a target="_blank">
                    <el-dropdown-item>消息(<span style="color: #cb9f3f">0</span>)</el-dropdown-item>
                  </a>
                  <a target="_blank" href="https://www.swapassn.com ">
                    <el-dropdown-item>好友邀请</el-dropdown-item>
                  </a>
                  <el-dropdown-item divided>
                    <span style="display:block;" @click="logout">退出登录</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        <div style="clear: both"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'

export default {
  data() {
    return {
      activeIndex2: '',
      input2: ''
    }
  },
  components: {
    // Breadcrumb,
    // Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
