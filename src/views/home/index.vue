<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar title="首页" />
    <!-- 导航栏 -->

    <!-- 频道列表 -->
    <!--v-model="active" 控制激活的标签title 标签标题-->
    <van-tabs v-model="active">
      <van-tab :title="channel.name" v-for="channel in userChannels" :key="channel.id">
        <!-- 文章列表 -->
        <h2>{{ channel.name }} 的文章列表</h2>
        <!-- /文章列表 -->
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
    <!-- /频道列表 -->
  </div>
</template>

<script>
import { getUserChannels } from '@/api/channel'
export default {
  name: 'HomePage',
  components: {},
  props: {},
  data () {
    return {
      active: 0, // 控制激活的标签页
      userChannels: [] // 用户频道列表
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadUserChannels()
  },
  mounted () {},
  methods: {
    async loadUserChannels () {
      try {
        const { data } = await getUserChannels()
        this.userChannels = data.data.channels
      } catch (err) {
        console.log(err)
        this.$toast('获取频道数据失败')
      }
    }
  }
}
</script>

<style scoped></style>
