<template>
  <div>{{ pending ? 'Loading' : count }}</div>
</template>

<script setup>
  const { pending, data: count } = useLazyAsyncData('count', () => $fetch('/api/count'))
  watch(count, (newCount) => {
    console.log('newCount', newCount);
  })
</script>