<template>
  <div class="class">
    <div class="searcher">
      <div class="searchitem">
        <i class="iconfont icon-search"></i>
        <span>搜索商品, 共20423款好物</span>
      </div>
    </div>
     <div class="all">
      <div class="leftlist">
        <ul class="listNav">
          <li class="lilist" v-for="(item,index) in navList" :key="index">
           <a href="javascript:;" class="text">{{item.name}}</a> 
          </li>
        </ul>
      </div>

      <div class="rightList">
        <div class="r_banner">
          <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
        </div>

        <!-- <div class="r_data">
          <ul>
            <li class="item" v-for="(item,index) in cateList" :key="index">
              <img class="picItem" :src="item.bannerUrl" alt="">
              <span class="text">{{item.name}}</span>
            </li>
          </ul>
        </div> -->

        <div class="r_data">
          <ul class="r_container">
            <li class="item">
              <img class="picItem" src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png" alt="">
              <span class="text">精选好物15元起</span>
            </li>
            <li class="item">
              <img class="picItem" src="https://yanxuan.nosdn.127.net/cda4a56526a230055bea8221a6b7ab11.png" alt="">
              <span class="text">999+好评</span>
            </li>
            <li class="item">
              <img class="picItem" src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png" alt="">
              <span class="text">明星商品低至69元</span>
            </li>
            <li class="item">
              <img class="picItem" src="https://yanxuan.nosdn.127.net/da5ac697d47e43bd6ad9ce8b1e5e0060.png" alt="">
              <span class="text">断货补单王39元起</span>
            </li>
            <li class="item">
              <img class="picItem" src="https://yanxuan.nosdn.127.net/25daae363ef6662629d06e70846b983f.png" alt="">
              <span class="text">9.9元超值好物</span>
            </li>
            <li class="item">
              <img class="picItem" src="https://yanxuan.nosdn.127.net/a449c1305adff30ce82922f2e3546cf2.png" alt="">
              <span class="text">宅家囤美食</span>
            </li>
            <li class="item">
              <img class="picItem" src="https://yanxuan.nosdn.127.net/1aa18004d8b43e7bc55d54dd03ee5f29.png" alt="">
              <span class="text">降温降价39元起</span>
            </li>
            <li class="item">
              <img class="picItem" src="https://yanxuan.nosdn.127.net/0cb19987ddd873c693272c60352ba6a7.png" alt="">
              <span class="text">50元幸福好物</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import navLists from '../../mock/cateNavDatas.json'
import cateLists from '../../mock/cateLists.json'
  export default {
    data(){
      return{
        navList: [],
        cateList: []
      }
    },
    mounted(){
      this.navList = navLists.categoryL1List
      this.cateList = cateLists.categoryList
    }
  }
</script>

<style lang="stylus" scoped>
  .searcher 
    width: 100%;
    height: 88px;
    display flex
    justify-content center
    align-items center
    border-bottom 1px solid #aaaaaa
    .searchitem 
      width: 690px;
      height: 56px;
      border-radius: 10px;
      display flex
      justify-content center
      align-items center
      background: #eee;
      i 
        width: 28px;
        height: 28px;
        font-size: 40px;
        color #666
      span 
        font-size: 28px;
        // vertical-align middle
        color #666
 

  .all 
    width 100%;
    height 1200px
    display flex
    .leftlist 
      width 162px
      height 1120px
      padding 20px
      box-sizing border-box;
      border-right 1px solid #aaaaaa
      .listNav
        .lilist 
          width 100%
          height 50px
          font-size: 30px
          margin-top 40px
          // line-height 50px
          .text
            color #333
            white-space nowrap
            display block
            // text-overflow ellipsis
    .rightList
      width 528px
      height 872px
      // background pink
      margin 40px 40px
      .r_banner
        width 100%
        height 192px
        // background #eee
        img 
          width 100%
      .r_data
        // display flex
        .r_container
          width 100%
          height 648px
          margin-top 20px
          display flex
          flex-wrap wrap
          .item
            width 144px
            height 216px
            margin-right 25px
            text-align center
            .text
              font-size 24px
              line-height 32px
              width 144px
              height 72px
              color #333
              text-overflow ellipsis
            // background #666
            // float left
            .picItem
              width 144px
              height 144px






</style>
