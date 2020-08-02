<template>
  <div class="card-wrapper">
    <a class="card-wrapper-link" v-bind:href="projectLink" target="_blank" rel="noopener">
      <div class="card">
        <img v-bind:src="projectImage" ref="image" v-bind:alt="projectTitle" />
        <div class="card-text">
          <h2 class="card-title">{{ projectTitle }}</h2>
          <div class="technologies">
            <div
              v-for="technology in projectTechnologies"
              class="icon"
              v-bind:class="'icon-' + technology"
              v-bind:key="technology"
            />
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./styles.scss"></style>
