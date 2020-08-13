<template>
  <div id="app">
    <!-- ========================= 导航栏 START ========================= -->
    <navbar></navbar>
    <!-- ========================= 导航栏 END ========================= -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
 import Navbar from 'components/common/Navbar'
 import FooterBottom from 'components/common/FooterBottom'
  export default {
    name: 'App',
    components: {
      Navbar,
      FooterBottom
    },
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
