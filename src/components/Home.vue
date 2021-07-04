<template>
  <div class="home">
    <Todos />
    <StatusBar />
    <Progress />
  </div>
</template>

<script>
import StatusBar from "./StatusBar.vue";
import Progress from "./Progress.vue";
import Todos from "./Todos.vue";

export default {
  name: "Home",
  components: { StatusBar, Progress, Todos },
};
</script>

<style scoped>
</style>