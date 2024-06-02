<script>
import axios from 'axios';
import AppBanner from '../components/AppBanner.vue';
import ProjectSlider from '../components/ProjectSlider.vue';



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
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response);
          this.mainProjects = response.data.projects;
          this.loading = false;
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  mounted() {
    /*     let url = this.base_api_url + this.base_project_url;
        this.callApi(url); */
  }
}

</script>

<template>

  <AppBanner title="Welcome to my portfolio" lead-text="Scroll down to see more" call-to-action="Check my projects"
    call-to-action-url="projects"></AppBanner>

  <ProjectSlider />


</template>

<style></style>
