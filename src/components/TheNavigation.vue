<template>
  <div class="navigation-wrapper">
    <div class="navigation-header">
      <h3>Projects</h3>
    </div>
    <div class="navigation-content">
      <div @click="setActiveCategory('Home')">
        <p class="number-of-task">{{ getNumberOfActiveCategories.home }}</p>
        <p class="project-title">Home</p>
      </div>
      <div @click="setActiveCategory('Work')">
        <p class="number-of-task">{{ getNumberOfActiveCategories.work }}</p>
        <p class="project-title">Work</p>
      </div>
      <div @click="setActiveCategory('Other')">
        <p class="number-of-task">{{ getNumberOfActiveCategories.other }}</p>
        <p class="project-title">Other</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setActiveCategory(category) {
      this.$store.dispatch('setActiveCategory', category);
    },
  },
  computed: {
    getNumberOfActiveCategories() {
      return this.$store.getters.getNumberOfActiveCategories;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';
.navigation-wrapper {
  background-color: $navigation-background;
  width: 100%;

  .navigation-header {
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      font-size: 22px;
      font-weight: bold;
    }
  }
  .navigation-content {
    width: 60%;
    margin: auto;
    margin-right: 0;
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;

    div {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      padding: 0;
      &:hover {
        background-color: $navigation-number-background-hover;
        cursor: pointer;
      }
      p {
        padding: 5px 10px;
        font-size: 18px;
        margin: 0;
      }

      .number-of-task {
        background-color: $navigation-number-background;
        border-radius: 50%;
        font-size: 12px;
        font-weight: bold;
        line-height: 100%;
      }

      .project-title {
      }

      &:hover {
      }
    }
  }
}
</style>
