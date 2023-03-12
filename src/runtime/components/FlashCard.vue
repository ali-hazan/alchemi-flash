<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="img" :alt="imgAlt">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ title }}</div>
            <p class="text-gray-700 text-base">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        img: {
            type: String,
        },
        imgAlt: {
            type: String,
            default: 'Image'
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        }
    }
})
</script>
