<template>
  <div v-if="isAuthenticated">
    <p>Progress:</p>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: progress + '%' }"
        :aria-valuenow="{ progress }"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ progress }}%
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Progress",
  // computed: {
  //   progress() {
  //     return Math.round(
  //       (this.$store.state.todos.filter((todo) => todo.completed).length /
  //         this.$store.state.todos.length) *
  //         100
  //     );
  //   },
  // },

  // dùng mapGetters
  // computed: mapGetters(["progress"]),

  // check login thì mới hiển thị progress
  computed: {
    ...mapGetters(["progress"]),
    ...mapState(['isAuthenticated'])
  }
};
</script>

<style>
</style>