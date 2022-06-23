<template>
  <div>
    {{ users }}
    <button @click="previous">prev</button>
    <button @click="next">next</button>
  </div>
</template>

<script setup>
  const page = ref(1)
  const { data: users, refresh } = await useFetch(() => `/api/users?page=${page.value}&take=6`)

  function previous() {
    page.value--
    refresh()
  }

  function next() {
    page.value++
    refresh()
  }
</script>