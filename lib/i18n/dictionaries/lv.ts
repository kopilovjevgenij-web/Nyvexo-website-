import type { Dictionary } from "../types";

export const dictionary: Dictionary = {
  meta: {
    title: "Nyvexo — mājaslapas, AI un biznesa automatizācija",
    description:
      "Nyvexo izstrādā mājaslapas, automatizē biznesa procesus un ievieš AI čatbotus un balss aģentus, kas atbild klientiem 24/7.",
    ogTitle: "Nyvexo — mājaslapas, automatizācija un AI biznesam",
    ogDescription: "Mājaslapas, biznesa procesu automatizācija un AI asistenti, kas ietaupa laiku un palīdz nezaudēt klientus.",
  },
  nav: {
    links: [
      { label: "Risinājumi", href: "#value" },
      { label: "Pakalpojumi", href: "#services" },
      { label: "Biznesam", href: "#industries" },
      { label: "Kā strādājam", href: "#how-it-works" },
      { label: "Piemēri", href: "#cases" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Pārrunāt projektu",
    openMenu: "Atvērt izvēlni",
    closeMenu: "Aizvērt izvēlni",
  },
  hero: {
    badge: "Websites · Automation · AI",
    titleMain: "Mājaslapas, automatizācija un AI",
    titleAccent: "biznesam, kas nezaudē klientus",
    subtitle:
      "Nyvexo izstrādā mājaslapas, automatizē biznesa procesus un ievieš AI asistentus, čatbotus un balss aģentus, kas atbild klientiem 24/7 un pārņem rutīnas darbu.",
    ctaPrimary: "Pārrunāt projektu",
    ctaSecondary: "Saņemt bezmaksas auditu",
    trustItems: ["Maziem un vidējiem uzņēmumiem", "Mājaslapas · Automatizācija · AI", "Sākam ar vienu procesu"],
    flowLabel: "Jūsu biznesa digitālā plūsma",
    flowNodes: ["Mājaslapa", "AI", "Automatizācija", "CRM", "Kalendārs", "Klients"],
  },
  trustStrip: {
    heading: "Digitāli risinājumi, kas strādā kopā",
  },
  problems: {
    eyebrow: "Biznesa realitāte",
    heading: "Kur bizness katru dienu zaudē laiku?",
    items: [
      {
        icon: "repeat",
        title: "Pārāk daudz manuāla darba",
        description: "Darbinieki veic atkārtotas darbības tā vietā, lai risinātu svarīgus uzdevumus.",
      },
      {
        icon: "clock",
        title: "Klienti gaida atbildi",
        description: "Pieprasījumi un ziņas ienāk vakaros, naktīs un brīvdienās.",
      },
      {
        icon: "shuffle",
        title: "Informācija ir izkliedēta",
        description: "Instagram, WhatsApp, CRM, tabulas un kalendārs nav savienoti savā starpā.",
      },
      {
        icon: "monitor-x",
        title: "Mājaslapa vienkārši eksistē",
        description: "Tā var izskatīties labi, bet nepalīdzēt pārdot vai apkalpot klientus.",
      },
    ],
    closing: "Nyvexo apvieno šos procesus vienā strādājošā sistēmā.",
  },
  valueProp: {
    heading1: "Mēs automatizējam nevis tehnoloģijas.",
    heading2: "Mēs automatizējam",
    headingAccent: "biznesu.",
    beforeLabel: "Bija",
    beforeItems: ["Manuāls darbs", "Ziņas", "Tabulas", "Zvani", "Zaudēti pieprasījumi", "Atkārtoti uzdevumi"],
    afterLabel: "Kļuva",
    afterItems: ["AI", "Automatizācija", "CRM", "Kalendārs", "Mājaslapa", "Paziņojumi", "Saziņa 24/7"],
    statement: "Jūs nepērkat vēl vienu rīku. Jūs iegūstat sistēmu, kas paveic rutīnas darbu jūsu vietā.",
  },
  services: {
    eyebrow: "Pakalpojumi",
    heading: "Ko mēs veidojam",
    labels: { forWhom: "Kam paredzēts", automates: "Ko automatizē", businessGets: "Ko iegūst bizness" },
    items: [
      {
        index: "01",
        slug: "websites",
        icon: "globe",
        title: "Mājaslapas biznesam",
        whatItIs: "Mūsdienīga mājaslapa, kas izskatās profesionāli un strādā klientu piesaistei, nevis vienkārši eksistē.",
        forWhom: "Uzņēmumiem, kam nepieciešama mājaslapa ar tiešsaistes pieraksti, pieprasījumu formām un skaidru struktūru.",
        automates: "Pieprasījumu pieņemšanu, klientu pierakstu, datu nodošanu CRM.",
        businessGets: "Vairāk pieprasījumu no mājaslapas un mazāk manuāla darba to apstrādē.",
        cta: "Pārrunāt mājaslapu",
      },
      {
        index: "02",
        slug: "automation",
        icon: "workflow",
        title: "Biznesa procesu automatizācija",
        whatItIs: "Savienojam rīkus, kurus jau izmantojat, un novēršam atkārtotas manuālas darbības.",
        forWhom: "Uzņēmumiem, kur pieprasījumi, ziņas un dati tiek apstrādāti manuāli.",
        automates: "Pieprasījumu pieņemšanu, paziņojumus, CRM atjaunināšanu, follow-up, atskaites.",
        businessGets: "Mazāk rutīnas komandai un ātrāku katra pieprasījuma apstrādi.",
        flow: ["Pieprasījums", "CRM", "Paziņojums", "Menedžeris", "Kalendārs", "Follow-up"],
        cta: "Automatizēt procesu",
      },
      {
        index: "03",
        slug: "ai-chatbots",
        icon: "message-circle",
        title: "AI čatboti",
        whatItIs: "AI asistents, kas atbild klientiem tajos kanālos, kur viņi jums jau raksta.",
        forWhom: "Uzņēmumiem, kas saņem daudz ziņu Instagram, WhatsApp vai mājaslapā.",
        automates: "Atbildes klientiem 24/7, pieprasījumu kvalifikāciju, pierakstu un sarežģītu jautājumu nodošanu menedžerim.",
        businessGets: "Klienti saņem atbildi uzreiz — pat naktī un brīvdienās.",
        channels: ["Website", "Instagram", "WhatsApp", "Facebook", "Telegram"],
        cta: "Pārrunāt AI botu",
      },
      {
        index: "04",
        slug: "voice-ai",
        icon: "phone-call",
        title: "AI balss aģenti",
        whatItIs: "AI, kas pieņem zvanus, konsultē un pieraksta klientus balsī — tāpat kā dzīvs darbinieks.",
        forWhom: "Uzņēmumiem, kur ir daudz zvanu un daļa no tiem paliek bez atbildes.",
        automates: "Zvanu pieņemšanu, konsultāciju, pierakstu uz pakalpojumu, datu nodošanu CRM un kalendārā.",
        businessGets: "Neviens zvans nepaliek bez atbildes — pat tad, kad birojs ir slēgts.",
        flow: [
          "Zvans",
          "AI atbild",
          "Nosaka iemeslu",
          "Konsultē",
          "Apkopo datus",
          "Pieraksta klientu",
          "CRM / Kalendārs",
          "Menedžeris saņem informāciju",
        ],
        cta: "Pārrunāt Voice AI",
      },
    ],
  },
  pricing: {
    eyebrow: "Ar ko sākt",
    heading: "Kā var sākt",
    subtitle: "Nav nepieciešams uzreiz mainīt visu biznesu — var sākt ar vienu procesu un pakāpeniski paplašināt sistēmu.",
    note: "Precīza cena — pēc bezmaksas audita.",
    tiers: [
      {
        name: "START",
        tag: "Lai sāktu",
        price: "no €650",
        description: "Viens process vai viens uzdevums — piemēram, pieprasījumu apstrāde vai klientu pieraksts.",
        items: ["Viens automatizēts process", "Ātra ieviešana", "Skaidrs rezultāts"],
        launchNote: "Palaišana 7-14 darba dienu laikā pēc apmaksas",
      },
      {
        name: "GROW",
        tag: "Lai augtu",
        price: "no €3 200",
        description: "Vairāki savstarpēji saistīti procesi — pieprasījumi, CRM, paziņojumi, follow-up.",
        items: ["Vairāki procesi", "Rīku integrācija", "Mazāk manuāla darba komandai"],
      },
      {
        name: "AI SYSTEM",
        tag: "Pilna sistēma",
        price: "no €7 000",
        description: "Pilnvērtīga sistēma: AI, automatizācija, CRM un integrācijas strādā kopā.",
        items: ["AI + Automation + CRM", "Darbojas 24/7", "Sistēma, kas aug kopā ar biznesu"],
      },
    ],
  },
  lossCalculator: {
    eyebrow: "Aprēķiniet paši",
    heading: "Cik jūs teorētiski nesaņemat",
    subtitle: "Ievadiet savus skaitļus — aprēķins balstās tikai uz tiem, bez mūsu pieņēmumiem par tirgu.",
    callsLabel: "Zvanu/ziņu skaits nedēļā bez atbildes",
    callsPlaceholder: "piemēram, 10",
    valueLabel: "Viena klienta vidējais čeks, €",
    valuePlaceholder: "piemēram, 150",
    shareLabel: "Kādu daļu no tiem jūs zaudējat pavisam",
    shareNote: "Jūsu vērtējums — varat mainīt",
    formulaLabel: "Formula: zvani/ziņas nedēļā × 4,33 × vidējais čeks × (zaudējumu daļa / 100)",
    resultEmpty: "Ievadiet savus skaitļus augstāk, lai redzētu novērtējumu.",
    resultPrefix: "Ar šādiem ievaddatiem jūs teorētiski nesaņemat ≈",
    resultSuffix: "€ mēnesī",
    disclaimer: "Šī nav mūsu statistika, bet aprēķins pēc skaitļiem un pieņēmuma, ko ievadījāt jūs pats.",
    ctaText: "To var atrisināt AI čatbots vai balss aģents, kas atbild nekavējoties.",
    ctaButton: "Pārrunāt risinājumu",
  },
  trustBadges: {
    heading: "Kāpēc mums var uzticēties",
    items: [
      "Oficiāli reģistrēts VID kā pašnodarbināta persona no 07.09.2026",
      "Strādājam saskaņā ar līgumu ar skaidri noteiktām tiesībām uz rezultātu",
      "GDPR pamatots datu apstrādes līgums (DPA) pieejams katram projektam",
    ],
    legalPrefix: "Atklāta",
    legalJoiner: " un ",
  },
  bigStatement: {
    line1: "Viens bizness.",
    line2: "Viena sistēma.",
    line3: "Mazāk manuāla darba.",
    inputs: ["Mājaslapa", "AI", "Automatizācija", "CRM", "Integrācijas"],
  },
  industries: {
    eyebrow: "Biznesam",
    heading: "Kur Nyvexo var palīdzēt?",
    items: [
      {
        icon: "utensils",
        title: "Restaurants",
        description: "AI atbild uz jautājumiem, pieņem pieprasījumus un palīdz ar galdiņu rezervācijām.",
        capability: "AI rezervācijas + Instagram + WhatsApp + follow-up",
      },
      {
        icon: "stethoscope",
        title: "Clinics",
        description: "Pieraksts, konsultācijas, atgādinājumi un saziņa ar pacientiem.",
        capability: "Voice AI + pieraksts + atgādinājumi + CRM",
      },
      {
        icon: "sparkles",
        title: "Beauty",
        description: "Klientu pieraksts, atbildes uz jautājumiem un automātiski atgādinājumi par vizīti.",
        capability: "Tiešsaistes pieraksts + atgādinājumi + AI atbildes",
      },
      {
        icon: "hotel",
        title: "Hotels",
        description: "Rezervācijas, atbildes uz biežiem jautājumiem, saziņa ar viesiem pirms un pēc ierašanās.",
        capability: "Rezervācijas + FAQ + saziņa ar viesiem",
      },
      {
        icon: "building-2",
        title: "Real Estate",
        description: "Pieprasījumu apstrāde, klientu kvalifikācija un automātisks follow-up par objektiem.",
        capability: "Lead kvalifikācija + CRM + follow-up",
      },
      {
        icon: "shopping-bag",
        title: "E-commerce",
        description: "Klientu atbalsts, atbildes par precēm un pasūtījumiem, pieprasījumu apstrāde.",
        capability: "Klientu atbalsts + atbildes par pasūtījumiem",
      },
      {
        icon: "briefcase",
        title: "Professional Services",
        description: "Lead vākšana, pieprasījumu kvalifikācija un saziņas automatizācija ar klientiem.",
        capability: "Lead vākšana + kvalifikācija + saziņas automatizācija",
      },
    ],
  },
  scenarios: {
    eyebrow: "Kā tas strādā praksē",
    heading: "Kā Nyvexo var strādāt reālā biznesā",
    linkCta: "Pārrunāt scenāriju savam biznesam",
    items: [
      {
        label: "Scenārijs 1 — Restorāns",
        title: "Rezervācija caur Instagram",
        trigger: "«Vai varu rezervēt galdiņu sestdienai?»",
        steps: [
          "Klients raksta Instagram",
          "AI atbild",
          "Pārbauda pieejamību",
          "Apkopo vārdu un tālruni",
          "Izveido rezervāciju",
          "Nosūta apstiprinājumu",
          "Informācija tiek saglabāta",
        ],
      },
      {
        label: "Scenārijs 2 — Klīnika",
        title: "Pieraksts pa tālruni",
        trigger: "«Vēlos pierakstīties pie zobārsta»",
        steps: [
          "Klients zvana",
          "AI Voice Agent atbild",
          "Nosaka pakalpojumu",
          "Piedāvā brīvu laiku",
          "Pieraksta klientu",
          "Nosūta apstiprinājumu",
          "CRM tiek atjaunināts",
        ],
      },
      {
        label: "Scenārijs 3 — Pakalpojumu bizness",
        title: "Pieprasījums no mājaslapas",
        trigger: "Klients atstāj pieprasījumu mājaslapā",
        steps: [
          "Pieprasījums nonāk CRM",
          "AI kvalificē klientu",
          "Menedžeris saņem paziņojumu",
          "Klients saņem automātisku follow-up",
        ],
      },
    ],
  },
  beforeAfter: {
    beforeTitle: "Pirms Nyvexo",
    afterTitle: "Pēc Nyvexo",
    beforeItems: ["Manuāli pieprasījumi", "Neatbildēti zvani", "Lēnas atbildes", "Tabulas", "Nesaistītas sistēmas", "Atkārtoti uzdevumi"],
    afterItems: [
      "AI strādā 24/7",
      "Pieprasījumi tiek apkopoti automātiski",
      "CRM atjauninās automātiski",
      "Klienti saņem ātras atbildes",
      "Sistēmas ir savienotas",
      "Komanda nodarbojas ar svarīgu darbu",
    ],
  },
  process: {
    eyebrow: "Process",
    heading: "No idejas līdz strādājošai sistēmai",
    emphasis: "Nav jāmaina viss bizness uzreiz. Sākam ar vienu procesu.",
    steps: [
      { index: "01", title: "Izzinām", description: "Iepazīstam biznesu, mērķus un pašreizējos procesus." },
      { index: "02", title: "Atrodam iespējas", description: "Nosakām, ko var automatizēt." },
      { index: "03", title: "Izveidojam", description: "Izstrādājam mājaslapu, AI asistentu vai automatizācijas sistēmu." },
      { index: "04", title: "Palaižam", description: "Integrējam, testējam un palaižam darbā." },
      { index: "05", title: "Atbalstām", description: "Nepieciešamības gadījumā uzturam sistēmu un attīstām to tālāk." },
    ],
  },
  audit: {
    eyebrow: "Nyvexo Audit",
    heading: "Bezmaksas Nyvexo Audit",
    subtitle: "Parādīsim, kurus jūsu biznesa procesus var automatizēt un kur AI patiešām ir jēga.",
    disclaimer: "Bez saistībām. Vispirms izprotam uzdevumu — tad piedāvājam risinājumu.",
    improveLabel: "Ko vēlaties uzlabot?",
    improveOptions: [
      "Pārāk daudz manuāla darba",
      "Daudz zvanu",
      "Daudz ziņu",
      "Zaudējam klientus",
      "Nepieciešama jauna mājaslapa",
      "Vēlamies AI",
      "Vēlamies automatizāciju",
      "Nezinu — nepieciešama konsultācija",
    ],
    form: {
      name: "Vārds",
      company: "Uzņēmums",
      email: "E-pasts",
      phone: "Tālrunis",
      website: "Mājaslapa",
      submit: "Saņemt bezmaksas auditu",
      submitting: "Sūtām...",
      successTitle: "Paldies!",
      successText: "Saņēmām jūsu pieteikumu auditam. Sazināsimies ar jums tuvākajā laikā.",
      error: "Neizdevās nosūtīt formu. Lūdzu, mēģiniet vēlreiz vai rakstiet mums tieši.",
    },
  },
  cases: {
    eyebrow: "Risinājumu piemēri",
    heading: "Kā tas varētu strādāt jūsu biznesā",
    subtitle: "Tie nav konkrētu klientu stāsti, bet piemēri tam, kādus risinājumus Nyvexo var izveidot jūsu biznesa veidam.",
    badge: "Piemērs",
    labels: {
      problem: "Problēma",
      solution: "Nyvexo risinājums",
      automation: "Kas notiek automātiski",
      result: "Rezultāts biznesam",
    },
    items: [
      {
        title: "Restorāna automatizācija",
        industry: "Restaurants",
        problem: "Administrators saņem desmitiem ziņu un zvanu par rezervācijām, vienlaikus strādājot zālē.",
        solution: "AI asistents atbild klientiem Instagram un WhatsApp, precizē detaļas un noformē rezervāciju.",
        automation: "Pieejamības pārbaude, vārda un tālruņa apkopošana, rezervācijas izveide, apstiprinājuma nosūtīšana.",
        result: "Mazāk manuāla darba un mazāk neatbildētu pieprasījumu.",
        tags: ["AI čatbots", "Instagram", "WhatsApp", "Rezervācija"],
      },
      {
        title: "Klīnikas automatizācija",
        industry: "Clinics",
        problem: "Pacienti zvana darba laikā, kad administrators ir aizņemts, un daļa zvanu paliek bez atbildes.",
        solution: "AI balss aģents pieņem zvanus, precizē pakalpojumu un piedāvā brīvu laiku.",
        automation: "Pieraksts uz vizīti, atgādinājumi un CRM atjaunināšana bez administratora iesaistes.",
        result: "Mazāk neatbildētu zvanu un paredzamāks grafiks.",
        tags: ["Voice AI", "CRM", "Atgādinājumi", "Kalendārs"],
      },
      {
        title: "Nekustamā īpašuma aģentūras automatizācija",
        industry: "Real Estate",
        problem: "Pieprasījumi nāk no dažādiem avotiem, un daļa klientu nesaņem savlaicīgu atbildi.",
        solution: "Pieprasījumi automātiski nonāk CRM un tiek kvalificēti pēc noteiktiem kritērijiem.",
        automation: "Pieprasījumu sadale starp menedžeriem, paziņojumi un automātisks follow-up.",
        result: "Neviens pieprasījums nepaliek bez uzmanības.",
        tags: ["Automation", "CRM", "Lead kvalifikācija"],
      },
      {
        title: "Pakalpojumu uzņēmuma automatizācija",
        industry: "Professional Services",
        problem: "Komanda tērē laiku atkārtotiem klientu jautājumiem un manuālai kontaktu vākšanai.",
        solution: "AI asistents atbild uz biežākajiem jautājumiem un apkopo potenciālo klientu kontaktus.",
        automation: "Pieprasījumu kvalifikācija, menedžera informēšana, follow-up pēc pirmā kontakta.",
        result: "Komanda nodarbojas ar svarīgu darbu, nevis atkārtotām atbildēm.",
        tags: ["AI čatbots", "Automation", "Lead kvalifikācija"],
      },
    ],
  },
  foundingClient: {
    eyebrow: "NYVEXO UZSĀKŠANA",
    heading: "Mēs tikko sākam — un šī ir jūsu iespēja",
    text: "Nyvexo šobrīd piesaista pirmos klientus. Pirmajiem 5 uzņēmumiem, kas uzsāks projektu kopā ar mums, piedāvājam 30–40% atlaidi — pretī lūdzam tikai godīgu gadījuma aprakstu un atsauksmi par rezultātu, pat ja tas nebūs ideāls.",
    items: [
      "30–40% atlaide izvēlētajam paketei (START / GROW / AI SYSTEM)",
      "Prioritārs atbalsts uzsākšanas posmā",
      "Vienīgais nosacījums — reāls gadījums ar jūsu skaitļiem, bez izskaistināšanas",
    ],
    cta: "Kļūt par vienu no pirmajiem",
  },
  why: {
    eyebrow: "Kāpēc mēs",
    heading: "Kāpēc bizness izvēlas Nyvexo",
    items: [
      { icon: "target", title: "Business-first", description: "Vispirms izprotam biznesa uzdevumu, tad izvēlamies tehnoloģiju." },
      { icon: "layers", title: "One system", description: "Apvienojam mājaslapu, AI, CRM un automatizāciju vienā sistēmā." },
      { icon: "puzzle", title: "Custom", description: "Risinājums tiek veidots konkrētam jūsu biznesa procesam." },
      { icon: "message-square", title: "Simple", description: "Sarežģītas tehnoloģijas skaidrojam vienkāršā, saprotamā valodā." },
      { icon: "trending-up", title: "Scalable", description: "Sistēmu var attīstīt kopā ar biznesa izaugsmi." },
      { icon: "life-buoy", title: "Support", description: "Palīdzam un uzturam sistēmu arī pēc palaišanas." },
    ],
  },
  technology: {
    heading: "Mēs izmantojam tehnoloģijas kā rīkus",
    disclaimer: "Nyvexo nav oficiāls minēto pakalpojumu partneris — mēs integrējam šīs tehnoloģijas biznesa procesos.",
    items: [
      { name: "OpenAI", benefit: "gudras atbildes klientiem" },
      { name: "Claude", benefit: "precīzi AI dialogi" },
      { name: "Voice AI", benefit: "zvani bez gaidīšanas" },
      { name: "Make", benefit: "automatizācija bez koda" },
      { name: "n8n", benefit: "savienojam servisus automātiski" },
      { name: "APIs", benefit: "pieslēdzam jebkuru sistēmu" },
      { name: "Webhooks", benefit: "tūlītēja datu nodošana" },
      { name: "CRM", benefit: "darījumi zem kontroles" },
      { name: "Google", benefit: "kalendārs un tabulas sinhroni" },
      { name: "WhatsApp", benefit: "ziņas klientiem uzreiz" },
      { name: "Instagram", benefit: "pieprasījumi tieši no Direct" },
      { name: "Telegram", benefit: "paziņojumi un bota atbildes" },
    ],
  },
  faq: {
    eyebrow: "Jautājumi un atbildes",
    heading: "FAQ",
    items: [
      {
        question: "Ar ko sākt?",
        answer: "Var sākt ar vienu procesu — piemēram, pieprasījumu apstrādi, klientu pierakstu vai atbildēm uz ziņām. Pēc tam sistēmu var pakāpeniski paplašināt.",
      },
      {
        question: "Vai jūs strādājat tikai ar AI?",
        answer: "Nē. Mēs izstrādājam mājaslapas, automatizējam biznesa procesus un integrējam AI tur, kur tas patiešām sniedz labumu.",
      },
      {
        question: "Cik maksā mājaslapa?",
        answer: "Cena atkarīga no sarežģītības: lapu skaita, tiešsaistes pieraksta nepieciešamības, CRM integrācijas un AI funkcionalitātes. Pēc pārrunas nosūtām precīzu tāmi ar sadalījumu pa posmiem.",
      },
      {
        question: "Cik maksā AI bots?",
        answer: "Cena atkarīga no kanālu skaita (mājaslapa, Instagram, WhatsApp un citi), scenāriju sarežģītības un integrācijas dziļuma ar jūsu zināšanu bāzi un CRM.",
      },
      {
        question: "Cik maksā automatizācija?",
        answer: "Cena atkarīga no procesu un servisu skaita, kurus nepieciešams savienot. Var sākt ar vienu procesu un pakāpeniski paplašināt sistēmu.",
      },
      {
        question: "Vai var integrēt Instagram?",
        answer: "Jā, mēs pieslēdzam Instagram Direct AI asistentam, lai tas automātiski atbildētu uz ziņām.",
      },
      {
        question: "Vai var pieslēgt WhatsApp?",
        answer: "Jā, WhatsApp ir viens no pieprasītākajiem kanāliem AI čatbotiem un klientu paziņojumiem.",
      },
      {
        question: "Vai var pieslēgt CRM?",
        answer: "Jā, mēs integrējam populārās CRM sistēmas, kā arī Google Sheets un Google Calendar, ja jums nav atsevišķas CRM.",
      },
      {
        question: "Vai AI var atbildēt pa tālruni?",
        answer: "Jā, AI balss aģents var pieņemt zvanus, konsultēt klientus, atbildēt uz biežiem jautājumiem un pierakstīt uz pakalpojumu.",
      },
      {
        question: "Vai AI var strādāt 24/7?",
        answer: "Jā, tā ir viena no galvenajām priekšrocībām: AI čatboti un balss aģenti strādā visu diennakti, tai skaitā vakaros, naktīs un brīvdienās.",
      },
      {
        question: "Vai var integrēt Google Calendar?",
        answer: "Jā, mēs pieslēdzam Google Calendar automātiskam klientu pierakstam un tikšanos plānošanai.",
      },
      {
        question: "Vai nepieciešams mainīt esošās programmas?",
        answer: "Ne obligāti. Mēs cenšamies iebūvēt risinājumus rīkos, kurus jūs jau izmantojat, nevis aizstāt tos bez vajadzības.",
      },
      {
        question: "Vai var sākt ar vienu procesu?",
        answer: "Jā, tā ir izplatīta un saprātīga pieeja — sākt ar vienu procesu (piemēram, pieprasījumu apstrādi) un pakāpeniski pievienot jaunus.",
      },
      {
        question: "Vai ir atbalsts pēc palaišanas?",
        answer: "Jā, mēs uzturam sistēmu pēc palaišanas: sekojam līdzi stabilitātei, veicam labojumus un palīdzam tai augt kopā ar biznesu.",
      },
    ],
  },
  finalCta: {
    heading: "Atradīsim, ko jūsu biznesā var automatizēt",
    subtitle: "Pastāstiet, kā šobrīd darbojas jūsu bizness. Parādīsim, kurus procesus var vienkāršot, automatizēt vai stiprināt ar AI.",
    ctaPrimary: "Saņemt bezmaksas auditu",
    ctaSecondary: "Pārrunāt projektu",
  },
  contact: {
    eyebrow: "Kontakti",
    heading: "Pārrunāsim jūsu projektu",
    subtitle: "Pastāstiet par uzdevumu — atbildēsim tuvākajā laikā un piedāvāsim, ar ko labāk sākt: mājaslapu, automatizāciju vai AI.",
    serviceLabel: "Pakalpojums",
    serviceOptions: ["Mājaslapa", "Automatizācija", "AI čatbots", "AI balss aģents", "Integrācijas", "Neesmu pārliecināts(-a) — nepieciešama konsultācija"],
    form: {
      name: "Vārds",
      company: "Uzņēmums",
      email: "E-pasts",
      phone: "Tālrunis",
      website: "Mājaslapa",
      message: "Ziņojums",
      consentPrefix: "Piekrītu",
      consentLink: "Privātuma politikai",
      submit: "Nosūtīt pieteikumu",
      submitting: "Sūtām...",
      successTitle: "Paldies!",
      successText: "Saņēmām jūsu pieteikumu. Sazināsimies ar jums tuvākajā laikā.",
      error: "Neizdevās nosūtīt formu. Lūdzu, mēģiniet vēlreiz vai rakstiet mums tieši uz",
    },
  },
  footer: {
    solutionsHeading: "Risinājumi",
    companyHeading: "Uzņēmums",
    contactHeading: "Kontakti",
    solutions: [
      { label: "Mājaslapas biznesam", href: "#services" },
      { label: "Biznesa automatizācija", href: "#services" },
      { label: "AI čatboti", href: "#services" },
      { label: "AI balss aģenti", href: "#services" },
    ],
    company: [
      { label: "Kā strādājam", href: "#how-it-works" },
      { label: "Piemēri", href: "#cases" },
      { label: "FAQ", href: "#faq" },
      { label: "Kontakti", href: "#contact" },
    ],
    legal: [
      { label: "Pakalpojumu sniegšanas noteikumi", href: "/terms" },
      { label: "Privātuma politika", href: "/privacy-policy" },
      { label: "Sīkdatņu politika", href: "/cookie-policy" },
    ],
    legalNotice:
      "Nyvexo — Jevgenijs Kopilovs, reģistrēts Valsts ieņēmumu dienestā kā saimnieciskās darbības veicējs (pašnodarbināta persona) no 07.09.2026. Darbības vieta: tīmekļa vietne www.nyvexo.lv. PVN maksātāja statuss: nav PVN maksātājs. Kontakti: jevgenij@nyvexo.lv.",
    rights: "Visas tiesības aizsargātas.",
  },
  cookie: {
    message:
      "Mēs izmantojam sīkdatnes, lai mājaslapa darbotos pareizi un lai varētu to uzlabot, balstoties uz lietošanas statistiku. Jūs varat pieņemt visas sīkdatnes, noraidīt neobligātās vai iestatīt tās pats. Vairāk informācijas —",
    policyLinkText: "Sīkdatņu politikā",
    acceptAll: "Pieņemt visas",
    rejectNonEssential: "Noraidīt neobligātās",
    managePreferences: "Iestatīt",
    savePreferences: "Saglabāt iestatījumus",
    essentialTitle: "Nepieciešamās",
    essentialDesc: "Vienmēr ieslēgtas — nepieciešamas mājaslapas darbībai.",
    analyticsTitle: "Analītika",
    analyticsDesc: "Palīdz saprast, kā apmeklētāji izmanto mājaslapu.",
    marketingTitle: "Mārketings",
    marketingDesc: "Tiek izmantotas, lai rādītu relevantāku reklāmu.",
  },
  legal: {
    disclaimer:
      "Šis dokuments ir Nyvexo mājaslapas veidne un sniegts informatīvos nolūkos. Pirms publicēšanas tas jāpārbauda un jāpielāgo kvalificētam juristam atbilstoši piemērojamajiem tiesību aktiem (tostarp GDPR) un uzņēmuma jurisdikcijai.",
    updatedLabel: "Pēdējoreiz atjaunināts:",
    privacy: {
      title: "Privātuma politika",
      description: "Nyvexo privātuma politika — kā mēs apstrādājam personas datus.",
      updated: "2026. gada 9. septembris",
      sections: [
        {
          heading: "1. Pārzinis",
          body: [
            "Personas datu pārzinis ir Jevgenijs Kopilovs, kas darbojas ar tirdzniecības nosaukumu Nyvexo, reģistrēts VID kā saimnieciskās darbības veicējs. Kontakti datu aizsardzības jautājumos: jevgenij@nyvexo.lv.",
          ],
        },
        {
          heading: "2. Kādus datus mēs apstrādājam",
          body: [
            "Aizpildot pieprasījuma formu Mājaslapā, mēs saņemam jūsu norādīto vārdu, kontaktinformāciju (e-pastu un/vai tālruni) un ziņojuma saturu. Papildus mēs automātiski saņemam tehniskus datus par vietnes apmeklējumu (IP adrese, pārlūkprogrammas veids) no mūsu hostinga pakalpojumu sniedzēja (Vercel) drošības un vietnes darbības nodrošināšanas nolūkos; atsevišķa mārketinga analītika vietnē netiek izmantota.",
          ],
        },
        {
          heading: "3. Apstrādes nolūks un tiesiskais pamats",
          body: [
            "Datus apstrādājam, lai atbildētu uz jūsu pieprasījumu un, ja vienojamies, sniegtu pakalpojumus (Vispārīgās datu aizsardzības regulas (VDAR) 6. panta 1. punkta a) apakšpunkts — piekrišana, iesniedzot formu, un b) apakšpunkts — līguma sagatavošana un izpilde). Grāmatvedības nolūkos dati var tikt apstrādāti, pildot juridisku pienākumu (VDAR 6. panta 1. punkta c) apakšpunkts).",
          ],
        },
        {
          heading: "4. Datu glabāšanas termiņš",
          body: [
            "Pieprasījumu dati tiek glabāti tik ilgi, cik nepieciešams saziņai un, ja noslēgts līgums, saskaņā ar Latvijas normatīvajos aktos noteikto grāmatvedības dokumentu glabāšanas termiņu.",
          ],
        },
        {
          heading: "5. Datu nodošana trešajām personām",
          body: [
            "Pieprasījumu apstrādei un piegādei tiek izmantots e-pasta pakalpojumu sniedzējs Zoho Mail, uz kuru Mājaslapas pieprasījuma forma nosūta jūsu ziņojumu kā e-pastu uz jevgenij@nyvexo.lv. Grāmatvedības nolūkos dati var tikt nodoti grāmatvedim/grāmatvedības pakalpojumu sniedzējam. Dati netiek pārdoti un netiek nodoti trešajām personām mārketinga nolūkos.",
          ],
        },
        {
          heading: "6. Sīkdatnes",
          body: [
            "Vietne neizmanto sīkdatnes analītikas vai mārketinga nolūkos. Var tikt izmantotas tikai obligāti nepieciešamas tehniskas sīkdatnes un līdzīgas tehnoloģijas (localStorage) vietnes darbībai — piemēram, jūsu izvēles saglabāšanai sīkdatņu piekrišanas panelī.",
          ],
        },
        {
          heading: "7. Jūsu tiesības",
          body: [
            "Jums ir tiesības pieprasīt piekļuvi saviem datiem, to labošanu, dzēšanu, apstrādes ierobežošanu, iebilst pret apstrādi vai pieprasīt datu pārnesamību — rakstot uz jevgenij@nyvexo.lv. Jums ir arī tiesības iesniegt sūdzību Datu valsts inspekcijā (www.dvi.gov.lv), ja uzskatāt, ka jūsu tiesības ir pārkāptas.",
          ],
        },
        {
          heading: "8. Datu drošība",
          body: [
            "Mēs veicam saprātīgus tehniskos un organizatoriskos pasākumus, lai aizsargātu jūsu datus no nesankcionētas piekļuves, zaudēšanas vai izpaušanas.",
          ],
        },
        {
          heading: "9. Izmaiņas šajā politikā",
          body: ["Šī politika var tikt atjaunināta — aktuālā redakcija vienmēr pieejama šajā lapā."],
        },
        {
          heading: "10. Kontakti",
          body: ["jevgenij@nyvexo.lv"],
        },
      ],
    },
    terms: {
      title: "Pakalpojumu sniegšanas noteikumi",
      description: "Nyvexo mājaslapas pakalpojumu sniegšanas noteikumi.",
      updated: "2026. gada 9. septembris",
      sections: [
        {
          heading: "Vispārīgie noteikumi",
          body: [
            "Šie noteikumi attiecas uz mājaslapas www.nyvexo.lv (\"Mājaslapa\") lietošanu un pieprasījumu iesniegšanu caur to. Mājaslapas uzturētājs ir Jevgenijs Kopilovs, kas darbojas ar tirdzniecības nosaukumu Nyvexo, reģistrēts Valsts ieņēmumu dienestā (VID) kā saimnieciskās darbības veicējs (pašnodarbināta persona) no 07.09.2026. Darbības vieta: tīmekļa vietne www.nyvexo.lv. PVN maksātāja statuss: nav PVN maksātājs. Kontakti: jevgenij@nyvexo.lv. Konkrētu komerciālo pakalpojumu sniegšanu (projekta izstrādi, automatizāciju, AI risinājumus) regulē atsevišķs rakstisks Pakalpojumu līgums, kas tiek noslēgts ar katru klientu individuāli — šie Mājaslapas noteikumi ir vispārīgs ietvars, ne pilns līguma teksts.",
          ],
        },
        {
          heading: "1. Pakalpojumi",
          body: [
            "Nyvexo piedāvā mājaslapu izstrādi, biznesa procesu automatizāciju un AI risinājumus (čatboti, balss aģenti) mazajiem un vidējiem uzņēmumiem, tostarp fiksētu pakešu veidā (START / GROW / AI SYSTEM). Mājaslapā norādītās cenas ir orientējošas — konkrētā projekta galīgā cena, apjoms un termiņi tiek fiksēti atsevišķā Pakalpojumu līgumā pirms darba uzsākšanas.",
          ],
        },
        {
          heading: "2. Pieprasījuma iesniegšana",
          body: [
            "Aizpildot pieprasījuma formu (\"Bezmaksas audits\" vai līdzīgu) Mājaslapā, jūs nosūtāt informācijas pieprasījumu — tas nav saistošs pasūtījums vai maksājuma pienākums. Atbilde tiek sniegta uz jūsu norādīto kontaktinformāciju saprātīgā termiņā.",
          ],
        },
        {
          heading: "3. Līguma noslēgšana un samaksa",
          body: [
            "Pakalpojumu sniegšana sākas tikai pēc tam, kad abas puses ir parakstījušas atsevišķu Pakalpojumu līgumu, kurā fiksēts darba apjoms, cena, termiņi un samaksas kārtība. Tā kā Nyvexo nav PVN maksātājs, rēķinos PVN netiek piemērots.",
          ],
        },
        {
          heading: "4. Founding client piedāvājums",
          body: [
            "Laika periodā, kad Mājaslapā ir redzams \"Founding client\" piedāvājums, tā konkrētie nosacījumi (atlaides apmērs, vietu skaits, prasības) ir spēkā tādā redakcijā, kāda tā ir publicēta Mājaslapā piedāvājuma publicēšanas brīdī.",
          ],
        },
        {
          heading: "5. Intelektuālais īpašums",
          body: [
            "Tiesības uz Mājaslapas saturu (teksti, dizains, logotips) pieder Nyvexo. Tiesības uz konkrēta projekta rezultātu (kods, konfigurācija, dizaina maketi) tiek regulētas atsevišķajā Pakalpojumu līgumā — parasti tās pāriet klientam pēc pilnas apmaksas saņemšanas.",
          ],
        },
        {
          heading: "6. Atbildības ierobežojums",
          body: [
            "Mājaslapa un tajā sniegtā informācija tiek nodrošināta \"kā ir\". Nyvexo pieliek saprātīgas pūles, lai informācija būtu precīza, taču neuzņemas atbildību par netiešiem zaudējumiem, kas radušies Mājaslapas izmantošanas rezultātā. Atbildība par konkrētu projektu ir reglamentēta attiecīgajā Pakalpojumu līgumā.",
          ],
        },
        {
          heading: "7. Piemērojamie tiesību akti",
          body: [
            "Šos noteikumus un jebkurus strīdus, kas saistīti ar Mājaslapas lietošanu, regulē Latvijas Republikas normatīvie akti.",
          ],
        },
        {
          heading: "8. Izmaiņas",
          body: ["Nyvexo var atjaunināt šos noteikumus, publicējot jaunu redakciju Mājaslapā. Spēkā esošā redakcija vienmēr ir pieejama šajā lapā."],
        },
        {
          heading: "9. Kontakti",
          body: ["Jautājumu gadījumā rakstiet: jevgenij@nyvexo.lv."],
        },
      ],
    },
    cookiePolicy: {
      title: "Sīkdatņu politika",
      description: "Kā Nyvexo izmanto sīkdatnes šajā mājaslapā.",
      updated: "2026. gada 17. augusts",
      sections: [
        {
          heading: "1. Kas ir sīkdatnes",
          body: ["Sīkdatnes ir nelieli teksta faili, kas tiek saglabāti jūsu pārlūkprogrammā, apmeklējot mājaslapu, un palīdz tai pareizi darboties un atcerēties jūsu iestatījumus."],
        },
        {
          heading: "2. Kādas sīkdatnes mēs izmantojam",
          body: [
            "Nepieciešamās — nodrošina mājaslapas pamatdarbību. Tās nevar atslēgt.",
            "Analītiskās — palīdz saprast, kā apmeklētāji izmanto mājaslapu (tikai ar jūsu piekrišanu).",
            "Mārketinga — tiek izmantotas, lai rādītu relevantāku reklāmu (tikai ar jūsu piekrišanu).",
          ],
        },
        {
          heading: "3. Sīkdatņu pārvaldība",
          body: ["Pirmajā apmeklējuma reizē varat pieņemt visas sīkdatnes, noraidīt neobligātās vai iestatīt tās manuāli, izmantojot joslu lapas apakšā."],
        },
        {
          heading: "4. Piekrišana",
          body: ["Mēs neizmantojam analītiskās vai mārketinga sīkdatnes bez jūsu skaidras piekrišanas. Neobligāto sīkdatņu noraidīšana neietekmē mājaslapas pamatfunkciju pieejamību."],
        },
        {
          heading: "5. Kontakti",
          body: ["Jautājumi par sīkdatņu izmantošanu: jevgenij@nyvexo.lv."],
        },
      ],
    },
  },
};

export default dictionary;
