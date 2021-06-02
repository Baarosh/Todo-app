<template>
  <div class="header-wrapper">
    <div class="header-img">
      <img src="../assets/croppedLogo.png" alt="logo" />
    </div>
    <div class="header-title" @click="pushToMain">To-Do...</div>
    <div class="header-empty"></div>
    <div class="header-user">nlipinski@google.com</div>
    <div class="header-signout">Sign Out</div>
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
@import '../assets/variables.scss';

.header-wrapper {
  font-weight: bold;
  background-color: $header-background;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 60px 2fr 4fr 2fr 1fr;
  height: 45px;

  .header-img {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 40px;
      height: 40px;
    }
  }

  .header-title {
    font-family: 'Old Standard TT', serif;
    font-size: 25px;
    color: $header-title-color;
    margin: auto 0;
  }
  .header-empty {
  }
  .header-user {
    margin: auto;
  }
  .header-signout {
    margin: auto;
    border: none;
    padding: 5px 15px;
    border-radius: 25px;
    background-color: $header-signout-background;
  }
}
</style>
