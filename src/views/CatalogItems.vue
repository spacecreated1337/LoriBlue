<template>
  <div class="mt-10 container mx-auto px-5 sm:px-0">
    <i @click="back" class="fa-solid fa-arrow-left-long"></i>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 xl:gap-x-14 xl:gap-y-14 gap-5 sm:gap-1">
      <router-link :to="`${$route.path}/${item.name}`" v-for="(item, idx) in items" :key="idx">
        <shop-item :category-item="item" />
      </router-link>
    </div>
  </div>
</template>
<script>
import ShopItem from "@/components/ShopItem";

export default {
  name: 'catalogtype',
  components: {
    ShopItem
  },
  data() {
    return {
      items: [
        {name: `${this.$route.params.shoestype}-1`,
          img: require('@/assets/img/tufli.jpg')},
        {name: `${this.$route.params.shoestype}-2`,
          img: require('@/assets/img/tufli.jpg')},
        {name: `${this.$route.params.shoestype}-3`,
        img: require('@/assets/img/tufli.jpg')},
        {name: `${this.$route.params.shoestype}-4`,
        img: require('@/assets/img/tufli.jpg')},
        {name: `${this.$route.params.shoestype}-5`,
        img: require('@/assets/img/tufli.jpg')},
        {name: `${this.$route.params.shoestype}-6`,
        img: require('@/assets/img/tufli.jpg')},
        {name: `${this.$route.params.shoestype}-7`,
        img: require('@/assets/img/tufli.jpg')},
        {name: `${this.$route.params.shoestype}-8`,
        img: require('@/assets/img/tufli.jpg')},
      ]
  }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
