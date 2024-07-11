<script>

export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    },
    base_api_url: {
      type: String,
      required: true
    }
  },
  computed: {
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${this.base_api_url + '/storage/' + this.project.thumb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '16px'
      };
    }
  }
}
</script>

<template>

  <div class="project_card" :style="backgroundImageStyle">
    <div class="overlay"></div>
    <div class="details">

      <div class="cardHeader">
        <RouterLink :to="{ name: 'project', params: { slug: project.slug } }">
          {{ project.title }}
        </RouterLink>
      </div>

      <div class="cardText">
        <p>{{ project.description }}</p>
      </div>

      <div class="d-flex gap-2 mb-3 flex-wrap">
        <span class="tag" v-for="tag in project.technologies">
          {{ tag.name }}
        </span>
      </div>

      <div class="d-flex gap-3">
        <button type="button" class="button" :disabled="!project.project_link">
          <span class="button_top">
            <a :href="project.project_link" target="_blank">
              View project
            </a>
          </span>
        </button>

        <button type="button" class="button" :disabled="!project.repo_link">
          <span class="button_top">
            <a :href="project.repo_link" target="_blank">
              Check repository
            </a>
          </span>
        </button>
      </div>

    </div>
  </div>


</template>

<style>
.project_card {
  height: 400px;
  width: 100%;
  padding: 1.7rem 1rem;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 7.5px;
  transition: 0.5s ease;
  color: aliceblue;

  .overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 16px;
    transition: opacity 0.3s ease;
  }

  &:hover .overlay {
    background-color: rgba(0, 0, 0, 0.6);
  }

  .cardHeader {
    text-transform: uppercase;
    position: relative;
    width: max-content;
    font-size: 1.4rem;
    font-weight: bold;
    transition: all 0.5s ease;
    z-index: 2;

    a {
      text-shadow: 1.5px 1.5px 1px rgba(0, 0, 0, 0.7);
      text-decoration: none;
      color: aliceblue;

      &:hover {
        text-shadow: 1.5px 1.5px 1px rgba(255, 255, 255, 0.5);
        color: #0d6efd;
      }
    }

    &::after {
      content: "";
      width: calc(100% + 1rem);
      height: 2.5px;
      transform: translateX(calc(-100% - 1rem));
      background: linear-gradient(135deg, #0023b3 0%, #00d2ff 100%);
      bottom: -2px;
      left: 0;
      position: absolute;
      opacity: 0;
    }

  }

  .details {
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transform: translateY(95%);
    transition: all 0.5s ease;

    .tag {
      color: white;
      border: 1px solid;
      padding: 2px 10px;
      line-height: 16px;
      background-color: #2e2e2e;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.7rem;
      font-weight: 500;
      display: inline-block;
    }

    .button {
      --button_radius: 0.75rem;
      --button_color: aliceblue;
      --button_outline_color: linear-gradient(135deg, #0023b3 0%, #00d2ff 100%);
      font-weight: bold;
      border: none;
      border-radius: var(--button_radius);
      background: var(--button_outline_color);

      .button_top {
        display: block;
        box-sizing: border-box;
        border: 2px solid var(--button_outline_color);
        border-radius: var(--button_radius);
        padding: 0.5rem 1rem;
        background: var(--button_color);
        transform: translateY(-0.2rem);
        transition: transform 0.1s ease;

        a {
          color: linear-gradient(135deg, #0023b3 0%, #00d2ff 100%);
          text-decoration: none;
        }
      }

      &:hover .button_top {
        /* Pull the button upwards when hovered */
        transform: translateY(-0.33em);
      }

      &:active .button_top {
        /* Push the button downwards when pressed */
        transform: translateY(0);
      }
    }
  }

  &:hover .details {
    transform: translateY(0%);
    transition-delay: 0.5s;
  }

  &:hover .cardHeader::after {
    transform: translateX(-1rem);
    transition: 0.5s ease;
    opacity: 1;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.4) 10px 20px 30px,
      rgba(0, 0, 0, 0.3) 10px 1px 53px 3px,
      rgba(1, 0, 0, 0.2) 0px -1px 3px;
  }
}
</style>