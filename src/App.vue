<template>
  <the-header></the-header>
  <section>
    <the-navigation></the-navigation>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </section>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheNavigation from './components/TheNavigation.vue';

export default {
  components: {
    TheHeader,
    TheNavigation,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

* {
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: 'Questrial', sans-serif;
  font-weight: light;
  margin: 0;
  padding: 0;

  section {
    display: flex;
    flex-flow: row nowrap;
  }
}
</style>
