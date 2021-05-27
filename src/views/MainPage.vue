<template>
  <div class="container container1">
    <input type="text" name="search" id="search" v-model="filterBy" />
    <select name="sort" id="sort" @change="changeSorting">
      <option value="alpha">Alphabeticaly</option>
      <option value="id" selected>By Id</option>
    </select>
    <button type="button">Add new todo</button>
  </div>
  <div class="container container2">
    <ul v-if="getListOfTodos.length > 0">
      <li v-for="todo in getListOfTodos" :key="todo.id">
        <p>{{ todo.id }} - {{ todo.title }} - {{ todo.completed }}</p>
      </li>
    </ul>
    <p v-else>No todos on the list</p>
  </div>
  <p>{{ sortBy }}</p>
</template>

<script>
export default {
  data() {
    return {
      filterBy: ''
    };
  },
  computed: {
    getListOfTodos() {
      const todoList = this.$store.getters.listOfTodos;
      this.$store.dispatch('setFilter', this.filterBy);
      if (todoList.length > 0) {
        return todoList.filter(todo => todo.title.toLowerCase().includes(this.filterBy));
      }
      return todoList;
    },
    sortBy() {
      return this.$store.getters.sortBy;
    }
  },
  methods: {
    changeSorting(event) {
      const { value } = event.target;
      this.$store.dispatch('changeSorting', value);
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
