<template>
  <div class="mt-10 container mx-auto px-5 sm:px-0">
    <i @click="back" class="fa-solid fa-arrow-left-long"></i>
    <div class="grid grid-cols-4 gap-x-14 gap-y-14">
      <p>{{$route.params.item}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ItemView",
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
};
</script>
