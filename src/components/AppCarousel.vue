<script>
import axios from 'axios';

export default {
  name: 'AppCarousel',
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

  <div class="container-fluid bg-dark d-flex justify-content-center align-items-center">

    <div id="carouselId" class="carousel slide w-50 d-flex justify-content-center align-items-center"
      data-bs-ride="carousel">

      <ol class="carousel-indicators">
        <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="First slide">
        </li>
        <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
        <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
      </ol>

      <div class="carousel-inner w-75" role="listbox">
        <div class="carousel-item active" v-for="project in mainProjects">

          <div class="card m-auto my-4" style="width: 400px; height: 450px;">
            <img class="card-img-top" :src="base_api_url + '/storage/' + project.thumb" alt="Title" />
            <div class="card-body">
              <h4 class="card-title">{{ project.title }}</h4>
              <p class="card-text">{{ project.description }}</p>
            </div>
          </div>

        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

    </div>
  </div>



</template>

<style></style>