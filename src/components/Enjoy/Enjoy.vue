<!--
 * @Author: your name
 * @Date: 2020-02-19 15:59:23
 * @LastEditTime: 2020-02-19 22:44:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /new-project1/src/components/Enjoy/Enjoy.vue
 -->
<template>
  <div class="number">
    <div class="number1">
      <img src="../../common/images/Cordon/1.webp" />
    </div>
    <div class="wrap">
      <div class="floor">
        <img src="../../common/images/Cordon/2.gif" />
      </div> 
      <div class="fourpic">
        <img src="../../common/images/Securite/1.webp" />
        <img src="../../common/images/Securite/2.webp" />
        <img src="../../common/images/Securite/3.webp" />
        <img src="../../common/images/Securite/4.webp" />
      </div>
      <!-- <div class="fourpic" v-for="(item,index) in picList" :key="index">
         <img  :src="item.bigPromotionModule.floorList.cells.picUrl"/>
     </div>
      -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import picList from '../../../datas/index.json'
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="stylus">
.number 
  width 100%
  height 828px
  margin-top 10px
  .number1 
    width 100%
    height 240px
    img 
      width 100%
      height 240px
  .wrap 
    width 100%
    height 588px
    background #1574e3
    padding 15px
    box-sizing border-box
    .floor
      img 
        width 100%
        height 160px
    .fourpic 
      height 378px
      display flex
      display -webkit-flex
      flex-wrap wrap
      img 
        width 351px
        height 186px
        margin 2px

</style>
