<template>
  <section class="card">
    <div>
      <h4>SEARCH</h4>
      <input type="text" name="filter" id="filter-text" />
    </div>
    <div>
      <h4>SORT BY</h4>
      <ul>
        <input type="button" value="Alphabeticaly" />
        <input type="button" value="Creation date" />
        <input type="button" value="Not completed" />
      </ul>
    </div>
    <div>
      <router-link :to="{ name: 'NewTodo' }">Add todo</router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  width: 50%;
  max-width: 400px;
  background-color: rgb(131, 139, 255);
  border-radius: 1.5rem;
  padding: 1.5rem;
  margin: 1rem auto;
}
</style>
