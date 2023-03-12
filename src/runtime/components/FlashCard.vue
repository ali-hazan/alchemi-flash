<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="img" :alt="imgAlt">
        <div class="px-6 py-4">
            <FlashTypography type="h2" level="lg" weight="semi-strong">{{ title }}</FlashTypography>
            <FlashTypography type="p" level="sm">
                {{ description }}
            </FlashTypography>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FlashTypography from './FlashTypography.vue';

export default defineComponent({
    props: {
        img: {
            type: String,
        },
        imgAlt: {
            type: String,
            default: "Image"
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        }
    },
    components: { FlashTypography }
})
</script>
