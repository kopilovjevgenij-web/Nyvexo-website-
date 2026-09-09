import type { Dictionary } from "../types";

export const dictionary: Dictionary = {
  meta: {
    title: "Nyvexo — Websites, AI & Business Automation",
    description:
      "Nyvexo builds websites, automates business processes, and deploys AI chatbots and voice agents that answer customers 24/7.",
    ogTitle: "Nyvexo — Websites, Automation & AI for Business",
    ogDescription: "Websites, business process automation, and AI assistants that save time and stop you losing customers.",
  },
  nav: {
    links: [
      { label: "Solutions", href: "#value" },
      { label: "Services", href: "#services" },
      { label: "For business", href: "#industries" },
      { label: "How we work", href: "#how-it-works" },
      { label: "Examples", href: "#cases" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Discuss your project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    badge: "Websites · Automation · AI",
    titleMain: "Websites, automation and AI",
    titleAccent: "for a business that doesn't lose customers",
    subtitle:
      "Nyvexo builds websites, automates business processes, and deploys AI assistants, chatbots and voice agents that answer customers 24/7 and take routine work off your plate.",
    ctaPrimary: "Discuss your project",
    ctaSecondary: "Get a free audit",
    trustItems: ["For small and medium businesses", "Websites · Automation · AI", "Start with a single process"],
    flowLabel: "Your business, as a digital flow",
    flowNodes: ["Website", "AI", "Automation", "CRM", "Calendar", "Customer"],
  },
  trustStrip: {
    heading: "Digital tools that work together",
  },
  problems: {
    eyebrow: "The reality of running a business",
    heading: "Where does a business lose time every day?",
    items: [
      {
        icon: "repeat",
        title: "Too much manual work",
        description: "Staff spend time on repetitive tasks instead of work that actually matters.",
      },
      {
        icon: "clock",
        title: "Customers are left waiting",
        description: "Enquiries and messages arrive in the evening, at night, and on weekends.",
      },
      {
        icon: "shuffle",
        title: "Information is scattered",
        description: "Instagram, WhatsApp, your CRM, spreadsheets and calendar don't talk to each other.",
      },
      {
        icon: "monitor-x",
        title: "The website just sits there",
        description: "It can look good and still do nothing to sell or serve your customers.",
      },
    ],
    closing: "Nyvexo connects these processes into one working system.",
  },
  valueProp: {
    heading1: "We don't automate technology.",
    heading2: "We automate",
    headingAccent: "your business.",
    beforeLabel: "Before",
    beforeItems: ["Manual work", "Messages", "Spreadsheets", "Phone calls", "Missed leads", "Repetitive tasks"],
    afterLabel: "After",
    afterItems: ["AI", "Automation", "CRM", "Calendar", "Website", "Notifications", "24/7 communication"],
    statement: "You're not buying another tool. You're getting a system that does the work for you.",
  },
  services: {
    eyebrow: "Services",
    heading: "What we build",
    labels: { forWhom: "Who it's for", automates: "What it automates", businessGets: "What the business gets" },
    items: [
      {
        index: "01",
        slug: "websites",
        icon: "globe",
        title: "Websites for business",
        whatItIs: "A modern website that looks professional and actively brings in customers — not one that just exists.",
        forWhom: "Businesses that need a site with online booking, enquiry forms and a clear structure.",
        automates: "Taking enquiries, booking customers, and pushing data into your CRM.",
        businessGets: "More enquiries from the website and less manual work processing them.",
        cta: "Discuss your website",
      },
      {
        index: "02",
        slug: "automation",
        icon: "workflow",
        title: "Business process automation",
        whatItIs: "We connect the tools you already use and remove repetitive manual steps.",
        forWhom: "Businesses where enquiries, messages and data are still handled by hand.",
        automates: "Enquiry intake, notifications, CRM updates, follow-ups, and reporting.",
        businessGets: "Less routine work for the team and faster handling of every enquiry.",
        flow: ["Lead", "CRM", "Notification", "Manager", "Calendar", "Follow-up"],
        cta: "Automate a process",
      },
      {
        index: "03",
        slug: "ai-chatbots",
        icon: "message-circle",
        title: "AI chatbots",
        whatItIs: "An AI assistant that replies to customers on the channels they already message you on.",
        forWhom: "Businesses that get a high volume of messages on Instagram, WhatsApp, or their website.",
        automates: "24/7 replies, lead qualification, booking, and handing off complex questions to a manager.",
        businessGets: "Customers get an instant reply — even at night and on weekends.",
        channels: ["Website", "Instagram", "WhatsApp", "Facebook", "Telegram"],
        cta: "Discuss an AI bot",
      },
      {
        index: "04",
        slug: "voice-ai",
        icon: "phone-call",
        title: "AI voice agents",
        whatItIs: "AI that answers calls, consults, and books customers by voice — like a real team member.",
        forWhom: "Businesses with a high call volume, where some calls inevitably go unanswered.",
        automates: "Answering calls, consulting, booking, and pushing data into your CRM and calendar.",
        businessGets: "No call goes unanswered — even when the office is closed.",
        flow: [
          "Call",
          "AI answers",
          "Identifies the reason",
          "Consults",
          "Collects details",
          "Books the customer",
          "CRM / Calendar",
          "Manager gets the info",
        ],
        cta: "Discuss Voice AI",
      },
    ],
  },
  pricing: {
    eyebrow: "Where to start",
    heading: "How you can get started",
    subtitle: "You don't need to change your whole business at once — start with one process and grow the system from there.",
    note: "Exact pricing — after a free audit.",
    tiers: [
      {
        name: "START",
        tag: "To get going",
        price: "from €650",
        description: "One process or one task — for example, handling enquiries or booking customers.",
        items: ["One automated process", "Fast to launch", "A clear, visible result"],
      },
      {
        name: "GROW",
        tag: "To scale up",
        price: "from €3,200",
        description: "Several connected processes — enquiries, CRM, notifications, follow-ups.",
        items: ["Several processes", "Connected tools", "Less manual work for the team"],
      },
      {
        name: "AI SYSTEM",
        tag: "The full system",
        price: "from €7,000",
        description: "A complete system: AI, automation, CRM and integrations working together.",
        items: ["AI + Automation + CRM", "Runs 24/7", "A system that grows with your business"],
      },
    ],
  },
  bigStatement: {
    line1: "One business.",
    line2: "One system.",
    line3: "Less manual work.",
    inputs: ["Website", "AI", "Automation", "CRM", "Integrations"],
  },
  industries: {
    eyebrow: "For business",
    heading: "Where can Nyvexo help?",
    items: [
      {
        icon: "utensils",
        title: "Restaurants",
        description: "AI answers questions, takes enquiries, and helps with table reservations.",
        capability: "AI reservations + Instagram + WhatsApp + follow-up",
      },
      {
        icon: "stethoscope",
        title: "Clinics",
        description: "Appointments, consultations, reminders and patient communication.",
        capability: "Voice AI + appointments + reminders + CRM",
      },
      {
        icon: "sparkles",
        title: "Beauty",
        description: "Client bookings, answering questions, and automatic appointment reminders.",
        capability: "Online booking + reminders + AI replies",
      },
      {
        icon: "hotel",
        title: "Hotels",
        description: "Bookings, answers to common questions, and guest communication before and after arrival.",
        capability: "Bookings + FAQ + guest communication",
      },
      {
        icon: "building-2",
        title: "Real Estate",
        description: "Enquiry handling, lead qualification, and automatic follow-up on listings.",
        capability: "Lead qualification + CRM + follow-up",
      },
      {
        icon: "shopping-bag",
        title: "E-commerce",
        description: "Customer support, product and order questions, and handling enquiries.",
        capability: "Customer support + order questions",
      },
      {
        icon: "briefcase",
        title: "Professional Services",
        description: "Lead capture, enquiry qualification, and automated client communication.",
        capability: "Lead capture + qualification + automated communication",
      },
    ],
  },
  scenarios: {
    eyebrow: "How it works in practice",
    heading: "How Nyvexo can work in a real business",
    linkCta: "Discuss a scenario for your business",
    items: [
      {
        label: "Scenario 1 — Restaurant",
        title: "Booking through Instagram",
        trigger: "\"Can I book a table for Saturday?\"",
        steps: [
          "Customer messages on Instagram",
          "AI replies",
          "Checks availability",
          "Collects name and phone number",
          "Creates the booking",
          "Sends a confirmation",
          "Details are saved",
        ],
      },
      {
        label: "Scenario 2 — Clinic",
        title: "Booking by phone",
        trigger: "\"I'd like to book a dentist appointment\"",
        steps: [
          "Customer calls",
          "AI Voice Agent answers",
          "Identifies the service needed",
          "Offers an available time",
          "Books the customer",
          "Sends a confirmation",
          "CRM is updated",
        ],
      },
      {
        label: "Scenario 3 — Service business",
        title: "Website enquiry",
        trigger: "Customer submits an enquiry on the website",
        steps: [
          "Lead lands in the CRM",
          "AI qualifies the customer",
          "Manager gets notified",
          "Customer receives an automatic follow-up",
        ],
      },
    ],
  },
  beforeAfter: {
    beforeTitle: "Before Nyvexo",
    afterTitle: "After Nyvexo",
    beforeItems: ["Manual enquiries", "Missed calls", "Slow replies", "Spreadsheets", "Disconnected tools", "Repetitive tasks"],
    afterItems: [
      "AI works 24/7",
      "Enquiries are collected automatically",
      "The CRM updates itself",
      "Customers get fast replies",
      "Systems are connected",
      "The team focuses on work that matters",
    ],
  },
  process: {
    eyebrow: "Process",
    heading: "From idea to a working system",
    emphasis: "You don't need to change your whole business at once. We start with one process.",
    steps: [
      { index: "01", title: "We understand", description: "We learn your business, goals and current processes." },
      { index: "02", title: "We find the opportunities", description: "We identify what's worth automating." },
      { index: "03", title: "We build", description: "We build the website, AI assistant, or automation system." },
      { index: "04", title: "We launch", description: "We integrate, test, and put it into production." },
      { index: "05", title: "We support", description: "We maintain the system and help it grow with your business." },
    ],
  },
  audit: {
    eyebrow: "Nyvexo Audit",
    heading: "Free Nyvexo Audit",
    subtitle: "We'll show you which processes in your business can be automated, and where AI genuinely makes sense.",
    disclaimer: "No obligation. We understand the task first — then we propose a solution.",
    improveLabel: "What would you like to improve?",
    improveOptions: [
      "Too much manual work",
      "Too many calls",
      "Too many messages",
      "We're losing customers",
      "We need a new website",
      "We want AI",
      "We want automation",
      "Not sure — need a consultation",
    ],
    form: {
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      website: "Website",
      submit: "Get a free audit",
      submitting: "Sending...",
      successTitle: "Thank you!",
      successText: "We've received your audit request and will be in touch soon.",
      error: "Couldn't submit the form. Please try again or email us directly.",
    },
  },
  cases: {
    eyebrow: "Solution examples",
    heading: "How this could work in your business",
    subtitle: "These aren't stories about specific clients — they're examples of what Nyvexo can build for your type of business.",
    badge: "Example",
    labels: {
      problem: "Problem",
      solution: "Nyvexo's solution",
      automation: "What happens automatically",
      result: "Result for the business",
    },
    items: [
      {
        title: "Restaurant automation",
        industry: "Restaurants",
        problem: "The host gets dozens of booking messages and calls while also working the floor.",
        solution: "An AI assistant replies to customers on Instagram and WhatsApp, confirms details, and books the table.",
        automation: "Checking availability, collecting name and phone number, creating the booking, sending confirmation.",
        result: "Less manual work and fewer missed enquiries.",
        tags: ["AI chatbot", "Instagram", "WhatsApp", "Booking"],
      },
      {
        title: "Clinic automation",
        industry: "Clinics",
        problem: "Patients call during business hours when the front desk is busy, and some calls go unanswered.",
        solution: "An AI voice agent answers calls, identifies the service needed, and offers an available time.",
        automation: "Booking appointments, reminders, and CRM updates — without front-desk involvement.",
        result: "Fewer missed calls and a more predictable schedule.",
        tags: ["Voice AI", "CRM", "Reminders", "Calendar"],
      },
      {
        title: "Real estate agency automation",
        industry: "Real Estate",
        problem: "Enquiries arrive from different sources, and some clients don't get a timely reply.",
        solution: "Enquiries land in the CRM automatically and get qualified against set criteria.",
        automation: "Routing enquiries to agents, notifications, and automatic follow-up.",
        result: "No enquiry goes unattended.",
        tags: ["Automation", "CRM", "Lead qualification"],
      },
      {
        title: "Service business automation",
        industry: "Professional Services",
        problem: "The team spends time answering the same customer questions and collecting contact details by hand.",
        solution: "An AI assistant answers common questions and captures contact details for potential clients.",
        automation: "Qualifying enquiries, notifying the manager, and following up after first contact.",
        result: "The team focuses on real work, not repetitive replies.",
        tags: ["AI chatbot", "Automation", "Lead qualification"],
      },
    ],
  },
  foundingClient: {
    eyebrow: "NYVEXO LAUNCH",
    heading: "We're just getting started — and this is your chance",
    text: "Nyvexo is currently onboarding its first clients. For the first 5 businesses who launch a project with us, we offer a 30–40% discount — in exchange, we only ask for an honest case study and review of the results, even if they're not perfect.",
    items: [
      "30–40% off your chosen package (START / GROW / AI SYSTEM)",
      "Priority support during the launch phase",
      "The only condition — a real case with your numbers, no polishing",
    ],
    cta: "Become one of the first",
  },
  why: {
    eyebrow: "Why us",
    heading: "Why businesses choose Nyvexo",
    items: [
      { icon: "target", title: "Business-first", description: "We understand the business problem first, then pick the technology." },
      { icon: "layers", title: "One system", description: "We bring your website, AI, CRM and automation together into one system." },
      { icon: "puzzle", title: "Custom", description: "Every solution is built around your specific process." },
      { icon: "message-square", title: "Simple", description: "We explain complex technology in plain, simple language." },
      { icon: "trending-up", title: "Scalable", description: "The system can grow alongside your business." },
      { icon: "life-buoy", title: "Support", description: "We help and maintain the system after launch." },
    ],
  },
  technology: {
    heading: "We use technology as a tool",
    disclaimer: "Nyvexo isn't an official partner of the services listed — we integrate these technologies into your business processes.",
    items: [
      { name: "OpenAI", benefit: "smart replies to customers" },
      { name: "Claude", benefit: "precise AI conversations" },
      { name: "Voice AI", benefit: "calls with no wait" },
      { name: "Make", benefit: "automation without code" },
      { name: "n8n", benefit: "connects your tools automatically" },
      { name: "APIs", benefit: "plug in any system" },
      { name: "Webhooks", benefit: "instant data handoff" },
      { name: "CRM", benefit: "deals under control" },
      { name: "Google", benefit: "calendar and sheets synced" },
      { name: "WhatsApp", benefit: "instant customer messages" },
      { name: "Instagram", benefit: "leads straight from DMs" },
      { name: "Telegram", benefit: "notifications and bot replies" },
    ],
  },
  faq: {
    eyebrow: "Questions & answers",
    heading: "FAQ",
    items: [
      {
        question: "Where do I start?",
        answer: "You can start with a single process — for example, handling enquiries, booking customers, or replying to messages. From there, the system can be expanded step by step.",
      },
      {
        question: "Do you only work with AI?",
        answer: "No. We build websites, automate business processes, and bring in AI where it genuinely adds value.",
      },
      {
        question: "How much does a website cost?",
        answer: "It depends on complexity: number of pages, whether you need online booking, CRM integration, and AI functionality. After a brief, we send an exact quote broken down by stage.",
      },
      {
        question: "How much does an AI bot cost?",
        answer: "Pricing depends on the number of channels (website, Instagram, WhatsApp and others), scenario complexity, and how deeply it integrates with your knowledge base and CRM.",
      },
      {
        question: "How much does automation cost?",
        answer: "It depends on how many processes and services need to be connected. You can start with one process and expand the system over time.",
      },
      {
        question: "Can you integrate Instagram?",
        answer: "Yes, we connect Instagram Direct to the AI assistant so it can reply to messages automatically.",
      },
      {
        question: "Can you connect WhatsApp?",
        answer: "Yes, WhatsApp is one of the most requested channels for AI chatbots and customer notifications.",
      },
      {
        question: "Can you connect a CRM?",
        answer: "Yes, we integrate popular CRM systems, as well as Google Sheets and Google Calendar if you don't use a dedicated CRM.",
      },
      {
        question: "Can AI answer phone calls?",
        answer: "Yes, an AI voice agent can answer calls, consult customers, handle common questions, and book them in.",
      },
      {
        question: "Can AI work 24/7?",
        answer: "Yes — that's one of the main benefits: AI chatbots and voice agents work around the clock, including evenings, nights and weekends.",
      },
      {
        question: "Can you integrate Google Calendar?",
        answer: "Yes, we connect Google Calendar for automatic customer booking and meeting scheduling.",
      },
      {
        question: "Do I need to replace the software I already use?",
        answer: "Not necessarily. We aim to build solutions into the tools you already use rather than replace them without a reason.",
      },
      {
        question: "Can I start with just one process?",
        answer: "Yes, that's a common and sensible approach — start with one process (like handling enquiries) and add more over time.",
      },
      {
        question: "Is there support after launch?",
        answer: "Yes, we maintain the system after launch: we monitor stability, make adjustments, and help it grow alongside your business.",
      },
    ],
  },
  finalCta: {
    heading: "Let's find what you can automate in your business",
    subtitle: "Tell us how your business runs today. We'll show you which processes can be simplified, automated, or strengthened with AI.",
    ctaPrimary: "Get a free audit",
    ctaSecondary: "Discuss your project",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let's discuss your project",
    subtitle: "Tell us about your task — we'll reply soon and suggest the best place to start: a website, automation, or AI.",
    serviceLabel: "Service",
    serviceOptions: ["Website", "Automation", "AI chatbot", "AI voice agent", "Integrations", "Not sure — need a consultation"],
    form: {
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      website: "Website",
      message: "Message",
      consentPrefix: "I agree to the",
      consentLink: "Privacy Policy",
      submit: "Send request",
      submitting: "Sending...",
      successTitle: "Thank you!",
      successText: "We've received your request and will be in touch soon.",
      error: "Couldn't submit the form. Please try again or email us directly at",
    },
  },
  footer: {
    solutionsHeading: "Solutions",
    companyHeading: "Company",
    contactHeading: "Contact",
    solutions: [
      { label: "Websites for business", href: "#services" },
      { label: "Business automation", href: "#services" },
      { label: "AI chatbots", href: "#services" },
      { label: "AI voice agents", href: "#services" },
    ],
    company: [
      { label: "How we work", href: "#how-it-works" },
      { label: "Examples", href: "#cases" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
    legalNotice:
      "Nyvexo — Jevgenijs Kopilovs, registered with the Latvian State Revenue Service (VID) as a self-employed person (saimnieciskās darbības veicējs) since 07.09.2026. Place of business: the website www.nyvexo.lv. VAT status: not a VAT payer. Contact: jevgenij@nyvexo.lv.",
    rights: "All rights reserved.",
  },
  cookie: {
    message:
      "We use cookies so the site works correctly and to help us improve it based on usage statistics. You can accept all cookies, reject the non-essential ones, or set your preferences yourself. More details in the",
    policyLinkText: "Cookie Policy",
    acceptAll: "Accept all",
    rejectNonEssential: "Reject non-essential",
    managePreferences: "Manage preferences",
    savePreferences: "Save preferences",
    essentialTitle: "Essential",
    essentialDesc: "Always on — required for the site to work.",
    analyticsTitle: "Analytics",
    analyticsDesc: "Helps us understand how visitors use the site.",
    marketingTitle: "Marketing",
    marketingDesc: "Used to show more relevant advertising.",
  },
  legal: {
    disclaimer:
      "This document is a template for the Nyvexo website, provided for informational purposes. Before publishing, it should be reviewed and adapted by a qualified lawyer in line with applicable law (including GDPR) and the company's jurisdiction.",
    updatedLabel: "Last updated:",
    privacy: {
      title: "Privacy Policy",
      description: "Nyvexo's privacy policy — how we handle personal data.",
      updated: "September 9, 2026",
      sections: [
        {
          heading: "1. Data controller",
          body: [
            "The data controller is Jevgenijs Kopilovs, trading as Nyvexo, registered with VID as a self-employed person. Contact for data protection matters: jevgenij@nyvexo.lv.",
          ],
        },
        {
          heading: "2. What data we process",
          body: [
            "By completing the request form on the Website, we receive the name, contact details (email and/or phone), and message content you provide. We also automatically receive technical data about your visit (IP address, browser type) from our hosting provider (Vercel) for security and site-operation purposes; no separate marketing analytics is used on the Website.",
          ],
        },
        {
          heading: "3. Purpose and legal basis",
          body: [
            "We process data to respond to your request and, once agreed, to deliver services (GDPR Art. 6(1)(a) — consent given by submitting the form, and Art. 6(1)(b) — steps taken prior to, and performance of, a contract). For accounting purposes, data may be processed to comply with a legal obligation (GDPR Art. 6(1)(c)).",
          ],
        },
        {
          heading: "4. Retention period",
          body: [
            "Request data is kept for as long as needed for correspondence, and, where a contract is signed, for the retention period required for accounting records under Latvian law.",
          ],
        },
        {
          heading: "5. Sharing data with third parties",
          body: [
            "The Website's request form is delivered using the email service Zoho Mail, which sends your submission as an email to jevgenij@nyvexo.lv. For accounting purposes, data may be shared with an accountant or bookkeeping service. Data is not sold and is not shared with third parties for marketing purposes.",
          ],
        },
        {
          heading: "6. Cookies",
          body: [
            "The Website does not use cookies for analytics or marketing. Only strictly necessary technical cookies and similar technologies (localStorage) may be used for the Website to function — for example, to remember your choice in the cookie consent banner.",
          ],
        },
        {
          heading: "7. Your rights",
          body: [
            "You have the right to request access to your data, correction, deletion, restriction of processing, to object to processing, or to request data portability — by writing to jevgenij@nyvexo.lv. You also have the right to lodge a complaint with Latvia's Data State Inspectorate (Datu valsts inspekcija, www.dvi.gov.lv) if you believe your rights have been violated.",
          ],
        },
        {
          heading: "8. Data security",
          body: [
            "We take reasonable technical and organisational measures to protect your data from unauthorised access, loss, or disclosure.",
          ],
        },
        {
          heading: "9. Changes to this policy",
          body: ["This policy may be updated — the current version is always available on this page."],
        },
        {
          heading: "10. Contact",
          body: ["jevgenij@nyvexo.lv"],
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      description: "Terms of service for the Nyvexo website.",
      updated: "September 9, 2026",
      sections: [
        {
          heading: "General",
          body: [
            "These terms govern the use of the website www.nyvexo.lv (\"Website\") and submitting requests through it. The Website is operated by Jevgenijs Kopilovs, trading as Nyvexo, registered with the Latvian State Revenue Service (VID) as a self-employed person (saimnieciskās darbības veicējs) since 07.09.2026. Place of business: the website www.nyvexo.lv. VAT status: not a VAT payer. Contact: jevgenij@nyvexo.lv. The provision of specific commercial services (project development, automation, AI solutions) is governed by a separate written Service Agreement, entered into individually with each client — these Website terms are a general framework, not the full agreement text.",
          ],
        },
        {
          heading: "1. Services",
          body: [
            "Nyvexo offers website development, business process automation, and AI solutions (chatbots, voice agents) for small and medium businesses, including as fixed packages (START / GROW / AI SYSTEM). Prices shown on the Website are indicative — the final price, scope, and timeline for a specific project are set out in a separate Service Agreement before work begins.",
          ],
        },
        {
          heading: "2. Submitting a request",
          body: [
            "By completing a request form (\"Free Audit\" or similar) on the Website, you send an informational inquiry — this is not a binding order or payment obligation. A response is sent to your provided contact details within a reasonable time.",
          ],
        },
        {
          heading: "3. Entering into an agreement and payment",
          body: [
            "Service delivery begins only after both parties sign a separate Service Agreement setting out the scope of work, price, timeline, and payment terms. As Nyvexo is not a VAT payer, VAT is not applied on invoices.",
          ],
        },
        {
          heading: "4. Founding client offer",
          body: [
            "While the \"Founding client\" offer is published on the Website, its specific terms (discount amount, number of spots, requirements) apply as published on the Website at the time of the offer.",
          ],
        },
        {
          heading: "5. Intellectual property",
          body: [
            "Rights to the Website's content (text, design, logo) belong to Nyvexo. Rights to the deliverables of a specific project (code, configuration, design files) are governed by the separate Service Agreement — typically transferring to the client upon receipt of full payment.",
          ],
        },
        {
          heading: "6. Limitation of liability",
          body: [
            "The Website and the information on it are provided \"as is\". Nyvexo makes reasonable efforts to keep information accurate but is not liable for indirect losses arising from use of the Website. Liability for a specific project is governed by the relevant Service Agreement.",
          ],
        },
        {
          heading: "7. Governing law",
          body: [
            "These terms and any disputes relating to use of the Website are governed by the laws of the Republic of Latvia.",
          ],
        },
        {
          heading: "8. Changes",
          body: ["Nyvexo may update these terms by publishing a new version on the Website. The current version is always available on this page."],
        },
        {
          heading: "9. Contact",
          body: ["For questions, write to: jevgenij@nyvexo.lv."],
        },
      ],
    },
    cookiePolicy: {
      title: "Cookie Policy",
      description: "How Nyvexo uses cookies on this website.",
      updated: "August 17, 2026",
      sections: [
        {
          heading: "1. What cookies are",
          body: ["Cookies are small text files stored in your browser when you visit a site. They help it work correctly and remember your preferences."],
        },
        {
          heading: "2. Cookies we use",
          body: [
            "Essential — required for the site to function. These can't be disabled.",
            "Analytics — help us understand how visitors use the site (only with your consent).",
            "Marketing — used to show more relevant advertising (only with your consent).",
          ],
        },
        {
          heading: "3. Managing cookies",
          body: ["On your first visit, you can accept all cookies, reject the non-essential ones, or set them manually via the banner at the bottom of the page."],
        },
        {
          heading: "4. Consent",
          body: ["We don't use analytics or marketing cookies without your explicit consent. Declining non-essential cookies doesn't affect the site's core functionality."],
        },
        {
          heading: "5. Contact",
          body: ["Questions about cookie usage: jevgenij@nyvexo.lv."],
        },
      ],
    },
  },
};

export default dictionary;
