/* eslint-disable @next/next/no-img-element */
import { Icon, IconSprite } from "./components/Icons";
import WorkflowExplorer from "./components/WorkflowExplorer";
import InterestForm from "./components/InterestForm";
import {
  DEMO_URL, problems, principles, stats, audiences, commodities,
  roadmap, tiers, team,
} from "@/lib/content";

function SecHead({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: string }) {
  return (
    <div className="sechead">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <IconSprite />
      <header className="nav">
        <div className="wrap">
          <a className="brand" href="#top"><span className="mark" aria-hidden="true" />Akiba Health</a>
          <ul>
            <li><a href="#platform">Platform</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#who">Who it&apos;s for</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
          <a className="btn primary" href={DEMO_URL}>Try the demo</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">Forecasting &amp; supply planning for global health</p>
              <h1 style={{ marginTop: 18 }}>Health supply chains that <em>adapt to the country</em>.</h1>
              <p className="lede">
                Akiba Health is a modular, AI-augmented platform for forecasting and supply planning of vaccines and other
                health commodities. It replaces fragmented spreadsheets with one workflow, from setup to procurement to review.
              </p>
              <div className="cta-row">
                <a className="btn primary" href={DEMO_URL}>Explore the live demo →</a>
                <a className="btn ghost" href="#contact">Get in touch</a>
              </div>
              <div className="proofline">
                <span>Modernizes FSP4All, used in 20+ countries</span><span>5 languages</span><span>Role-based access</span>
              </div>
            </div>
            <div className="frame">
              <div className="chrome" aria-hidden="true"><i /><i /><i /></div>
              <img src="/img/01-dashboard.png" width={1040} height={900}
                alt="Akiba Health dashboard showing FSP cycle progress, funding gap, stockout alerts and vaccine months of stock" />
            </div>
          </div>
        </section>

        <section className="band" id="problem">
          <div className="wrap">
            <SecHead eyebrow="The problem" title="Billions invested each year. Millions of children still missed."
              lede="Immunization programs run on tools that can't keep up. When forecasts miss, children miss doses, or vaccines expire on the shelf." />
            <div className="grid4">
              {problems.map((p) => (
                <div className="card" key={p.title}>
                  <div className="ico"><Icon name={p.icon} /></div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
            <div className="statement">
              <span className="tag">The insight</span>
              <p>Even digital tools force countries to adapt to the tool. <b>Akiba Health adapts to the country.</b></p>
            </div>
          </div>
        </section>

        <section className="band mint" id="platform">
          <div className="wrap">
            <SecHead eyebrow="The platform" title="An adaptive platform, not a fixed product"
              lede="Designed to fit each country's program today and to evolve as products, devices and protocols change." />
            <div className="grid4">
              {principles.map((p) => (
                <div className="principle" key={p.title}><h3>{p.title}</h3><p>{p.text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="band ink" id="product">
          <div className="wrap">
            <SecHead eyebrow="The product" title="One workflow, from setup to sign-off"
              lede="Follow a national FSP cycle through Akiba Health. Select a stage to see the working prototype." />
            <WorkflowExplorer />
            <div className="foundation">
              <Icon name="seal" />
              <p><b>Built on a proven foundation.</b> Akiba Health translates the forecasting logic, supply planning rules and
                financial allocation models of FSP4All, the planning tool national immunization programs already use,
                into modern, adaptive software.</p>
            </div>
          </div>
        </section>

        <section className="band" id="built">
          <div className="wrap">
            <SecHead eyebrow="Working today" title="Built for the realities of country programs" />
            <div className="grid4">
              {stats.map((s) => (
                <div className="card stat" key={s.title}>
                  <div className="num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  {"langs" in s && s.langs && (
                    <div className="langs">{s.langs.map((l) => <span key={l}>{l}</span>)}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band mint" id="who">
          <div className="wrap">
            <SecHead eyebrow="Who it's for" title="For the teams who plan, and the partners who fund" />
            <div className="grid2">
              {[{ a: audiences.mohs, cls: "aud a" }, { a: audiences.funders, cls: "aud b" }].map(({ a, cls }) => (
                <div className={cls} key={a.title}>
                  <p className="eyebrow">{a.eyebrow}</p>
                  <h3>{a.title}</h3>
                  <ul>{a.items.map((t) => <li key={t}><Icon name="check" /><span>{t}</span></li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="vision">
          <div className="wrap">
            <SecHead eyebrow="The vision" title="Born from immunization. Built for every commodity."
              lede="Real-time visibility, sub-national equity targeting and a common standard, with country-specific configuration as a first-class feature." />
            <div className="lanes" role="img"
              aria-label="Commodity coverage by year: immunization from Year 1; HIV, malaria and family planning added in Year 2; full coverage in Year 3.">
              <div className="axis"><span /><div><span>Year 1</span><span>Year 2</span><span>Year 3</span></div></div>
              {commodities.map((c) => (
                <div className="lane" key={c.name}>
                  <span className="lbl">{c.name}</span>
                  <div className="track">{c.years.map((y, i) => <i key={i} className={y} />)}</div>
                </div>
              ))}
            </div>
            <div className="legend">
              <span><i style={{ background: "var(--teal)" }} />Deployed</span>
              <span><i style={{ background: "repeating-linear-gradient(45deg,var(--teal) 0 6px,var(--teal-soft) 6px 12px)" }} />Extending</span>
              <span><i style={{ background: "var(--line)" }} />Planned</span>
            </div>
          </div>
        </section>

        <section className="band mint" id="roadmap">
          <div className="wrap">
            <SecHead eyebrow="Three-year roadmap" title="From pilot to sustainable enterprise"
              lede="A one-year pilot proves a tool works. A three-year enterprise proves it persists: countries renew, and the institution outlives its founding grant." />
            <div className="grid3">
              {roadmap.map((y) => (
                <div className="year" key={y.label}>
                  <span className="yr">{y.label}</span>
                  <div className="big">{y.big}<small>{y.unit}</small></div>
                  <ul>{y.items.map((t) => <li key={t}>{t}</li>)}</ul>
                  {y.milestone && <p className="ms">Milestone: {y.milestone}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band" id="plans">
          <div className="wrap">
            <SecHead eyebrow="Service model" title="Start free. Grow into what you need." />
            <div className="grid3">
              {tiers.map((t) => (
                <div className={t.featured ? "tier feat" : "tier"} key={t.name}>
                  <span className="kind">{t.kind}</span>
                  <h3>{t.name}</h3>
                  <p className="who">{t.who}</p>
                  <ul>{t.items.map((x) => <li key={x}><Icon name="check" />{x}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="band mint" id="team">
          <div className="wrap">
            <SecHead eyebrow="The team" title="Led by the person who built the original" />
            <div className="grid3">
              {team.map((p) => (
                <div className="person" key={p.name}>
                  <div className="top">
                    <img src={p.img} alt={p.name} width={88} height={88} />
                    <div><h3>{p.name}</h3><p className="role">{p.role}</p></div>
                  </div>
                  <ul>{p.items.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              ))}
            </div>
            <p className="quote">Not a greenfield concept. A modernization of a proven system, led by the person who built it,
              alongside the people who use it.</p>
          </div>
        </section>

        <section className="band" id="contact">
          <div className="wrap contact">
            <div className="sechead" style={{ margin: 0 }}>
              <p className="eyebrow">Let&apos;s talk</p>
              <h2 className="h2">Help shape the standard for global health supply chains.</h2>
              <p className="lede">Ministries, funders and implementing partners: tell us a little about your work and we&apos;ll follow up to tailor Akiba Health to your priorities.</p>
              <a className="btn dark" href={DEMO_URL} style={{ justifySelf: "start", marginTop: 8 }}>Explore the live demo →</a>
            </div>
            <InterestForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap"><span>© 2026 Akiba Health · <i>Akiba</i> is Swahili for “reserve”</span><span>Modular. AI-augmented. Locally grounded.</span></div>
      </footer>
    </>
  );
}
