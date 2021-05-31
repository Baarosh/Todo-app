<template>
  <div class="container container1">
    <input type="text" name="search" id="search" @input="setFilter" v-model="filterBy" />
    <select name="sort" id="sort" @change="setSorting" v-model="selectedOption">
      <option value="alpha">Alphabeticaly</option>
      <option value="id">By Id</option>
    </select>
    <button id="new" @click="pushToAddTodo">Add new todo</button>
  </div>
  <div class="container container2">
    <ul v-if="getListOfTodos.length > 0">
      <li v-for="todo in getListOfTodos" :key="todo.id">
        <p>{{ todo.id }} - {{ todo.title }} - {{ todo.completed }}</p>
        <button id="complete" type="button" @click="setCompletion(todo.id)">Complete</button>
        <button id="delete" type="button" @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
    <p v-else>No todos on the list</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterBy: '',
      selectedOption: '',
    };
  },
  watch: {
    $route() {
      this.setFilter();
      this.$store.dispatch('setSorting', this.selectedOption);
    },
  },
  computed: {
    getListOfTodos() {
      return this.$store.getters.getListOfTodos;
    },
    getSorting() {
      return this.$store.getters.getSorting;
    },
  },
  mounted() {
    this.$store.dispatch('setSorting', 'alpha');
    this.selectedOption = 'alpha';
  },
  methods: {
    setSorting(event) {
      const { value } = event.target;
      this.selectedOption = value;
      console.log(value);
      this.$store.dispatch('setSorting', value);
    },
    setCompletion(id) {
      this.$store.dispatch('setCompletion', id);
    },
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id);
    },
    setFilter() {
      this.$store.dispatch('setFilter', this.filterBy);
    },
    pushToAddTodo() {
      this.filterBy = '';
      this.$router.push({ name: 'add-todo' });
    },
  },
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
