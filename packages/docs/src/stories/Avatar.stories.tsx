import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@garridodev/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/yurigarrido.png',
    alt: 'yuri garrido',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
