<template>
	<section id="space" class="py-24 px-4 bg-white">
		<div
			class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
		>
			<!-- Content -->
			<div class="space-y-6">
				<div>
					<p
						class="text-yoga-primary text-sm font-semibold uppercase tracking-wide"
					>
						{{ data.space.subtitle }}
					</p>
					<h2 class="text-4xl font-bold text-yoga-dark mt-2 font-heading">
						{{ data.space.title }}
					</h2>
				</div>

				<p class="text-gray-700 leading-relaxed text-lg">
					{{ data.space.description }}
				</p>

				<!-- Benefits List -->
				<div class="space-y-3 pt-4">
					<p class="text-sm font-semibold text-yoga-primary mb-3">
						Many participants choose to:
					</p>
					<div class="grid grid-cols-2 gap-3">
						<div
							v-for="(benefit, index) in data.space.benefits"
							:key="index"
							class="flex items-center gap-2 p-3 bg-yoga-light/30 rounded-lg"
						>
							<div
								class="w-2 h-2 rounded-full bg-yoga-accent flex-shrink-0"
							></div>
							<span class="text-gray-800 text-sm">{{ benefit }}</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Image -->
			<div class="rounded-2xl overflow-hidden shadow-lg h-96">
				<img
					src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=600&fit=crop"
					alt="NUI Healthy Food Space"
					class="w-full h-full object-cover"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { community } from "@/data/community";

const data = community;
</script>
