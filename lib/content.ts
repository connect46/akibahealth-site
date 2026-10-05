// All site copy lives here so it can be edited without touching layout code.

export const DEMO_URL = "https://vaxhub-prototype.vercel.app/login";
export const CONTACT = { name: "Noel Watson", title: "Founder & CEO", email: "nwatson@opsmend.com" };

export const problems = [
  { icon: "chart", title: "Inaccurate forecasts", text: "Stockouts cause missed vaccinations and equity gaps. Overstock leads to costly expiry and waste." },
  { icon: "alert", title: "Manual errors", text: "Slow data entry, version-control failures and no real-time view of supply status." },
  { icon: "split", title: "Fragmented workflows", text: "Planning, procurement and review run in disconnected silos with no integrated oversight." },
  { icon: "lock", title: "Rigid tools", text: "A new vaccine, device or protocol arrives, and current systems fall behind." },
] as const;

export const principles = [
  { title: "Modular by design", text: "Start with forecasting, add supply planning, procurement tracking and new commodities. No forced adoption." },
  { title: "AI-augmented development", text: "New modules and country-specific adaptations ship in weeks, not years." },
  { title: "Locally grounded", text: "Built with in-country teams and practitioners, so it reflects how countries actually work." },
  { title: "Adaptive over time", text: "New products and protocols are absorbed by configuration, without a rewrite." },
];

export const workflow = [
  { title: "FSP setup", text: "Configure programs, target groups, vaccines, devices and assumptions, with country-specific flexibility.", img: "/img/03-setup-programs.png", alt: "Programs and target groups setup with coverage and wastage rates for Penta, OPV and MR" },
  { title: "Forecasting", text: "Run demographic, consumption, zero-dose and manual methods side by side.", img: "/img/05-forecasting-hub.png", alt: "Forecasting hub with six method cards and their completion status" },
  { title: "Combine & finalize", text: "Weight each method, compare results year by year, and lock the official forecast.", img: "/img/06-forecasting-combine.png", alt: "Combine and finalize screen with method weights and a five-year forecast comparison chart" },
  { title: "Supply planning", text: "Months of stock by vaccine, 12-month projections, stockout alerts and funding gaps.", img: "/img/07-supply-planning.png", alt: "Supply planning with months-of-stock cards and a 12-month inventory projection" },
  { title: "Procurement tracking", text: "Monitor every order from planned to received, across suppliers and channels.", img: "/img/08-procurement.png", alt: "Procurement tracking with an order pipeline and a table of orders" },
  { title: "Review & monitoring", text: "Dashboards, automated alerts and pending actions across the whole cycle.", img: "/img/01-dashboard.png", alt: "Dashboard with cycle progress, funding gap, critical stockouts and pending tasks" },
];

export const stats = [
  { num: "6", title: "Forecasting methods", text: "Demographic, stratified by region, facility and district consumption, zero-dose catch-up and manual write-in, combined with confidence weights." },
  { num: "5", title: "Languages", text: "Every screen translatable, including right-to-left Arabic.", langs: ["EN", "FR", "ES", "PT", "AR"] },
  { num: "5", title: "User roles", text: "Platform and country admins, program managers, forecasting and procurement leads, each with scoped access." },
  { num: "5", title: "Country setups", text: "Currency, administrative divisions, fiscal year and terminology configured per country." },
];

export const audiences = {
  mohs: {
    eyebrow: "Ministries of Health & EPI teams",
    title: "Plan with confidence, in your own terms",
    items: [
      "Configure your programs, vaccines, devices, supply chain tiers and funding sources.",
      "Run multiple forecasting methods and lock one official forecast.",
      "See months of stock, stockout risk and funding gaps before they happen.",
      "Produce the UNICEF FSP submission directly from your plan.",
    ],
  },
  funders: {
    eyebrow: "Funders & global partners",
    title: "An institution that outlives its founding grant",
    items: [
      "Comparable, sub-national planning data across countries.",
      "One platform that extends from vaccines to HIV, malaria and family planning.",
      "A path to self-sustaining subscription revenue by Year 3.",
      "Led by the builder of the tool countries already trust.",
    ],
  },
};

// status per year: "on" deployed, "soon" extending, "" planned
export const commodities: { name: string; years: ("on" | "soon" | "")[] }[] = [
  { name: "Immunization", years: ["on", "on", "on"] },
  { name: "HIV", years: ["", "soon", "on"] },
  { name: "Malaria", years: ["", "soon", "on"] },
  { name: "Family planning", years: ["", "soon", "on"] },
  { name: "Future commodities", years: ["", "", "soon"] },
];

export const roadmap = [
  { label: "YEAR 1 · FOUNDATION & PILOT", big: "1–2", unit: "pilot countries", items: ["Core modular platform deployed for immunization", "Forecasting and supply planning validated with real country data", "First AI-augmented development cycles; revenue model tested"] },
  { label: "YEAR 2 · EXPANSION", big: "+5–10", unit: "countries", items: ["HIV, malaria and family planning modules", "AI for forecast accuracy and buffer stock optimization", "Enterprise structure formed; first paid subscriptions"], milestone: "revenue-positive pilot cohort" },
  { label: "YEAR 3 · SCALE", big: "20+", unit: "countries", items: ["Full commodity coverage", "Prescriptive analytics for procurement and equity", "Self-sustaining on subscription and value-based revenue"], milestone: "a going concern without grant funding" },
];

export const tiers = [
  { kind: "Freemium / low cost", name: "Foundation", who: "For countries that need a stable digital replacement for Excel, and pilot partners.", items: ["FSP setup & configuration", "Single-method forecasting", "Manual supply planning", "Standard reports & exports"] },
  { kind: "Subscription", name: "Professional", who: "For countries that need advanced, multi-method planning.", items: ["Multi-method forecasting & combination", "Automated supply planning", "Financial allocation", "Procurement lifecycle tracking", "Multi-language support"], featured: true },
  { kind: "Subscription + usage", name: "Enterprise / AI", who: "For countries and organizations seeking maximum efficiency.", items: ["Everything in Professional", "Predictive inventory optimization", "Equity & risk scoring", "Prescriptive procurement & automated re-forecasting"] },
];

export const team = [
  { name: "Noel Watson", role: "CEO", img: "/img/noel.jpg", items: ["Built UNICEF's FSP4All forecasting and supply planning tool, used in 20+ countries", "Trained national immunization teams and ran the feedback loop for three years", "PhD, Operations Management, The Wharton School; founder of Ops Mend"] },
  { name: "Mohan Balachandran", role: "CTO", img: "/img/mohan.jpg", items: ["25+ years across healthcare, data and technology", "IT architecture, interoperability, analytics and behavioral science", "Founded multiple health IT companies; supply chain IT background at i2"] },
  { name: "Abhijit Bhattacharya", role: "Engineering", img: "/img/abhijit.jpg", items: ["Co-founder of Rapidi2i, bespoke decision-support software", "Former McKinsey consultant", "15+ years in technology strategy, development and delivery"] },
];
