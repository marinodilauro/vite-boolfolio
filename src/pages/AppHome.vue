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
    <div class="container-fluid position-relative p-0 m-0">

      <h3 class="display-4 text-end me-5">highlithed<strong class="poppins-bold">projects</strong></h3>

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
