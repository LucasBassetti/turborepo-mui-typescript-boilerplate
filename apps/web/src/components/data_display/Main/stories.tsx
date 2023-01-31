import { StoryFn, Meta } from '@storybook/react';

import Main, { MainProps } from '.';

export default {
  title: 'Components/Data Display/Main',
  component: Main,
  args: {
    title: 'Title',
    description: 'description',
  },
} as Meta;

export const Basic: StoryFn<MainProps> = (args) => <Main {...args} />;

Basic.args = {
  title: 'Title',
  description: 'description',
};

export const Default: StoryFn<MainProps> = (args) => <Main {...args} />;
