<script>
import AppBanner from '../components/AppBanner.vue';

export default {
  name: 'SingleProject',
  components: {
    AppBanner
  },
  props: {
    slug: String,
    title: String
  }
}
</script>

<template>

  <AppBanner :title="this.slug" lead-text=" Scroll down to see more" call-to-action="Check my projects"
    call-to-action-url="projects"></AppBanner>

  <div class="sinlge_project">
    <h2>Project {{ slug }}</h2>

  </div>

</template>

<style></style>