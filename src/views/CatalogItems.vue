<template>
  <div class="mt-10 container mx-auto px-5 sm:px-0">
    <div @click="back">
      <i class="fa-solid fa-arrow-left-long cursor-pointer"></i>
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
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
          name: "Machined Pen1",
          color: "Black",
          price: "$35",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
          imageAlt:
            "Black machined steel pen with hexagonal grip and small white logo at top.",
          availableColors: [
            { name: "Black", colorBg: "#111827" },
            { name: "Brass", colorBg: "#FDE68A" },
            { name: "Chrome", colorBg: "#E5E7EB" },
          ],
        },
        {
          id: 2,
          name: "Machined Pen2",
          color: "Black",
          price: "$35",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
          imageAlt:
            "Black machined steel pen with hexagonal grip and small white logo at top.",
          availableColors: [
            { name: "Black", colorBg: "#111827" },
            { name: "Brass", colorBg: "#FDE68A" },
            { name: "Chrome", colorBg: "#E5E7EB" },
          ],
        },
        {
          id: 3,
          name: "Machined Pen3",
          color: "Black",
          price: "$35",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
          imageAlt:
            "Black machined steel pen with hexagonal grip and small white logo at top.",
          availableColors: [
            { name: "Black", colorBg: "#111827" },
            { name: "Brass", colorBg: "#FDE68A" },
            { name: "Chrome", colorBg: "#E5E7EB" },
          ],
        },
        {
          id: 4,
          name: "Machined Pen4",
          color: "Black",
          price: "$35",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
          imageAlt:
            "Black machined steel pen with hexagonal grip and small white logo at top.",
          availableColors: [
            { name: "Black", colorBg: "#111827" },
            { name: "Brass", colorBg: "#FDE68A" },
            { name: "Chrome", colorBg: "#E5E7EB" },
          ],
        },
        {
          id: 5,
          name: "Machined Pen4",
          color: "Black",
          price: "$35",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
          imageAlt:
            "Black machined steel pen with hexagonal grip and small white logo at top.",
          availableColors: [
            { name: "Black", colorBg: "#111827" },
            { name: "Brass", colorBg: "#FDE68A" },
            { name: "Chrome", colorBg: "#E5E7EB" },
          ],
        },
        {
          id: 6,
          name: "Machined Pen4",
          color: "Black",
          price: "$35",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
          imageAlt:
            "Black machined steel pen with hexagonal grip and small white logo at top.",
          availableColors: [
            { name: "Black", colorBg: "#111827" },
            { name: "Brass", colorBg: "#FDE68A" },
            { name: "Chrome", colorBg: "#E5E7EB" },
          ],
        },
        {
          id: 7,
          name: "Machined Pen4",
          color: "Black",
          price: "$35",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
          imageAlt:
            "Black machined steel pen with hexagonal grip and small white logo at top.",
          availableColors: [
            { name: "Black", colorBg: "#111827" },
            { name: "Brass", colorBg: "#FDE68A" },
            { name: "Chrome", colorBg: "#E5E7EB" },
          ],
        },
        {
          id: 8,
          name: "Machined Pen4",
          color: "Black",
          price: "$35",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
          imageAlt:
            "Black machined steel pen with hexagonal grip and small white logo at top.",
          availableColors: [
            { name: "Black", colorBg: "#111827" },
            { name: "Brass", colorBg: "#FDE68A" },
            { name: "Chrome", colorBg: "#E5E7EB" },
          ],
        },
        // More products...
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
