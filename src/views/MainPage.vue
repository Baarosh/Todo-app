<template>
  <div class="container container1">
    <input type="text" name="search" id="search" @input="setFilter" />
    <select name="sort" id="sort" @change="changeSorting">
      <option value="alpha">Alphabeticaly</option>
      <option value="id" selected>By Id</option>
    </select>
    <button id="new" type="button">Add new todo</button>
  </div>
  <div class="container container2">
    <ul v-if="getListOfTodos.length > 0">
      <li v-for="todo in getListOfTodos" :key="todo.id">
        <p>{{ todo.id }} - {{ todo.title }} - {{ todo.completed }}</p>
        <button id="complete" type="button" @click="changeCompletion(todo.id)">
          Complete
        </button>
        <button id="delete" type="button" @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
    <p v-else>No todos on the list</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getListOfTodos() {
      return this.$store.getters.listOfTodos;
    }
  },
  methods: {
    changeSorting(event) {
      const { value } = event.target;
      this.$store.dispatch('changeSorting', value);
    },
    changeCompletion(id) {
      this.$store.dispatch('changeCompletion', id);
    },
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id);
    },
    setFilter(event) {
      this.$store.dispatch('setFilter', event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 50%;
  margin: 20px auto;
  background-color: plum;
  border: 1px solid gray;
  border-radius: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    p {
      display: inline-block;
    }
  }
}

.container1 {
  height: 200px;
}

.container2 {
  height: auto;
  min-height: 50px;
}
</style>
