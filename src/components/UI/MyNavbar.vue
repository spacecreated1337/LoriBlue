<template>
  <div class="shadow-lg accent-gray-400 px-5 sm:px-0 relative z-10">
    <nav
      class="container mx-auto flex justify-between items-center sm:py-3 py-2"
    >
      <div>
        <img
          class="sm:w-24 w-14"
          src="@/assets/img/lb-logo.jpg"
          alt="LoriBlue logo"
        />
      </div>
      <div class="hidden sm:block">
        <h2
          class="lg:text-3xl sm:text-2xl text-base font-extrabold tracking-tight text-center sm:text-left text-gray-900"
        >
          Магазин женской обуви LoriBlue
        </h2>
      </div>
      <div>
        <router-link to="/">Catalog</router-link>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
