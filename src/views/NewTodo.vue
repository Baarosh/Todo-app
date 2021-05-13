<template>
  <add-todo @newitem="addNewTodo"></add-todo>
</template>

<script>
import AddTodo from '@/components/AddTodo.vue';

export default {
  components: {
    AddTodo,
  },
  emits: ['newitem'],
  data() {
    return {
      newTodo: {},
    };
  },
  methods: {
    addNewTodo(newTodo) {
      this.newTodo = newTodo;
      this.$emit('newitem', this.newTodo);
    },
  },
};
</script>

<style scoped></style>
