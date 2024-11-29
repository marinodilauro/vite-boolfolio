<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';
import AppLoader from '../components/AppLoader.vue';

export default {
  name: 'ProjectSlider',
  components: {
    AppLoader,
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


    const carousel = new bootstrap.Carousel(document.getElementById('projectCarousel'), {
      interval: 5000,
      wrap: true
    })

    // Add custom class to show multiple items
    document.querySelector('.carousel-inner').classList.add('carousel-inner-multiple')

  }
}
</script>

<template>

  <div class="position-relative flex-grow-1 px-4 mb-4">
    <div id="projectCarousel" class="carousel slide h-100" data-bs-ride="carousel">
      <div class="carousel-inner h-100">
        <div class="carousel-viewport">
          <div v-for="(project, index) in mainProjects" :key="project.id"
            :class="['carousel-item h-100', index === 0 ? 'active' : '']">
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="carousel-content overflow-hidden">

                <RouterLink :to="{ name: 'project', params: { slug: project.slug } }">
                  <img class="w-100 h-100 object-fit-cover" :src="base_api_url + '/storage/' + project.thumb"
                    :alt="project.title + ' thumbnail'">
                </RouterLink>

              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
        <img src="/src/assets/img/arrow-circle-left.svg" class="carousel-control-prev-icon" aria-hidden="true" alt="">
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
        <img src="/src/assets/img/arrow-circle-right.svg" class="carousel-control-prev-icon" aria-hidden="true" alt="">
        <span class="visually-hidden">Next</span>
      </button>
      <div class="carousel-indicators">
        <button v-for="(project, index) in mainProjects" :key="project.id" type="button"
          data-bs-target="#projectCarousel" :data-bs-slide-to="index" class="indicator"
          :class="index === 0 ? 'active' : ''" :aria-current="index === 0 ? 'true' : 'false'"
          :aria-label="project.title"></button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>