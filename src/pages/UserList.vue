<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="userData.tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      stripe
      fit
      highlight-current-row
      :height="550"
    >
      <el-table-column type="selection"> </el-table-column>
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="username" label="姓名"> </el-table-column>
      <el-table-column label="标签">
        <template slot-scope="scope">
          <el-tag closable type="success">
            {{ scope.row.tag }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column label="创建时间">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.createDateTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-edit"
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          ></el-button>
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
          >
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-button size="mini" @click="toggleSelection()">取消选择</el-button>
        </el-col>
        <el-col :span="16">
          <el-pagination
            background
            @current-change="nextPage"
            layout="prev, pager, next"
            :total="userData.total"
          >
          </el-pagination>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="新增用户" :visible.sync="dialogVisible" width="30%">
      <user-eidt :userInfo="eidtUser" ref="userEidtDialog" />
    </el-dialog>
  </div>
</template>

<script>
import UserEidt from "./UserEidt.vue";
export default {
  components: { UserEidt },
  props: ["userData"],
  data() {
    return {
      dialogVisible: false,
      multipleSelection: [],
      total: 0,
      eidtUser: {
        id: "",
        username: "",
        tag: "",
      },
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    nextPage(currentPage) {
      this.$emit("currentChange", currentPage);
    },
    handleEdit(index, row) {
      this.dialogVisible = true;
      this.eidtUser.id = row.id
      this.eidtUser.username = row.username
      this.eidtUser.tag = row.tag
    },
    handleDelete(index, row) {
      console.info("delete", index, row);

      this.$axios.delete(`/api/user/${row.id}`).then((response) => {
        if (response) {
          this.$message({
            showClose: true,
            message: "删除成功",
            type: "success",
          });
          this.$emit("refreshTable");
        }
      });
    },
    closeDialog() {
      this.dialogVisible = false;
    },
  },
  provide() {
    return {
      closeDialog: this.closeDialog,
    };
  },
};
</script>

<style>
</style>