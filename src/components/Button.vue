<template>
  <button @click="count++, onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
  <p>{{count}}</p>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    onClick() {
      this.$emit('btn-click')
    },
  },
};
</script>