<script setup lang="ts">
const links=[
    {
        label: 'Github',
        url: 'https://github.com/m10ev',
        icon: 'devicon-github-original',
    },
    {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mihail-tenev-331700375/',
        icon: 'devicon-linkedin-plain',
    },
    {
        label: 'Email',
        url: 'mailto:mtenev@outlook.com',
        icon: 'fa-solid fa-envelope', 
    },
]
</script>

<template>
  <section id="contact" class="py-20 border-t border-gray-200 dark:border-gray-800">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Contact</h2>
    <p class="text-gray-500 dark:text-gray-400 mb-12">Get in touch</p>

    <div class="flex flex-col gap-4 max-w-md">
      <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
        I'm always open to new opportunities, collaborations or just a chat.
        Feel free to reach out!
      </p>

      <div class="flex gap-4 mt-4">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          class="flex items-center gap-2 border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 text-gray-700 dark:text-gray-300 px-5 py-3 rounded-lg transition-colors"
        >
          <i :class="link.icon"></i>
          <span>{{ link.label }}</span>
        </a>
      </div>
    </div>
  </section>
</template>