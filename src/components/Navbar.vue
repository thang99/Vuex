<template>
  <div class="header">
    <h1>Vuex Todos App</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="authenticated">
        Total todo: <span class="text-danger">{{ totalTodo }}</span>
        <button class="btn btn-sm btn-danger ml-5" @click="TOGGLE_AUTH">
          Logout
        </button>
      </li>
      <li v-else>
        <button class="btn btn-sm btn-primary" @click="TOGGLE_AUTH">
          Login
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Navbar",
  computed: {
    totalTodo() {
      return this.$store.state.todos.length;
    },
    authenticated() {
      return this.$store.state.isAuthenticated;
    },
  },

  // cách 1: sử dụng commit để gọi mutations
  // methods: {
  //   toggleButton() {
  //     this.$store.commit('TOGGLE_AUTH');
  //   },
  // },

  // cách 2: dùng mapMutations
  methods: mapMutations(["TOGGLE_AUTH"]),
};
</script>

<style scoped>
.header {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.header ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>