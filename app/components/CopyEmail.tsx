"use client";

import { useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy email");
  const ref = useRef<HTMLElement>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setLabel("Copied");
      setTimeout(() => setLabel("Copy email"), 1800);
    } catch {
      if (ref.current) {
        const r = document.createRange();
        r.selectNodeContents(ref.current);
        const s = window.getSelection();
        s?.removeAllRanges();
        s?.addRange(r);
      }
      setLabel("Press Ctrl/Cmd+C");
    }
  }

  return (
    <div className="email">
      <a href={`mailto:${email}`}><code ref={ref}>{email}</code></a>
      <button className="copy" type="button" onClick={copy}>{label}</button>
    </div>
  );
}
