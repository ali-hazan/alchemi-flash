<template>
    <component :is="type" :style="computedStlyle">
        <slot />
    </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from 'vue';
import { ITypography, ITypographyLevel, ITypographyWeight, ITypographyColor } from '../types/typography';

export default defineComponent({
    props: {
        type: {
            type: String as PropType<ITypography>,
            default: 'span'
        },
        level: {
            type: String as PropType<ITypographyLevel>,
            default: 'md'
        },
        weight: {
            type: String as PropType<ITypographyWeight>,
            default: 'normal'
        },
        color: {
            type: String as PropType<ITypographyColor>,
            default: 'primary'
        }
    },
    setup(props) {
        const { level, weight, color } = toRefs(props)

        // available font size
        const fontSize = ref({
            sm: '1rem',
            md: '1.5rem',
            lg: '2rem'
        })

        // available font color
        const fontColor = ref({
            primary: '#000000',
            secondary: '#5A5A5A',
            warning: '#FFCC00',
            error: '#cc0000',
        })
        // available font wight
        const fontWeight = ref({
            'normal': '200',
            'semi-medium': '300',
            'medium': '500',
            'semi-strong': '700',
            'strong': '900'
        })

        //computed style for calculating the font size, color and font weight
        const computedStlyle = computed(() => {
            return {
                fontSize: fontSize.value[level.value],
                color: fontColor.value[color.value],
                fontWeight: fontWeight.value[weight.value],
            }
        })
        return {
            computedStlyle
        }
    }
})
</script>
