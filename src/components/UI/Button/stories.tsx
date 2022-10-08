import Button from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'UI',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

export const ButtonUI: Story = (args) => <Button {...args} />
