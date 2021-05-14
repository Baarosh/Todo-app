<template>
  <the-options @sortchange="sortChange"></the-options>
  <the-list :todos="todos" @delete="deleteTodo" @switch="changeStatus"></the-list>
</template>

<script>
import TheList from '@/components/TheList.vue';
import TheOptions from '@/components/TheOptions.vue';

export default {
  emits: ['switch', 'delete', 'sortchange'],
  components: {
    TheOptions,
    TheList,
  },
  inject: ['todos'],
  methods: {
    changeStatus(todo) {
      this.$emit('switch', todo);
    },
    deleteTodo(todo) {
      this.$emit('delete', todo);
    },
    sortChange(option) {
      this.$emit('sortchange', option);
    },
  },
};
</script>

<style scoped></style>
