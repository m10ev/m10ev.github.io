<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import ProjectSection from './components/ProjectSection.vue';
import ContactSection from './components/ContactSection.vue';
</script>

<template>
  <div id="app">
    <HeroSection/>
    <ProjectSection/>
    <ContactSection/>
  </div>
</template>

<style>
#app {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px;
}
</style>