<script>
import axios from 'axios';
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

export default {
  name: 'ProjectSlider',
  components: {
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

  <div class="container">
    <Carousel :itemsToShow="3.85" :wrapAround="true" :transition="1000">

      <Slide v-for="(project, index) in mainProjects" :key="project" :index="index">
        <div class="carousel__item">

          <div class="card">
            <img class="img-fluid" :src="base_api_url + '/storage/' + project.thumb" alt="Title" />
            <h3>{{ project.title }}</h3>
          </div>

        </div>

      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>

    </Carousel>
  </div>


</template>

<style></style>