import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb, type BreadcrumbItem } from './Breadcrumb'

const sampleItems: BreadcrumbItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Uploads', href: '#' },
  { label: 'New' },
]

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  args: {
    items: sampleItems,
  },
}

export default meta

type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {}

export const LongTrail: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Projects', href: '#' },
      { label: '2025', href: '#' },
      { label: 'Design System', href: '#' },
      { label: 'Docs', href: '#' },
      { label: 'Breadcrumbs' },
    ],
  },
}
