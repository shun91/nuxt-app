<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Style type="text/css" children="body { background-color: green; }"/>
    </Head>
    <Welcome />
  </div>
</template>

<script setup>
const title = ref('Hello World')
</script>