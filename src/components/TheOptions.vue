<template>
  <section class="card">
    <div>
      <h4>SEARCH</h4>
      <input type="text" name="filter" id="filter" />
    </div>
    <div>
      <h4>SORT BY</h4>
      <ul>
        <input type="button" value="Alphabeticaly" ref="a" @click="changeSortingToA" />
        <input type="button" value="Creation date" ref="c" @click="changeSortingToC" />
        <input type="button" value="Not completed" ref="n" @click="changeSortingToN" />
      </ul>
    </div>
    <div>
      <router-link :to="{ name: 'NewTodo' }">Add todo</router-link>
    </div>
  </section>
</template>

<script>
export default {
  emits: ['sortchange'],
  data() {
    return {
      sortBy: 'Creation date',
    };
  },
  methods: {
    changeSortingToA() {
      this.sortBy = this.$refs.a.value;
      this.$emit('sortchange', this.sortBy);
    },
    changeSortingToC() {
      this.sortBy = this.$refs.c.value;
      this.$emit('sortchange', this.sortBy);
    },
    changeSortingToN() {
      this.sortBy = this.$refs.n.value;
      this.$emit('sortchange', this.sortBy);
    },
  },
};
</script>

<style scoped>
/* .card {
  width: 50%;
  max-width: 400px;
  background-color: lightblue;
  border-radius: 1.5rem;
  padding: 1.5rem;
  margin: 1rem auto;
} */

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 50rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

input[type='button'] {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  margin: 0rem 1rem;
}

input[type='button']:hover,
input[type='button']:active {
  background-color: #270041;
  border-color: #270041;
}
</style>
