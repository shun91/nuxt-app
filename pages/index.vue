<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Style type="text/css" children="body { background-color: green; }"/>
    </Head>
    <Welcome />
    {{ hello }}

    <div>
      <NuxtLink to="use-lazy-fetch">use-lazy-fetch</NuxtLink>
      <NuxtLink to="use-lazy-async-data">use-lazy-async-data</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const title = ref('Hello World')

const hello = await $fetch('/api/hello/nuxt')

const postTest = await $fetch('/api/test', { method: 'post'})

$fetch('/api/submit', { method: 'post', body: { test: 123 } })
</script>