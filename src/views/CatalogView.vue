<template>
  <div class="mt-10 container mx-auto px-5 sm:px-0">
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 xl:gap-x-14 xl:gap-y-14 gap-5 sm:gap-1">
      <router-link :to="`catalog/${item.name.toLowerCase()}`" v-for="(item, idx) in categoryItems" :key="idx">
        <shop-item :category-item="item" />
      </router-link>
    </div>
  </div>
</template>
<script>
import ShopItem from "@/components/ShopItem"
export default {
  name: "CatalogView",
  components: {
    ShopItem
  },
  data() {
    return {
      categoryItems: [{
        name: 'Tufli',
        img: require('@/assets/img/tufli.jpg')
      },
        {
          name: 'Sapogi',
          img: require('@/assets/img/sapogi.jpg')
        },
        {
          name: 'Botinki',
          img: require('@/assets/img/tufli.jpg')
        },
        {
          name: 'Bosonojki',
          img: require('@/assets/img/sapogi.jpg')
        },
        {
          name: 'Baletki',
          img: require('@/assets/img/tufli.jpg')
        },
        {
          name: 'Sandali',
          img: require('@/assets/img/sapogi.jpg')
        },
        {
          name: 'Loferi',
          img: require('@/assets/img/tufli.jpg')
        },
        {
          name: 'Krossovki',
          img: require('@/assets/img/sapogi.jpg')
        }]
    }
  }
};
</script>
