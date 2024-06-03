<script setup>
const props = defineProps({
  id: Number,
});
const {
  data: quote,
  pending,
  error,
} = await useFetch(() => `https://dummyjson.com/quotes/${props.id}`);
</script>

<template>
  <div
    class="shadow-2xl px-6 pt-4 pb-2 inline-block bg-gray-200 rounded-full px-3 py-1"
  >
    <p v-if="pending">Fetching...</p>
    <pre v-else-if="error">Could not load quote: {{ error.data }}</pre>
    <figure v-else class="quote">
      <blockquote>{{ quote.quote }}</blockquote>
      <figcaption>&mdash; {{ quote.author }}</figcaption>
    </figure>
  </div>
</template>

<style scoped>
.quote {
  @apply bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 my-6 max-w-xl text-lg;
}
.quote figcaption,
.quote blockquote {
  @apply m-4;
}
</style>
