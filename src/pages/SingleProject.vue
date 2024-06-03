<script>
import axios from 'axios';
import ProjectBanner from '../components/ProjectBanner.vue';

export default {
  name: 'SingleProject',
  components: {
    ProjectBanner
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

  <ProjectBanner :title="project.title" lead-text="Scroll down to see more" call-to-action="Check my projects"
    call-to-action-url="projects" :style="{ backgroundImage: `url(${cover_image_path})` }">
  </ProjectBanner>

</template>

<style></style>