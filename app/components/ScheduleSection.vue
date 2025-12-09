<template>
  <section id="schedule" class="py-24 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-yoga-primary text-sm font-semibold uppercase tracking-wide mb-2">Schedule</p>
        <h2 class="text-4xl font-bold text-yoga-dark font-heading">Weekly Schedule</h2>
        <p class="text-gray-600 mt-4">Move with intention throughout the week. Each class is designed to help you breathe deeper, move softer, and realign from within.</p>
      </div>

      <div class="space-y-4">
        <div v-for="yogaClass in classes" :key="yogaClass.id" class="bg-gradient-to-r from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:border-yoga-accent hover:shadow-md transition-all">
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <p class="text-lg font-bold text-yoga-dark font-heading">{{ yogaClass.time }}</p>
                <span :class="`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${yogaClass.typeColor}`">
                  {{ yogaClass.type }}
                </span>
                <span v-if="yogaClass.level" class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-yoga-light text-yoga-dark">
                  {{ yogaClass.level }}
                </span>
              </div>
              <p class="text-gray-600 text-sm font-body">with <span class="font-semibold">{{ yogaClass.instructor }}</span> • {{ yogaClass.duration }} min</p>
              <p class="text-gray-500 text-sm mt-2">{{ yogaClass.description }}</p>
              <!-- <div class="flex items-center gap-4 mt-3 text-xs text-gray-500">
                <span v-if="yogaClass.spots > 0" class="flex items-center gap-1">
                  <svg class="w-4 h-4 text-yoga-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
                  {{ yogaClass.spots }} spots available
                </span>
                <span v-else class="text-orange-600 font-semibold">Nearly Full</span>
              </div> -->
            </div>
            <NuxtLink 
              v-if="yogaClass.spots > 0"
              @click="whatsappLink(yogaClass)"
              target="_blank"
              class="px-4 py-2 bg-yoga-accent text-white rounded-lg hover:bg-yoga-primary transition-colors font-medium text-sm whitespace-nowrap"
            >
              Book
            </NuxtLink>
            <button v-else disabled class="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-medium text-sm">
              Full
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const classes = [
  {
    id: 1,
    time: 'MON 07:30',
    type: 'Hatha, Ashtanga, Power Yoga, Matt Pilates',
    level: 'All Levels',
    instructor: 'Saut (Senior Instructor)',
    duration: 60,
    spots: 8,
    typeColor: 'bg-yoga-accent',
    description: 'A grounding practice that blends Hatha, Ashtanga, Power Yoga, and Mat Pilates into a balanced, mindful experience. Saut guides you through movement that strengthens the body, clears the mind, and helps you reconnect with calm—perfect for anyone seeking stability, focus, and inner balance.'
  },
  {
    id: 2,
    time: 'MON 09:00',
    type: 'Hatha, Ashtanga, Power Yoga, Matt Pilates',
    level: 'All Levels',
    instructor: 'Saut (Senior Instructor)',
    duration: 60,
    spots: 5,
    typeColor: 'bg-yoga-accent',
    description: 'A grounding practice that blends Hatha, Ashtanga, Power Yoga, and Mat Pilates into a balanced, mindful experience. Saut guides you through movement that strengthens the body, clears the mind, and helps you reconnect with calm—perfect for anyone seeking stability, focus, and inner balance.'
  },
  {
    id: 3,
    time: 'MON 17:00',
    type: 'Vinyasa, Matt Pilates',
    level: 'All Levels',
    instructor: 'Putri (Senior Instructor)',
    duration: 60,
    spots: 10,
    typeColor: 'bg-yoga-primary',
    description: 'A smooth and energizing mix of Vinyasa and Mat Pilates designed to build strength, mobility, and confidence. Putri’s classes feel welcoming, supportive, and beginner-friendly—helping you move with ease, breathe more freely, and feel stronger from the inside out.'
  },
  {
    id: 4,
    time: 'MON 18:00',
    type: 'Vinyasa, Matt Pilates',
    level: 'All Levels',
    instructor: 'Putri (Senior Instructor)',
    duration: 60,
    spots: 2,
    typeColor: 'bg-yoga-primary',
    description: 'A smooth and energizing mix of Vinyasa and Mat Pilates designed to build strength, mobility, and confidence. Putri’s classes feel welcoming, supportive, and beginner-friendly—helping you move with ease, breathe more freely, and feel stronger from the inside out.'
  },
  {
    id: 5,
    time: 'THU 17:00',
    type: 'Vinyasa, Matt Pilates',
    level: 'All Levels',
    instructor: 'Putri (Senior Instructor)',
    duration: 60,
    spots: 12,
    typeColor: 'bg-yoga-primary',
    description: 'A smooth and energizing mix of Vinyasa and Mat Pilates designed to build strength, mobility, and confidence. Putri’s classes feel welcoming, supportive, and beginner-friendly—helping you move with ease, breathe more freely, and feel stronger from the inside out.'
  },
  {
    id: 6,
    time: 'THU 18:00',
    type: 'Vinyasa, Matt Pilates',
    level: 'All Levels',
    instructor: 'Putri (Senior Instructor)',
    duration: 60,
    spots: 12,
    typeColor: 'bg-yoga-primary',
    description: 'A smooth and energizing mix of Vinyasa and Mat Pilates designed to build strength, mobility, and confidence. Putri’s classes feel welcoming, supportive, and beginner-friendly—helping you move with ease, breathe more freely, and feel stronger from the inside out.'
  },
  {
    id: 7,
    time: 'SAT 07:30',
    type: 'Hatha',
    level: 'Beginner',
    instructor: 'Ziya',
    duration: 60,
    spots: 12,
    typeColor: 'bg-yoga-dark',
    description: 'A warm, gentle slow-flow experience inspired by the softness of the Jimbaran sunset. Ziya creates a safe, calming space for beginners to stretch, breathe, and unwind—helping you release tension, find comfort in movement, and end the day with a peaceful heart.'
  },
  {
    id: 9,
    time: 'SAT 9:00',
    type: 'Hatha',
    level: 'Beginner',
    instructor: 'Ziya',
    duration: 60,
    spots: 12,
    typeColor: 'bg-yoga-dark',
    description: 'A warm, gentle slow-flow experience inspired by the softness of the Jimbaran sunset. Ziya creates a safe, calming space for beginners to stretch, breathe, and unwind—helping you release tension, find comfort in movement, and end the day with a peaceful heart.'
  },
  {
    id: 10,
    time: 'SAT 17:00',
    type: 'Vinyasa, Matt Pilates',
    level: 'All Levels',
    instructor: 'Putri (Senior Instructor)',
    duration: 60,
    spots: 12,
    typeColor: 'bg-yoga-primary',
    description: 'A smooth and energizing mix of Vinyasa and Mat Pilates designed to build strength, mobility, and confidence. Putri’s classes feel welcoming, supportive, and beginner-friendly—helping you move with ease, breathe more freely, and feel stronger from the inside out.'
  },
  {
    id: 11,
    time: 'SAT 18:00',
    type: 'Vinyasa, Matt Pilates',
    level: 'All Levels',
    instructor: 'Putri (Senior Instructor)',
    duration: 60,
    spots: 12,
    typeColor: 'bg-yoga-primary',
    description: 'A smooth and energizing mix of Vinyasa and Mat Pilates designed to build strength, mobility, and confidence. Putri’s classes feel welcoming, supportive, and beginner-friendly—helping you move with ease, breathe more freely, and feel stronger from the inside out.'
  },
  {
    id: 12,
    time: 'SUN 07:30',
    type: 'Hatha',
    level: 'Beginner',
    instructor: 'Ziya',
    duration: 60,
    spots: 12,
    typeColor: 'bg-yoga-dark',
    description: 'A warm, gentle slow-flow experience inspired by the softness of the Jimbaran sunset. Ziya creates a safe, calming space for beginners to stretch, breathe, and unwind—helping you release tension, find comfort in movement, and end the day with a peaceful heart.'
  },
  {
    id: 13,
    time: 'SUN 9:00',
    type: 'Hatha',
    level: 'Beginner',
    instructor: 'Ziya',
    duration: 60,
    spots: 12,
    typeColor: 'bg-yoga-dark',
    description: 'A warm, gentle slow-flow experience inspired by the softness of the Jimbaran sunset. Ziya creates a safe, calming space for beginners to stretch, breathe, and unwind—helping you release tension, find comfort in movement, and end the day with a peaceful heart.'
  },
  {
    id: 14,
    time: 'SUN 17:00',
    type: 'Hatha, Ashtanga, Power Yoga, Matt Pilates',
    level: 'All Levels',
    instructor: 'Saut (Senior Instructor)',
    duration: 60,
    spots: 8,
    typeColor: 'bg-yoga-accent',
    description: 'A grounding practice that blends Hatha, Ashtanga, Power Yoga, and Mat Pilates into a balanced, mindful experience. Saut guides you through movement that strengthens the body, clears the mind, and helps you reconnect with calm—perfect for anyone seeking stability, focus, and inner balance.'
  },
  {
    id: 15,
    time: 'SUN 18:00',
    type: 'Hatha, Ashtanga, Power Yoga, Matt Pilates',
    level: 'All Levels',
    instructor: 'Saut (Senior Instructor)',
    duration: 60,
    spots: 5,
    typeColor: 'bg-yoga-accent',
    description: 'A grounding practice that blends Hatha, Ashtanga, Power Yoga, and Mat Pilates into a balanced, mindful experience. Saut guides you through movement that strengthens the body, clears the mind, and helps you reconnect with calm—perfect for anyone seeking stability, focus, and inner balance.'
  },
]

const whatsappLink = (yogaClass) => {
  const phoneNumber = '+6287776336882'
  const message = encodeURIComponent(`Hi, I would like to book a yoga session at Jimbaran Yoga Studio with the following details:

Name:
Date: 
Time: ${yogaClass.time}
Instructor: ${yogaClass.instructor}`)
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
};
</script>
