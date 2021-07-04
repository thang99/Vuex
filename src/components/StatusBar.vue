<template>
  <div class="status-bar" v-if="isAuthenticated">
    <h4 class="text-success">Done</h4>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">
        {{ todo.id }} - {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "StatusBar",
  // computed: {
  //   // cách 1: khi chưa dùng getters (vẫn dùng state thông thường)
  //   // doneTodos() {
  //   //   return this.$store.state.todos.filter((todo) => todo.completed);
  //   // },

  //   // cách 2: dùng getters vuex
  //   // doneTodos() {
  //   //     return this.$store.getters.doneTodos;
  //   // }
  // },

  // cách 3: dùng mapGetters
  // computed: mapGetters(["doneTodos"]),

  // dùng đồng thời cả mapGetters & mapState (nếu login thì mới hiển thị các công việc đã làm)
  computed: {
    ...mapState(["isAuthenticated"]),
    ...mapGetters(["doneTodos"]),
  },
};
</script>

<style scoped>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.status-bar ul {
  list-style: none;
}
</style>