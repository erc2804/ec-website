import type { Translations } from "./index"
import type { DemoCase } from "./types"

// --- Screen reader transcripts follow English VoiceOver, which says "button" and
// "edit text" where the German voice says "Taste" and "Textfeld".

export const en: Translations = {
  common: {
    close: "Close",
    opensInNewTab: "(opens in a new tab)",
    contactCta: "Start a project",
    // --- Under "LinkedIn" on the contact cards: what the click brings, not the profile slug
    linkedinInvite: "Let's connect",
  },

  routeLabels: {
    home: "Home",
    accessibility: "Accessibility",
    design: "Design",
    development: "Development",
    portfolio: "Portfolio",
    about: "About me",
    inquiry: "Start a project",
    inquirySent: "Request sent",
    imprint: "Legal notice",
    privacy: "Privacy",
    accessibilityStatement: "Accessibility statement",
  },

  footer: {
    label: "Legal",
    rights: "All rights reserved.",
    profiles: {
      linkedin: "LinkedIn profile",
    },
  },

  legal: {
    imprint: {
      meta: {
        title: "Legal notice | Ercan Cicek",
        description: "Provider identification under section 5 of the German Digital Services Act.",
      },
      title: "Legal notice",
      providerHeading: "Details under section 5 DDG",
      contactHeading: "Contact",
      vatHeading: "VAT identification number",
      phoneLabel: "Phone",
      emailLabel: "Email",
      sections: [
        {
          heading: "Liability for content",
          body: [
            "As a service provider I am responsible for my own content on these pages under the general laws, in accordance with section 7(1) DDG. Under sections 8 to 10 DDG, however, I am not obliged to monitor transmitted or stored third-party information, or to investigate circumstances that point to unlawful activity.",
            "Obligations to remove or block the use of information under the general laws remain unaffected by this.",
          ],
        },
        {
          heading: "Liability for links",
          body: [
            "This site contains links to external websites over whose content I have no influence. I therefore cannot accept any liability for that third-party content. The respective provider or operator of the linked pages is always responsible for their content.",
          ],
        },
      ],
    },

    privacy: {
      meta: {
        title: "Privacy | Ercan Cicek",
        description: "This site collects no personal data, sets no cookies and evaluates nothing.",
      },
      title: "Privacy",
      lead: "I take the protection of your personal data seriously. This website collects and processes no personal data. It sets no cookies, and no user data is gathered or evaluated.",
      sections: [
        {
          heading: "External content",
          body: [
            "The site may contain external content such as embedded photos and videos, which could transmit data to third parties. You can control the use of such external services through your browser settings.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "If you have questions about this privacy statement, feel free to get in touch: {email}",
          ],
        },
      ],
    },

    accessibilityStatement: {
      meta: {
        title: "Accessibility statement | Ercan Cicek",
        description:
          "The accessibility status of this site, what was tested, and how to report a barrier.",
      },
      title: "Accessibility statement",
      lead: "Anyone selling accessibility should have their own site held to it. So here is what was tested and what to do if something gets in your way.",
      sections: [
        {
          heading: "Scope",
          body: [
            "This statement covers the website at ercancicek.com in both its German and English versions.",
          ],
        },
        {
          heading: "Conformance status",
          body: [
            "The site is built to WCAG 2.2 level AA and tested against it, using a keyboard and a screen reader, supported by automated tooling.",
            "As a micro-enterprise I am not required to publish this statement. It is voluntary.",
          ],
        },
        {
          heading: "Known limitations",
          body: [
            "The interactive demo on the accessibility page shows transcripts of screen reader announcements. So that a real screen reader does not read out what a screen reader would read out, those panels are hidden and the comparison is announced as one message through a live region instead.",
          ],
        },
        {
          heading: "Report a barrier",
          body: [
            "If something blocks you, write to me. I will answer and tell you when it is fixed.",
          ],
        },
      ],
      statusHeading: "Status of this statement",
      statusDate: "18 August 2026",
    },
  },

  chatBubble: {
    starter: "How are you doing?",
    firstName: "My name is pronounced Erjan (like in jungle).",
    mainLinks: "Where to next?",
    languageSwitch: "No worries, I speak both languages.",
    accessibility: "Good choice!",
    design: "Close to my heart.",
    development: "// TODO: Add a catchy line",
    contact: "Looking forward to your message!",
    legal: "Really?",
  },

  home: {
    meta: {
      title: "Accessibility, UI/UX Design and Frontend in Düsseldorf | Ercan Cicek",
      description:
        "I make websites accessible, and design and build websites and web apps myself. Independent product engineer in Düsseldorf, Germany, with more than ten years in design and code.",
    },
    hero: {
      eyebrow: ["Product Engineer", "Düsseldorf"],
      claim: ["Design, code and accessibility.", "All from one person."],
      scrollCue: "Scroll down",
    },
    offers: {
      title: "Three things I can do for you",
      items: {
        accessibility: {
          title: "Accessibility",
          teaser:
            "I audit your website against WCAG and the European Accessibility Act, fix the issues in the code myself and show your team what matters.",
        },
        design: {
          title: "UI/UX Design",
          teaser:
            "Interfaces that explain themselves. Also for products built with AI that need a design of their own.",
        },
        development: {
          title: "Frontend Development",
          teaser:
            "Whatever the technology: I direct the AI so it also builds what the concept doesn't show.",
        },
      },
      more: "Read more",
      vignettes: {
        accessibilityCaption: "Next, button",
        designSizeBefore: "128 × 56",
        designSizeAfter: "160 × 56",
        developmentRemoved: "padding: 13px;",
        developmentAdded: "padding: var(--space-3);",
      },
    },
    roles: {
      title: "How you can bring me in",
      lead: "Whether you're a startup, a company or an agency: you decide which role I take on.",
      items: [
        {
          title: "Take over",
          text: "You give me the goal, I deliver the result. **Design, frontend or both**, from the first idea to the finished product.",
        },
        {
          title: "Join your team",
          text: "I become **part of your team**. In design, in development, or as the link between the two.",
        },
        {
          title: "Review",
          text: "You want to know where you stand. I audit your website for **accessibility**, ideally right in your code and your designs in Figma. You get a **report** your team can work with right away.",
        },
        {
          title: "Train",
          text: "Through **mentoring and training**, I teach your team what it needs right now, for example around accessibility or working with AI. That way they apply it with confidence in day-to-day work.",
        },
      ],
      note: "We usually start with an accessibility audit, which frequently turns into a long-term collaboration across several areas. We'll figure out the best place for you to start in our first call.",
    },
    quotes: {
      title: "Selected recommendations",
      allLink: "All recommendations on LinkedIn",
      loginNote: "Visible only when signed in to LinkedIn",
      translated: "translated",
      items: [
        {
          text: "Ercan excels at understanding user needs and turning complex problems into seamless, intuitive experiences. I would gladly work with him again.",
          name: "Johanna Leisch",
          role: "CEO, KONUX",
          isTranslated: false,
        },
        {
          text: "He's a thoughtful UI/UX designer with a solid understanding of frontend engineering. He has a real talent for turning abstract, technical ideas into clear, intuitive designs.",
          name: "Louis Saadé",
          role: "Co-Founder & CTO, context/fab",
          isTranslated: false,
        },
        {
          text: "I am more than satisfied with the result and above all with the speed and flexibility of his work. He was absolutely the right partner for this project!",
          name: "Katharina Sauer",
          role: "Managing Director, KKS Karl Konrad",
          isTranslated: true,
        },
      ],
    },
    projects: {
      title: "From my portfolio",
      all: "See the portfolio",
    },
    contact: {
      title: "Get in touch.",
      body: "Tell me briefly what it's about, with no strings attached, and we'll find the right solution together.",
      email: "Email",
      linkedin: "LinkedIn",
    },
  },

  portfolio: {
    meta: {
      title: "Portfolio: web apps, websites and shops | Ercan Cicek",
      description:
        "Selected projects since 2016: web apps for industry, HR tech and rail, shops and websites, accessibility audits. With role, period and stack.",
    },
    title: "Portfolio",
    lead: "Selected projects since 2016.",
    elsewhere: {
      title: "Other things",
      lead: "My code on GitHub, Mel-Menu as my first portfolio from 2018, and a few playgrounds.",
    },
    project: {
      back: "Back to portfolio",
      visit: "Visit {host}",
      facts: {
        title: "Facts",
        period: "Period",
        role: "Role",
        employer: "Employer",
        client: "Client",
        services: "Services",
        skills: "Skills",
      },
      imageAlt: "{label} on a phone",
      metaTitle: "{label} | Portfolio | Ercan Cicek",
    },
    contact: {
      title: "Want your project in here?",
      body: "Tell me what you have in mind. A short call is enough, free, with no strings attached.",
    },
  },

  inquiry: {
    meta: {
      title: "Start a project | Ercan Cicek",
      description:
        "Tell me what it's about: accessibility, design or development. Fill in the form yourself or let Pixel-Ercan help. I usually reply within two working days.",
    },
    title: "Start a project",
    lead: "Tell me what it's about. A few sentences are enough. Fill in the form yourself, or just write it down and Pixel-Ercan fills it in for you.",
    assistant: {
      title: "Fill it in with Pixel-Ercan",
      intro: "Hi, I'm Pixel-Ercan. Tell me about your project and I'll fill in the form for you.",
      disclosure:
        "Pixel-Ercan is an AI. To fill in the form, your text is sent to the AI service Anthropic. Nothing is sent to Ercan until you send it yourself.",
      privacyLink: "More in the privacy policy",
      logLabel: "Conversation with Pixel-Ercan",
      speakerYou: "You",
      speakerAssistant: "Pixel-Ercan",
      inputLabel: "Your message to Pixel-Ercan",
      placeholder:
        "Hi Ercan, we run an online shop for bike parts and need to be accessible by June. Can you check where we stand? I'm Lena, you can reach me at lena@example.com",
      replyPlaceholder: "Your reply …",
      send: "Send",
      callbackYes: "Yes, please",
      callbackNo: "No, email is fine",
      callbackYesMessage: "Yes, please call me.",
      callbackNoMessage: "No, email is fine.",
      working: "Pixel-Ercan is typing …",
      empty: "Write Pixel-Ercan a few words first, then he gets going.",
      filled: "Filled in: {fields}",
      toForm: "Show",
      showEarlierOne: "Show 1 earlier message",
      showEarlierMany: "Show {count} earlier messages",
      hideEarlier: "Hide earlier messages",
      toNewest: "Jump to the latest message",
      reset: "Start the chat over",
      error: "That didn't work just now. Try again in a moment or fill in the form yourself.",
      busy: "It's busy right now. Try again in a minute or fill in the form yourself.",
      tooLong: "The chat is getting long. Please add the rest directly in the form.",
      tag: "by Pixel-Ercan",
      fieldNames: {
        topics: "Topic",
        goal: "Project",
        name: "Name",
        email: "Email",
        phone: "Phone",
        callback: "Call back",
      },
    },
    form: {
      title: "Your request",
      optional: "optional",
      topicsLegend: "What can I help with?",
      topicsHint: "Pick as many as you like",
      topics: {
        accessibility: "Accessibility",
        design: "Design",
        development: "Development",
        other: "Something else",
      },
      goalLabel: "Your project",
      goalHint: "What should be built or improved? Add a timeframe and anything you already know",
      goalPlaceholder:
        "Our online shop needs to be accessible by June. We don't know where we stand and are looking for someone who checks it and fixes the issues right in the code.",
      nameLabel: "Your name",
      emailLabel: "Your email",
      emailPlaceholder: "name@company.com",
      phoneLabel: "Phone",
      phonePlaceholder: "+49 211 1234567",
      callbackLabel: "Please call me back",
      honeypotLabel: "Please leave this field empty",
      submit: "Send request",
      sending: "Sending …",
      waitForAssistant: "One moment, Pixel-Ercan is still filling in.",
      sendError: "Your request didn't come through. Try again or write to me directly at {email}.",
      errorSummary: "Your request hasn't been sent yet. Please check the following:",
      errors: {
        goal: "Tell me about your project in a sentence or two. That's enough for a first assessment.",
        email: "I can't reply without your email address. Add it here.",
        emailInvalid:
          "Something's missing in the email address. It should look like name@company.com",
        callbackPhone:
          "I need your phone number to call you back. Or clear the “Please call me back” checkbox.",
      },
    },
    sent: {
      title: "Thank you! Your request has arrived.",
      titleWithName: "Thank you, {name}! Your request has arrived.",
      body: "You'll usually hear from me within the next two working days.",
      back: "Back to the start page",
      newRequest: "Start a new request",
      offersTitle: "While you wait",
      offers: {
        accessibility: {
          title: "Accessibility",
          text: "How I test, what the law requires and how a screen reader experiences your site.",
        },
        design: {
          title: "Design",
          text: "How I design interfaces that explain themselves.",
        },
        development: {
          title: "Development",
          text: "How a design turns into code that holds up in every state.",
        },
      },
    },
    next: {
      title: "What happens next",
      steps: [
        {
          title: "I read your request myself",
          text: "I usually get back to you within two working days.",
        },
        {
          title: "You get a clear assessment",
          text: "What makes sense, what it takes and how we can get started.",
        },
      ],
      directTitle: "You can also reach me directly",
      email: "Email",
      linkedin: "LinkedIn",
    },
  },

  nav: {
    toHome: "To the home page",
    label: "Main navigation",
    skipToContent: "Skip to content",
    openMenu: "Menu",
    languageLabel: "Language",
  },

  design: {
    meta: {
      title: "UI/UX design for web apps and websites | Ercan Cicek",
      description:
        "UI/UX design for web apps and websites, built by me if you like. Also for products started from an AI template. Based in Düsseldorf. The first call is free, with no strings attached.",
    },

    hero: {
      title: "I design products that explain themselves.",
      selection: "Fill × Hug",
      // --- The colour token of the heading in the tool's property row, before
      // and after the click. Token names are English in every language.
      tokenBefore: "text/tertiary",
      tokenMiddle: "text/secondary",
      tokenAfter: "text/primary",
      lead: "User-friendly, distinctive design: for new features in existing products and for new products, with or without an AI-generated prototype.",
    },

    compare: {
      title: "AI gives you the usual, not the best solution.",
      lead: "The result works and is a good start. But it's off the rack: the elements look like they do everywhere, the branding doesn't fit, and what makes it yours is missing.",
      example:
        "An example to make it clear: the top of my own home page, once built by an AI from the same content and once designed by me. I deliberately don't put client sites up against an AI version here. On a call I'm happy to show you examples closer to your project.",
      before: "AI-generated",
      after: "Designed by me",
      // --- For screen readers, who do not see the two pictures
      description:
        "AI-generated: a dark blue background with a grid, the initials “EC.” as the logo, the name in bold white, a blue gradient button and next to it the portrait in a glowing frame with the label “Focus: Accessible Web Products”. Designed by me: dark grey, the logo with the angle brackets, the name large in green and light grey, a green button and a cropped portrait that fills the right half.",
      // --- The info button next to the AI side and its dialog: where the
      // picture comes from, and the prompt as it was sent
      originLabel: "How the AI result was made",
      originTitle: "How the AI result was made",
      originText: [
        "Built by Gemini 3.1 Pro on November 2, 2026, from a single prompt with no other context and no design brief. It shows the result as delivered. For the English page, only the texts were swapped.",
        "Other prompts and tools give better results too. Without good groundwork and the right prompts, though, they almost always look off the rack.",
      ],
      promptTitle: "The prompt (sent in German)",
      prompt: `Erstelle den Hero-Bereich (den ersten Bildschirm) der Startseite meiner persönlichen Website.

Inhalte:
- Navigation: Barrierefreiheit, Design, Entwicklung, Portfolio, Über mich
- Sprachumschalter: DE | EN
- Zeile über dem Namen: Product Engineer · Düsseldorf
- Name: Ercan Cicek
- Aussage: Design, Code und Barrierefreiheit. Aus einer Hand.
- Button: Projekt anfragen
- Hinweis zum Weiterscrollen: Weiter nach unten
- Das angehängte Foto ist ein Porträt von mir.`,
    },

    states: {
      title: "Every state belongs in the design.",
      lead: "Designs usually focus on the ideal case. But what about different text lengths, long loading times, empty or overlong lists and errors? I design each of these states too, so your team doesn't have to make anything up.",
      legend: "State",
      commonLabel: "Not thought through",
      designedLabel: "Thought through",
      cardTitle: "Projects this week",
      rows: [
        { name: "Website relaunch", hours: "12.5 h" },
        { name: "App redesign", hours: "6 h" },
        { name: "Pitch deck", hours: "2 h" },
      ],
      longName:
        "Relaunch of the company website including accessibility audit under the EAA (phase 2)",
      emptyTitle: "No projects yet",
      emptyText: "Create a project and your hours will show up here.",
      emptyAction: "Create project",
      errorRaw: "Error: Request failed with status 500",
      errorTitle: "The projects couldn't be loaded",
      errorText: "Try again in a moment.",
      errorAction: "Try again",
      loading: "Loading…",
      loadingTitle: "Loading projects …",
      loadingSlow: "Taking too long?",
      loadingAction: "Reload",
      items: [
        {
          key: "loading",
          label: "Loading time",
          why: "Not thought through: one word on an empty surface. Thought through: it says what's loading, and if it takes too long, there's a way out.",
        },
        {
          key: "empty",
          label: "Empty list",
          why: "Not thought through: an empty box that looks like an error. Thought through: it says why there's nothing here, with the first step right below.",
        },
        {
          key: "error",
          label: "Error",
          why: "Not thought through: a message from the code that helps nobody. Thought through: it says what happened and what you can do.",
        },
        {
          key: "long",
          label: "Long name",
          why: "Not thought through: a long name pushes the hours out of view. Thought through: it wraps and gets cut after two lines. Real names are longer than the ones in the mockup.",
        },
        {
          key: "normal",
          label: "Ideal case",
        },
      ],
    },

    services: {
      title: "How I can help",
      lead: "I design new features or help you with the basic structure of your product.",
      items: [
        {
          title: "Design",
          text: "New products and features, from the first flows to a clickable prototype in the design tool of your choice, or straight in code.",
        },
        {
          title: "Rework",
          text: "Your product already works, but you want new areas or a design of its own. I build on what's there, without you starting over.",
        },
        {
          title: "Design system",
          text: "Colors, type, spacing and building blocks as fixed rules. So design and code speak the same language and your team stops reinventing every button.",
        },
      ],
    },

    process: {
      title: "How it can go",
      lead: "Every project is different, so we shape the process around you. This is what it can look like for a design project, for example.",
      steps: [
        {
          title: "Getting to know each other",
          text: "We get to know each other and talk about your products: who uses them and what it's about.",
        },
        {
          title: "Getting oriented",
          text: "I briefly get familiar with your design system, your users and the existing product.",
        },
        {
          title: "Designing",
          text: "I design the product or the new feature in the design tool of your choice or directly in code, thinking through everything development needs, such as every state.",
        },
        {
          title: "Handover",
          text: "Design, states and tokens go to your team with an explanation. If you like, I build along right away.",
        },
      ],
    },

    oneHand: {
      title: "Design that can be built",
      body: "I've been building frontends myself for more than ten years. So I know **how far a design can go**: far enough to make developers sweat, but **never so far that it won't hold up in code**. And if someone's missing for the build, I'm there.",
      portraitAlt: "Ercan Cicek",
    },

    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Why does a distinctive design matter?",
          answer:
            "Because people judge a site by its look first. In a [Stanford University study](https://doi.org/10.1145/997078.997097), almost half of all comments on the credibility of websites were about their design. An off-the-rack template looks like many others.",
        },
        {
          question: "Can you work directly in our design system?",
          answer:
            "Yes, gladly, it's usually the most efficient way: I use what's there and add what's missing. If you don't have one yet, we build the basics together.",
        },
        {
          question: "What is your hourly rate?",
          answer:
            "It depends on how many hours you book. On a first call, free and with no strings attached, I'll give you a concrete rate.",
        },
        {
          question: "Are your designs always accessible?",
          answer:
            "If it makes sense for the purpose and you want it, yes, and I recommend it almost every time. For an internal tool only your team uses, the accessibility law usually doesn't require it. Then you decide how far you want to go.",
        },
      ],
    },

    contact: {
      title: "Let's talk about your product.",
      body: "On a first call, free and with no strings attached, we look at your product together and talk about how I can support you.",
    },
  },

  accessibility: {
    meta: {
      title: "Accessibility audits and fixes for the EAA | Ercan Cicek",
      description:
        "I audit your website against the European Accessibility Act and WCAG 2.2, fix the issues in design and code, and train your team. Based in Düsseldorf. The first call is free, with no strings attached.",
    },

    hero: {
      title: "I make your digital products accessible.",
      announcement: "I make your digital products accessible. Heading level 1",
      announcementLabel: "What a screen reader says about this heading",
      lead: "I check them against WCAG and the European Accessibility Act. If you like, I fix the issues myself in design and code and train your team so no new ones creep in over time.",
    },

    demo: {
      title: "Looks the same. But what if you can't see well?",
      lead: "In that case, many people use a screen reader that reads content out loud. To announce everything correctly, it needs clear structure in the code and sometimes extra information, such as whether a field is required or an entry is invalid.",
      instruction:
        "Use “Back” and “Next” to step through the form, or pick an element right in it. For each element you see what a screen reader announces: once with a common mistake, once built right. “Why is this a problem?” explains why the mistake matters.",
      // --- Desktop only, where the curtain switch is shown
      instructionCurtain: "With “Hide form” you try it without the picture.",
      commonLabel: "Common mistake",
      correctLabel: "Built right",
      previous: "Back",
      next: "Next",
      whyButton: "Why is this a problem?",
      // --- Phones: the pill that leads from the picture down to the announcements
      jump: "To the announcement",
      blind: "Hide form",
      curtainText: "Now all you have is what the screen reader says.",
      silent: "Nothing announced",
      position: "Element {number} of {total}",
      liveTemplate: "{position}: {name}",
      formTitle: "Your details",
      nameLabel: "Full name",
      nameValue: "Martin Beck",
      emailLabel: "Email address",
      emailValue: "beck.company.com",
      emailError: "The @ is missing. For example: name@company.com",
      cases: [
        {
          name: "A symbol that means nothing",
          details: [
            "The shield symbol is pure decoration. If the code doesn't say so, some screen readers read out the file name instead.",
            "Announcements like that carry no information. They're noise that makes listening harder.",
            'Built right, the image gets an empty description in the code (`alt=""`). Then the screen reader skips it. Whether an image is just decoration is up to whoever creates the page. Images with relevant content need a short description.',
          ],
          common: "image, icon-shield-blue-2.svg",
          correct: "",
          isCorrectSilent: true,
        },
        {
          name: "A heading that isn't one",
          details: [
            "“Your details” is set large and looks like a heading. In the code, though, it's just plain text.",
            "Most screen reader users look for content through headings and jump from one to the next. That's what [WebAIM's large survey of screen reader users](https://webaim.org/projects/screenreadersurvey11/) shows. If the heading is missing in the code, they sometimes skip this section.",
            "Built right, it's a heading in the code too. How it looks is still up to the design.",
          ],
          common: "Your details",
          correct: "Your details, heading level 2",
        },
        {
          name: "A field without a label",
          details: [
            "Above the field it says “Full name”. To the eye, the two belong together, but not in the code.",
            "So the screen reader only says “edit text”, with no name. Anyone who can't see well has to guess what goes in. It also affects people who find a mouse and keyboard hard to use and control their computer by voice instead, for example with Voice Control on macOS or Voice Access on Windows. They pick a field by saying its label. That only works if the field has that name in the code.",
            "Built right, the label is connected to the text field in the code. Then the screen reader reads it out too. Thanks to this connection, people can also click the label to activate the field and type into it.",
          ],
          common: "edit text, Martin Beck",
          correct: "Full name, required, edit text, Martin Beck",
        },
        {
          name: "An error shown only in red",
          details: [
            "The field has a red border, and below it, in red, it says what's missing. To most people, that says “error” right away.",
            "But what if you can't see the red, or can't see it properly? That affects blind people, but also people with color blindness, people with low vision and many older people. And the screen reader says nothing about the error.",
            "Built right, the field is also marked as invalid in the code, and the hint below it is connected to it. Then the screen reader announces both: there's an error, and here's what to do. An icon or a word belongs with it, so the error doesn't depend on color alone.",
          ],
          common: "Email address, edit text, beck.company.com",
          correct:
            "Email address, invalid data, edit text, beck.company.com. The @ is missing. For example: name@company.com",
        },
        {
          name: "A button without a name",
          details: [
            "The button only shows a symbol. Sighted people guess from the symbol and the context what it does.",
            "A screen reader can't interpret the symbol, it's just a graphic. And in the code, the button has no name. So the screen reader only says “button”. Whether the click moves on, deletes something or sends the form, you don't find out.",
            "Built right, the button gets a text in the code that the screen reader reads out, for example “Continue to summary”. The text doesn't have to be visible, the design stays the same.",
          ],
          common: "button",
          correct: "Continue to summary, button",
        },
      ] as DemoCase[],
    },

    law: {
      title: "The European Accessibility Act in short",
      body: [
        "Since June 28, 2025, many digital services for consumers in the EU have to be accessible. In Germany that's the BFSG. In practice, the technical benchmark is the European standard EN 301 549 together with WCAG, the international guidelines for accessible websites and apps. I test against WCAG 2.2 (the current version, which the new edition of the standard builds on).",
        "Public authorities check whether companies comply, after complaints and on their own initiative. They can set a deadline for fixes, impose a fine and, as a last resort, stop the service.",
      ],
      affectedTitle: "Usually affected",
      affected:
        "Online shops, online banking, booking and ticketing, contract sign-ups and apps for consumers",
      notAffectedTitle: "Usually not affected",
      notAffected:
        "Services only for business customers, and services from very small companies: fewer than 10 employees and no more than €2 million in annual turnover or balance sheet total (Section 3 BFSG)",
    },

    services: {
      title: "How I can help",
      lead: "We usually start with an audit, which frequently turns into a long-term collaboration. I take on as much as you need.",
      items: [
        {
          title: "Audit",
          text: "I test your website against WCAG\u00A02.2, by hand and with tools, some of which I built myself. For every issue you get a suggested fix your team can start on right away.",
        },
        {
          title: "Fix",
          text: "I fix the issues myself, right in the code and in the design, whatever technology you use. I comment on and sum up every change, so your team can follow it and knows what to watch for in the future.",
        },
        {
          title: "Train",
          text: "With training and mentoring, I help your team build accessibility in from the start and keep rounds of fixes small. Also as quality assurance alongside design and development, for example as a step of its own in each sprint review.",
        },
      ],
    },

    process: {
      title: "How it can go",
      lead: "Every project is different, so we shape the process around you. This is what it can look like for an audit, for example.",
      steps: [
        {
          title: "Getting to know each other",
          text: "We get to know each other and talk about your products. I help you set the right course.",
        },
        {
          title: "Defining the tasks",
          text: "We talk about what's possible for you, with your goals first. That includes price and timeline.",
        },
        {
          title: "Testing",
          text: "I test the agreed flows step by step, by hand and with tools, some of which I built myself. The result is a report with a suggested fix for every finding, written for the team that handles it, for developers for example directly as code.",
        },
        {
          title: "Talking it through",
          text: "Either you go through the report yourselves and we answer your questions, or we go through it together. Afterwards your team can get started right away.",
        },
      ],
    },

    oneHand: {
      title: "Audit and fixes from one person",
      body: "I come from UI/UX design and frontend development. So an issue doesn't end with **a criterion number** for me. It ends with **a fix** that fits your design system and can ship in the next sprint.",
      portraitAlt: "Ercan Cicek",
    },

    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Does the law apply to me?",
          answer: "Most likely, if consumers buy, book or sign up for something from you online.",
        },
        {
          question: "What does an audit cost?",
          answer:
            "It depends on the scope of the audit: how many different pages and flows should be tested, how complex the pages are and what format you want the report in. After a free first call, you get a concrete quote.",
        },
        {
          question: "Aren't automated testing tools enough?",
          answer:
            "They're a good start and catch typical technical issues like missing image descriptions or low contrast. Whether you can get through checkout with a keyboard, whether an announcement makes sense or an error message helps, only a person can judge.",
        },
        {
          question: "What about accessibility plugins?",
          answer:
            "These plugins only put a layer on top of the page. The code underneath stays the same, and that's where most barriers come from. People who use a screen reader bring their own tools anyway and need a page that's built right.",
        },
      ],
    },

    contact: {
      title: "Get in touch.",
      body: "Tell me briefly what it's about, with no strings attached, and we'll find the right solution together.",
    },
  },
  development: {
    meta: {
      title: "Frontend development with React, Vue and TypeScript | Ercan Cicek",
      description:
        "I build frontends that still hold up in two years: from your prototype, from scratch, or as an extra pair of hands for your team. AI writes along, I make the decisions. The first call is free, with no strings attached.",
    },

    hero: {
      title: "Clean code, written by AI, directed by me.",
      lead: "Frontend development is AI-driven today. With more than ten years of experience, I direct the AI so the code scales and the things you don't see are right too.",
      prompt: "Make the heading a real h1.",
      working: "かしこまりました、先輩 …",
    },

    services: {
      title: "How I can support you",
      lead: "With a prototype as the starting point, from scratch, or as part of your team. Also as the bridge between design and development, with accessibility in the bag if you like.",
      items: [
        {
          title: "From prototype to product",
          text: "You have a prototype, often built with AI, and it should become a real product. I take over where it stands, tidy up where it sticks and keep building. No restart.",
        },
        {
          title: "Build new",
          text: "A new web app or website, from the design to launch. You get code your team can read and change later on its own.",
        },
        {
          title: "Reinforce your team",
          text: "Your team needs one more pair of hands for a while. I work in your code and your routines, agree interfaces with the backend and hand over so it carries on without me.",
        },
      ],
    },

    workingStyle: {
      title: "What you can count on",
      lead: "What gets built is up to your product. How I work stays the same.",
      stack: ["React", "Vue", "Angular", "Next.js", "Astro", "Shopify", "Webflow"],
      stackYours: "and yours",
      items: [
        {
          title: "Your stack, not mine.",
          text: "Which framework, which language, which CMS: that is the smallest question today. I have built with React, Vue, Angular, Next.js, Astro, Shopify and Webflow, and I read my way into whatever runs at your place. You do not get a change of technology just because I had a favorite.",
        },
        {
          title: "Precise down to the detail.",
          text: "A spacing that is off, a missing focus ring, a loading state that jumps: I see it, and I do not let it stand. What the AI delivers, I read and check before it reaches you.",
        },
        {
          title: "Your own look, not a template.",
          text: "AI-built interfaces all look alike. I set the direction, with components, tokens and motion of your own, so your product looks like yours. This site came about that way.",
        },
        {
          title: "Built to scale from the start.",
          text: "Components, variables, clear boundaries: I lay out the structure so the tenth feature comes as easily as the first. Even when the prototype grew fast and messy.",
        },
        {
          title: "At home in your team.",
          text: "I work in your repository and by your rules, agree interfaces with the backend and hand over so your team can carry on without me. If it helps, I train them.",
        },
        {
          title: "Accessible on request.",
          text: "Keyboard, screen reader, contrast and focus are planned in when you want them, and checked the way I check in audits.",
        },
      ],
    },

    oneHand: {
      title: "Why a developer, when AI writes the code?",
      body: "Because building is no longer the hard part. The hard part is the **decisions before it**: Does this still scale when your idea grows? What happens on a bad connection or when something fails? Does a user see at once what to do? I ask those questions before the AI builds, and **check what it delivers** afterwards. Add what a model cannot know: everything that came out after its training.",
      portraitAlt: "Ercan Cicek",
    },

    faq: {
      title: "Common questions",
      items: [
        {
          question: "What does it cost?",
          answer:
            "That depends on the scope: how many screens and flows there are and whether I build new or work in existing code. After a free, no-obligation first call you get a concrete offer.",
        },
        {
          question: "When can you start?",
          answer:
            "That depends on my workload. Just ask, and I will tell you honestly when it works.",
        },
        {
          question: "We already have developers. Does that work?",
          answer:
            "Yes. I work in your repository, by your rules and with your tools. When I leave, there is no code left that only I understand.",
        },
        {
          question: "Do we own the code?",
          answer:
            "Yes, from the first line. Everything lives in your repository, with no dependency on me.",
        },
      ],
    },

    contact: {
      title: "Get in touch if I can help.",
      body: "Whether the project is already running or still just an idea. A short call is enough, free, with no strings attached.",
    },
  },
}
