import { ComponentProps } from 'react'
import { styled } from './styles/index'
import { VariantProps } from '@stitches/react'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  fontWeight: '$bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $4',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = VariantProps<typeof Button>
