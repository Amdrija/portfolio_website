<template>
  <section class="work">
    <project
      v-for="project in projectList"
      v-bind:projectTitle="project.projectTitle"
      v-bind:projectImage="project.projectImage"
      v-bind:projectLink="project.projectLink"
      v-bind:projectTechnologies="project.projectTechnologies"
      v-bind:key="project.projectTitle"
    ></project>
  </section>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./styles.scss"></style>