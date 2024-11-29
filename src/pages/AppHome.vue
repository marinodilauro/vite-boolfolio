<script>
import ProjectSlider from '../components/ProjectSlider.vue';

export default {
  name: 'AppHome',
  components: {
    ProjectSlider
  }
}

</script>

<template>

  <section id="highlighted_projects">
    <div class="container-fluid d-flex flex-column justify-content-center gap-5 position-relative p-0 m-0">

      <h3 class="display-4 text-end">Highlight</h3>

      <!-- Main projects slider-->
      <transition appear mode="out-in" name="fade">
        <ProjectSlider />
      </transition>

    </div>

  </section>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
