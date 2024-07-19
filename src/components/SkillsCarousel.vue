<script>

import { gsap } from "gsap";

export default {
  name: "SkillsCarousel",
  data() {
    return {
      skills: [
        { name: "HTML", logo: "src/assets/img/logos/html.png" },
        { name: "CSS", logo: "src/assets/img/logos/css.png" },
        { name: "Bootstrap", logo: "src/assets/img/logos/bootstrap.png" },
        { name: "Sass", logo: "src/assets/img/logos/sass.png" },
        { name: "JavaScript", logo: "src/assets/img/logos/javascript.png" },
        { name: "Vue.js", logo: "src/assets/img/logos/vuejs.png" },
        { name: "PHP", logo: "src/assets/img/logos/php.png" },
        { name: "Laravel", logo: "src/assets/img/logos/laravel.png" },
        { name: "MySQL", logo: "src/assets/img/logos/mysql.png" },
        { name: "Git", logo: "src/assets/img/logos/git.png" },
        { name: "GitHub", logo: "src/assets/img/logos/github.png" },
        { name: "C#", logo: "src/assets/img/logos/csharp.png" },
        { name: "Unity", logo: "src/assets/img/logos/unity.png" },
        { name: "VSCode", logo: "src/assets/img/logos/vscode.png" },
        { name: "Figma", logo: "src/assets/img/logos/figma.png" },
      ]
    };
  },
  methods: {
    animateLogos() {
      const container = this.$refs.skillContainer;
      const containerWidth = container.scrollWidth / 2;

      gsap.to(container, {
        x: `-${containerWidth}px`,
        duration: 50,
        repeat: -1,
        ease: "none",
        yoyo: true,
        onComplete: () => {
          animateLogos();
        },
      });
    },
  },
  computed: {
    repeatedSkills() {
      // Duplicate the skills array to create a seamless loop effect
      return [...this.skills, ...this.skills];
    },
  },
  mounted() {
    this.animateLogos();
  }
};
</script>

<template>
  <div class="skills-carousel">
    <div class="skills-container" ref="skillContainer">
      <div v-for="(skill, index) in repeatedSkills" :key="index" class="skills-item">
        <img :src="skill.logo" :alt="skill.name" ref="skill" />
      </div>
      <!--       <div v-for="(skill, index) in skills" :key="'clone-' + index" class="skills-item">
        <img :src="skill.logo" :alt="skill.name" />
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.skills-carousel {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

.skills-container {
  display: flex;
  white-space: nowrap;
}

.skills-item {
  display: inline-block;
  margin-right: 60px;
}

.skills-item img {
  max-width: 50px;
  display: block;
  filter: drop-shadow(0.7px 0.7px 1px white);
}
</style>