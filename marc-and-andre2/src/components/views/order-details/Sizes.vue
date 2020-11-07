<template>
    <td><input type="text" class="form-control" v-model="size"></td>
</template>
<script>
export default {
    props: ['size']
}
</script>
<style lang="scss">
    input {
        width: 20px;
    }
</style>