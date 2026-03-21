<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Orb {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  colorDark: string
  colorLight: string
  alpha: number
  pulse: number
  pulseSpeed: number
}

const canvas = ref<HTMLCanvasElement | null>(null)
const isDark = ref(true)
let animationId: number
let orbs: Orb[] = []
let mediaQuery: MediaQueryList

const COLORS_DARK = [
  '167, 139, 250',
  '139, 92, 246',
  '124, 58, 237',
]

const COLORS_LIGHT = [
  '109, 40, 217',
  '124, 58, 237',
  '91, 33, 182',  
]

function createOrb(width: number, height: number): Orb {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    radius: Math.random() * 160 + 70,
    colorDark:  COLORS_DARK[Math.floor(Math.random()  * COLORS_DARK.length)],
    colorLight: COLORS_LIGHT[Math.floor(Math.random() * COLORS_LIGHT.length)],
    alpha: Math.random() * 0.35 + 0.15,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: Math.random() * 0.012 + 0.004,
  }
}

function draw() {
  if (!canvas.value) return
  const ctx = canvas.value.getContext('2d')!
  const { width, height } = canvas.value
  const dark = document.documentElement.classList.contains('dark')

  ctx.clearRect(0, 0, width, height)

  for (const orb of orbs) {
    orb.pulse += orb.pulseSpeed

    const a = orb.alpha + Math.sin(orb.pulse) * 0.07
    const r = orb.radius + Math.sin(orb.pulse * 0.7) * 18

    // Light mode uses lower alpha so glows aren't overwhelming on white
    const finalAlpha = dark ? a : a * 0.55
    const color = dark ? orb.colorDark : orb.colorLight

    const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, r)
    gradient.addColorStop(0,    `rgba(${color}, ${finalAlpha})`)
    gradient.addColorStop(0.45, `rgba(${color}, ${finalAlpha * 0.35})`)
    gradient.addColorStop(1,    `rgba(${color}, 0)`)

    ctx.beginPath()
    ctx.arc(orb.x, orb.y, r, 0, Math.PI * 2)
    ctx.fillStyle = gradient
    ctx.fill()

    orb.x += orb.vx
    orb.y += orb.vy

    if (orb.x < -orb.radius) orb.x = width + orb.radius
    if (orb.x > width + orb.radius) orb.x = -orb.radius
    if (orb.y < -orb.radius) orb.y = height + orb.radius
    if (orb.y > height + orb.radius) orb.y = -orb.radius
  }

  animationId = requestAnimationFrame(draw)
}

function initOrbs() {
  if (!canvas.value) return
  orbs = Array.from({ length: 10 }, () =>
    createOrb(canvas.value!.width, canvas.value!.height)
  )
}

function resize() {
  if (!canvas.value) return
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  initOrbs()
}

function onSchemeChange(e: MediaQueryListEvent) {
  isDark.value = e.matches
}

onMounted(() => {
  // Detect system preference
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  isDark.value = mediaQuery.matches
  mediaQuery.addEventListener('change', onSchemeChange)

  resize()
  draw()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', resize)
  mediaQuery.removeEventListener('change', onSchemeChange)
})
</script>

<template>
  <div class="relative min-h-screen w-full transition-colors duration-700 bg-white dark:bg-gray-950">
    <canvas
      ref="canvas"
      class="fixed inset-0 w-full h-full pointer-events-none"
      style="z-index: 0"
    />
    <div class="relative" style="z-index: 1">
      <slot />
    </div>
  </div>
</template>