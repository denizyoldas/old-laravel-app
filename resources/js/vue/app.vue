<template>
  <div class="todoListContainer">
    <div class="hedding">
      <h2 id="title">Todo List</h2>
      <add-item-form />
    </div>
    <list-view />
  </div>
</template>


<script>
import addItemForm from "./addItemForm.vue";
import ListView from "./listView.vue";
export default {
  components: { addItemForm, ListView },
};
</script>

<style scoped>
.todoListContainer {
  width: 350px;
  margin: auto;
}

.hedding {
  background: #e6e6e6e6;
  padding: 10px;
}

#title {
  text-align: center;
}
</style>