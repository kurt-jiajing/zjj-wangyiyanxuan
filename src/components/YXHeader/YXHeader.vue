<template>
  <div id="indexHd">
      <div class="line">
        <h1>
          <a class="logo" href>
            <img src="../../common/images/logo.jpg" alt />
          </a>
        </h1>
        <div class="topSearch">
          <i class="iconfont icon-search"></i>
          <span class="placeholder">搜索商品, 共20413款好物</span>
        </div>
      </div>
      <div class="tabwrap">
        <ul class="navList">
          <li>
            <span>推荐</span>
          </li>
          <li>
            <span>居家生活</span>
          </li>
          <li>
            <span>服饰鞋包</span>
          </li>
          <li>
            <span>美食酒水</span>
          </li>
          <li>
            <span>个护清洁</span>
          </li>
          <li>
            <span>母婴亲子</span>
          </li>
          <li>
            <span>运动旅行</span>
          </li>
          <li>
            <span>数码家电</span>
          </li>
          <li>
            <span>全球特色</span>
          </li>
        </ul>
      </div>
      <div class="toggleWrap">
          <i class="iconfont icon-unfold" @click="isShowCard=true"></i>
      </div>
      <div class="card">

      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        isShowCard: false,

      }
    }
    // props: {
    //   title: {
    //     required: true,
    //     type: String,
    //   }
    // }
  }
</script>

<style lang="stylus">
#indexHd 
  width: 100%;
  height: 160px;
  // background pink
  border-bottom: 1px solid #d9d9d9;
  position relative 
  .line 
    width: 100%;
    height: 88px;
    background: white;
    display: flex;
    align-items: center;
    img 
      width: 143px;
      height: 40px;
      margin: 2px 20px 0 27px;
    .topSearch 
      width: 532px;
      height: 56px;
      background: #ededed;
      border-radius: 5px;
      // margin-top 6px
      display: flex;
      align-items: center;
      justify-content: center;
      i 
        font-size: 40px;
        margin-right: 3px;
        color: #666666;
      span 
        font-size: 28px;
        color: #666666;
  
  .toggleWrap
    width 70px
    height 70px
    text-align center
    line-height 70px
    padding-right 10px
    position absolute
    right 0
    bottom 0
    // background pink 
    i 
      font-size 44px 
      color #333
  .card
      width 100%
      height 312px
      // background red
      z-index 100
  .tabwrap 
    width: 650px;
    height: 70px;
    white-space: nowrap;
    overflow: hidden;
      
    .navList 
      display: flex;
      padding-left: 20px;
      padding-right: 250px;
      width: calc(100vh - 100px);
      li 
        width: 100%;
        text-align: center;
        margin-right: 44px;
        padding-left: 20px;
        span 
          font-size: 28px;
          height: 70px;
          line-height: 70px;
    
</style>
