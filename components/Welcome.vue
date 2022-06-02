<template>
  <div class="container">
    <h1>Welcome to Nuxt3</h1>
    count: {{ count }}
    <button @click="increment">increment</button>
  </div>
</template>

<script setup>
const count = ref(0);
const increment = () => count.value++;
</script>

<style>
body {
  margin: 0;
}

.container {
  height: 90vh;
  width: 90vw;
  background: rgb(1, 42, 53);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  color: white;
  text-align: center;
  font-family: helvetica, arial, sans-serif;
  font-weight: 400;
}
</style>
