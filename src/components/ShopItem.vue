<template>
  <div>
    <div
      class="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96"
    >
      <img
        :src="product.imageSrc"
        :alt="product.imageAlt"
        class="w-full h-full object-center object-cover sm:w-full sm:h-full"
      />
    </div>
    <div class="flex-1 p-4 space-y-2 flex flex-col">
      <h3 class="text-sm font-medium text-gray-900">
        <a :href="product.href">
          <span aria-hidden="true" class="" />
          {{ product.name }}
        </a>
      </h3>
      <p class="text-sm text-gray-500">{{ product.description }}</p>
      <div class="flex-1 flex flex-col justify-end">
        <p class="text-sm italic text-gray-500">
          {{ product.options }}
        </p>
        <p class="text-base font-medium text-gray-900">
          {{ product.price }}
        </p>
      </div>
    </div>
  </div>
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
<style></style>
