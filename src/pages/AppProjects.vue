<script>
import { RouterLink } from 'vue-router';
import AppLoader from '../components/AppLoader.vue';
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';

export default {
  name: 'AppProjects',
  components: {
    AppLoader,
    ProjectCard
  },
  data() {
    return {

      // API varaibles
      base_api_url: 'http://127.0.0.1:8000',
      base_project_url: '/api/projects',

      // Other variables
      projects: [],
      loading: true,
    }
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          this.projects = response.data.projects;
          this.loading = false;
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  mounted() {
    const url = this.base_api_url + this.base_project_url;
    this.callApi(url);
  }
}

</script>

<template>

  <div class="project_list container wrapper me-0">
    <h3 class="display-4 text-end me-5">all<strong class="poppins-bold">projects</strong></h3>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-5">

      <div class="col" v-for="project in projects.data">

        <ProjectCard :project="project" :base_api_url="this.base_api_url" />

      </div>

    </div>

    <!-- Loader -->
    <!-- <AppLoader v-else /> -->

  </div>

</template>

<style></style>
