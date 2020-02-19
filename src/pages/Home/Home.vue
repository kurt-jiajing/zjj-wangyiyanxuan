<template>
  <div>
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
    <div class="swiper">
      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  mounted() {
    new BScroll(".tabwrap", {
      scrollX: true
    });

    var mySwiper = new Swiper()
  }
};
</script>

<style lang="stylus">

</style>
