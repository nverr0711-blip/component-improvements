import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    totalPages: 20,
    currentPage: 2,
    maxVisible: 9,
  },
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(args.currentPage)
    return <Pagination {...args} currentPage={page} onChange={setPage} />
  },
}

export const LargeDataset: Story = {
  args: {
    totalPages: 1000,
    currentPage: 10,
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage)
    return <Pagination {...args} currentPage={page} onChange={setPage} />
  },
}

export const Compact: Story = {
  args: {
    totalPages: 12,
    currentPage: 6,
    maxVisible: 7,
  },
  render: (args) => {
    const [page, setPage] = useState(args.currentPage)
    return <Pagination {...args} currentPage={page} onChange={setPage} />
  },
}
