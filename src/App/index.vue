<template>
  <div class="app-container">
    <header-component
      v-bind:aboutToggle="showAboutSection"
      v-on:aboutClicked="aboutClick()"
      v-on:workClicked="workClick()"
    ></header-component>
    <div class="content">
      <about v-if="showAboutSection"></about>
      <work v-else></work>
      <footer-component></footer-component>
    </div>
  </div>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./styles.scss"></style>
