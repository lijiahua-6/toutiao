<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar title="标题" />

    <!-- 登录菜单 -->
    <!-- 表单验证 -->
    <!-- 1 使用ValidationObserver 组件把需要验证的整个表单包起来 ，例如form -->
    <!-- 2 使用ValidationProvider 把需要校验的具体表单元素包起来，例如 input -->
    <!-- 3、通过 ValidationProvider 配置具体的校验规则 -->
    <!--
         name   配置字段的提示名称
         rules  配置校验规则
          内置的规则：https://logaretm.github.io/vee-validate/guide/rules.html#rules
          自定义规则：
          单个验证规则：rules="required"
          多个验证规则：rules="required|length:4"
         v-slot="{ errors }" 获取校验失败的错误提示消息
    -->

    <ValidationObserver ref="form">
      <ValidationProvider name="手机号" rules="required|mobile" immediate>
        <!-- 绑定数据 -->
        <van-field
          v-model="user.mobile"
          class="iconfont icon-smartphone"
          clearable
          placeholder="请输入手机号"
        />
      </ValidationProvider>
      <ValidationProvider name="验证码" rules="required|code" immediate>
        <van-field v-model="user.code" class="iconfont icon-bobantang" placeholder="请输入验证码">
          <van-count-down
            v-if="isCountDownShow"
            slot="button"
            :time="1000*60"
            format="ss 秒"
            @finish="isCountDownShow = false"
          />
          <van-button
            v-else
            slot="button"
            size="small"
            type="primary"
            round
            @click="onSendSmsCode"
            style="background-color:red;border:0"
          >发送验证码</van-button>
        </van-field>
      </ValidationProvider>
    </ValidationObserver>

    <!-- 登录按钮 -->
    <div class="login-btn">
      <!-- 给登录按钮注册点击事件处理函数 -->
      <van-button type="info" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login, getSmsCode } from '@/api/user' // 调用基础路径
import { validate } from 'vee-validate'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {
      user: {
        // 集中放在一个对象里面
        // 请求体
        mobile: '13911111111', // 手机号
        code: '246810' // 验证码
      },
      isCountDownShow: false // 是否显示倒计时
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
      // 2 表单验证
      // this.$refs.form.validate().then(success => {
      //   if (!success) {

      //   }
      // })
      const success = await this.$refs.form.validate()
      if (!success) {
        console.log('表单验证失败')
        // 注意：如果你需要在 JS 验证中能马上获取到错误消息
        // 必须给每一个 ValidationProvider 配置 immediate 初始验证
        const errors = this.$refs.form.errors
        for (let key in errors) {
          const item = errors[key]
          if (item[0]) {
            this.$toast(item[0])
            // 找到第1个有错误的消息，给出提示，停止遍历
            return
          }
        }
        // 获取验证失败的错误消息，轻提示
        return
      }
      // 开启登录提示
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true, // 是否禁止背景点击
        message: '登录中...' // 提示消息
      })
      // 3 请求登录
      try {
        const { data } = await login(user)
        // 将登录成功获取到的用户 token 相关数据存储到 Vuex 容器
        this.$store.commit('setUser', data.data)
        // 提示登录成功
        this.$toast.success('登录成功')
        // 跳转到首页
        this.$router.push(`/my`)
      } catch (err) {
        console.log('登录失败', err)
        // 提示登录失败
        this.$toast.fail('登录失败,手机号或验证码不正确')
      }
    },
    async onSendSmsCode () {
      try {
        const { mobile } = this.user
        // 1 获取手机号，效验手机号是否有效
        const validateResult = await validate(mobile, 'required|mobile', {
          name: '手机号'
        })
        if (!validateResult.valid) {
          this.$toast(validateResult.errors[0])
          return
        }
        // 2 请求发送验证码
        const res = await getSmsCode(mobile)
        console.log(res)

        // 3 显示倒计时
        this.isCountDownShow = true
      } catch (err) {
        console.log(err)
        this.$toast('请勿频繁操作')
      }
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
.van-cell {
  align-items: center;
}
</style>
