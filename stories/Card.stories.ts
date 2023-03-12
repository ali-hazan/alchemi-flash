import FlashCard from '../src/runtime/components/FlashCard.vue';

export default {
  title: 'Card',
  component: FlashCard,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { FlashCard },
    setup() {
      return { args };
    },
    template: `<FlashCard v-bind="args"/>`,
  }),
};

export const Main = {
  args: {
    img: 'https://source.unsplash.com/800x400/?robot,hospital',
    imgAlt: 'AI in 2023',
    title: 'AI Revolution in Medicine',
    description: 'Artificial intelligence in healthcare is an overarching term used to describe the use of machine-learning algorithms and software, or artificial intelligence (AI), to mimic human cognition in the analysis, presentation, and comprehension of complex medical and health care data. Specifically, AI is the ability of computer algorithms to approximate conclusions based solely on input data.',
  }
};
