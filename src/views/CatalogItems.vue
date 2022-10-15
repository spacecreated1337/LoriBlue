<template>
  <div class="mt-10 container mx-auto px-5 sm:px-0">
    <i @click="back" class="fa-solid fa-arrow-left-long"></i>
    <div
      class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
    >
      <router-link
        :to="`${$route.path}/${product.name
          .split(' ')
          .join('-')
          .toLowerCase()}`"
        v-for="product in products"
        :key="product.id"
      >
        <shop-item :product="product" />
      </router-link>
    </div>
  </div>
</template>
<script>
import ShopItem from "@/components/ShopItem";

export default {
  name: "CatalogItems",
  components: {
    ShopItem,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: `Basic Tee 8-Pack(${this.$route.params.shoestype})`,
          href: "#",
          price: "$256",
          description:
            "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
          options: "8 colors",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
          imageAlt:
            "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
        },
        {
          id: 2,
          name: `Basic Tee(${this.$route.params.shoestype})`,
          href: "#",
          price: "$32",
          description:
            "Look like a visionary CEO and wear the same black t-shirt every day.",
          options: "Black",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
          imageAlt: "Front of plain black t-shirt.",
        },
        {
          id: 3,
          name: `Basic Tee 8-Pack(${this.$route.params.shoestype})`,
          href: "#",
          price: "$256",
          description:
            "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
          options: "8 colors",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
          imageAlt:
            "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
        },
        {
          id: 4,
          name: `Basic Tee(${this.$route.params.shoestype})`,
          href: "#",
          price: "$32",
          description:
            "Look like a visionary CEO and wear the same black t-shirt every day.",
          options: "Black",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
          imageAlt: "Front of plain black t-shirt.",
        },
        {
          id: 5,
          name: `Basic Tee 8-Pack(${this.$route.params.shoestype})`,
          href: "#",
          price: "$256",
          description:
            "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
          options: "8 colors",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
          imageAlt:
            "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
        },
        {
          id: 6,
          name: `Basic Tee(${this.$route.params.shoestype})`,
          href: "#",
          price: "$32",
          description:
            "Look like a visionary CEO and wear the same black t-shirt every day.",
          options: "Black",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
          imageAlt: "Front of plain black t-shirt.",
        },
      ],
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
