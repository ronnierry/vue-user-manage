<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="searchUsername" size="small" clearable placeholder="用户名">
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-button
          type="primary"
          size="small "
          icon="el-icon-search"
          circle
          @click="search"
        ></el-button>
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-col :span="24">
        <el-button type="primary" @click="dialogVisible = true" size="small"
          >新增</el-button
        >
      </el-col>
    </el-row>
    <el-dialog
      title="新增用户"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <user-eidt :userInfo="{}"/>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
import UserEidt from './UserEidt.vue';
export default {
  components: { UserEidt },
  data() {
    return {
      searchUsername: "",
      dateSelect: "",
      dialogVisible: false,
    };
  },
   methods: {
       search(){
            this.$emit('refreshTableByName',this.searchUsername)
       },
       closeDialog(){
           this.dialogVisible = false
       }
    },
    provide(){
        return {
            closeDialog: this.closeDialog
        }
    }
};
</script>

<style>
</style>