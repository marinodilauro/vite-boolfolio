<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    AppMain,
    AppHeader
  }
}

</script>

<template>

  <AppHeader />

  <AppMain />

  <footer>FOOTER</footer>

</template>

<style></style>