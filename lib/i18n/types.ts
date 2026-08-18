export type NavLink = { label: string; href: string };

export type ServiceItem = {
  index: string;
  slug: string;
  icon: "globe" | "workflow" | "message-circle" | "phone-call";
  title: string;
  whatItIs: string;
  forWhom: string;
  automates: string;
  businessGets: string;
  flow?: string[];
  channels?: string[];
  cta: string;
};

export type PricingTier = {
  name: string;
  tag: string;
  description: string;
  items: string[];
};

export type IndustryItem = {
  icon: "utensils" | "stethoscope" | "sparkles" | "hotel" | "building-2" | "shopping-bag" | "briefcase";
  title: string;
  description: string;
  capability: string;
};

export type ScenarioItem = {
  label: string;
  title: string;
  trigger: string;
  steps: string[];
};

export type CaseItem = {
  title: string;
  industry: string;
  problem: string;
  solution: string;
  automation: string;
  result: string;
  tags: string[];
};

export type ProblemItem = { icon: "repeat" | "clock" | "shuffle" | "monitor-x"; title: string; description: string };
export type ProcessStep = { index: string; title: string; description: string };
export type WhyItem = {
  icon: "target" | "layers" | "puzzle" | "message-square" | "trending-up" | "life-buoy";
  title: string;
  description: string;
};
export type FaqItem = { question: string; answer: string };

export type FormFields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  message?: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successText: string;
  error: string;
  consentPrefix?: string;
  consentLink?: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    links: NavLink[];
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    titleMain: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustItems: string[];
    flowLabel: string;
    flowNodes: [string, string, string, string, string, string];
  };
  trustStrip: {
    heading: string;
  };
  problems: {
    eyebrow: string;
    heading: string;
    items: [ProblemItem, ProblemItem, ProblemItem, ProblemItem];
    closing: string;
  };
  valueProp: {
    heading1: string;
    heading2: string;
    headingAccent: string;
    beforeLabel: string;
    beforeItems: string[];
    afterLabel: string;
    afterItems: string[];
    statement: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    labels: { forWhom: string; automates: string; businessGets: string };
    items: [ServiceItem, ServiceItem, ServiceItem, ServiceItem];
  };
  pricing: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    note: string;
    tiers: [PricingTier, PricingTier, PricingTier];
  };
  bigStatement: {
    line1: string;
    line2: string;
    line3: string;
    inputs: string[];
  };
  industries: {
    eyebrow: string;
    heading: string;
    items: [IndustryItem, IndustryItem, IndustryItem, IndustryItem, IndustryItem, IndustryItem, IndustryItem];
  };
  scenarios: {
    eyebrow: string;
    heading: string;
    linkCta: string;
    items: [ScenarioItem, ScenarioItem, ScenarioItem];
  };
  beforeAfter: {
    beforeTitle: string;
    afterTitle: string;
    beforeItems: string[];
    afterItems: string[];
  };
  process: {
    eyebrow: string;
    heading: string;
    emphasis: string;
    steps: [ProcessStep, ProcessStep, ProcessStep, ProcessStep, ProcessStep];
  };
  audit: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    disclaimer: string;
    improveLabel: string;
    improveOptions: string[];
    form: FormFields;
  };
  cases: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    badge: string;
    labels: { problem: string; solution: string; automation: string; result: string };
    items: [CaseItem, CaseItem, CaseItem, CaseItem];
  };
  why: {
    eyebrow: string;
    heading: string;
    items: [WhyItem, WhyItem, WhyItem, WhyItem, WhyItem, WhyItem];
  };
  technology: {
    heading: string;
    disclaimer: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: FaqItem[];
  };
  finalCta: {
    heading: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    serviceLabel: string;
    serviceOptions: string[];
    form: FormFields;
  };
  footer: {
    solutionsHeading: string;
    companyHeading: string;
    contactHeading: string;
    solutions: NavLink[];
    company: NavLink[];
    legal: NavLink[];
    rights: string;
  };
  cookie: {
    message: string;
    policyLinkText: string;
    acceptAll: string;
    rejectNonEssential: string;
    managePreferences: string;
    savePreferences: string;
    essentialTitle: string;
    essentialDesc: string;
    analyticsTitle: string;
    analyticsDesc: string;
    marketingTitle: string;
    marketingDesc: string;
  };
  legal: {
    disclaimer: string;
    updatedLabel: string;
    privacy: { title: string; description: string; updated: string; sections: { heading: string; body: string[] }[] };
    terms: { title: string; description: string; updated: string; sections: { heading: string; body: string[] }[] };
    cookiePolicy: {
      title: string;
      description: string;
      updated: string;
      sections: { heading: string; body: string[] }[];
    };
  };
};
