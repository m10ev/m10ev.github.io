<script setup lang="ts">
const name = 'Mihail Tenev'
const role = 'Programmer'
const bio = 'A student passionate about building games and software. I work mainly with C# and Python, building everything from web apps to AI projects.'
</script>

<template>
  <section id="hero" class="min-h-screen flex flex-col justify-center py-20">
    <div class="p-10 max-w-2xl">
      <p class="text-purple-500 font-mono text-sm mb-3 tracking-widest uppercase">Hello, I'm</p>
      <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
        {{ name }}
      </h1>
      <h2 class="text-2xl text-gray-500 dark:text-white/60 mb-6 font-normal">
        {{ role }}
      </h2>
      <p class="text-gray-600 dark:text-white/50 max-w-xl text-lg leading-relaxed mb-10">
        {{ bio }}
      </p>
      <div class="flex gap-4">
        <a
          href="#projects"
          class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          View Projects
        </a>
        <a
          href="https://github.com/m10ev"
          target="_blank"
          class="border border-gray-300 dark:border-white/20 hover:border-purple-500 text-gray-700 dark:text-white/70 hover:text-purple-500 dark:hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  </section>
</template>