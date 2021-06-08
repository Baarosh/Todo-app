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
@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css');
@import 'assets/variables.scss';

body {
  background-color: $body-background;
}

section {
  display: grid;
  height: calc(100vh - 45px);
  grid-template-rows: 1fr;
  grid-template-columns: 20% 80%;
}
</style>
