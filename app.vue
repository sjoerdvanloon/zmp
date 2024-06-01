<script setup lang="ts">
const count = ref(0);
const increment = () => count.value++;
const fullpath = () => "posts/" + count.value;
const { data } = await useFetch("/api/hello");

const dd = ref(null);

//function x() { dd.value= await useFetch("/api/hello")} ;
</script>
<template>
  <main>
    <div>
      <pre>{{ data }}</pre>
      <p>{{ $route.path }}</p>
      <p>{{ fullpath() }}</p>
      <button @click="increment">Increment</button>
      <p>{{ count }}</p>
      <ContentDoc :path="fullpath()">
        <template v-slot="{ doc }">
          <article>
            <h1>{{ doc.title }}</h1>
            <ContentRenderer :value="doc" />
          </article>
        </template>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
        <template #empty>
          <h1>Document is empty</h1>
        </template>
      </ContentDoc>
    </div>
  </main>
</template>
