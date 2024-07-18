<script>
import AppMenu from './components/AppMenu.vue';
import AppFooter from './components/AppFooter.vue';

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

    <div class="row">

      <div class="col-3">
        <AppMenu />
      </div>

      <div class="col-9 px-0">

        <main class="overflow-auto">
          <router-view v-slot="{ Component }">
            <transition mode="out-in" name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </main>

        <AppFooter />

      </div>

    </div>
  </div>




</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>