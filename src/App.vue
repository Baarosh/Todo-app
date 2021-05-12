<template>
  <the-header></the-header>
  <router-view></router-view>
  <!-- <the-footer></the-footer> -->
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
// import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    // TheFooter,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

body {
  padding: 0;
  margin: 0;
  font-size: 16px;
  box-sizing: border-box;
  font-family: 'Bangers', cursive;
}

#app {
  min-height: 100vh;
}
</style>
