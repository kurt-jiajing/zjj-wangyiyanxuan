<template>
  <div class="home">
    <!-- <div id="indexHd">
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
    </div> -->
    <YXHeader/>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in SJbanner" :key="index">
          <img class="swiperItem" :src=item.imgUrl alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <ul class="grow">
      <li class="item">
        <i class="iconfont icon-insurance"></i>
        <span class="text">网易自营品牌</span>
      </li>
      <li class="item">
        <i class="iconfont icon-safetycertificate"></i>
        <span class="text">30天无忧退货</span>
      </li>
      <li class="item">
        <i class="iconfont icon-propertysafety"></i>
        <span class="text">48小时快速退款</span>
      </li>
    </ul>
    <!-- <div class="tenPic">
      <div class="picList">
        <ul>
          <li class="item" v-for="(item,index) in kingKongList" :key="index">
            <img class="picItem" :src=kingKongList.picUrl alt="">
          </li>
        </ul>
      </div>
    </div> -->
    <div class="wrap">
      <div class="wraplist">
        <ul>
            <li style="margin-left:15px">
            <img src="../../common/images/ListContainer/1.png">
            <span>新品首发</span>
            </li>
            <li>
            <img src="../../common/images/ListContainer/2.png">
            <span>居家生活</span>
            </li>
            <li>
            <img src="../../common/images/ListContainer/3.png">
            <span>服饰鞋包</span>
            </li>
            <li>
            <img src="../../common/images/ListContainer/4.png">
            <span>美食酒水</span>
            </li>
            <li>
            <img src="../../common/images/ListContainer/5.png">
            <span>个护清洁</span>
            </li>
            <li style="margin-left:15px">
            <img src="../../common/images/ListContainer/6.png">
            <span>母婴亲子</span>
            </li>
            <li>
            <img src="../../common/images/ListContainer/7.png">
            <span>运动旅行</span>
            </li>
            <li>
            <img src="../../common/images/ListContainer/8.png">
            <span>数码家电</span>
            </li>
            <li>
            <img src="../../common/images/ListContainer/9.png">
            <span>全球特色</span>
            </li>
            <li>
            <img src="../../common/images/ListContainer/10.gif">
            <span>好货抄底</span>
            </li>
        </ul>
      </div>
    </div>

    <Enjoy/>
  </div>
</template>

<script type="text/ecmascript-6">
import SJbanner from '../../mock/indexCateModule.json'
// import kingKongList from "../../mock/index.json"
import BScroll from "better-scroll";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import {mapState} from 'vuex'

export default {
  data(){
    return{
      SJbanner: [],
      kingKongList: []
    }
  },
  mounted() {
    new BScroll(".tabwrap", {
      scrollX: true
    });

    // eslint-disable-next-line no-unused-vars
    let mySwiper = new Swiper('.swiper-container',{
      pagination:{
        el: '.swiper-pagination',
      },
      observer:true,
      observeParents:true,
      loop: true,
      autoplay: true,
    })
    this.SJbanner = SJbanner
    // let result = getAddress()
    // this.kingKongList = kingKongList
  },
  computed:{
    ...mapState({
      address: state => state.address 
    })
  },
  watch:{
    
  }
};
</script>

<style lang="stylus" scoped>
  // @import '../../commom/stylus/mixins.styl'
  .home
    width 100%
  .swiper-container
    overflow hidden
    width 100%
    height 100%
    .swiper-wrapper
      display flex
      width 100%
      height 100%
      .swiper-slide
        display flex
        height 100%
        img   
          width 750px
          height 370px
  .grow
    width 750px
    height 72px
    // background pink 
    display flex
    justify-content center
    .item
      width 226px
      height 100%
      line-height 72px
      align-items center
      justify-content center
      i 
        font-size 32px
        color #dd1a21
        margin-right 10px
      .text
        font-size 24px
        color #333
        vertical-align middle
  .wrap
    width 100%
    height 340px
    // padding-left  12px
    // padding-top 10px 
    box-sizing border-box
    .wraplist
      width 100%
      li
        float left
        width 110px
        height 156px
        text-align center
        margin 10px 17px 9px
        img
          height 110px
          width 110px
        span
          margin-top 5px
          display flex
          font-size 10px
  </style>
