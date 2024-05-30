<script>
import AppLogo from './AppLogo.vue';

export default {
  name: 'AppHeader',
  data() {
    return {
      navLinks: [
        'Home',
        'About',
        'Projects',
        'Contacts'
      ]
    }
  },
  components: {
    AppLogo
  }
}


</script>

<template>

  <header class="bg-gray-300 text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

      <!-- Logo -->
      <AppLogo />

      <!-- Nav links -->
      <nav
        class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900" href="#" v-for="link in navLinks">{{ link }}</a>
      </nav>

    </div>
  </header>

</template>

<style></style>