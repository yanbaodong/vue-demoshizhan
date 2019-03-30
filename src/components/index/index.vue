<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="22">
          <div class="grid-content bg-purple">123</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple-light">456</div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组</span>
              <el-menu-item index="1-1">1</el-menu-item>
              <el-menu-item index="1-2">2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分2">
              <el-menu-item index="1-3">3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">4</span>
              <el-menu-item index="1-4-1">1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">四</span>
          </el-menu-item>
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
    return {
     
    };
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

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
