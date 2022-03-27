import { mapGetters } from "vuex"

export default {
  onShow() {
    this.setBadge()
  },
   watch: {
    // 监听 total 值的变化
    total() {
      // 调用 methods 中的 setBadge 方法，重新为 tabBar 的数字徽章赋值
      this.setBadge()
    }
  },
  computed: {
    ...mapGetters('m_cart', ['total'])
  },
  methods: {
    setBadge() {
      uni.setTabBarBadge({
        index: 2,
        // 注意：text 的值必须是字符串，不能是数字
        text: this.total + ''
      })
    }
  }
}
