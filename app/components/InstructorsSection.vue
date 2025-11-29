<template>
  <section id="instructors" class="py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-yoga-primary-green text-sm font-semibold uppercase tracking-wide mb-2">Expert Guidance</p>
        <h2 class="text-4xl font-bold text-yoga-ocean-dark">Meet Our Teachers</h2>
        <p class="text-gray-600 mt-4">Experienced instructors dedicated to your wellness journey</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="instructor in instructors" :key="instructor.id" class="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-yoga-primary-green transition-colors">
          <div class="h-64 overflow-hidden">
            <img :src="instructor.image" :alt="instructor.name" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-yoga-ocean-dark">{{ instructor.name }}</h3>
            <p class="text-yoga-primary-green text-sm font-semibold mt-1">{{ instructor.role }}</p>
            <p class="text-gray-600 text-sm mt-3 leading-relaxed">{{ instructor.bio }}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span v-for="specialty in instructor.specialties" :key="specialty" class="inline-block px-3 py-1 bg-yoga-cream text-yoga-ocean-dark text-xs rounded-full font-medium">
                {{ specialty }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const instructors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Lead Instructor',
    bio: '8 years of experience with RYT-500 certification. Specializes in vinyasa flow and restorative practices.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=400&h=500&fit=crop',
    specialties: ['Vinyasa', 'Restorative']
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Senior Instructor',
    bio: 'RYT-200 certified with focus on alignment, breathing, and meditation techniques for all levels.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400&h=500&fit=crop',
    specialties: ['Hatha', 'Yin']
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Wellness Coach',
    bio: 'Passionate about holistic wellness and stress relief through power yoga and mindfulness.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=400&h=500&fit=crop',
    specialties: ['Power', 'Meditation']
  }
]
</script>
