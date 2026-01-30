<template>
	<section id="schedule" class="py-24 px-4 bg-white">
		<div class="max-w-6xl mx-auto">
			<!-- Header -->
			<div class="text-center mb-16">
				<p
					class="text-yoga-primary text-sm font-semibold uppercase tracking-wide mb-2"
				>
					COMMUNITY ACTIVITIES — THIS MONTH
				</p>
				<h2 class="text-4xl font-bold text-yoga-dark font-heading mb-4">
					Schedule
				</h2>
				<p class="text-gray-600 mb-2">
					All activities are hosted inside NUI Healthy Food – Jimbaran
				</p>
				<p class="text-sm text-gray-600 mt-4 italic">
					Schedule is updated monthly. Spots are limited. Advance booking is
					recommended.
				</p>
			</div>

			<!-- Schedule Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div
					v-for="classItem in classes"
					:key="classItem.id"
					class="bg-white rounded-2xl p-6 border border-gray-100 hover:border-yoga-accent transition-all duration-300 hover:shadow-lg flex flex-col"
				>
					<!-- Time & Duration -->
					<div
						class="flex items-center justify-between mb-5 pb-4 border-b border-gray-100"
					>
						<p class="text-sm text-gray-700 font-medium flex-1">
							{{ classItem.time }}
						</p>
						<span
							class="text-xs text-gray-500 ml-3 bg-gray-50 px-2 py-1 rounded"
							>{{ classItem.duration }} min</span
						>
					</div>

					<!-- Type Badge -->
					<div class="mb-4">
						<span
							class="inline-block px-4 py-1.5 bg-yoga-primary text-white text-xs font-semibold rounded-full"
						>
							{{ classItem.type }}
						</span>
					</div>

					<!-- Instructor -->
					<h3 class="text-xl font-bold text-yoga-dark font-heading mb-3">
						{{ classItem.instructor }}
					</h3>

					<!-- Description -->
					<p class="text-sm text-gray-600 leading-relaxed mb-5 flex-1">
						{{ classItem.description }}
					</p>

					<!-- Level Badge -->
					<div class="mb-4">
						<span
							class="inline-block px-3 py-1 bg-yoga-light text-yoga-dark text-xs rounded-full font-medium"
						>
							{{ classItem.level }}
						</span>
					</div>

					<!-- Book Now Button -->
					<a
						:href="classItem.booking"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full px-4 py-2 bg-yoga-accent text-white rounded-lg hover:bg-yoga-primary transition-colors font-medium text-sm text-center inline-block"
					>
						Book Now
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { classes } from "@/data/classes";
</script>
