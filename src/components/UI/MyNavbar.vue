<template>
  <div class="shadow-lg accent-gray-400 px-5 sm:px-0">
    <nav class="container mx-auto flex justify-between items-center py-3">
      <div>
        <img class="sm:w-24 w-20" src="img/lb-logo.jpg" alt="LoriBlue logo" />
      </div>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/catalog">Catalog</router-link>
      </div>
      <div class="flex-col items-end sm:flex hidden">
        <a href="">Позвонить по телефону: +9981337228</a>
        <a href="">Наш телеграм: @1337228</a>
      </div>
    </nav>
  </div>
</template>
