<template>
  <el-container style="height: 720px; border: 1px solid #eee">
    <el-container>
      <el-header class="main-header" style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>欢迎，rong</span>
      </el-header>

      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>
                系统管理
              </template>
              <el-menu-item index="1-1">
                <router-link tag="li" to="/sys/user">用户管理</router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <el-container>
            <el-header>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="x in this.$route.matched" :key="x.path" :to="{ path: x.path }"
                  >{{x.alias[0]}}</el-breadcrumb-item
                >
              </el-breadcrumb>
            </el-header>
            <el-main class="main-main">
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
.main-main {
  margin-top: 5px;
}
.main-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
// const getPathAlias = (path) => {
//   let pp = [];
//   if (path.parent) {
//     pp = getPathAlias(path.parent);
//   }
//   let result = path
//   if (pp) {
//     result = pp + "/" +result
//   }
//   return result;
// };

// import UserManage from "./pages/UserManage.vue";
export default {
  // components: { UserManage },
  name: "Home",
  data() {
    return {
    };
  },
  mounted() {
  
  
  },
  activated(){
    
  }
};
</script>