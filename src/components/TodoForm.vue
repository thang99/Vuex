<template>
  <form class="mx-4" @submit="onSubmit">
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" class="form-control" id="title" v-model="title" />
    </div>
    <button type="submit" class="btn btn-sm btn-primary">Submit</button>
    <hr style="border: 5px solid black; margin-bottom: 10px" />
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "TodoForm",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]), // addTodo() === this.$store.dispatch('addTodo')
    onSubmit(e) {
      e.preventDefault();
      this.addTodo({
        id: uuidv4(),
        title: this.title,
        completed: false,
      });
      this.title = "";
    },
  },
};
</script>

<style>
</style>