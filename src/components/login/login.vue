<template>
  <div class="login">
   
      <el-form class="my-login"
        label-position="left"
        label-width="80px"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
      >
      <h2>相爱总是太惶恐</h2>
        <el-form-item label="账号" prop="name" >
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
          <el-button class="btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form>
         
      
    </div>
      

 
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
         this.$message('恭喜你登录成功');
        } else {
          this.$message.error('错了哦!');
          return false;
        }
      });
    }
  }
};
</script>

<style lang='scss'>
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    background:url("../../assets/vol.842.jpg") no-repeat center ;
    width: 640px;
    height: 452px;
    margin: 0 auto;
    .my-login {
    width: 500px;  
    border-radius: 10px;
    background-color: #fff;
    padding: 30px;
    opacity: .8;
    // opacity: .5;
    }
    .btn{
        width: 100%;
    
    }
  }

</style>
