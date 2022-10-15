<template>
  <div class="sm:mt-10 container mx-auto px-5 sm:px-0">
    <div class="bg-white">
      <div class="max-w-2xl mx-auto pt-10 pb-14 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>

        <div
          class="grid gap-y-4 grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
        >
          <router-link
            :to="`${$route.path}${product.name
              .split(' ')
              .join('-')
              .toLowerCase()}`"
            v-for="product in typeOfShoes"
            :key="product.id"
          >
            <div class="group relative bg-white flex flex-col overflow-hidden">
              <img :src="product.img" :alt="product.name" />
              <p class="text-center">{{ product.name }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ShopItem from "@/components/ShopItem";
export default {
  name: "CatalogView",
  components: {
    ShopItem,
  },
  data() {
    return {
      typeOfShoes: [
        {
          name: "Sapogi",
          img: require("@/assets/img/sapogi.jpg"),
        },
        {
          name: "Botinki",
          img: require("@/assets/img/tufli.jpg"),
        },
        {
          name: "Tufli",
          img: require("@/assets/img/sapogi.jpg"),
        },
        {
          name: "Baletki",
          img: require("@/assets/img/tufli.jpg"),
        },
        {
          name: "Bosonojki",
          img: require("@/assets/img/sapogi.jpg"),
        },
        {
          name: "Sandalii",
          img: require("@/assets/img/tufli.jpg"),
        },
      ],
    };
  },
};
</script>
