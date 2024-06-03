<script lang="ts">
export default {
  name: "alert",
  props: ["foo", "type"],
  emits: ["plick"],
  methods: {
    clickerdyclick() {
      this.$emit("plick");
    },
  },
};
</script>
<template>
  <button @click="clickerdyclick">{{ foo }}</button>
</template>
