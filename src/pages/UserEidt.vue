<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item
      prop="username"
      :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]"
      label="用户名"
    >
      <el-input v-model="form.username" placeholder="name"></el-input>
    </el-form-item>
    <el-form-item label="标签">
      <el-select v-model="form.tag" placeholder="请选择tag">
        <el-option label="108将" value="108将"></el-option>
        <el-option label="普通人" value="普通人"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: ["userInfo"],
  data() {
    return {
      form: {
        id: "",
        username: "",
        tag: "",
      },
    };
  },
  inject: ["refreshTable", "closeDialog"],
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post("/api/user/add", {
              ...this.form,
            })
            .then((response) => {
              if (response) {
                this.$message({
                  showClose: true,
                  message: "创建成功",
                  type: "success",
                });
                console.log(this);
                this.refreshTable();
                this.closeDialog();
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          return false;
        }
      });
    },
  },
  mounted(){
    this.form = this.userInfo
  }
};
</script>

<style>
</style>