<template>
  <div>{{ data }}</div>
</template>

<script setup>
const { data } = await useFetch('/api/me', {
  headers: useRequestHeaders(['cookie'])
})
</script>
