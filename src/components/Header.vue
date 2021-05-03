<template>
  <header>
    <h1>{{ title }}</h1>

    <Button
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>

  <!-- <div class="components-demo">
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
    <br />
    <button v-on:click="count = 0">Reset counts!</button>
  </div> -->
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "..Prop is not defined!..",
    },
    showAddTask: Boolean,
  },

  components: {
    Button,
  },

  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>