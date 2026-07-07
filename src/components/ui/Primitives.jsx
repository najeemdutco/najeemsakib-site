export function Container({ className = '', ...props }) {
  return <div className={`mx-auto max-w-[1200px] px-8 ${className}`} {...props} />
}

export function Eyebrow({ children, className = '' }) {
  return (
    <span className={`font-mono text-[13px] font-semibold tracking-[2.5px] text-gold ${className}`}>
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, sub, className = '', titleClassName = '' }) {
  return (
    <div className={`mb-11 flex flex-col gap-2.5 ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={`m-0 font-display text-[38px] font-bold tracking-[-0.5px] text-navy ${titleClassName}`}>{title}</h2>
      {sub && <p className="m-0 text-[15px] text-ink-light">{sub}</p>}
    </div>
  )
}

export function ChipButton({ active, children, ...props }) {
  return (
    <button
      type="button"
      className={`cursor-pointer whitespace-nowrap rounded-full border-[1.5px] px-4 py-2 font-sans text-[13px] font-semibold transition-all hover:border-gold ${
        active ? 'border-navy bg-navy text-gold' : 'border-hairline bg-white text-navy'
      }`}
      {...props}
    >
      {children}
    </button>
  )
}

export function SpinnerIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" className={`mt-0.5 shrink-0 ${className}`}>
      <circle
        cx="20" cy="20" r="17" fill="none" stroke="#FFB81C" strokeWidth="1.5" strokeDasharray="5 7"
        className="origin-[20px_20px] animate-ns-spin-slow"
      />
      <circle cx="20" cy="20" r="5" fill="#FFB81C" />
    </svg>
  )
}

export function DetailCard({ title, desc }) {
  return (
    <div className="flex items-start gap-4 rounded-lg border-l-4 border-gold bg-navy px-6.5 py-5.5">
      <SpinnerIcon />
      <div className="flex flex-col gap-1.5">
        <span className="font-display text-[17px] font-bold text-white">{title}</span>
        <p className="m-0 text-sm leading-relaxed text-white/75">{desc}</p>
      </div>
    </div>
  )
}

export function SimpleDetailCard({ title, desc }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-lg border-l-4 border-gold bg-navy px-6.5 py-5.5">
      <span className="font-display text-[17px] font-bold text-white">{title}</span>
      <p className="m-0 text-sm leading-relaxed text-white/75">{desc}</p>
    </div>
  )
}
