<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Style type="text/css" children="body { background-color: green; }"/>
    </Head>
    <Welcome />
    {{ hello }}
  </div>
</template>

<script setup>
const title = ref('Hello World')

const hello = await $fetch('/api/hello/nuxt')
</script>