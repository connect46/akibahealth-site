export function IconSprite() {
  return (
    <svg className="icon-sprite" aria-hidden="true">
      <symbol id="i-check" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></symbol>
      <symbol id="i-chart" viewBox="0 0 24 24"><path d="M4 19h16M7 15l4-5 3 3 5-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></symbol>
      <symbol id="i-alert" viewBox="0 0 24 24"><path d="M12 4l9 16H3z M12 10v4 M12 17v.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></symbol>
      <symbol id="i-split" viewBox="0 0 24 24"><rect x="3" y="4" width="7" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="2" /><rect x="14" y="13" width="7" height="7" rx="2" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M10 7.5h2M14 16.5h-2" stroke="currentColor" strokeWidth="2" strokeDasharray="1 3" strokeLinecap="round" /></symbol>
      <symbol id="i-lock" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M8 11V8a4 4 0 018 0v3" fill="none" stroke="currentColor" strokeWidth="2" /></symbol>
      <symbol id="i-seal" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M8 12.5l2.7 2.7L16 9.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></symbol>
    </svg>
  );
}

export function Icon({ name }: { name: string }) {
  return (
    <svg aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}
