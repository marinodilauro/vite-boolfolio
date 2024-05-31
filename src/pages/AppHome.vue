<script>
import axios from 'axios';
import AppBanner from '../components/AppBanner.vue';

export default {
  name: 'AppHome',
  components: {
    AppBanner
  },
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8000',
      base_project_url: '/api/projects',
      mainProjects: [],
      loading: true
    }
  },
  methods: {

  },
  mounted() {

  }
}

</script>

<template>

  <AppBanner title="Welcome to my portfolio" lead-text="Scroll down to see more" call-to-action="Check my projects"
    call-to-action-url="projects"></AppBanner>

</template>

<style></style>
