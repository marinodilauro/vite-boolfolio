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
      <ProjectSlider />
    </div>

  </section>

</template>

<style></style>
