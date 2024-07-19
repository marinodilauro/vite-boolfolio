<script>
import SkillsCarousel from '../components/SkillsCarousel.vue'

export default {
  name: 'AppAbout',
  components: {
    SkillsCarousel
  },
  data() {
    return {
      /*       skills: ['HTML', 'CSS', 'Bootstrap', 'SASS', 'JavaScript', 'Vue.js', 'Vite',
              'PHP', 'Laravel', 'MySQL', 'Git', 'Unity', 'VS Code', 'GitHub', 'Figma'], */
      experiences:
        [{
          id: 1,
          title: 'Jr. Full Stack Web Developer Trainee',
          company: 'Boolean',
          period: 'Jan 2024 - Jul 2024',
          description: '<p>I contributed to the development of <strong>BDoctors</strong>, a portal where users can search for doctors, view profiles, send messages, and leave reviews.</p> <p>I focused on registration and profile edit <strong>frontend form validation</strong>, developed <strong>statistical charts</strong> for doctors, and designed and developed the <strong>graphical interface</strong> of the management platform for professionals.</p> <p>Also, during the 700 hours trainee, I created many other projects including:</p> <ul> <li> My full stack portfolio using<strong>Vue.js</strong> and < strong > Laravel</strong>.It is composed by two separated website, one visible to everyone and a CMS dashboard to manage my projects database and contacts with clients.</li> <li>A <a href="https://marinodilauro.github.io/vite-boolando/" target="_blank" style="color: blue; text-decoration: underline;">responsive layout</a> of a clothing e-commerce using <strong>Bootstrap</strong>, with the feature to add products to favorites.</li> <li>A <a href="https://marinodilaurochat.netlify.app/" target="_blank" style="color: blue; text-decoration: underline;">WhatsApp-like</a> web chat with functionalities implemented with <strong>Vue.js</strong>, such as sending messages with actual date and time, automatic replies with <strong>Open AI API</strong>, message deletion, and contact filtering.</li> </ul > ',
          isOpen: false
        },
        {
          id: 2,
          title: 'Animal Laboratory Technician',
          company: 'Charles River Laboratory',
          period: 'Mar 2020 - Dec 2023',
          description: 'During this experience I enhanced my <strong>clients communication skills</strong> dealing day by day with the client. I develop knowledge of database-based software working daily with the company <strong>CMS</strong>, <strong>teamwork skills</strong> by constantly communicating with other departments of the company and <strong>empathy</strong> working in the laboratory with animals.',
          isOpen: false
        },
        {
          id: 3,
          title: 'IT Support',
          company: 'XXX Universiade 2019',
          period: 'Jul 2019 - Aug 2019',
          description: "During this period I volunteered at the XXX Universiade in the Athletes' Village as IT assistant.I greatly improved my During this period I volunteered at the XXX Universiade in the Athletes' Village as IT assistant. I greatly improved my <strong>problem-solving skills</strong> by tackling and resolving various IT issues, both software and hardware, often in english. Additionally, I developed my ability to <strong>interact with people</strong> from dozens of different nationalities.problem-solving skills by tackling and resolving various IT issues, both software and hardware, often in english.Additionally, I developed my ability to interact with people from dozens of different nationalities.",
          isOpen: false
        }],
      education: [
        {
          id: 1,
          degree: 'Professional Master in Full Stack Web Developer',
          institution: 'Boolean',
          period: 'Jan 2024 - Jul 2024',
          isOpen: false
        },
        {
          id: 2,
          degree: 'Professional Master in Data Science and Machine Learning',
          institution: 'Neural Academy',
          period: 'Sep 2022 - Apr 2023',
          isOpen: false
        },
        {
          id: 3,
          degree: 'Master STEM degree in Scienze e Tecnologie delle Produzioni Animali',
          institution: 'Università degli Studi di Napoli Federico II',
          period: 'Oct 2016 - Feb 2019',
          grade: '110/110 e lode',
          isOpen: false
        }
      ]
    }
  },
  methods: {
    toggleAccordion(section, id) {
      const items = section === 'experiences' ? this.experiences : this.education;
      const item = items.find(i => i.id === id);
      if (item) {
        item.isOpen = !item.isOpen;
        this.$nextTick(() => {
          this.animateAccordion(item.isOpen, `${section}-${id}`);
        });
      }
    },
    animateAccordion(isOpen, elementId) {
      const content = document.getElementById(elementId);
      if (!content) return;

      if (isOpen) {
        content.style.height = '0px';
        content.style.opacity = '0';
        content.style.display = 'block';

        const height = content.scrollHeight;
        content.style.height = height + 'px';
        content.style.opacity = '1';

      } else {
        content.style.height = content.scrollHeight + 'px';
        content.offsetHeight;
        content.style.height = '0px';
      }
    }
  }
}
</script>

