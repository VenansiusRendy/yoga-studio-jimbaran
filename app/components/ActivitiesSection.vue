<template>
	<section id="activities" class="py-24 px-4 bg-white">
		<div class="max-w-6xl mx-auto">
			<!-- Header -->
			<div class="text-center mb-16">
				<p
					class="text-yoga-primary text-sm font-semibold uppercase tracking-wide mb-2"
				>
					{{ data.subtitle }}
				</p>
				<h2 class="text-4xl font-bold text-yoga-dark font-heading mb-4">
					{{ data.title }}
				</h2>
				<p class="text-gray-600 max-w-3xl mx-auto">{{ data.description }}</p>
			</div>

			<!-- Activities Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div
					v-for="activity in data.list"
					:key="activity.id"
					class="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-yoga-accent transition-all duration-300 hover:shadow-lg"
				>
					<!-- Header -->
					<div class="flex items-start justify-between mb-4">
						<span
							v-if="activity.status === 'coming-soon'"
							class="px-3 py-1 bg-yoga-secondary/30 text-yoga-dark text-xs font-semibold rounded-full"
						>
							Coming Soon
						</span>
					</div>

					<!-- Title & Description -->
					<h3 class="text-2xl font-bold text-yoga-dark font-heading mb-3">
						{{ activity.title }}
					</h3>
					<p class="text-gray-700 leading-relaxed mb-4">
						{{ activity.description }}
					</p>

					<!-- Focus Points (for Yoga) -->
					<div v-if="activity.focusPoints" class="space-y-2 mt-4">
						<p class="text-sm font-semibold text-yoga-primary mb-2">
							Our yoga sessions focus on:
						</p>
						<ul class="space-y-2">
							<li
								v-for="(point, index) in activity.focusPoints"
								:key="index"
								class="flex items-center gap-2 text-gray-700"
							>
								<div class="w-1.5 h-1.5 rounded-full bg-yoga-accent"></div>
								<span class="text-sm">{{ point }}</span>
							</li>
						</ul>
					</div>

					<!-- Topics (for Workshops) -->
					<div v-if="activity.topics" class="space-y-2 mt-4">
						<ul class="space-y-2">
							<li
								v-for="(topic, index) in activity.topics"
								:key="index"
								class="flex items-center gap-2 text-gray-700"
							>
								<div class="w-1.5 h-1.5 rounded-full bg-yoga-primary"></div>
								<span class="text-sm">{{ topic }}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { activities } from "@/data/activities";

const data = activities;
</script>
