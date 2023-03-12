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

    },
    level: { control: 'radio', options: ['sm', 'md', 'lg'] },
    weight: { control: 'select', options: ['normal', 'semi-medium', 'medium', 'semi-strong', 'strong'] },
    color: { control: 'select', options: ['primary', 'secondary', 'warning', 'error'] },
  },
  render: (args: any) => ({
    components: { FlashTypography },
    setup() {
      return { args };
    },
    template: `<FlashTypography v-bind="args">{{args.default}}</FlashTypography>`,
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

export const primaryColor = {
  args: {
    ...sm.args,
    color: 'primary'
  }
};

export const secondaryColor = {
  args: {
    ...sm.args,
    color: 'secondary'
  }
};

export const warningColor = {
  args: {
    ...sm.args,
    color: 'warning'
  }
};

export const errorColor = {
  args: {
    ...sm.args,
    color: 'error'
  }
};

export const primaryColorLgLevel = {
  args: {
    ...sm.args,
    level:'lg',
    color: 'primary'
  }
};