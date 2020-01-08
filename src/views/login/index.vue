<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar title="标题" />

    <!-- 登录菜单 -->
    <van-cell-group>
      <!-- 绑定数据 -->
      <van-field
        v-model="user.mobile"
        class="iconfont icon-smartphone"
        clearable
        label="手机号"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        class="iconfont icon-bobantang"
        label="验证码"
        placeholder="请输入验证码"
      >
        <van-button
          slot="button"
          size="small"
          type="primary"
          round
          style="background-color:red;border:0"
        >发送验证码</van-button>
      </van-field>
    </van-cell-group>

    <!-- 登录按钮 -->
    <div class="login-btn">
      <!-- 给登录按钮注册点击事件处理函数 -->
      <van-button type="info" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request' // 调用基础路径

export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      user: {
        // 集中放在一个对象里面
        // 请求体
        mobile: '', // 手机号
        code: '' // 验证码
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLogin () {
      // 1 获取表单数据
      const user = this.user
      // 请求登录
      const res = await request({
        // 返回响应对象
        method: 'POST',
        url: '/app/v1_0/authorizations',
        headers: {
          // axios 会自动添加请求头
          //   'Content-Type':'application/json'//特殊符号需要加引号
        }, // 请求头参数
        //   params:{}, //查询参数
        data: user // 请求体
      })
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .login-btn {
    padding: 27px 16px;
    .van-button {
      width: 100%;
      background-color: pink;
    }
  }
}
</style>
