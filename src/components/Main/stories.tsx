import Main from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Boilerplate/NextJS',
    description: 'TypeScript, ReactJS, NextJS and Styled Components'
  }
} as Meta

export const Basic: Story = () => <Main />
