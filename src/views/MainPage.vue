<template>
  <div class="main-wrapper">
    <div class="list-header">
      <h3 class="active-project">{{ getActiveCategory }}</h3>
      <input
        type="text"
        name="search-input"
        id="search-input"
        @input="setFilter"
        v-model="filterBy"
      />
      <select name="sort-input" id="sort-input" @change="setSorting" v-model="selectedOption">
        <option value="alpha">Alphabeticaly</option>
        <option value="id">By Id</option>
      </select>
    </div>
    <div class="list-content">
      <ul v-if="displayTodoList.length > 0">
        <li v-for="todo in displayTodoList" :key="todo.id">
          <p :class="{ checked: !todo.completed }">
            {{ todo.id }} - {{ todo.title }} - {{ todo.completed }}
          </p>
          <button
            class="btn-primary"
            id="complete-button"
            type="button"
            @click="setCompletion(todo.id)"
          >
            Complete
          </button>
          <button class="btn-danger" id="delete-button" type="button" @click="deleteTodo(todo.id)">
            Delete
          </button>
        </li>
      </ul>
      <ul v-else>
        <li>
          <p>No todos on the list</p>
        </li>
      </ul>
      <button class="btn-success" id="new-todo-button" @click="pushToAddTodo">Add Task</button>
    </div>
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
    displayTodoList() {
      return this.$store.getters.displayTodoList;
    },
    getSorting() {
      return this.$store.getters.getSorting;
    },
    getActiveCategory() {
      return this.$store.getters.getActiveCategory;
    },
    getTodoList() {
      return this.$store.getters.getTodoList;
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
.main-wrapper {
  width: 80%;
  margin: 0 auto;
}

.list-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  h3 {
    font-size: 22px;
    font-weight: bold;
  }
}

.list-content {
  ul {
    li {
      button {
        &:hover {
        }
      }
    }
  }
}

.checked {
}
</style>
