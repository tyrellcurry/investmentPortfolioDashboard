import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NationButton from '../app/components/atoms/NationButton';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atom/NationButton',
  component: NationButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: `
**NationButton Component**

This button component can be used with various styles and configurations:
- \`primary\`: Blue button with hover effect.
- \`green\`: Green button.
- \`add\`: Button with plus icon for adding items.
- \`delete\`: Button with trash icon for deleting items.

More documentation can be found at:
- [Storybook Docs](https://storybook.js.org/docs/writing-stories)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
`,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof NationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Green: Story = {
  args: {
    variant: 'green',
    children: 'Green Button',
  },
};

export const Add: Story = {
  args: {
    variant: 'add',
    children: 'Add Button',
  },
};

export const Delete: Story = {
  args: {
    variant: 'delete',
    children: 'Delete Button',
  },
};
