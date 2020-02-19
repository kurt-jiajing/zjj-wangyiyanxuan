<template>
  <div id="appContainer">
    
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FootGuide/FootGuide'
export default {
  components:{
    // eslint-disable-next-line vue/no-unused-components
    FooterGuide
  }
  
}
</script>

<style lang="stylus">

</style>
