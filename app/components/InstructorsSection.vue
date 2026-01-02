<template>
  <section id="instructors" class="py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-yoga-primary text-sm font-semibold uppercase tracking-wide mb-2">Expert Guidance</p>
        <h2 class="text-4xl font-bold text-yoga-dark font-heading">Meet Your Instructors</h2>
        <p class="text-gray-600 mt-4">Our teachers lead with presence, compassion, and clarity. Each brings a unique approach to movement while sharing the same intention — to create a calm, inclusive space for everyone.</p>
      </div>

      <div class="md:flex gap-8 md:w-[60%] mx-auto">
        <div v-for="instructor in instructors" :key="instructor.id" class="flex-1 bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-yoga-accent transition-colors">
          <div class="overflow-hidden h-96">
            <img :src="instructor.image" :alt="instructor.name" class="object-contain w-full"/>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-yoga-dark font-heading">{{ instructor.name }}</h3>
            <p class="text-yoga-primary text-sm font-semibold mt-1">{{ instructor.role }}</p>
            <p class="text-gray-600 text-sm mt-3 leading-relaxed">{{ instructor.bio }}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span v-for="specialty in instructor.specialties" :key="specialty" class="inline-block px-3 py-1 bg-yoga-light text-yoga-dark text-xs rounded-full font-medium">
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
    name: 'Saut Ganda Nainggolan',
    role: 'Mindful Flow & Emotional Balance',
    bio: "I started yoga simply as a practice and part of my career path, but over the years I’ve come to truly understand how deeply yoga has influenced my life. Yoga is not just about breathing exercises or physical poses — it is about emotional control, mental clarity, and developing inner intelligence.",
    image: 'instructor_2.jpg',
    specialties: ['Mental Clarity', 'Emotional Stability', 'Inner Balance']
  },
  {
    id: 2,
    name: 'Fauziyah Aulia Rishanti (Ziya)',
    role: 'Gentle Hatha & Beginner-Friendly Practice',
    bio: "Hi, I’m Ziya — a passionate yoga instructor focused on making yoga accessible and welcoming for everyone, especially beginners. With a strong foundation in Hatha Yoga, I create safe, gentle, and easy-to-follow classes designed to build confidence, flexibility, and body awareness. As a growing instructor, I bring a fresh, supportive, and patient approach to help you start your yoga journey comfortably.",
    image: 'instructor_1.jpg',
    specialties: ['Gentle Guidance', 'Body Awareness', 'Calming Practice']
  }
]
</script>
