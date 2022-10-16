<template>
  <ul role="list" class="">
    <li class="sm:w-64 flex flex-col text-center lg:w-auto">
      <div class="group relative">
        <div
          class="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1"
        >
          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <div class="mt-4">
          <p class="text-sm text-gray-500">
            {{ product.color }}
          </p>
          <h3 class="mt-1 font-semibold text-gray-900">
            <a :href="product.href">
              <span class="absolute inset-0" />
              {{ product.name }} {{ $route.params.shoestype }}
            </a>
          </h3>
          <p class="mt-1 text-gray-900">
            {{ product.price }}
          </p>
        </div>
      </div>

      <h4 class="sr-only">Available colors</h4>
      <ul
        role="list"
        class="mt-auto pt-4 pb-4 flex items-center justify-center space-x-3"
      >
        <li
          v-for="color in product.availableColors"
          :key="color.name"
          class="w-4 h-4 rounded-full border border-black border-opacity-10"
          :style="{ backgroundColor: color.colorBg }"
        >
          <span class="sr-only">
            {{ color.name }}
          </span>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: false,
    },
  },
};
</script>
