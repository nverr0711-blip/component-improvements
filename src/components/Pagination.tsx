import type { CSSProperties, ReactNode } from 'react'

type PageToken = number | 'ellipsis'

export interface PaginationProps {
  totalPages: number
  currentPage: number
  onChange: (page: number) => void
  /** Up to this many pages, show everything without ellipses. */
  maxVisible?: number
  previousLabel?: ReactNode
  nextLabel?: ReactNode
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  const rotation = direction === 'left' ? '-90deg' : '90deg'
  const horizontalOffset = direction === 'left' ? '-1px' : '1px'
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      width={22}
      height={22}
      fill="currentColor"
      style={{ transform: `rotate(${rotation})`, color: '#0f172a', position: 'relative', left: horizontalOffset }}
    >
      <path
        fillRule="evenodd"
        d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function buildPageTokens(total: number, current: number, maxVisible: number): PageToken[] {
  if (total <= 0) return []
  const safeCurrent = clamp(current, 1, total)

  // If the total pages are few, show everything.
  if (total <= maxVisible) {
    const tokens: PageToken[] = []
    for (let idx = 1; idx <= total; idx += 1) tokens.push(idx)
    return tokens
  }

  // Otherwise show: 1, …, (current-1), current, (current+1), …, last
  const tokens: PageToken[] = [1]
  const start = Math.max(2, safeCurrent - 1)
  const end = Math.min(total - 1, safeCurrent + 1)

  if (start > 2) tokens.push('ellipsis')
  for (let idx = start; idx <= end; idx += 1) tokens.push(idx)
  if (end < total - 1) tokens.push('ellipsis')

  tokens.push(total)
  return tokens
}

export function Pagination({
  totalPages,
  currentPage,
  onChange,
  maxVisible = 7,
  previousLabel,
  nextLabel,
}: PaginationProps) {
  const tokens = buildPageTokens(totalPages, currentPage, maxVisible)
  const canGoPrev = currentPage > 1
  const canGoNext = currentPage < totalPages

  const containerStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '10px 12px',
    borderRadius: 16,
    background: '#f9fafb',
    border: '1px solid #e5e7eb',
    boxShadow: '0 18px 40px rgba(0,0,0,0.08)',
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    userSelect: 'none',
  }

  const chipBase: CSSProperties = {
    minWidth: 42,
    height: 40,
    padding: '0 14px',
    borderRadius: 10,
    border: '1px solid #e5e7eb',
    background: '#ffffff',
    color: '#0f172a',
    fontSize: 14,
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 160ms ease',
  }

  const navButtonStyle: CSSProperties = {
    width: 40,
    height: 40,
    padding: 0,
    minWidth: 40,
  }

  const disabledStyle: CSSProperties = {
    opacity: 0.45,
    cursor: 'not-allowed',
  }

  const activeStyle: CSSProperties = {
    border: '1px solid #222631',
    background: '#222631',
    color: '#ffffff',
    boxShadow: '0 10px 22px rgba(17, 24, 39, 0.22)',
    fontWeight: 700,
  }

  const ellipsisStyle: CSSProperties = {
    padding: '0 6px',
    color: '#94a3b8',
    fontWeight: 500,
  }

  return (
    <div style={containerStyle}>
      <button
        type="button"
        aria-label="Previous page"
        disabled={!canGoPrev}
        onClick={() => canGoPrev && onChange(currentPage - 1)}
        style={{ ...chipBase, ...navButtonStyle, ...(canGoPrev ? {} : disabledStyle) }}
        onMouseEnter={(e) => {
          if (!canGoPrev) return
          e.currentTarget.style.background = '#f2f4f7'
          e.currentTarget.style.borderColor = '#d5dbe3'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#ffffff'
          e.currentTarget.style.borderColor = '#e5e7eb'
        }}
      >
        {previousLabel ?? <ChevronIcon direction="left" />}
      </button>

      {tokens.map((token, index) => {
        if (token === 'ellipsis') {
          return (
            <span key={`ellipsis-${index}`} aria-hidden style={ellipsisStyle}>
              &hellip;
            </span>
          )
        }

        const isActive = token === currentPage
        return (
          <button
            key={token}
            type="button"
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onChange(token)}
            style={{ ...chipBase, ...(isActive ? activeStyle : {}) }}
            onMouseEnter={(e) => {
              if (isActive) return
              e.currentTarget.style.borderColor = '#cbd5e1'
              e.currentTarget.style.background = '#f2f4f7'
            }}
            onMouseLeave={(e) => {
              if (isActive) return
              e.currentTarget.style.borderColor = '#e5e7eb'
              e.currentTarget.style.background = '#ffffff'
            }}
          >
            {token}
          </button>
        )
      })}

      <button
        type="button"
        aria-label="Next page"
        disabled={!canGoNext}
        onClick={() => canGoNext && onChange(currentPage + 1)}
        style={{ ...chipBase, ...navButtonStyle, ...(canGoNext ? {} : disabledStyle) }}
        onMouseEnter={(e) => {
          if (!canGoNext) return
          e.currentTarget.style.background = '#f2f4f7'
          e.currentTarget.style.borderColor = '#d5dbe3'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#ffffff'
          e.currentTarget.style.borderColor = '#e5e7eb'
        }}
      >
        {nextLabel ?? <ChevronIcon direction="right" />}
      </button>
    </div>
  )
}

export default Pagination
