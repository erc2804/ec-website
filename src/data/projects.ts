// --- All portfolio projects in one place. The start page, the portfolio page and
// the project pages read from here; the text lives next to its project in both
// languages, so a new project is one entry and nothing else. Newest first.
import type { Locale } from "../i18n"

/** --- The three offers, in the order the site presents them --- */
export type Service = "accessibility" | "design" | "development"

type Localised<T> = Record<Locale, T>

export type Project = {
  /** --- Part of the URL, kept stable across languages --- */
  slug: string
  /** --- The client's name, or a description when the client stays unnamed --- */
  label: string | Localised<string>
  /** --- One of the three on the start page --- */
  isFeatured: boolean
  /** --- The live product, if there is one to link to --- */
  url?: string
  /** --- The phone mockup, a file name in src/assets/images/projects resolved by
   * projectMockup.ts. A name, not an import: the about chat's Netlify function
   * reads this file, and its bundler loads no images. alt says what the phone
   * shows: the product, only the logo, or a blurred sketch when the client stays
   * unnamed. The card shows it without alt, next to its own text --- */
  image?: { file: string; alt: Localised<string> }
  /** --- What I did there, in the order the card lists them --- */
  services: Service[]
  period: Localised<string>
  role: Localised<string>
  /** --- Employer at the time, for work done in employment --- */
  employer?: string
  /** --- Who the client is when the name stays out --- */
  client?: Localised<string>
  /** --- One sentence for the card on the start page --- */
  summary: Localised<string>
  /** --- One line under the name on the project page --- */
  title: Localised<string>
  /** --- One string per paragraph --- */
  description: Localised<string[]>
  /** --- isMain: listed on the card and in short lists --- */
  techs: { label: string | Localised<string>; isMain: boolean }[]
}

/** --- Resolves a value that may exist once or once per language --- */
export function localised<T>(value: T | Localised<T>, locale: Locale): T {
  if (typeof value === "object" && value !== null && "de" in value && "en" in value) {
    return (value as Localised<T>)[locale]
  }
  return value as T
}

// --- The phone of a client that stays unnamed shows a blurred sketch with a lock
const confidentialImageAlt: Localised<string> = {
  de: "Unscharfe Skizze des Produkts auf einem Handy. Der Kunde bleibt vertraulich.",
  en: "A blurred sketch of the product on a phone. The client stays confidential.",
}

