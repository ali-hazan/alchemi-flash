<template>
    <component :is="type" :style="computedStlyle">
        <slot />
    </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from 'vue';
import { ITypography, ITypographyLevel } from '../types/typography';

export default defineComponent({
    props: {
        type: {
            type: String as PropType<ITypography>,
            default: 'span'
        },
        level: {
            type: String as PropType<ITypographyLevel>,
            default: 'md'
        }
    },
    setup(props) {
        const { level } = toRefs(props)

        // available font size
        const fontSize = ref({
            sm: '1rem',
            md: '1.5rem',
            lg: '2rem'
        })

        //computed style for calculating the font size
        const computedStlyle = computed(() => {
            return {
                fontSize: fontSize.value[level.value]
            }
        })
        return {
            computedStlyle
        }
    }
})
</script>