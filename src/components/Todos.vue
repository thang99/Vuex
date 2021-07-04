<template>
  <div>
    <div v-if="isAuthenticated" class="todo-list">
      <TodoForm />
      <ul>
        <li
          v-for="todo in todos"
          :key="todo.id"
          :class="todo.completed ? 'completed' : ''"
        >
          {{ todo.id }} - {{ todo.title }} - {{ todo.completed }}

          <input
            type="checkbox"
            :checked="todo.completed"
            @change="MARK_COMPLETED(todo.id)"
          />

          <button
            @click="deleteTodo(todo.id)"
            class="btn btn-sm btn-danger"
            style="margin-top: -4px"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
    <div v-else class="text-danger text-center">Not authencation !</div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import TodoForm from "./TodoForm.vue";

export default {
  name: "Todos",
  components: { TodoForm },
  // cách 1 : lấy state từ store của vuex
  // computed: {
  //   todos() {
  //     return this.$store.state.todos;
  //   },
  //   authenticated() {
  //     return this.$store.state.isAuthenticated;
  //   },
  // },

  // cách 2: dùng mapState
  // computed: mapState({
  //   todos: state => state.todos,
  //   authenticated: state => state.isAuthenticated
  // })

  // cách 3: dùng mapState
  computed: mapState(["todos", "isAuthenticated"]),
  methods: {
    ...mapMutations(["MARK_COMPLETED"]),

    // cách 1: viết hàm deleteTodo
    // deleteTodo(todoId) {
    //   this.$store.dispatch("deleteTodo", todoId); // gọi đến tên action delete
    // },

    // cách 2: dùng mapActions
    ...mapActions(["deleteTodo","getTodos"]),
  },

  created() {
    this.getTodos();
  },
};
</script>

<style scoped>
.todo-list ul {
  padding: 0 10px 10px 10px;
  list-style-type: none;
}

.todo-list li {
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 4px;
  background: rgb(240, 240, 240);
  color: black;
}

.todo-list li input[type="checkbox"] {
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
  float: right;
  margin-top: 5px;
}

.todo-list li button {
  float: right;
  margin-right: 20px;
}

.todo-list li button:hover {
  cursor: pointer;
  background: red;
  color: white;
}

.todo-list li.completed {
  background: rgb(90, 236, 85);
}
</style>