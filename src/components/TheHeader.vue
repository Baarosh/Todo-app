<template>
  <div class="header">
    <h1 @click="routeToMain">TODO LIST</h1>
  </div>
</template>

<script>
export default {
  methods: {
    routeToMain() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
  width: 100%;
  display: flex;
  background-color: lightsalmon;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    color: white;
  }
}
</style>