<template>

  <section id="aboute_me">
    <div class="container">

      <h3 class="display-4 text-end">about<strong class="poppins-bold">me</strong></h3>

      <div class="row mb-5">
        <div class="col-7">
          <section class="mb-5">
            <h4 class="display-6">Skills</h4>
            <SkillsCarousel />
          </section>

          <p class="description fs-3 lh-lg">
            Ciao! I'm Marino di Lauro, a <strong>Jr. Full Stack Web Developer</strong> based in Napoli, Italy.
            With a background in animal science and a <strong>passion for technology</strong>, I've transitioned
            into web development to pursue my love for creating <strong>innovative digital solutions</strong>.
            I'm passionate about creating user-friendly and efficient web applications.
            My diverse background allows me to approach problems from unique perspectives,
            and I'm always eager to <strong>learn new technologies</strong>.
          </p>
        </div>

        <div class="col-5">
          <img src="/src/assets/img/photo_2.jpg" class="rounded-5 img-fluid" alt="">
        </div>

      </div>

      <section class="mb-5">
        <h4 class="display-6">Professional Experience</h4>
        <div v-for="job in experiences" :key="job.id" class="accordion">
          <div class="accordion-header" @click="toggleAccordion('experiences', job.id)">
            <h3>{{ job.title }}</h3>
            <span class="accordion-icon">{{ job.isOpen ? '▼' : '▶' }}</span>
          </div>
          <div :id="'experiences-' + job.id" class="accordion-content">
            <p class="m-0 pt-0 pb-1"><strong>{{ job.company }}</strong> | {{ job.period }}</p>
            <p v-html="job.description"></p>
          </div>
        </div>
      </section>

      <section class="mb-5">
        <h4 class="display-6">Education</h4>
        <div v-for="edu in education" :key="edu.degree" class="education">
          <h3>{{ edu.degree }}</h3>
          <p>{{ edu.institution }} | {{ edu.period }}</p>
          <p v-if="edu.grade">Grade: {{ edu.grade }}</p>
        </div>
      </section>

      <section>
        <h4 class="display-6">Languages</h4>
        <ul>
          <li>Italian - Native</li>
          <li>English - B2 Professional Knowledge</li>
        </ul>
      </section>

    </div>
  </section>

</template>

<style scoped>
.about_me {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
}

h1,
h2,
h3 {
  color: aliceblue;
}

h3 {
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

h4 {
  margin-bottom: 1rem;
}


p {
  margin-bottom: 1rem;
}

.description {
  strong {
    color: #5fdcff;
    text-shadow: 0.5px 0.5px 1px aliceblue;
  }
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  list-style-type: none;
}

.skills-list li {
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.education {
  color: #2e2e2e;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}


.education h3 {
  color: #2e2e2e;
  margin-top: 0;
}

ul {
  padding-left: 1.5rem;
}

.accordion {
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  color: #2e2e2e;
  transition: all 250ms;
}

.accordion-header {
  background-color: #f8f9fa;
  color: #2e2e2e;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-header:hover {
  background-color: #e9ecef;
}

.accordion-icon {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.accordion-content {
  background-color: aliceblue;
  overflow: hidden;
  transition: height 0.3s ease-out, opacity 0.3s ease-out;
  height: 0;
  opacity: 0;
  color: #2e2e2e;
}

.accordion-content>* {
  padding: 1rem;
}

.accordion-header h3 {
  color: #2e2e2e;
  margin: 0;
}


/* Stili per la transizione dell'accordion */
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 250ms ease-out, opacity 250ms ease-out;
  max-height: 300px;
  /* Altezza massima approssimativa del contenuto */
  opacity: 1;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

@media (max-width: 600px) {
  .about_me {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }
}
</style>