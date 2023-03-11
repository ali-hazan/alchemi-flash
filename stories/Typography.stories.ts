import FlashTypography from '../src/runtime/components/FlashTypography.vue';

export default {
  title: 'Typography',
  component: FlashTypography,
  tags: ['autodocs'],
  argTypes: {
    default: {
      control: {
        type: 'text',
      },
    }
  },
  render: (args: any) => ({
    components: { FlashTypography },
    setup() {
      return { args };
    },
    template: `<FlashTypography v-bind="args">${args.default}</FlashTypography>`,
  }),
};

export const sm = {
  args: {
    level: 'sm',
    default: 'Hello world'
  }
};

export const md = {
  args: {
    ...sm.args,
    level: 'md'
  }
};

export const lg = {
  args: {
    ...sm.args,
    level: 'lg'
  }
};
