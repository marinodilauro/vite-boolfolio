<script>
import AppLogo from './AppLogo.vue';
import { ref } from 'vue';
import { TwitterIcon, LinkedinIcon, GithubIcon } from 'lucide-vue-next';


export default {
  name: 'AppFooter',
  components: {
    AppLogo,
    TwitterIcon,
    LinkedinIcon,
    GithubIcon
  },
  props: {
    projects: Array
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<template>

  <footer class="p-3 d-flex justify-content-between align-items-center border-top border-secondary">
    <div>Copyright {{ currentYear }} all rights reserved</div>
    <div class="d-flex gap-3">
      <a href="#" class="text-secondary">
        <TwitterIcon />
      </a>
      <a href="#" class="text-secondary">
        <LinkedinIcon />
      </a>
      <a href="#" class="text-secondary">
        <GithubIcon />
      </a>
    </div>
  </footer>


</template>

<style></style>