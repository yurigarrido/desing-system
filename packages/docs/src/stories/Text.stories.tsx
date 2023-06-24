import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@garridodev/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adip',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
