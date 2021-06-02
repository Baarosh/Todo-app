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
  .navigation-header {
    h3 {
    }
  }
  .navigation-content {
    ul {
      li {
        p {
        }

        .number-of-task {
        }

        .project-title {
        }

        &:hover {
        }
      }
    }
  }
}
</style>
