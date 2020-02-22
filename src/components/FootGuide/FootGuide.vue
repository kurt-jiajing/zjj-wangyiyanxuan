<template>
  <div id="footerContainer">
    <div :class="{active: $route.path==='/Home'}" @click="goPath('/Home')" class="guideItem">
      <span>
        <i class="iconfont icon-homepage"></i>
      </span>
      <span>首页</span>
    </div>
    <div :class="{active: $route.path==='/Classification'}" @click="goPath('/Classification')" class="guideItem">
      <span>
        <i class="iconfont icon-activity"></i>
      </span>
      <span>分类</span>
    </div>
    <div :class="{active: $route.path==='/WorthBuy'}" @click="goPath('/WorthBuy')" class="guideItem">
      <span>
        <i class="iconfont icon-service"></i>
      </span>
      <span>值得买</span>
    </div>
    <div :class="{active: $route.path==='/Shopping'}" @click="goPath('/Shopping')" class="guideItem">
      <span>
        <i class="iconfont icon-gouwuche02"></i>
      </span>
      <span>购物车</span>
    </div>
    <div :class="{active: $route.path==='/Profile'}" @click="goPath('/Profile')" class="guideItem">
      <span>
        <i class="iconfont icon-people"></i>
      </span>
      <span>个人</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goPath(path){
        path !== this.$route.path && this.$router.push(path)
        
      }
    }
  }
</script>

<style lang="stylus">
  @import "../../common/stylus/mixins.styl"
  #footerContainer
    position fixed
    width 100%
    height 98px
    border-top 1px solid #eee
    left 0
    bottom 0
    box-sizing border-box
    display flex
    background #fff
    span
      font-weight 300
      font-size 30px
    .guideItem
      width 25%
      height 100%
      text-align center
      display flex
      flex-direction column
      color #666666
      &.active
        color $red
      span:first-child
        margin 5px 0
        i
          font-size 44px
          line-height 48px
 
</style>
