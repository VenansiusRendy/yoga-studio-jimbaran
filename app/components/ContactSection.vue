<template>
  <section id="contact" class="py-24 px-4 bg-yoga-light/20">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-yoga-primary text-sm font-semibold uppercase tracking-wide mb-2">Get in Touch</p>
        <h2 class="text-4xl font-bold text-yoga-dark font-heading">Connect With Us</h2>
        <p class="text-gray-600 mt-4">We're here to support your wellness journey. Reach out anytime — we'd love to guide you.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <!-- Location -->
        <div class="bg-white rounded-xl p-8 border border-gray-100 hover:border-yoga-accent transition-colors">
          <div class="flex items-center justify-center w-12 h-12 rounded-full bg-yoga-light mb-4">
            <svg class="w-6 h-6 text-yoga-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="font-bold text-yoga-dark font-heading mb-2">Location</h3>
          <p class="text-gray-600 text-sm">Jimbaran, Bali — A calm, welcoming studio inspired by the ocean.</p>
          <a href="https://maps.app.goo.gl/vrjqVVySuDHDGSBj6" target="_blank" class="text-yoga-primary text-sm font-medium hover:text-yoga-accent transition-colors mt-3 inline-block">
            View Map →
          </a>
        </div>

        <!-- Phone -->
        <div class="bg-white rounded-xl p-8 border border-gray-100 hover:border-yoga-accent transition-colors">
          <div class="flex items-center justify-center w-12 h-12 rounded-full bg-yoga-light mb-4">
            <svg class="w-6 h-6 text-yoga-primary" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
            </svg>
          </div>
          <h3 class="font-bold text-yoga-dark font-heading mb-2">WhatsApp</h3>
          <p class="text-gray-600 text-sm">+628-777-633-6882</p>
          <a :href="whatsappLink" target="_blank" class="text-yoga-primary text-sm font-medium hover:text-yoga-accent transition-colors mt-3 inline-block">
            Message us for bookings or questions. →
          </a>
        </div>

        <!-- Email -->
        <div class="bg-white rounded-xl p-8 border border-gray-100 hover:border-yoga-accent transition-colors">
          <div class="flex items-center justify-center w-12 h-12 rounded-full bg-yoga-light mb-4">
            <svg class="w-6 h-6 text-yoga-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="font-bold text-yoga-dark font-heading mb-2">Email</h3>
          <p class="text-gray-600 text-sm">jimbaranyogastudio@gmail.com</p>
          <a href="mailto:jimbaranyogastudio@gmail.com" class="text-yoga-primary text-sm font-medium hover:text-yoga-accent transition-colors mt-3 inline-block">
            Get in touch for general inquiries or collaborations. →
          </a>
        </div>
      </div>

      <!-- CTA Card -->
      <div class="bg-gradient-to-r from-yoga-primary to-yoga-accent rounded-2xl p-12 text-center text-white">
        <h3 class="text-3xl font-bold mb-4 font-heading">Begin Your Wellness Journey</h3>
        <p class="text-green-100 mb-8 max-w-2xl mx-auto">
          Move mindfully, breathe fully, and live in balance.
        </p>
        <a :href="whatsappLink" target="_blank" class="inline-flex items-center justify-center px-8 py-3 bg-white text-yoga-primary rounded-lg hover:bg-yoga-light transition-colors font-bold">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
          </svg>
          Book on WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const whatsappLink = computed(() => {
  const phoneNumber = '+6287776336882'
  const message = encodeURIComponent('Hi, I would like to book a yoga session at Jimbaran Yoga Studio.')
  return `https://wa.me/${phoneNumber}?text=${message}`
})
</script>
