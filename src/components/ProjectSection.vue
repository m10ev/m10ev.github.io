<script setup lang="ts">
import { ref, onMounted } from 'vue'
import GlassCard from './GlassCard.vue'

const pinnedRepos = [
  'Forked',
  'Music-Guru',
  'Security-System',
  'CSharpSnake',
  'LibraryManagementSystem',
]

interface Repo {
  name: string
  description: string
  html_url: string
  language: string
  stargazers_count: number
  forks_count: number
}

const projects = ref<Repo[]>([])
const loading = ref(true)

onMounted(async () => {
  const res = await fetch('https://api.github.com/users/m10ev/repos?sort=updated&per_page=100')
  const data = await res.json()
  projects.value = data.filter((repo: Repo) => pinnedRepos.includes(repo.name))
  loading.value = false
})
</script>

<template>
  <section id="projects" class="py-20">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Projects</h2>
    <p class="text-gray-500 dark:text-white/40 mb-12">Things I've built</p>

    <div v-if="loading" class="text-gray-500 dark:text-white/40">
      Loading projects...
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a
        v-for="project in projects"
        :key="project.name"
        :href="project.html_url"
        target="_blank"
        class="group"
      >
        <GlassCard class="h-full flex flex-col p-6 hover:border-purple-500/50 transition-colors cursor-pointer">
          <h3 class="text-lg truncate font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-500 transition-colors">
            {{ project.name }}
          </h3>
          <p class="text-gray-500 dark:text-white/50 text-sm mb-4 leading-relaxed grow">
            {{ project.description || 'No description provided.' }}
          </p>
          <div class="flex items-center justify-between mt-auto">
            <span
              v-if="project.language"
              class="text-xs font-mono bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 px-2 py-1 rounded"
            >
              {{ project.language }}
            </span>
          </div>
        </GlassCard>
      </a>
    </div>
  </section>
</template>