<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}

</script>

<template>

  <AppHeader />

  <main>
    <RouterView />
  </main>

  <AppFooter />

</template>

<style></style>