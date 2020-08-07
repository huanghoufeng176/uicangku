<template>
  <div class="home">
    <el-container>
      <!-- 头部部分 -->
      <el-header>
        <el-row>
          <el-col :span="20">
            <img src="~assets/img/11.jpg" alt />
            <span class="wenzi">电商后台管理系统</span>
          </el-col>
          <el-col :span="4">
            <div class="anniu">
              <el-button @click="tuichuClick" type="info">退出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <!-- 主体部分 -->
      <el-container>
        <!-- 左边侧边栏部分 -->
        <el-aside :width="isCollapse?'64px':'200px'">
          <!-- 菜单栏是否折叠 -->
          <div class="shuxian">
            <span @click="shensuoClick">|||</span>
          </div>         
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#313743"
            text-color="#fff"
            active-text-color="#3B9CFF"
            unique-opened
            :collapse="isCollapse"
            :collapse-transition="false"
            router
          >
            <!-- index值相同则同时展开子菜单 -->
            <el-submenu :index="item.id+''" v-for="item in zuoceliebiaoData" :key="item.id">
              <!-- 一级菜单 -->
              <template slot="title">
                <i :class="iconObjs[item.id]" class="itubiao"></i>
                <span>{{item.authName}}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item :index="'/'+itemI.path" v-for="itemI in item.children" :key="itemI.id">
                <i class="el-icon-menu"></i>
                <span>{{itemI.authName}}</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 右侧边栏主体部分 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {request} from 'network/request.js'
export default {
  components: {},
  data() {
    return {
      //左侧列表数据
      zuoceliebiaoData:[],
      //自定义列表图标数字列表对象
      iconObjs:{
        '125':'iconfont iconRectangleCopy',
        '103':'iconfont iconquanxian',
        '101':'iconfont iconshangpinguanli',
        '102':'iconfont icondingdanguanli',
        '145':'iconfont iconshujutongji',
      },
      //左侧菜单栏是否水平折叠起来
      isCollapse:false
    };
  },
  created() {
    this.getCebianData()
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    //点击退出登录按钮
    tuichuClick() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    //展开菜单栏触发的事件
    handleOpen(){

    },
    //收起菜单栏触发的事件
    handleClose(){

    },
    //侧边栏数据获取
    getCebianData(){
      //发起网络请求
      request({
        url:'menus',
        method:'get'
      }).then(res=>{
        this.zuoceliebiaoData=res.data.data
        console.log(res)
      })
    },
    //左侧菜单是否折叠按钮
    shensuoClick(){
      this.isCollapse=!this.isCollapse
    }
  },
};
</script>
<style>
.el-header {
  background-color: #363d40;
  padding-left: 5px;
}
.el-aside {
  background-color: #313743;
}
.el-main {
  background-color: #e9edf1;
}
.home {
  height: 100%;
}
.el-container {
  height: 100%;
}
.tupian img {
  width: 50px;
  height: 50px;
}
.el-col {
  height: 60px;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-col img {
  width: 50px;
  height: 50px;
}
.wenzi {
  margin-left: 30px;
}
.itubiao{
  margin-right: 20px;
}
.el-aside .el-menu{
  border-right: none;
}
.shuxian{
  color: #fff;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing:0.2em;
  cursor: pointer;
}
</style>