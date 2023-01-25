import { Story, Meta } from '@storybook/react';

import Main, { MainProps } from '.';

export default {
  title: 'Components/Data Display/Main',
  component: Main,
  args: {
    title: 'Title',
    description: 'description',
  },
} as Meta;

export const Basic: Story<MainProps> = (args) => <Main {...args} />;

Basic.args = {
  title: 'Title',
  description: 'description',
};

export const Default: Story<MainProps> = (args) => <Main {...args} />;
