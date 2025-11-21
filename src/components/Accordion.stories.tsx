import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, type AccordionItem } from './Accordion'

const sampleItems: AccordionItem[] = [
  { id: 'eu', name: 'EU', subtitle: 'European Union', count: 1_302_550 },
  { id: 'un', name: 'UN', subtitle: 'The United Nations', count: 977_392 },
  { id: 'wbg', name: 'World Bank Group', subtitle: '', count: 384_109 },
  { id: 'lipad', name: 'Lipad', subtitle: 'Linked Parliamentary Data', count: 357_162 },
  { id: 'unesco', name: 'UNESCO', subtitle: 'United Nations Educational, ...', count: 331_417 },
  { id: 'eric', name: 'ERIC', subtitle: 'Education Resources...', count: 297_267 },
]

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  args: {
    title: 'Organization',
    items: sampleItems,
    defaultOpen: false,
  },
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Collapsed: Story = {}

export const OpenByDefault: Story = {
  args: { defaultOpen: true },
}

export const ShortList: Story = {
  args: {
    items: sampleItems.slice(0, 3),
    defaultOpen: true,
  },
}
