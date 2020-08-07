<template>
  <div class="login">
    <!-- 登录盒子 -->
    <div class="dengluBox">
      <!-- 图片区 -->
      <div class="tupian">
        <img src="~assets/logo.png" alt />
      </div>
      <!-- 表单区 -->
      <div class="biaodan">
        <el-form ref="loginRef" label-width="0px" :model="FormModel" :rules="loginRules">
          <el-form-item prop="username">
            <el-input v-model="FormModel.username" prefix-icon="iconfont iconyonghuming" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="FormModel.password" prefix-icon="iconfont iconziyuan" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item class="loginButton">
            <el-button type="primary" @click="dengluClick">登录</el-button>
            <el-button type="info" @click="resetClick">复位</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {request} from 'network/request.js'
export default {
  components: {},
  data() {
    return {
      //表单数据源
      FormModel:{
        username:'admin',
        password:'123456'
      },
      //登录表单验证规则
      loginRules:{
        username:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ]
      },
    };
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    //登录复位按钮
    resetClick(){
      this.$refs.loginRef.resetFields()
    },
    //登录按钮
    dengluClick(){
      this.$refs.loginRef.validate(valid=>{
        if(!valid){
          return this.$message.error('请注意输入用户名活密码长度')
        }
        //发起网络请求
        request({
          url:'login',
          method:'post',
          data:this.FormModel
        }).then(res=>{
          if(res.data.meta.status!==200){
            this.$message.error('输入信息有误')
            return 
          }
          console.log(res)
          window.sessionStorage.setItem('token',res.data.data.token)
          this.$router.push('/home')
        })
      })
    }
  },
};
</script>
<style scoped>
.login {
  background-color: #264a6b;
  height: 100%;
}
.dengluBox {
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -150px;
}
.tupian {
  width: 100px;
  height: 100px;
  border: 1px solid #f3f3f3;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  left: 50%;
  top: -60px;
  margin-left: -60px;
  background-color: #fff;
}
.tupian img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f3f3f3;
}
.biaodan{
  padding: 0 20px;
}
.el-form{
  margin-top: 90px;
}
.loginButton{
  position: absolute;
  right: 20px;
  bottom: 10px;
}
</style>