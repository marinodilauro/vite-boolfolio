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

  <!-- Projects -->
  <section id="highlighted_projects">
    <div class="container position-relative">

      <h3 class="display-4 text-end">highlithed<strong class="poppins-bold">projects</strong></h3>

      <ProjectSlider />
    </div>

  </section>

</template>

<style></style>
