<template>
  <div class="header-wrapper">
    <div class="container-left" @click="pushToMain">
      <font-awesome-icon :icon="['fas', 'book']" size="2x" color="rgb(139, 79, 55)" />
      <h1>Your Task Manager</h1>
    </div>
    <div class="container-right">
      <h2>Sign out</h2>
    </div>
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
.header-wrapper {
  height: 50px;
  width: 100%;
  display: flex;
  background-color: lightsalmon;
  align-items: center;
  justify-content: space-between;

  .container-left {
    margin-left: 15px;
    height: 100%;
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover {
      cursor: pointer;
    }

    h1 {
      font-size: 2rem;
      color: black;
    }
  }

  .container-right {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h2 {
      font-size: 1.7rem;
      color: white;
      margin-right: 20px;
      background-color: rgb(139, 79, 55);
      border-radius: 15px;
      padding: 5px 15px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
