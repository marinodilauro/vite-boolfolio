<script>
import axios from 'axios';
import ProjectBanner from '../components/ProjectBanner.vue';
import AppLoader from '../components/AppLoader.vue';

export default {
  name: 'SingleProject',
  components: {
    ProjectBanner,
    AppLoader
  },
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8000',
      base_project_url: '/api/projects/',
      project: '',
      cover_image_base_path: 'http://127.0.0.1:8000/storage/',
      cover_image_path: '',
      loading: true
    }
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          if (response.data.success) {

            // get project data
            this.project = response.data.result;
            this.cover_image_path = this.cover_image_base_path + response.data.result.thumb;
            this.loading = false;
          } else {

            // handle 404 error  page
            this.$router.push({ name: 'not-found' });
          }
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  mounted() {
    const url = this.base_api_url + this.base_project_url + this.$route.params.slug;
    this.callApi(url);
  }
}
</script>

<template>

  <div class="container-fluid p-0" v-if="!loading">
    <h3 class="display-4 text-end">project<strong class="poppins-bold">{{ project.title }}</strong></h3>

    <ProjectBanner :title="project.title" :category="project.type.name" :tags="project.technologies"
      :style="{ backgroundImage: `url(${cover_image_path})` }">
    </ProjectBanner>
    <section id="project_details">

    </section>
  </div>

  <!-- Loader -->
  <AppLoader v-else />

</template>

<style></style>