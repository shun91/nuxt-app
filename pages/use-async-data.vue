<template>
  Page visits: {{ data }}
</template>

<script setup>
const { data } = await useAsyncData('count', async () => {
  const c = await $fetch('/api/count')
  return c.count
})
</script>