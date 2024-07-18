<script>
import axios from 'axios';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { RouterLink } from 'vue-router';
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
    async fetchProjects() {
      try {
        const url = this.base_api_url + this.base_project_url;
        const response = await axios.get(url);
        this.mainProjects = response.data.projects;
        this.loading = false;
      } catch (error) {
        console.error('Errore nel caricamento dei progetti:', error);
        this.loading = false;
      }
    }
  },
  mounted() {
    this.fetchProjects();
  }
}
</script>

<template>

  <Carousel :items-to-show="1.6" :wrap-around="true" :transition="1600" :autoplay="1500"
    :pause-autoplay-on-hover="true">
    <Slide v-for="project in mainProjects" :key="project.id">
      <div class="carousel__item">
        <RouterLink :to="{ name: 'project', params: { slug: project.slug } }">
          <div class="project_slide">
            <img class="img-fluid" :src="base_api_url + '/storage/' + project.thumb"
              :alt="project.title + ' thumbnail'" />
            <div class="title_background"></div>
            <h3>{{ project.title }}</h3>
          </div>
        </RouterLink>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>

</template>

<style scoped></style>