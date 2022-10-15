<template>
  <div>
    <div>
      <img :src="categoryItem.img" alt="">
    </div>
    <p class="text-center">
      {{categoryItem.name}}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    categoryItem: {
      type: Object,
      required: false,
    }
  }
}
</script>
<style>

</style>
