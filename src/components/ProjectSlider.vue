<script>
import axios from 'axios';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import AppLoader from '../components/AppLoader.vue';

export default {
  name: 'ProjectSlider',
  components: {
    AppLoader,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8000',
      base_project_url: '/api/main',
      mainProjects: [],
      loading: true
    };
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response);
          this.mainProjects = response.data.projects;
          this.loading = false;
          console.log(this.mainProjects);
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  mounted() {
    let url = this.base_api_url + this.base_project_url;
    this.callApi(url);
  }
}

</script>

<template>

  <Carousel :itemsToShow="1.45" :wrapAround="true" :transition="1600" :autoplay="2000" :pauseAutoplayOnHover="true"
    v-if="!loading">

    <Slide v-for="(project, index) in mainProjects" :key="project" :index="index">
      <div class="carousel__item">

        <div class="project_slide">
          <img class="img-fluid" :src="base_api_url + '/storage/' + project.thumb" :alt="project.title + 'thumbnail'" />
          <div class="title_background"></div>
          <h3>{{ project.title }}</h3>
        </div>

      </div>

    </Slide>

    <template #addons>
      <Pagination />
    </template>

  </Carousel>

  <!-- Loader -->
  <AppLoader v-else />

</template>

<style></style>