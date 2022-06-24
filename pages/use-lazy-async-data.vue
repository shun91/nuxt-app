<template>
  <div>{{ pending ? 'Loading' : count }}</div>
  <button @click="refresh">refresh</button>
</template>

<script setup>
  const { pending, data: count } = useLazyAsyncData('count', () => $fetch('/api/count'))
  watch(count, (newCount) => {
    console.log('newCount', newCount);
  })

  const refresh = () => refreshNuxtData('count')
</script>