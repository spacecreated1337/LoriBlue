<template>
  <div class="mt-10 container mx-auto px-5 sm:px-0">
    <div class="bg-white">
      <div class="xl:max-w-7xl xl:mx-auto xl:px-8">
        <div
          class="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0"
        >
          <h2
            class="text-2xl font-extrabold tracking-tight text-center sm:text-left text-gray-900"
          >
            Shop by Category
          </h2>
        </div>

        <div class="mt-10 flow-root">
          <div>
            <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
              <router-link
                :to="`${$route.path}${category.name
                  .split(' ')
                  .join('-')
                  .toLowerCase()}`"
                v-for="category in categories"
                :key="category.name"
                class="relative md:h-80 h-40 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
              >
                <span aria-hidden="true" class="absolute inset-0">
                  <img
                    :src="category.imageSrc"
                    alt=""
                    class="w-full h-full object-center object-cover"
                  />
                </span>
                <span
                  aria-hidden="true"
                  class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                />
                <span
                  class="relative mt-auto text-center sm:text-xl text-base font-bold text-white"
                  >{{ category.name }}</span
                >
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryItem from "@/components/CategoryItem";
export default {
  name: "CatalogView",
  components: {
    CategoryItem,
  },
  data() {
    return {
      categories: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
        },
        {
          name: "Productivity",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
        },
        {
          name: "Workspace",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg",
        },
        {
          name: "Sale",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
        },
        {
          name: "Sale",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
        },
        {
          name: "Sale",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
        },
        {
          name: "Sale",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
        },
      ],
    };
  },
};
</script>
