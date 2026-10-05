"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { workflow } from "@/lib/content";

export default function WorkflowExplorer() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = workflow[active];

  function onKey(e: KeyboardEvent<HTMLUListElement>) {
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (active + 1) % workflow.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (active - 1 + workflow.length) % workflow.length;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      refs.current[next]?.focus();
    }
  }

  return (
    <div className="explorer">
      <ul className="steps" role="tablist" aria-label="FSP workflow stages" onKeyDown={onKey}>
        {workflow.map((s, i) => (
          <li key={s.title}>
            <button
              ref={(el) => { refs.current[i] = el; }}
              className="step"
              type="button"
              role="tab"
              id={`step-${i}`}
              aria-controls="stage"
              aria-selected={i === active}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
            >
              <span className="n">0{i + 1}</span>
              <b>{s.title}</b>
              <span className="d">{s.text}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="stage" role="tabpanel" id="stage" aria-labelledby={`step-${active}`}>
        <div className="frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={step.img} alt={step.alt} width={1040} height={900} />
        </div>
        <div className="cap">
          <span><b>{step.title}</b></span>
          <span>Kenya example cycle · prototype data</span>
        </div>
      </div>
    </div>
  );
}
