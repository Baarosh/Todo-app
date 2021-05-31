<template>
  <div class="header">
    <h1 @click="pushToMain">TODO LIST</h1>
  </div>
</template>

<script>
export default {
  methods: {
    pushToMain() {
      this.$router.push({ name: 'main-page' });
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
