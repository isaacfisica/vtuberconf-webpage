'use client';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ placeholder, value, onChange }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        color: 'var(--text-primary)',
        background: 'var(--surface-card)',
        border: '1.5px solid var(--border-default)',
        borderRadius: 'var(--radius-sm)',
        padding: '10px 12px',
        width: '100%',
        outline: 'none',
        transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = 'var(--violet-500)';
        e.currentTarget.style.boxShadow = 'var(--focus-ring-shadow)';
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-default)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    />
  );
}
