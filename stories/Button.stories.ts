import FlashButton from '../src/runtime/components/FlashButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
export default {
  title: 'Button',
  component: FlashButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
    default: {
      control: {
        type: 'text',
      },
    }
  },
  render: (args: any) => ({
    components: { FlashButton },
    setup() {
      return { args };
    },
    template: `<FlashButton v-bind="args"><template v-if="args.default">{{args.default}}</template></FlashButton>`,
  }),
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/vue/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    primary: false,
    label: 'Secondary Button',
  },
};

export const WithSlot = {
  args: {
    primary: false,
    default: 'slot text',
  },
  render: (args: any) => ({
    components: { FlashButton },
    setup() {
      return { args };
    },
    template: `<FlashButton v-bind="args">${args.default}</FlashButton>`,
  }),
};
