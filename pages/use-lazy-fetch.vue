<template>
  <div v-if="pending">Loading...</div>
  <div v-else>
    <div v-for="post in posts">
      {{ post }}
    </div>
  </div>
</template>

<script setup>
  const { pending, data: posts } = useLazyFetch('/api/posts')
  watch(posts, (newPosts) => {
    console.log('newPosts:', newPosts);
  })
</script>