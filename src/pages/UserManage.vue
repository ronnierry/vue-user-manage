<template>
  <div ref="usermanage">
    <el-container>
      <el-header
        ><user-heard @refreshTableByName="refreshTableByName"
      /></el-header>
      <el-main>
        <user-list :userData="userData" @currentChange="currentChange"
        @refreshTable="refreshTable"
      /></el-main>
    </el-container>
  </div>
</template>

<script>
import UserHeard from "./UserHeard.vue";
import UserList from "./UserList.vue";
export default {
  components: { UserHeard, UserList },
  name: "Usermanage",
  data() {
    return {
      userData: {
        tableData: [],
        total: 0,
        username: "",
        pageNo: 1,
      },
    };
  },
  methods: {
    refreshTable() {
      this.$axios
        .get(
          `/api/user/page-query?page=${this.userData.pageNo}&size=10&username=${this.userData.username}`
        )
        .then((response) => {
          let data = response.data;
          this.userData.tableData = data.content;
          this.userData.total = data.totalElements;
        });
    },
    refreshTableByName(name) {
       this.userData.pageNo = 1;
      this.userData.username = name;
      this.refreshTable();
    },
    currentChange(currentPage) {
      this.userData.pageNo = currentPage;
      this.refreshTable();
    },
    
  },
  provide(){
     return {
      refreshTable: this.refreshTable,
    };
  }
};
</script>

<style>
</style>