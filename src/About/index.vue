<template>
  <section class="about">
    <div class="my-photo">
      <img src="../assets/images/img_3916.jpg" ref="myPhoto" alt="A photo of myself" />
    </div>

    <div class="about-skills-container">
      <div class="skills-text">
        <h3>Skills</h3>
        <ul class="skill-list">
          <li v-for="skill in skills" v-bind:key="skill" class="skill">
            <div class="icon" v-bind:class="'icon-'+skill"></div>
            <div class="skill-name">{{skill}}</div>
          </li>
        </ul>
      </div>
      <div class="about-text">
        <h3>About</h3>
        <div class="about-paragraph-wrapper">
          <p>Hi, I'm Andrija Jelenkovic, an electrical engineering student at the University of Belgrade, Faculty of Electrical Engineering, Department of Signals and Systems.</p>
          <p>I know a lot of things. Some of those skills are useful, like Web Development, and others, like gaming, not so much.</p>
          <p>I enjoy solving problems a lot and this website was built as a solution to one of the problems I had: "How to advertize my skills to future employers/clients?"</p>
          <p>In the meantime, I continue to mess around with new projects and I try to learn new technologies.</p>
          <div class="cv-container">
            <a v-bind:href="cvlink" download>↓ CV</a>
          </div>
          <div class="contact">
            <div class="email-container">
              <h4 class="email">Email</h4>
              <p>andrija.jelenkovic@protonmail.com</p>
            </div>
            <div class="phone-container">
              <h4 class="phone">Phone</h4>
              <p>+381 62 976 27 25</p>
            </div>
          </div>
        </div>
        <!--<button class="button button-contact">Contact Me</button>-->
      </div>
    </div>
  </section>
</template>
<script src="./script.js"></script>
<style scoped lang = "scss" src="./styles.scss">
</style>