export const projects: Project[] = [
  {
    slug: "industrial-ai",
    label: { de: "Industrial-AI-Startup", en: "Industrial AI startup" },
    isFeatured: false,
    image: {
      file: "industrial-ai.png",
      alt: confidentialImageAlt,
    },
    services: ["development", "design"],
    period: { de: "Seit Februar 2026", en: "Since February 2026" },
    role: {
      de: "UI/UX-Design und Frontend-Entwicklung",
      en: "UI/UX design and frontend development",
    },
    client: { de: "Industrial-AI-Startup, München", en: "Industrial AI startup, Munich" },
    summary: {
      de: "Ein Analyse-Tool, das Maschinendaten aus der Produktion in synchronisierten Diagrammen zeigt.",
      en: "An analysis tool that shows machine data from production in synchronized charts.",
    },
    title: {
      de: "Analyse-Tool mit synchronisierten Diagrammen für eine Datenplattform in der Fertigung",
      en: "Analysis tool with synchronized charts for a data platform in manufacturing",
    },
    description: {
      de: [
        "Ein Münchner Startup führt Signale von Maschinen und Sensoren mit Daten aus MES- und ERP-Systemen zusammen, damit Teams Trends, Engpässe und Ursachen in der Produktion schneller erkennen. Seit Februar 2026 konzipiere und entwickle ich dort neue Funktionen der Plattform.",
        "Kern meiner Arbeit ist ein Analyse-Tool für zeitbasierte Auswertungen: Man wählt eine Maschine, bekommt ein Diagramm mit allen zeitbezogenen Sensoren, fügt Metriken hinzu oder entfernt sie und legt weitere Diagramme auf derselben Seite an. Eine gemeinsame Zeitleiste mit Zeitraum, Play und Pause und einem Zeitmarker über alle Diagramme macht sichtbar, wie sich die Werte entwickeln. Die Schwierigkeit war, viele unterschiedliche Daten gleichzeitig zu zeigen, ohne die Oberfläche zu überladen. Den ersten Umfang habe ich mit dem Team bewusst schlank gehalten.",
        "Daneben habe ich die öffentliche Website des Unternehmens gestaltet und entwickelt. Die Entwicklung läuft stark KI-gestützt: Claude und Codex kommen systematisch für Umsetzung, Code-Reviews und wiederverwendbare Skills zum Einsatz.",
      ],
      en: [
        "A Munich startup brings machine and sensor signals together with data from MES and ERP systems, so teams spot trends, bottlenecks and root causes in production faster. Since February 2026 I have been designing and building new features of the platform.",
        "At the core of my work is an analysis tool for time-based evaluations: you pick a machine, get a chart with all its time-based sensors, add or remove metrics and open further charts on the same page. One shared timeline with a time range, play and pause and a marker across all charts shows how the values develop. The hard part was showing many different kinds of data at once without crowding the interface. I kept the first scope deliberately small, in agreement with the team.",
        "Alongside that I designed and built the company's public website. Development is heavily AI-assisted: Claude and Codex are used systematically for implementation, code reviews and reusable skills.",
      ],
    },
    techs: [
      { label: "React", isMain: true },
      { label: "Next.js", isMain: true },
      { label: "TypeScript", isMain: true },
      { label: "Chart.js", isMain: true },
      { label: "Tailwind", isMain: true },
      { label: "Figma", isMain: false },
      { label: "HTML", isMain: false },
      { label: "S/CSS", isMain: false },
      { label: "Claude Code", isMain: false },
      { label: "Codex", isMain: false },
      { label: "Linear", isMain: false },
      { label: "GitHub", isMain: false },
    ],
  },
  {
    slug: "hr-tech",
    label: { de: "HR-Tech-Startup", en: "HR tech startup" },
    isFeatured: true,
    image: {
      file: "hr-tech.png",
      alt: confidentialImageAlt,
    },
    services: ["development", "design"],
    period: { de: "Seit Juni 2025", en: "Since June 2025" },
    role: {
      de: "UI/UX-Design und Frontend-Entwicklung",
      en: "UI/UX design and frontend development",
    },
    client: { de: "HR-Tech-Startup", en: "HR tech startup" },
    summary: {
      de: "Eine Plattform, auf der man schwierige Gespräche per Sprache mit KI-Charakteren übt. Ich baue das ganze Frontend.",
      en: "A platform for practicing difficult conversations by voice with AI characters. I build the whole frontend.",
    },
    title: {
      de: "Das komplette Frontend einer Trainingsplattform mit KI-Charakteren",
      en: "The entire frontend of a training platform with AI characters",
    },
    description: {
      de: [
        "Auf der Plattform eines HR-Tech-Startups üben Menschen anspruchsvolle Gespräche per Sprache mit KI-Charakteren und bekommen danach ausführliches Feedback. Seit Juni 2025 bin ich dabei, von Anfang an und als einziger Frontend-Entwickler im Team.",
        "Mein Teil reicht von den ersten Screens in Figma über das UI/UX-Design bis zur Umsetzung mit React und Next.js. Kern ist die komplette Gesprächsstrecke: Szenario wählen, Gespräch konfigurieren, das Gespräch selbst mit Live-Avataren in Echtzeit, ein rundenbasierter Modus mit eigener Audio-Pipeline und zum Schluss die Feedback-Ansicht. Dafür nutze ich unter anderem ElevenLabs Conversational AI, Anam, WebRTC und WebSockets.",
        "Neue Funktionen entstehen im Austausch mit Gründern, Psychologen und KI-Experten: Ich schlage sie vor oder nehme Anforderungen auf, skizziere sie in Figma und baue sie. Die Schnittstellen definiere ich selbst und gebe sie dem Backend vor, bis zur Struktur von Anfrage und Antwort.",
      ],
      en: [
        "On the platform of an HR tech startup, people practice demanding conversations by voice with AI characters and get detailed feedback afterwards. I have been on it since June 2025, from the start and as the only frontend developer on the team.",
        "My part runs from the first screens in Figma through the UI/UX design to the implementation with React and Next.js. At the core is the whole conversation flow: choosing a scenario, configuring the conversation, the conversation itself with live avatars in real time, a turn-based mode with its own audio pipeline and, at the end, the feedback view. For that I use ElevenLabs Conversational AI, Anam, WebRTC and WebSockets, among others.",
        "New features come out of conversations with the founders, psychologists and AI experts: I propose them or take in requirements, sketch them in Figma and build them. I define the interfaces myself and hand them to the backend, down to the shape of request and response.",
      ],
    },
    techs: [
      { label: "React", isMain: true },
      { label: "Next.js", isMain: true },
      { label: "TypeScript", isMain: true },
      { label: "WebRTC", isMain: true },
      { label: "WebSockets", isMain: true },
      { label: "ElevenLabs Conversational AI", isMain: false },
      { label: "Anam", isMain: false },
      { label: "Zustand", isMain: false },
      { label: "Bootstrap", isMain: false },
      { label: "REST", isMain: false },
      { label: "Figma", isMain: false },
      { label: "GitHub", isMain: false },
      { label: "Webflow", isMain: false },
    ],
  },
  {
    slug: "konux",
    label: "KONUX",
    isFeatured: true,
    url: "https://konux.com/",
    image: {
      file: "konux.png",
      alt: {
        de: "Das Logo von KONUX auf einem Handy.",
        en: "The KONUX logo on a phone.",
      },
    },
    services: ["development", "design"],
    period: { de: "April 2025 bis Februar 2026", en: "April 2025 to February 2026" },
    role: {
      de: "Frontend-Entwicklung und UI/UX-Design",
      en: "Frontend development and UI/UX design",
    },
    summary: {
      de: "Neue Funktionen für eine KI-Plattform rund um Bahnstrecken, vom Konzept bis zum Code.",
      en: "New features for an AI platform built around railway tracks, from concept to code.",
    },
    title: {
      de: "Frontend und UI/UX-Design für eine KI-Plattform rund um Bahninfrastruktur",
      en: "Frontend and UI/UX design for an AI platform around railway infrastructure",
    },
    description: {
      de: [
        "KONUX betreibt eine KI-basierte Plattform, mit der Bahnbetreiber ihre Infrastruktur verwalten und auswerten. Ich habe sie als Frontend-Entwickler und UI/UX-Designer weiterentwickelt: React in einem Nx-Monorepo, dazu die UX-Ausarbeitung komplexer, datengetriebener Abläufe.",
        "Neue Funktionen habe ich zusammen mit Data Engineers, Backend- und Frontend-Entwicklern, Designern und Stakeholdern konzipiert und im Frontend umgesetzt, bestehende Oberflächen weiterentwickelt und neue Workflows entworfen. Ein zentraler Teil war eine KI-gestützte Funktion, die neue Assets automatisch anlegt: UX-Konzept, Anforderungen und Feedback der Stakeholder, die Schnittstellen in enger Abstimmung mit dem Backend, dann die Umsetzung mit React, Nx und einer Bulletproof-React-Architektur. Codequalität und Stabilität sichern SonarQube und eine AWS-Infrastruktur.",
      ],
      en: [
        "KONUX runs an AI-based platform that railway operators use to manage and analyze their infrastructure. I developed it further as a frontend developer and UI/UX designer: React in an Nx monorepo, plus the UX work on complex, data-driven workflows.",
        "I designed new features together with data engineers, backend and frontend developers, designers and stakeholders and built them in the frontend, extended existing screens and drafted new workflows. A central part was an AI-assisted feature that creates new assets automatically: the UX concept, requirements and feedback from stakeholders, the interfaces in close coordination with the backend, then the implementation with React, Nx and a bulletproof-react architecture. SonarQube and an AWS infrastructure keep code quality and stability in check.",
      ],
    },
    techs: [
      { label: "React", isMain: true },
      { label: "TypeScript", isMain: true },
      { label: "Nx", isMain: true },
      { label: "Ant Design", isMain: true },
      { label: "Figma", isMain: true },
      { label: "Bulletproof React", isMain: false },
      { label: "Handsontable", isMain: false },
      { label: "Cypress", isMain: false },
      { label: "SonarQube", isMain: false },
      { label: "AWS", isMain: false },
      { label: "HTML", isMain: false },
      { label: "S/CSS", isMain: false },
      { label: "Jira", isMain: false },
    ],
  },
  {
    slug: "accessibility-audits",
    label: { de: "Banken und Behörden", en: "Banks and public bodies" },
    isFeatured: true,
    image: {
      file: "accessibility-audits.png",
      alt: confidentialImageAlt,
    },
    services: ["accessibility"],
    period: { de: "Seit Dezember 2024", en: "Since December 2024" },
    role: { de: "Barrierefreiheitsexperte", en: "Accessibility specialist" },
    client: {
      de: "Banken und öffentliche Einrichtungen",
      en: "Banks and public institutions",
    },
    summary: {
      de: "Komplette Nutzerstrecken geprüft, zum Beispiel Online-Kreditanträge, mit Befunden, die Teams direkt umsetzen.",
      en: "Full user journeys audited, such as online loan applications, with findings teams act on directly.",
    },
    title: {
      de: "Barrierefreiheits-Audits nach WCAG 2.2, BITV und EN 301 549",
      en: "Accessibility audits against WCAG 2.2, BITV and EN 301 549",
    },
    description: {
      de: [
        "Seit Dezember 2024 prüfe ich digitale Produkte nach WCAG 2.2 AA, BITV und EN 301 549, unter anderem für Banken und öffentliche Einrichtungen. Geprüft werden vor allem komplette Nutzerstrecken, zum Beispiel Online-Kreditanträge von der ersten Eingabe bis zur Bestätigung.",
        "Ich teste manuell mit Tastatur und VoiceOver, unterstützt von Prüfwerkzeugen im Browser und kleinen Tools, die ich selbst entwickelt habe. Parallel prüfe ich Code und Accessibility-Tree, also die Struktur, die Screenreader auslesen. Jeder Befund nennt das Erfolgskriterium, Beispiele aus der Strecke und einen Lösungsvorschlag, damit Entwicklungsteams ihn direkt umsetzen können. Die Berichte schreibe ich auf Englisch, nach der Umsetzung prüfe ich nach.",
        "Dazu berate ich zu barrierefreien Lösungen für einzelne Komponenten, etwa Bestätigungsmuster oder Karten- und Listenansichten, und setze sie teilweise direkt als barrierefreie Prototypen um.",
      ],
      en: [
        "Since December 2024 I have been auditing digital products against WCAG 2.2 AA, BITV and EN 301 549, among others for banks and public institutions. Mostly these are complete user journeys, such as online loan applications from the first input to the confirmation.",
        "I test manually with the keyboard and VoiceOver, supported by browser tooling and small tools I built myself. In parallel I check the code and the accessibility tree, the structure screen readers read. Every finding names the success criterion, examples from the journey and a suggested fix, so development teams can act on it directly. I write the reports in English and retest after the fixes.",
        "On top of that I advise on accessible solutions for single components, such as confirmation patterns or card and list views, and sometimes build them directly as accessible prototypes.",
      ],
    },
    techs: [
      { label: "WCAG 2.2", isMain: true },
      { label: "EN 301 549", isMain: true },
      { label: "BITV 2.0", isMain: false },
      { label: "BFSG", isMain: false },
      { label: "VoiceOver", isMain: true },
      { label: "ARIA", isMain: true },
      { label: "Chrome DevTools", isMain: false },
      { label: "Angular", isMain: false },
    ],
  },
  {
    slug: "curanto",
    label: "Curanto",
    isFeatured: false,
    url: "https://www.curanto.de/",
    image: {
      file: "curanto.png",
      alt: {
        de: "Die Startseite von Curanto auf dem Handy: Container bestellen in drei Schritten, Wo, Was und Wann.",
        en: "Curanto's home page on a phone: ordering a container in three steps, where, what and when.",
      },
    },
    services: ["development", "design", "accessibility"],
    period: { de: "November 2023 bis November 2024", en: "November 2023 to November 2024" },
    role: { de: "[Head of UI/UX]{lang=en} und Frontend", en: "Head of UI/UX and Frontend" },
    employer: "ORT Interactive",
    summary: {
      de: "Ein Webshop, den Partner unter eigenem Namen nutzen: Design-System, Frontend und Teamleitung.",
      en: "A web shop partners run under their own name: design system, frontend and team lead.",
    },
    title: {
      de: "Webshop als Whitelabel-Lösung, mit eigenem Designsystem",
      en: "Web shop as a white-label solution, with its own design system",
    },
    description: {
      de: [
        "Curanto vermietet Container und Toiletten. Der Shop ist eine Eigenentwicklung mit Nuxt und Statamic: ein Designsystem mit Tailwind, feste Komponenten und selbsterklärende CMS-Module, die der Kunde selbst zusammensetzt und schnell an neue Anforderungen anpasst. Der ganze Shop lässt sich per iFrame und in Self-Service-Terminals einbetten.",
        "Als [Head of UI/UX]{lang=en} und Frontend habe ich Design und Entwicklung verantwortet und beide Teams fachlich und disziplinarisch geführt. Serverseitiges Rendern und sauberes SEO steigern die Verkäufe seitdem stetig. Dazu habe ich den Kunden zu Barrierefreiheit nach WCAG beraten und die ersten barrierefreien Elemente begleitet.",
      ],
      en: [
        "Curanto rents out containers and toilets. The shop is a custom build with Nuxt and Statamic: a design system with Tailwind, fixed components and self-explanatory CMS modules the client assembles himself and adapts quickly to new requirements. The whole shop can be embedded via iframe and in self-service terminals.",
        "As Head of UI/UX and Frontend I was responsible for design and development and led both teams, professionally and as a manager. Server-side rendering and clean SEO have been raising sales steadily since. I also advised the client on accessibility under WCAG and guided the first accessible elements.",
      ],
    },
    techs: [
      { label: "Vue", isMain: true },
      { label: "Nuxt", isMain: true },
      { label: "Statamic", isMain: true },
      { label: "Tailwind", isMain: true },
      { label: "Figma", isMain: true },
      { label: "TypeScript", isMain: false },
      { label: "JavaScript", isMain: false },
      { label: "HTML", isMain: false },
      { label: "S/CSS", isMain: false },
      { label: "Sentry", isMain: false },
      { label: "Cypress", isMain: false },
      { label: "Lottie", isMain: false },
      { label: "Jira", isMain: false },
      {
        label: { de: "Barrierefreiheit (WCAG, BFSG)", en: "Accessibility (WCAG, BFSG)" },
        isMain: true,
      },
    ],
  },
  {
    slug: "hit",
    label: "HIT",
    isFeatured: false,
    url: "https://www.hit.de/",
    image: {
      file: "hit.png",
      alt: {
        de: "Die Wochenangebote von HIT auf dem Handy, als Produktkarten mit Aktionspreis.",
        en: "HIT's weekly offers on a phone, as product cards with sale prices.",
      },
    },
    services: ["development", "design", "accessibility"],
    period: { de: "Januar 2023 bis November 2023", en: "January 2023 to November 2023" },
    role: {
      de: "UI/UX-Design und Frontend-Entwicklung",
      en: "UI/UX design and frontend development",
    },
    employer: "ORT Interactive",
    summary: {
      de: "Design-System und Frontend für die Website von HIT, die nach und nach zum Shop wird.",
      en: "Design system and frontend for the HIT website, which is growing into a shop step by step.",
    },
    title: {
      de: "Designsystem und CMS-Module für die Website von HIT",
      en: "Design system and CMS modules for the HIT website",
    },
    description: {
      de: [
        "Für HIT habe ich ein Designsystem in Figma und Tailwind aufgebaut, auf Basis des Corporate Designs. Neben festen Komponenten entstanden mit dem Kunden flexible CMS-Module, die sich im Pimcore-Backend frei platzieren lassen.",
        "Gebaut ist das als natives HTML, CSS und JavaScript mit Vue-Komponenten, wo es dynamisch wird, angebunden an Pimcore. Weil die Website nach und nach zum Shop ausgebaut wird, lag der Fokus auf der Skalierbarkeit des Systems, auf Wartbarkeit und Performance. Die Zusammenarbeit wurde danach ausgeweitet. Zu Barrierefreiheit nach WCAG habe ich beraten, erste Entwürfe sind umgesetzt.",
      ],
      en: [
        "For HIT I built a design system in Figma and Tailwind, based on the corporate design. Alongside fixed components, flexible CMS modules came out of the work with the client, free to place in the Pimcore backend.",
        "It is built as native HTML, CSS and JavaScript with Vue components where things get dynamic, connected to Pimcore. Because the website is growing into a shop step by step, the focus was on the scalability of the system, on maintainability and performance. The collaboration was extended afterwards. I advised on accessibility under WCAG, and the first drafts are built.",
      ],
    },
    techs: [
      { label: "Vue", isMain: true },
      { label: "Pimcore", isMain: true },
      { label: "Tailwind", isMain: true },
      { label: "Figma", isMain: true },
      { label: "JavaScript", isMain: true },
      { label: "Twig", isMain: false },
      { label: "TypeScript", isMain: false },
      { label: "HTML", isMain: false },
      { label: "S/CSS", isMain: false },
      { label: "Express", isMain: false },
      { label: "Sentry", isMain: false },
      { label: "Lottie", isMain: false },
      { label: "Jira", isMain: false },
      {
        label: { de: "Barrierefreiheit (WCAG, BFSG)", en: "Accessibility (WCAG, BFSG)" },
        isMain: true,
      },
    ],
  },
  {
    slug: "pyur",
    label: "PŸUR",
    isFeatured: false,
    url: "https://www.pyur.com/",
    image: {
      file: "pyur.png",
      alt: {
        de: "Die Startseite von PŸUR auf dem Handy: ein Internet-Tarif mit großem Preis und einem WLAN-Router.",
        en: "PŸUR's home page on a phone: an internet plan with a large price and a Wi-Fi router.",
      },
    },
    services: ["design"],
    period: { de: "Oktober 2022 bis Dezember 2022", en: "October 2022 to December 2022" },
    role: { de: "[Head of UX]{lang=en}", en: "Head of UX" },
    summary: {
      de: "Den Umstieg von Adobe XD auf Figma geleitet, ein neues Design-System aufgebaut und das Team geschult.",
      en: "Led the move from Adobe XD to Figma, built a new design system and trained the team.",
    },
    title: {
      de: "Umstieg von Adobe XD auf Figma und neue UX-Features für pyur.com",
      en: "Move from Adobe XD to Figma and new UX features for pyur.com",
    },
    description: {
      de: [
        "Für PŸUR habe ich als [Head of UX]{lang=en} im Design- und Entwicklungsteam von Acolad Digital die Weiterentwicklung der Website geleitet. Den Umstieg von Adobe XD auf Figma habe ich angestoßen und koordiniert: alle Designelemente übertragen, ein neues Designsystem aufgebaut und das Team in Figma und modernen Design-Standards geschult.",
        "Wichtig war mir, alle beim Umstieg mitzunehmen, damit das neue Werkzeug für jeden verständlich und effizient ist. Für neue Features habe ich dem Kunden Lösungswege vorgestellt und ihn bei der Entscheidung begleitet. Technisch läuft die Seite auf Adobe Experience Manager mit HTML-, CSS- und JavaScript-Modulen.",
      ],
      en: [
        "For PŸUR I led the further development of the website as Head of UX in the design and development team at Acolad Digital. I initiated and coordinated the move from Adobe XD to Figma: transferred every design element, built a new design system and trained the team in Figma and modern design standards.",
        "It mattered to me to take everyone along in the switch, so the new tool was understandable and efficient for all. For new features I presented the client with options and supported the decision. Technically the site runs on Adobe Experience Manager with HTML, CSS and JavaScript modules.",
      ],
    },
    techs: [
      { label: "Adobe Experience Manager", isMain: true },
      { label: "Figma", isMain: true },
      { label: "HTML", isMain: true },
      { label: "S/CSS", isMain: true },
      { label: "JavaScript", isMain: true },
      { label: "Lottie", isMain: false },
      { label: "Jira", isMain: false },
    ],
  },
  {
    slug: "welliba",
    label: "Welliba",
    isFeatured: false,
    url: "https://www.welliba.com/",
    image: {
      file: "welliba_app.png",
      alt: {
        de: "Der Startbildschirm der Welliba-App: der Welliba-Index als Zahl und auf einer Skala, darunter Aktivitäten.",
        en: "The Welliba app's home screen: the Welliba Index as a number and on a scale, activities below.",
      },
    },
    services: ["design", "accessibility"],
    period: { de: "September 2021 bis Oktober 2022", en: "September 2021 to October 2022" },
    role: { de: "[Senior UI/UX Engineer]{lang=en}", en: "Senior UI/UX Engineer" },
    employer: "Welliba",
    summary: {
      de: "Die ganze Produktplattform gestaltet, von der App bis zu den Web-Apps, und das Entwicklerteam begleitet.",
      en: "Designed the whole product platform, from the app to the web apps, and guided the developers.",
    },
    title: {
      de: "Die ganze Produktplattform gestaltet, von der App bis zu den Web-Apps",
      en: "The whole product platform designed, from the app to the web apps",
    },
    description: {
      de: [
        "Welliba ist ein Startup aus Hamburg, gegründet von Führungskräften meiner früheren Arbeitsstelle bei AON Assessment Solutions. Die Plattform erfasst laufend das Wohlbefinden von Mitarbeitenden und gibt dem Unternehmen daraus KPIs an die Hand.",
        "Als [UI/UX Engineer]{lang=en} habe ich die Produktplattform von Grund auf konzipiert und gestaltet: eine Flutter-App und mehrere React-Web-Apps für Nutzer und Kunden, das Corporate Design und alle Oberflächen in Figma, aufgebaut als wiederverwendbare Module auf einem eigenen Designsystem. Mit meinem Hintergrund als Frontend-Entwickler habe ich die Entwickler durch die Umsetzung geführt und mit Code-Snippets unterstützt. Alle Produkte sind skalierbar und barrierefrei und heute aktiv in Nutzung.",
      ],
      en: [
        "Welliba is a startup from Hamburg, founded by executives from my previous workplace, AON Assessment Solutions. The platform continuously measures employees' well-being and turns it into KPIs for the company.",
        "As UI/UX engineer I designed the product platform from the ground up: a Flutter app and several React web apps for users and clients, the corporate design and every interface in Figma, built as reusable modules on a design system of its own. With my background as a frontend developer I guided the developers through the implementation and supported them with code snippets. All products are scalable and accessible, and in active use today.",
      ],
    },
    techs: [
      { label: "Figma", isMain: true },
      { label: "React", isMain: true },
      { label: "Flutter", isMain: true },
      { label: "Lottie", isMain: true },
      { label: "JavaScript", isMain: false },
      { label: "TypeScript", isMain: false },
      { label: "HTML", isMain: false },
      { label: "S/CSS", isMain: false },
      { label: "SonarQube", isMain: false },
      { label: "Storyblok", isMain: false },
      {
        label: { de: "Barrierefreiheit (WCAG)", en: "Accessibility (WCAG)" },
        isMain: true,
      },
    ],
  },
  {
    slug: "mueller-oswald",
    label: "Müller Oswald",
    isFeatured: false,
    url: "https://mueller-oswald.shop/",
    image: {
      file: "pvoswald.png",
      alt: {
        de: "Der Webshop des Weinguts Müller-Oswald auf dem Handy, mit einem Banner für Wein-Gutscheine.",
        en: "The Müller-Oswald winery's web shop on a phone, with a banner for wine vouchers.",
      },
    },
    services: ["development", "design"],
    period: { de: "März 2021 bis September 2021", en: "March 2021 to September 2021" },
    role: {
      de: "Beratung, Design und Entwicklung",
      en: "Consulting, design and development",
    },
    summary: {
      de: "Ein Shopify-Shop für zwei Weingüter, von der Beratung bis zur Umsetzung.",
      en: "A Shopify shop for two wineries, from the first advice to the finished shop.",
    },
    title: {
      de: "Ein Shopify-Shop für zwei Weingüter",
      en: "One Shopify shop for two wineries",
    },
    description: {
      de: [
        "Müller-Oswald verkauft Weine von zwei Weingütern in einem Shop. Ich habe das Projekt allein betreut, von der Beratung über das Design bis zur Umsetzung: die Kunden zu Shop-Lösungen beraten und zu Shopify geführt, ein passendes Theme gewählt und den Code an ihre Wünsche angepasst. In Figma entstanden Entwürfe und Prototypen, damit beide Produktgruppen und beide Markenauftritte in einen Shop passen.",
        "Wiederkehrende Änderungen machen die Kunden seitdem selbst, dafür habe ich sie geschult. Neben der Qualität im Frontend, vor allem beim SEO, habe ich auf das Preis-Leistungs-Verhältnis geachtet. Ich begleite den Shop bis heute mit Weiterentwicklungen und Beratung.",
      ],
      en: [
        "Müller-Oswald sells wines from two wineries in one shop. I handled the project on my own, from consulting through design to implementation: advised the clients on shop solutions and led them to Shopify, picked a fitting theme and adapted its code to their wishes. Drafts and prototypes in Figma made sure both product lines and both brand identities fit into one shop.",
        "Recurring changes the clients make themselves since then, I trained them for it. Alongside quality in the frontend, SEO above all, I kept an eye on value for money. I still support the shop today with further development and advice.",
      ],
    },
    techs: [
      { label: "Shopify", isMain: true },
      { label: "Liquid", isMain: true },
      { label: "Figma", isMain: true },
      { label: "HTML", isMain: true },
      { label: "CSS", isMain: true },
      { label: "JavaScript", isMain: true },
    ],
  },
  {
    slug: "kindeskinder",
    label: "kindeskinder",
    isFeatured: false,
    url: "https://kindeskinder.biz/",
    image: {
      file: "kindeskinder.png",
      alt: {
        de: "Die Startseite von kindeskinder auf dem Handy, mit einer Bildergalerie der Gewürzmischungen.",
        en: "The kindeskinder home page on a phone, with an image carousel of the spice blends.",
      },
    },
    services: ["development", "design", "accessibility"],
    period: { de: "September 2020 bis November 2020", en: "September 2020 to November 2020" },
    role: {
      de: "Beratung, Design und Entwicklung",
      en: "Consulting, design and development",
    },
    summary: {
      de: "Shop-Umzug zu Shopify unter Zeitdruck, mit neuem Design und ohne Pause beim Bestellen.",
      en: "A rushed move to Shopify, with a new design and no break in orders.",
    },
    title: {
      de: "Umzug von Supr zu Shopify unter Zeitdruck, mit neuem Design",
      en: "Move from Supr to Shopify under time pressure, with a new design",
    },
    description: {
      de: [
        "Der Shop von Kindeskinder lief auf Supr, das nach der Übernahme durch Wirecard und deren Zusammenbruch kurzfristig eingestellt wurde. Meine Aufgabe: der Umzug auf ein neues Shopsystem ohne Unterbrechung im Bestellprozess, unter hohem Zeitdruck.",
        "Dabei habe ich das Design überarbeitet, vor allem Responsivität, Performance und Barrierefreiheit, damit mehr Besucher auch bestellen. Statt kostenpflichtiger Plugins habe ich, wo es sinnvoll war, eigene Lösungen gebaut, um die Kosten im Rahmen zu halten. Die Seite ist bis heute aktiv.",
      ],
      en: [
        "The Kindeskinder shop ran on Supr, which was discontinued at short notice after Wirecard took it over and then collapsed. My task: the move to a new shop system without a break in the ordering process, under heavy time pressure.",
        "Along the way I reworked the design, above all responsiveness, performance and accessibility, so more visitors actually order. Instead of paid plugins I built my own solutions where it made sense, to keep the cost in check. The site is still live today.",
      ],
    },
    techs: [
      { label: "Shopify", isMain: true },
      { label: "Liquid", isMain: true },
      { label: "Figma", isMain: true },
      { label: "HTML", isMain: true },
      { label: "CSS", isMain: true },
      { label: "JavaScript", isMain: true },
    ],
  },
  {
    slug: "deutsche-bahn",
    label: "Deutsche Bahn",
    isFeatured: false,
    url: "https://db-engineering-consulting.com/de/news/vorausschauende-instandhaltung/",
    image: {
      file: "db.png",
      alt: {
        de: "Das Logo der Deutschen Bahn auf einem Handy.",
        en: "The Deutsche Bahn logo on a phone.",
      },
    },
    services: ["development", "design"],
    period: { de: "September 2019 bis August 2021", en: "September 2019 to August 2021" },
    role: {
      de: "UI/UX-Design und Frontend-Entwicklung",
      en: "UI/UX design and frontend development",
    },
    employer: "Deutsche Bahn, infraView",
    summary: {
      de: "Neue Funktionen für DIANA, die Software, mit der die Bahn Störungen an Weichen früh erkennt.",
      en: "New features for DIANA, the software Deutsche Bahn uses to spot faults in rail switches early.",
    },
    title: {
      de: "DIANA, die Diagnose- und Analysesoftware der Deutschen Bahn, weiterentwickelt",
      en: "DIANA, Deutsche Bahn's diagnostic and analysis software, taken further",
    },
    description: {
      de: [
        "DIANA ist die Software, mit der die Deutsche Bahn Störungen an Weichen früh erkennt. Sie ist bis heute im Einsatz und hat Ausfälle durch Weichenstörungen erheblich reduziert. Ich habe sie als UI/UX-Designer und Frontend-Entwickler um neue Funktionen erweitert und mitentwickelt.",
        "Auf Basis von Angular haben wir in einer Monorepo-Architektur zusätzliche Feature-Apps gebaut und das System modernisiert, dabei die Performance deutlich verbessert. Dazu kamen Softwarekomponenten für Kamerabrücken, die Waggons und ihre Bestandteile scannen und analysieren, und interaktive 3D-Elemente für eine bessere Bedienung.",
      ],
      en: [
        "DIANA is the software Deutsche Bahn uses to spot faults in rail switches early. It is still in use today and has cut failures caused by switch faults considerably. I extended it with new features and co-developed it as UI/UX designer and frontend developer.",
        "On Angular, in a monorepo architecture, we built additional feature apps and modernized the system, improving performance markedly along the way. Added to that were software components for camera bridges that scan and analyze wagons and their parts, and interactive 3D elements for easier operation.",
      ],
    },
    techs: [
      { label: "Angular", isMain: true },
      { label: "React", isMain: true },
      { label: "Figma", isMain: true },
      { label: "Lottie", isMain: true },
      { label: "Cypress", isMain: false },
      { label: "HTML", isMain: false },
      { label: "S/CSS", isMain: false },
      { label: "JavaScript", isMain: false },
      { label: "Jira", isMain: false },
    ],
  },
  {
    slug: "eckelmann",
    label: "Eckelmann",
    isFeatured: false,
    url: "https://edp.eckelmann.de/edp/maa/object?id=14462",
    image: {
      file: "eckelmann.png",
      alt: {
        de: "Das Logo von Eckelmann auf einem Handy.",
        en: "The Eckelmann logo on a phone.",
      },
    },
    services: ["development", "design"],
    period: { de: "April 2019 bis Juni 2019", en: "April 2019 to June 2019" },
    role: { de: "Frontend-Entwicklung und UX", en: "Frontend development and UX" },
    employer: "Eckelmann AG",
    summary: {
      de: "Eine Web-App für Kühlanlagen in Supermärkten, gebaut nach Gesprächen mit den Technikern.",
      en: "A web app for refrigeration systems in supermarkets, built after talking to the technicians.",
    },
    title: {
      de: "Web-App für Kühlanlagen in Supermärkten, gebaut nach Gesprächen mit den Technikern",
      en: "Web app for supermarket refrigeration, built after talking to the technicians",
    },
    description: {
      de: [
        "Bei der Eckelmann AG war ich Teil des Teams, das eine Angular-Anwendung zur Konfiguration und Inbetriebnahme von Kälteanlagen in Supermärkten entwickelte.",
        "Damit die Software zum Arbeitsalltag passt, habe ich mit Wartungstechnikern und anderen Nutzern gesprochen und daraus Personas und Nutzer-Leitfäden erstellt. Die Erkenntnisse flossen direkt ins UX-Design und wurden zur Grundlage für eine datenbasierte Arbeitsweise, die die Anwendung spürbar effizienter und leichter bedienbar machte.",
      ],
      en: [
        "At Eckelmann AG I was part of the team building an Angular application for configuring and commissioning refrigeration systems in supermarkets.",
        "To make the software fit the working day, I talked to maintenance technicians and other users and turned that into personas and user guides. The insights went straight into the UX design and became the basis of a data-driven way of working that made the application noticeably more efficient and easier to use.",
      ],
    },
    techs: [
      { label: "Angular", isMain: true },
      { label: "TypeScript", isMain: true },
      { label: "HTML", isMain: true },
      { label: "S/CSS", isMain: true },
      { label: "JavaScript", isMain: false },
      { label: "Jira", isMain: false },
    ],
  },
  {
    slug: "procter-gamble",
    label: "P&G (AON)",
    isFeatured: false,
    url: "https://www.pgcareers.com/global/en/interactive-assessments",
    image: {
      file: "pg.png",
      alt: {
        de: "Das Logo von P&G auf einem Handy.",
        en: "The P&G logo on a phone.",
      },
    },
    services: ["development", "design", "accessibility"],
    period: { de: "März 2018 bis März 2019", en: "March 2018 to March 2019" },
    role: { de: "Konzeption und Entwicklung", en: "Concept and development" },
    employer: "AON Assessment Solutions",
    summary: {
      de: "Bewerbungstests als Spiel, die sich leicht anfühlen und trotzdem verlässliche Ergebnisse liefern.",
      en: "Hiring tests that play like a game, feel light and still give reliable results.",
    },
    title: {
      de: "Spielerische Eignungstests für Procter & Gamble",
      en: "Gamified assessment tests for Procter & Gamble",
    },
    description: {
      de: [
        "Für Procter & Gamble habe ich bei AON Assessment Solutions Online-Tests für Bewerber konzipiert und entwickelt, die sich wie eine interaktive Erfahrung anfühlen statt wie eine Prüfung. Trotzdem mussten sie psychometrisch valide und vergleichbare Daten liefern.",
        "Entworfen habe ich die Tests in Axure RP, eng mit dem Kunden abgestimmt und mit Angular und Three.js umgesetzt: responsiv für alle Geräte und Bildschirmgrößen, auch für ältere Browser und barrierefrei nach WCAG. Die Tests sind bei Procter & Gamble bis heute im Einsatz.",
      ],
      en: [
        "For Procter & Gamble, at AON Assessment Solutions, I designed and built online tests for applicants that feel like an interactive experience rather than an exam. They still had to deliver psychometrically valid, comparable data.",
        "I drafted the tests in Axure RP, aligned them closely with the client and built them with Angular and Three.js: responsive for every device and screen size, for older browsers too, and accessible under WCAG. The tests are still in use at Procter & Gamble today.",
      ],
    },
    techs: [
      { label: "Angular", isMain: true },
      { label: "Three.js", isMain: true },
      { label: "GSAP", isMain: false },
      { label: "Axure RP", isMain: true },
      { label: "HTML", isMain: false },
      { label: "JavaScript", isMain: false },
      {
        label: { de: "Barrierefreiheit (WCAG)", en: "Accessibility (WCAG)" },
        isMain: true,
      },
    ],
  },
  {
    slug: "aon",
    label: "AON",
    isFeatured: false,
    url: "https://assessment.aon.com/",
    image: {
      file: "aon.png",
      alt: {
        de: "Das Logo von Aon auf einem Handy.",
        en: "The Aon logo on a phone.",
      },
    },
    services: ["development", "design", "accessibility"],
    period: { de: "Januar 2016 bis März 2018", en: "January 2016 to March 2018" },
    role: { de: "Konzeption und Entwicklung", en: "Concept and development" },
    employer: "AON Assessment Solutions",
    summary: {
      de: "Online-Tests für Bewerbungen bei Firmen wie Siemens und Daimler, auf jedem Gerät nutzbar und barrierefrei.",
      en: "Online hiring tests for companies like Siemens and Daimler, usable on any device and accessible.",
    },
    title: {
      de: "Eignungstests als Zusatzmodule für das Online-Assessment von AON",
      en: "Assessment tests as add-on modules for AON's online assessment",
    },
    description: {
      de: [
        "Bei AON Assessment Solutions habe ich für Kunden wie Vodafone, Rolls Royce, Siemens und Daimler Online-Tests für Bewerber konzipiert und entwickelt. Sie dienen Personalabteilungen als Entscheidungsgrundlage und müssen deshalb psychometrisch valide und vergleichbare Daten liefern.",
        "Entworfen in Axure RP, abgestimmt mit den Kunden, umgesetzt mit Angular: responsiv für alle Geräte, kompatibel mit älteren Browsern und barrierefrei nach WCAG. Die Tests sind bis heute im Einsatz und ein wesentlicher Teil des AON-Portfolios.",
      ],
      en: [
        "At AON Assessment Solutions I designed and built online tests for applicants for clients such as Vodafone, Rolls Royce, Siemens and Daimler. HR departments base hiring decisions on them, so they have to deliver psychometrically valid, comparable data.",
        "Drafted in Axure RP, aligned with the clients, built with Angular: responsive for every device, compatible with older browsers and accessible under WCAG. The tests are still in use today and a substantial part of AON's portfolio.",
      ],
    },
    techs: [
      { label: "Angular", isMain: true },
      { label: "Axure RP", isMain: true },
      { label: "HTML", isMain: true },
      { label: "JavaScript", isMain: true },
      {
        label: { de: "Barrierefreiheit (WCAG)", en: "Accessibility (WCAG)" },
        isMain: true,
      },
    ],
  },
  {
    slug: "casualvocab",
    label: "CasualVocab",
    isFeatured: false,
    url: "https://apps.apple.com/de/app/casualvocab-widget-japanese/id1622203836?l=en",
    image: {
      file: "casualvocab.png",
      alt: {
        de: "Die Übungsseite von CasualVocab: Ein Ring zeigt, dass 24 von 27 Wörtern gelernt sind.",
        en: "CasualVocab's practice screen: a ring shows 24 of 27 words learned.",
      },
    },
    services: ["development", "design"],
    period: { de: "November 2021 bis Juni 2022", en: "November 2021 to June 2022" },
    role: {
      de: "Eigenes Produkt, Design und Entwicklung",
      en: "Own product, design and development",
    },
    summary: {
      de: "Meine eigene iPhone-App, die Japanisch-Vokabeln als Widget auf den Homescreen bringt.",
      en: "My own iPhone app that puts Japanese vocabulary on your home screen as a widget.",
    },
    title: {
      de: "Japanisch-Vokabeln als Widget auf dem Homescreen",
      en: "Japanese vocabulary as a widget on the home screen",
    },
    description: {
      de: [
        "CasualVocab Widget ist meine eigene iOS-App, entstanden in meinen Anfängen mit Japanisch. Die Idee: Vokabeln samt Übersetzung als Widget auf dem Homescreen, damit man die Wörter, die man lernt, immer vor Augen hat.",
        "Gebaut mit Swift und SwiftUI, die Inhalte liegen in Firebase und lassen sich ohne Update anpassen. Alle Vokabelsets habe ich selbst erstellt, was lange gedauert hat, mir beim Lernen aber selbst geholfen hat. Die App ist im App Store.",
      ],
      en: [
        "CasualVocab Widget is my own iOS app, born in my early days of learning Japanese. The idea: vocabulary with translations as a widget on the home screen, so the words you are learning stay in front of you.",
        "Built with Swift and SwiftUI, the content lives in Firebase and can be changed without an update. I created all the vocabulary sets myself, which took a long time but helped my own learning. The app is on the App Store.",
      ],
    },
    techs: [
      { label: "Swift", isMain: true },
      { label: "SwiftUI", isMain: true },
      { label: "Firebase", isMain: true },
      { label: "Xcode", isMain: false },
      { label: "Figma", isMain: true },
      { label: "Lottie", isMain: false },
    ],
  },
]

export const featuredProjects = projects.filter((project) => project.isFeatured)

// --- Where else my work lives: GitHub, the first portfolio and the
// playgrounds, all external, no project page.
export type ElsewhereLink = {
  label: string
  url: string
  icon: "github" | "gamepad" | "code" | "codepen" | "movie"
}

export const elsewhereLinks: ElsewhereLink[] = [
  { label: "GitHub", url: "https://github.com/erc2804", icon: "github" },
  { label: "Mel-Menu", url: "https://ercancicek.com/mel-menu", icon: "gamepad" },
  { label: "JSFiddle", url: "https://jsfiddle.net/u/erc2804/fiddles/", icon: "code" },
  { label: "CodePen", url: "https://codepen.io/erc2804", icon: "codepen" },
  { label: "LottieFiles", url: "https://lottiefiles.com/erc2804", icon: "movie" },
]
