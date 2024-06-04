<script>
export default {
  name: 'ProjectBanner',
  props: {
    'title': String,
    'category': String,
    'tags': Array
  }
}
</script>

<template>

  <div id="banner" class="p-5 mb-4">
    <div class="container-fluid py-5">
      <div class="banner_foreground">
        <div class="banner_content">

          <div class="title d-flex align-items-center gap-3">

            <h1 class="display-5 fw-bold">{{ title }}</h1>

            <span class="badge">{{ category }}</span>

          </div>

          <div class="tags d-flex gap-3">
            <span class="badge small rounded-pill" v-for="tag in this.tags">{{ tag.name }}</span>
          </div>

        </div>
      </div>
    </div>
  </div>


</template>

<style></style>