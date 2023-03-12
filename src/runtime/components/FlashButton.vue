<template>
    <button class="btn" :class="computedClasses">
        <slot>{{ label }}</slot>
    </button>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';

export default defineComponent({
    props: {
        primary: {
            type: Boolean,
            default: true
        },
        label: {
            type: String,
            default: ''
        },
    },
    setup(props) {
        const { primary } = toRefs(props)
        const computedClasses = computed(() => {
            return [
                `${primary.value ? 'btn-primary' : 'btn-secondary'}`,
            ]
        })
        return {
            computedClasses
        }
    }
})

</script>

<style scoped>
.btn {
    @apply font-bold py-2 px-4 rounded;
}

.btn-primary {
    @apply bg-blue-500 text-white;
}

.btn-primary:hover {
    @apply bg-blue-700;
}

.btn-secondary {
    @apply bg-gray-500 text-white;
}

.btn-secondary:hover {
    @apply bg-gray-700;
}
</style>