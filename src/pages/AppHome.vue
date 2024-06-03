<script>
import AppBanner from '../components/AppBanner.vue';
import ProjectSlider from '../components/ProjectSlider.vue';
import { RouterLink } from 'vue-router';

export default {
  name: 'AppHome',
  components: {
    AppBanner,
    ProjectSlider
  },
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8000',
      base_project_url: '/api/main',
      mainProjects: [],
      loading: true
    }
  }
}

</script>

<template>

  <AppBanner title="Welcome to my portfolio" lead-text="Scroll down to see more" call-to-action="Check my projects"
    call-to-action-url="projects"></AppBanner>

  <!-- Projects -->
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="display-4">Projects</h3>
      <RouterLink :to="{ name: 'projects' }" class="btn btn-primary" role="button">View all projects</Routerlink>
    </div>
    <ProjectSlider />
  </div>

</template>

<style></style>
