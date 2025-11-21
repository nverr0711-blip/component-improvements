import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'

export interface AccordionItem {
  id: string
  name: string
  subtitle?: string
  count: number
}

export interface AccordionProps {
  title?: string
  items: AccordionItem[]
  defaultOpen?: boolean
  viewMoreLabel?: ReactNode
  onViewMore?: () => void
}

/**
 * Card with a collapsible accordion of organizations.
 */
export function Accordion({
  title = 'Organization',
  items,
  defaultOpen = false,
  viewMoreLabel = 'View more',
  onViewMore,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [maxHeight, setMaxHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement | null>(null)

  // Measure content height for smooth max-height transitions.
  useLayoutEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight)
    }
  }, [items.length])

  // Recalculate height on open in case content changed while closed.
  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight)
    }
  }, [isOpen])

  const cardStyle: CSSProperties = {
    width: 340,
    border: '1px solid #e9ecef',
    borderRadius: 16,
    boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
    background: '#ffffff',
    overflow: 'hidden',
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  }

  const headerStyle: CSSProperties = {
    width: '100%',
    padding: '16px 18px',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    alignItems: 'center',
    columnGap: 10,
    justifyItems: 'start',
    border: 'none',
    borderBottom: '1px solid #e9ecef',
    cursor: 'pointer',
    userSelect: 'none',
    background: '#ffffff',
  }

  const arrowStyle: CSSProperties = {
    width: 20,
    height: 20,
    color: '#151821',
    transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: 'transform 180ms ease',
    marginLeft: 10,
  }

  const contentWrapperStyle: CSSProperties = {
    overflow: 'hidden',
    maxHeight: isOpen ? maxHeight : 0,
    transition: 'max-height 360ms ease, opacity 300ms ease, transform 300ms ease',
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-4px)',
    background: '#ffffff',
  }

  const listStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    padding: '20px 20px 12px',
  }

  const pillStyle: CSSProperties = {
    background: '#eef0f3',
    color: '#1f2937',
    borderRadius: 999,
    padding: '8px 14px',
    fontSize: 14,
    fontWeight: 400,
    whiteSpace: 'nowrap',
    width: 'fit-content',
    textAlign: 'right',
  }

  return (
    <div style={cardStyle}>
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        style={headerStyle}
      >
        <div
          style={{
            fontSize: 15,
            fontWeight: 800,
            letterSpacing: 0.3,
            textTransform: 'uppercase',
            color: '#1d1f27',
            textAlign: 'left',
          }}
        >
          {title}
        </div>
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          width={20}
          height={20}
          fill="currentColor"
          style={arrowStyle}
        >
          <path
            fillRule="evenodd"
            d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div style={contentWrapperStyle}>
        <div ref={contentRef}>
          <div style={listStyle}>
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: 400,
                      fontSize: 16,
                      color: '#1f2937',
                      marginBottom: 4,
                      lineHeight: 1.25,
                    }}
                  >
                    {item.name}
                  </div>
                  {item.subtitle ? (
                    <div
                      style={{
                        fontSize: 13,
                        color: '#7b8290',
                        lineHeight: 1.35,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.subtitle}
                    </div>
                  ) : null}
                </div>
                <div style={pillStyle}>
                  {item.count.toLocaleString('en-US')}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: '14px 18px 20px',
              display: 'flex',
              justifyContent: 'center',
              background: '#ffffff',
            }}
          >
            <button
              type="button"
              onClick={onViewMore}
              style={{
                border: '1px solid #d9dfe5',
                background: '#ffffff',
                color: '#0f172a',
                borderRadius: 12,
                padding: '12px 18px',
                fontWeight: 400,
                fontSize: 15,
                cursor: 'pointer',
                minWidth: 150,
                boxShadow: '0 14px 28px rgba(0,0,0,0.08)',
                transition: 'transform 120ms ease, box-shadow 160ms ease, border-color 160ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.borderColor = '#cdd4dc'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.borderColor = '#d9dfe5'
              }}
            >
              {viewMoreLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
