<template>
  <header>
    <div class="title">
      <a href="." class="title-link">
        <h1>Andrija Jelenkovic</h1>
      </a>
    </div>
    <nav class="nav-container">
      <span
        class="nav-item"
        href
        v-bind:class="{active: !aboutToggle}"
        v-on:click="$emit('workClicked')"
        tabindex="0"
      >Work</span>
      <span
        class="nav-item"
        href
        v-bind:class="{active: aboutToggle}"
        v-on:click="$emit('aboutClicked')"
        tabindex="0"
      >About</span>
      <a
        class="nav-item icon icon-github"
        id="github"
        href="https://github.com/Amdrija"
        target="_blank"
        rel="noopener"
      ></a>
    </nav>
  </header>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./styles.scss"></style>
