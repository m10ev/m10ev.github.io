<script setup lang="ts">
const name = 'Mihail Tenev'
const role = 'Full Stack Developer'
const bio = 'A student passionate about building games and software. I work mainly with C# and Python, building everything from web apps to AI projects.'
</script>

<template>
    <section id="hero" class="min-h-screen flex flex-col justify-center py-20">
        <p class="text-purple-500 font-mono text-sm mb-3 tracking-widest uppercase">Hello, I'm</p>
        <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {{ name }}
        </h1>
        <h2 class="text-2xl text-gray-500 dark:text-gray-400 mb-6 font-normal">
            {{ role }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-xl text-lg leading-relaxed mb-10">
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
                class="border border-gray-300 dark:border-gray-700 hover:border-purple-500 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium transition-colors"
            >
                GitHub ↗
            </a>
        </div>
    </section>
</template>