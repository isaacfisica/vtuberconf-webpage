'use client';

type TabItem = { value: string; label: string };

type TabsProps = {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
};

export default function Tabs({ items, value, onChange }: TabsProps) {
  return (
    <div
      role="tablist"
      style={{
        display: 'flex',
        gap: 2,
        borderBottom: '1.5px solid var(--border-hairline)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item.value)}
            style={{
              appearance: 'none',
              background: 'none',
              border: 0,
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 'var(--text-sm)',
              fontWeight: 600,
              color: active ? 'var(--ink-900)' : 'var(--text-muted)',
              padding: '10px 16px',
              position: 'relative',
              whiteSpace: 'nowrap',
              transition: 'color var(--duration-fast) var(--ease-standard)',
            }}
          >
            {item.label}
            {active && (
              <span
                style={{
                  position: 'absolute',
                  left: 10,
                  right: 10,
                  bottom: -1.5,
                  height: 2.5,
                  background: 'var(--oxblood-600)',
                  borderRadius: 2,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
