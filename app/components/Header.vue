<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full flex items-center justify-center">
          <img src="/icon.png" class="w-[80%] h-[80%]" alt="">
        </div>
        <span class="font-semibold text-yoga-dark text-sm md:text-base hidden sm:inline">Jimbaran Yoga Studio</span>
      </div>
      
      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#about" class="text-sm text-gray-600 hover:text-yoga-primary transition-colors">About</a>
        <a href="#schedule" class="text-sm text-gray-600 hover:text-yoga-primary transition-colors">Classes</a>
        <a href="#pricing" class="text-sm text-gray-600 hover:text-yoga-primary transition-colors">Pricing</a>
        <a href="#contact" class="text-sm text-gray-600 hover:text-yoga-primary transition-colors">Contact</a>
      </div>

      <!-- CTA Button -->
      <a
        :href="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
        class="px-4 py-2 bg-yoga-accent text-white text-sm rounded-lg hover:bg-yoga-primary transition-colors font-medium flex items-center gap-2"
      >
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path></svg>
        <span class="hidden sm:inline">Book on WhatsApp</span>
      </a>
    </nav>
  </header>
</template>

<script setup>
const whatsappLink = computed(() => {
  const phoneNumber = '+6287776336882'
  const message = encodeURIComponent('Hi, I would like to book a yoga session at Jimbaran Yoga Studio.')
  return `https://wa.me/${phoneNumber}?text=${message}`
})
</script>
