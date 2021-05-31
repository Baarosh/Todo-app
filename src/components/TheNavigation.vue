<template>
  <div class="navigation-wrapper">
    <div class="navigation-header">
      <h3>Projects</h3>
    </div>
    <div class="navigation-content">
      <ul>
        <li @click="setActiveCategory('Home')">
          <p class="number-of-task">{{ getNumberOfActiveCategories.home }}</p>
          <p class="project-title">Home</p>
        </li>
        <li @click="setActiveCategory('Work')">
          <p class="number-of-task">{{ getNumberOfActiveCategories.work }}</p>
          <p class="project-title">Work</p>
        </li>
        <li @click="setActiveCategory('Other')">
          <p class="number-of-task">{{ getNumberOfActiveCategories.other }}</p>
          <p class="project-title">Other</p>
        </li>
      </ul>
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
.navigation-wrapper {
  flex: 1;
  background-color: lightpink;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 0px;

  .navigation-header {
    width: 50%;
    text-align: center;

    h3 {
      font-size: 1.8rem;
    }
  }
  .navigation-content {
    width: 50%;
    ul {
      list-style: none;
      display: flex;
      flex-flow: column nowrap;
      padding: 0;
      align-items: flex-end;
      justify-content: center;
      li {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        height: 2.3rem;
        p {
          padding: 0px 5px;
          font-size: 1.5rem;
        }

        .number-of-task {
          background: lightgreen;
          border-radius: 50%;
        }

        .project-title {
          background: inherit;
        }

        &:hover {
          cursor: pointer;
          background-color: lightsalmon;
        }
      }
    }
  }
}
</style>
