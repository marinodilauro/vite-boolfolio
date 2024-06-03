<script>
import AppMenu from './components/AppMenu.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    AppMenu,
    AppFooter
  }
}

</script>

<template>

  <div class="container-fluid">
    <div class="d-flex">
      <div class="col-3">
        <AppMenu />
      </div>
      <div class="col-9">
        <main>
          <RouterView />
        </main>
        <AppFooter />
      </div>
    </div>
  </div>




</template>

<style></style>