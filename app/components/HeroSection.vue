<template>
	<section class="pt-16 pb-24 px-4 bg-white">
		<div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
			<!-- Left -->
			<div class="space-y-8">
				<div class="space-y-4">
					<h1 class="text-5xl lg:text-6xl font-bold text-yoga-dark leading-tight font-heading">
						{{ data.hero.title }}
					</h1>
					<p class="text-lg text-yoga-accent font-medium tracking-wide">
						{{ data.hero.subtitle }}
					</p>
					<p class="text-lg text-gray-600 leading-relaxed font-body">
						{{ data.hero.description }}
					</p>
				</div>

				<div class="flex flex-col sm:flex-row gap-4 pt-4">
					<!-- <a
						href="#schedule"
						class="inline-flex items-center justify-center px-6 py-3 bg-yoga-accent text-white rounded-lg hover:bg-yoga-primary transition-all duration-300 font-medium text-sm"
					>
						{{ data.hero.cta.primary }}
					</a> -->
					<a :href="whatsappLink" target="_blank" rel="noopener noreferrer"
						class="inline-flex items-center justify-center px-6 py-3 border-2 border-yoga-primary text-yoga-primary rounded-lg hover:bg-yoga-light transition-all duration-300 font-medium text-sm">
						<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 16 16">
							<path
								d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z">
							</path>
							<path
								d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z">
							</path>
						</svg>
						{{ data.hero.cta.secondary }}
					</a>
				</div>
			</div>

			<!-- Right Image -->
			<div class="relative">
				<div class="aspect-square rounded-2xl overflow-hidden shadow-lg">
					<img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop"
						alt="NUI Community Space" class="w-full h-full object-cover" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { community } from "@/data/community";

const data = community;
const whatsappLink = useWhatsappMessage().buildLinkDefault();
</script>
