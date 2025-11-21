import type { CSSProperties, ReactNode } from 'react'

export interface BreadcrumbItem {
  label: ReactNode
  href?: string
  onClick?: () => void
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separatorLabel?: string
}

function ChevronSeparator() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      width={18}
      height={18}
      fill="currentColor"
      style={{ transform: 'rotate(90deg)', color: '#8c94a8', position: 'relative', left: -1 }}
    >
      <path
        fillRule="evenodd"
        d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function Breadcrumb({ items, separatorLabel = 'Breadcrumb' }: BreadcrumbProps) {
  const containerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    padding: '10px 12px',
    background: '#f9fafb',
    borderRadius: 12,
    border: '1px solid #e5e7eb',
    color: '#374151',
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    overflowX: 'auto',
    scrollbarWidth: 'thin',
    whiteSpace: 'nowrap',
  }

  const linkStyle: CSSProperties = {
    color: '#1f2937',
    textDecoration: 'none',
    padding: '4px 4px',
    borderRadius: 8,
    transition: 'color 120ms ease, background-color 120ms ease',
    fontSize: 'inherit',
    fontFamily: 'inherit',
  }

  const currentStyle: CSSProperties = {
    color: '#0f172a',
    fontWeight: 700,
    padding: '4px 4px',
    fontFamily: 'inherit',
    fontSize: 'inherit',
  }

  return (
    <nav aria-label={separatorLabel} style={{ width: '100%' }}>
      <ol style={containerStyle}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={index} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              {isLast ? (
                <span style={currentStyle}>{item.label}</span>
              ) : item.href || item.onClick ? (
                <button
                  type="button"
                  style={{ ...linkStyle, background: 'transparent', border: 'none', cursor: 'pointer' }}
                  onClick={(e) => {
                    e.preventDefault()
                    item.onClick?.()
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#111827'
                    e.currentTarget.style.backgroundColor = '#eef2f7'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#1f2937'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  {item.label}
                </button>
              ) : (
                <span style={linkStyle}>{item.label}</span>
              )}
              {!isLast ? <ChevronSeparator /> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
