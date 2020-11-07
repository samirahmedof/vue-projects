<template>
  <div class="d-flex page-header">
    <div>
      <splitByLetter :text="title" v-if="title" class="title"/>
      <splitByWord v-if="text" :text="text" class="paragraph"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageHeader',
    data() {
      return {}
    },
    components: {
      splitByWord: () => import('./splitByWord'),
      splitByLetter: () => import('./splitByLetter'),
    },
    props: ['title', 'text']
  }
</script>
