import type { Translations } from "./index"
import type { DemoCase } from "./types"

// --- Screen reader transcripts follow English VoiceOver, which says "button" and
// "edit text" where the German voice says "Taste" and "Textfeld".

export const en: Translations = {
  common: {
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
    heroZone: "Glad you made it.",
    offersZone: "Which one do you need?",
    contactZone: "Looking forward to hearing from you.",
    starter: "How are you doing?",
    firstName: "My name is pronounced Erjan (like in jungle).",
    mainLinks: "Where to next?",
    languageSwitch: "No worries, I speak both languages.",
    accessibility: "Good choice.",
    design: "Yes, I do that myself too.",
    development: "And that as well.",
    contact: "Go on.",
  },

  home: {
    meta: {
      title: "Ercan Cicek | Product Engineer: UI/UX Design, Frontend Development and Accessibility",
      description:
        "I design digital products, build them myself and make them accessible. Product engineer from Düsseldorf, more than ten years of design and code, remote or on site.",
    },
    hero: {
      eyebrow: ["Product Engineer", "Düsseldorf"],
      claim: ["Design, code and accessibility.", "From one person."],
      scrollCue: "Scroll down",
    },
    offers: {
      title: "Three things I can do for you",
      items: {
        accessibility: {
          title: "Accessibility",
          teaser:
            "I audit your application against WCAG and the European Accessibility Act, fix the issues in the code myself and show your team what matters.",
        },
        design: {
          title: "UI/UX Design",
          teaser:
            "Interfaces that explain themselves. Even when your product was built with AI and now looks like everyone else's.",
        },
        development: {
          title: "Frontend Development",
          teaser:
            "React, Vue, TypeScript. I build what the design means, with every state, not just the pretty one.",
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
      lead: "Whether it's accessibility, design or development: you decide which role I take on.",
      items: [
        {
          title: "Take over",
          text: "You give me the goal, I deliver the result. **Design, frontend or both**, from the first idea to the finished product.",
        },
        {
          title: "Join your team",
          text: "I become **part of your team**. As a designer who knows what can be built, or as a developer who understands what the design is after.",
        },
        {
          title: "Review",
          text: "You want to know where you stand. I audit your application for **accessibility** and, if you like, look at design and code too. You get a **report** your team can work with right away.",
        },
        {
          title: "Enable",
          text: "Your team should be able to do it themselves. Through **mentoring and training** in accessibility, design and frontend, so they apply it with confidence in day-to-day work.",
        },
      ],
      note: "It often starts with a review and grows from there. If you're not sure what you need, that's a good reason to talk.",
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
      cardLabel: "Go to project",
    },
    contact: {
      title: "Tell me what it's about.",
      body: "Drop me a short note on what you're planning and what it's built with. You'll get an honest assessment, even if it is: you don't need me for this.",
      email: "Email",
      linkedin: "LinkedIn",
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
        "I design interfaces where people find what they need right away, and build them myself if you like. Also for products built with AI. The first call is free, with no strings attached.",
    },

    hero: {
      title: "I design products that explain themselves.",
      selection: "Fill × Hug",
      // --- The colour token of the heading in the tool's property row, before
      // and after the click. Token names are English in every language.
      tokenBefore: "text/tertiary",
      tokenMiddle: "text/secondary",
      tokenAfter: "text/primary",
      lead: "Nobody should have to think about where to click. That's what I take care of: in new products, in existing ones, and in those built with AI that now need the last step.",
    },

    compare: {
      title: "Same content. Different product.",
      lead: "AI tools deliver a working page in minutes. That's a good start, often the best a project can have. But it's a template, and templates look alike: a gradient on top, three cards with icons, two buttons. What's still missing is the decision about what matters on this page.",
      example:
        "Here's the home page of a time-tracking tool, the template on the left, fully designed on the right. Nothing was invented, only decided.",
      before: "AI template",
      after: "Designed",
      sliderLabel: "Comparison of the same home page: the AI template on the left, designed on the right",
      description:
        "Left: a purple gradient, the heading “Welcome to Klaro”, two buttons of the same size and three cards with the words “Lightning fast”, “Secure” and “Intuitive”. Right: the heading “Track hours without thinking about it”, one sentence, one button and a look into the product next to it.",
      changes: [
        {
          title: "One statement instead of three buzzwords",
          text: "“Lightning fast, secure, intuitive” could sit above any product. A sentence that says what the tool does sits only above this one.",
        },
        {
          title: "One button instead of two",
          text: "“Get started” next to “Learn more” says: you decide. One button says: this way.",
        },
        {
          title: "A face of its own",
          text: "The template belongs to everyone. Type, color and image now belong to this product.",
        },
      ],
    },

    screen: {
      name: "Klaro",
      nav: ["Features", "Pricing", "Log in"],
      aiTitle: "Welcome to Klaro",
      aiLead: "The modern all-in-one solution for efficient time tracking in your team.",
      aiPrimary: "Get started",
      aiSecondary: "Learn more",
      aiCards: [
        { title: "Lightning fast", text: "Track your time in seconds, not minutes." },
        { title: "Secure", text: "Your data is in safe hands with us." },
        { title: "Intuitive", text: "An interface that needs no explanation." },
      ],
      title: "Track hours without thinking about it.",
      lead: "Klaro books your time to the project you're working in, automatically. For teams that bill their hours.",
      primary: "Try 14 days for free",
      note: "No credit card",
      weekLabel: "This week",
      weekTotal: "31.5 h",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      hours: [7.5, 8, 6, 8, 2],
      todayProject: "Running: Website relaunch",
    },

    states: {
      title: "Not just the pretty state.",
      lead: "Mockups almost always show the ideal case: three short entries, everything loaded, nothing gone wrong. In production a list is empty, still loading, fails or gets text nobody planned for. I design every state, so your team doesn't have to make anything up.",
      legend: "State",
      commonLabel: "Only the ideal case designed",
      designedLabel: "Every state designed",
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
      errorText: "Your hours are saved. Try again in a moment.",
      errorAction: "Reload",
      loading: "Loading…",
      items: [
        {
          key: "normal",
          label: "Normal",
          why: "This is how a design gets shown and signed off: three entries, short names, everything there. In this state, both look fine.",
        },
        {
          key: "loading",
          label: "Loading",
          why: "On the left, one word on an empty surface. On the right, placeholders show that something is coming and how much. The page feels faster, even though it isn't.",
        },
        {
          key: "empty",
          label: "Empty",
          why: "On the left, an empty box that looks like an error. On the right, it says why there's nothing here, with the first step right next to it.",
        },
        {
          key: "error",
          label: "Error",
          why: "On the left, a message from the code that helps nobody. On the right, it says what happened, that nothing is lost, and what you can do.",
        },
        {
          key: "long",
          label: "Long text",
          why: "On the left, a long name pushes the hours out of view. On the right, it wraps and gets cut after two lines. Real names are longer than the ones in the mockup.",
        },
      ],
    },

    services: {
      title: "How I can help",
      lead: "The whole design, or exactly the piece that's missing.",
      items: [
        {
          title: "Design",
          text: "New products and features, from the first flows to a clickable prototype in Figma. With every state, not just the pretty one.",
        },
        {
          title: "Sharpen",
          text: "Your product works, maybe from an AI template. It gets a clear order and a face of its own, without starting over.",
        },
        {
          title: "Design system",
          text: "Colors, type, spacing and building blocks as fixed rules. So Figma and code speak the same language and your team stops reinventing every button.",
        },
      ],
    },

    process: {
      title: "How it can go",
      lead: "An example. Every project is different, so we adapt the steps to you.",
      steps: [
        {
          title: "Get to know",
          text: "You show me your product or your idea and tell me who uses it.",
          outcome: "Afterwards you know whether I can help.",
        },
        {
          title: "Understand",
          text: "I go through what users want to do and where they get stuck today.",
          outcome: "We know which screens matter.",
        },
        {
          title: "Design",
          text: "I design in Figma, with every state, and show you early drafts along the way.",
          outcome: "You get a clickable prototype.",
        },
        {
          title: "Hand over",
          text: "Design, states and tokens go to your team, with an explanation. If you want, I build along.",
          outcome: "Your team can get going.",
        },
      ],
    },

    oneHand: {
      title: "Design that can be built",
      body: "I build frontends myself. So I know **how far a design can go**: far enough to make developers sweat, but **never so far that it won't hold up in code**. And if someone's missing for the build, I'm there.",
      portraitAlt: "Ercan Cicek",
    },

    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Our product was built with AI. Is design still worth it?",
          answer:
            "Yes, and the template is a good start for it. The tool takes the basic structure off your hands. What it doesn't take off your hands are the decisions: what matters first, what can go and what your product looks like. We build on what's already there.",
        },
        {
          question: "Do you work with our design system?",
          answer:
            "Yes. I work with what's there and extend it where something's missing. If there isn't one yet, we set up the basics together.",
        },
        {
          question: "What does a project cost?",
          answer:
            "It depends on scope: how many screens and flows there are and whether a design system is part of it. After a free first call with no strings attached, you get a concrete quote.",
        },
        {
          question: "Is accessibility included?",
          answer:
            "Yes, from the start. I plan contrast, font sizes, focus and states right away, so nothing has to be retrofitted later.",
        },
      ],
    },

    contact: {
      title: "Let's talk about your product.",
      body: "Send me a link or a few screenshots. On a first call we'll look at it together, free and with no strings attached.",
    },
  },

  accessibility: {
    meta: {
      title: "Accessibility audits and fixes for the EAA | Ercan Cicek",
      description:
        "I test websites and web applications for accessibility to WCAG 2.2 and the European Accessibility Act, fix the issues in design and code, and train your team. The first call is free and comes with no strings attached.",
    },

    hero: {
      title: "I make your application accessible.",
      announcement: "I make your application accessible. Heading level 1",
      announcementLabel: "What a screen reader says about this heading",
      lead: "I check your website or app for accessibility under the European Accessibility Act: can people with disabilities use it without barriers? If you like, I fix the issues myself, in design and code, and train your team so no new ones creep in.",
    },

    demo: {
      title: "Looks the same. Sounds different.",
      lead: "People who can't see well or at all have websites read out to them by a screen reader, on a Mac for example by VoiceOver. If an element is built carelessly, it reads out the wrong thing or nothing at all, or can't even reach important buttons. Then people may get stuck.",
      instruction:
        "Use “Back” and “Next” to step through the form. For each element you see what VoiceOver says with a common mistake, and what it says when built right.",
      // --- Desktop only, where the curtain switch is shown
      instructionCurtain: "The Screen Curtain lets you try it without the picture.",
      commonLabel: "Common mistake",
      correctLabel: "Built right",
      previous: "Back",
      next: "Next",
      whyButton: "Why is this a problem?",
      close: "Close",
      // --- Phones: the pill that leads from the picture down to the announcements
      jump: "To the announcement",
      blind: "Screen Curtain",
      curtainText: "Now all you have is what VoiceOver says.",
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
            "Built right, the image gets an empty description in the code (alt=\"\"). Then the screen reader skips it. Whether an image is just decoration is up to whoever creates the page. Images with real content need a short description.",
          ],
          common: "image, icon-shield-blue-2.svg",
          correct: "",
          isCorrectSilent: true,
        },
        {
          name: "A heading that isn't one",
          details: [
            "“Your details” is set large and looks like a heading. In the code, though, it's just plain text.",
            "Most screen reader users look for content through headings and jump from one to the next. That's what WebAIM's large survey of screen reader users shows. If the heading is missing in the code, they skip this section.",
            "Built right, it's a heading in the code too. How it looks is still up to the design.",
          ],
          common: "Your details",
          correct: "Your details, heading level 2",
        },
        {
          name: "A field without a label",
          details: [
            "Above the field it says “Full name”. To the eye, the two belong together, but not in the code.",
            "So VoiceOver only says “edit text”, with no name. Anyone who can't see has to guess what goes in. People who control the page by voice also pick fields by their label: “click Full name” only works if the field has that name in the code.",
            "Built right, the label is connected to the field in the code. Then VoiceOver reads it out too. And the label becomes a bigger click area: clicking it puts the cursor in the field.",
          ],
          common: "edit text, Martin Beck",
          correct: "Full name, required, edit text, Martin Beck",
        },
        {
          name: "An error shown only in red",
          details: [
            "The field has a red border, and below it, in red, it says what's missing. Anyone looking sees right away that something's wrong.",
            "VoiceOver says nothing about it. Anyone who can't perceive the color doesn't notice that something's wrong. That's not only blind people, but also people with color blindness, people with low vision and many older people.",
            "Built right, the field is marked as invalid in the code and the hint is connected to it. Then VoiceOver reads out both. An icon or a word belongs with it, so the error doesn't depend on color alone.",
          ],
          common: "Email address, edit text, beck.company.com",
          correct:
            "Email address, invalid data, edit text, beck.company.com. The @ is missing. For example: name@company.com",
        },
        {
          name: "A button without a name",
          details: [
            "The button only shows a symbol, no word. Sighted people guess from the context that this is how you continue.",
            "A screen reader can't interpret the symbol, it's just a graphic. And in the code, the button has no name. So VoiceOver only says “button”. Whether the click moves on, deletes something or sends the form, you don't find out.",
            "Built right, the button gets a name, for example “Continue to summary”. The name doesn't have to be visible, the design stays the same.",
          ],
          common: "button",
          correct: "Continue to summary, button",
        },
      ] as DemoCase[],
    },

    law: {
      title: "The European Accessibility Act in short",
      body: [
        "Since June 28, 2025, many digital services for consumers in the EU have to be accessible. In Germany that's the BFSG. What it means in practice is set by the European standard EN 301 549. Its new version builds on WCAG 2.2, the international guidelines for accessible websites and apps. That's what I test against.",
        "Public authorities check whether companies comply, after complaints and on their own initiative. They can set a deadline for fixes, impose a fine and, as a last resort, stop the service.",
      ],
      affectedTitle: "Usually affected",
      affected:
        "Online shops, online banking, booking and ticketing, contract sign-ups and apps for consumers",
      notAffectedTitle: "Usually not",
      notAffected:
        "Services only for business customers, and very small companies providing services: fewer than 10 employees and no more than €2 million in annual turnover",
    },

    services: {
      title: "How I can help",
      lead: "It usually starts with an audit. After that, I take on as much as you need.",
      items: [
        {
          title: "Audit",
          text: "I test your application against WCAG\u00A02.2, with testing tools and by hand with a screen reader and keyboard. For every issue you get a suggested fix your team can start on right away.",
        },
        {
          title: "Fix",
          text: "I fix the issues myself, in Figma and right in your code, with your tools. Ideally in the building blocks your pages are made of, so an issue is gone everywhere at once.",
        },
        {
          title: "Enable",
          text: "I show your team what matters, using your own pages. With training and support in day-to-day work, they build accessibility in from the start.",
        },
      ],
    },

    process: {
      title: "How it can go",
      lead: "An example. Every project is different, so we shape the process around you.",
      steps: [
        {
          title: "Getting to know each other",
          text: "You tell me what you offer and what it's built with.",
          outcome: "Afterwards you know whether I can help.",
        },
        {
          title: "Setting the scope",
          text: "We pick the pages and flows that matter, such as search and checkout.",
          outcome: "You get a quote with a fixed scope.",
        },
        {
          title: "Testing",
          text: "I go through the chosen flows step by step, the way your customers use them.",
          outcome: "You get a report with every issue and how to fix it.",
        },
        {
          title: "Talking it through",
          text: "We go through the issues together: what's urgent, what's quick and what can wait.",
          outcome: "Afterwards you know what comes first, and you decide who does it: your team or me.",
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
          answer:
            "Most likely, if consumers buy, book or sign up for something from you online. If you're unsure, we'll look at it together on a first call. This isn't legal advice.",
        },
        {
          question: "What does an audit cost?",
          answer:
            "It depends on scope: how many different page types and flows get tested, not how many pages there are. After a free first call, you get a concrete quote.",
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
      title: "Let's see where you stand.",
      body: "Tell me which application it's about. On a first call we'll take a quick look together, and afterwards you'll know where you stand and what to do next. Free, with no strings attached.",
    },
  },
}
