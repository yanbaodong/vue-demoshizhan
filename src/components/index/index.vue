<template>
  <el-container>
    <el-header class="my-header" style="height:70px">
      <el-row>
        <el-col :span="20">
          <div class="grid-content bg-purple">
            <el-row>
              <div class="grid-content bg-purple">
                <i class="el-icon-menu menu"></i>
                <span>后台管理系统</span>
              </div>
            </el-row>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple icon-right">
                  <i class="fa fa-arrows-alt"></i>
                  <i class="fa fa-bell-o"></i>
                  <img src="../../assets/logo.png" alt class="userico">
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-light">
                  <el-dropdown trigger="click" class="userinfo">
                    <span class="el-dropdown-link">
                      admin
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown"class='dropmenu' >
                      <el-dropdown-item>英雄杀</el-dropdown-item>
                      <el-dropdown-item>爱美女</el-dropdown-item>
                      <el-dropdown-item>爱豪车</el-dropdown-item>
                      <el-dropdown-item>爱钱</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu default-active="1-4" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航</span>
            </template>       
            <el-submenu index="1-4">
              <span slot="title">4</span>
            </el-submenu>
          </el-submenu>
          
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.my-header {
  background-color: #242f42;
  font-size: 24px;
  line-height: 70px;
  color: #fff;
  .icon-right {
    height: 70px;
    font-size: 18px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .userico {
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
    border-radius: 50%;
    width: 30px;
  }
  .userinfo{
    color: #fff;
  }
}
.menu {
  margin-right: 20px;
}
.dropmenu{
  width: 85px;
  padding: 0 !important;
  margin: 0 !important;
}
</style>
