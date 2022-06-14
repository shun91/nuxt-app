<template>
  <div>Page visits: {{ count }}</div>
</template>

<script setup>
  const { data: count } = useFetch('/api/count')
</script>