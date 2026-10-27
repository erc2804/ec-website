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
      lead: "I test websites and web applications for accessibility to WCAG and the European Accessibility Act. If you like, I fix the issues myself, in design and code, and train your team so no new ones creep in.",
    },

    demo: {
      title: "Looks the same. Sounds different.",
      lead: "People who are blind or have low vision use a screen reader. It's a program that reads out what's on the screen, on a Mac for example VoiceOver. So many barriers can't be seen, only heard.",
      instruction:
        "Step through the form element by element and compare what VoiceOver announces. Turn on the Screen Curtain and the picture goes dark.",
      outputLabel: "What VoiceOver says",
      variantLabel: "Build",
      variantCommon: "How it's often built",
      variantCorrect: "How it should be",
      next: "Next element",
      blind: "Screen Curtain",
      curtainText: "Now all that's left is what the screen reader says.",
      ready: "Nothing announced yet",
      readyNote: "Press “Next element” or click a part of the form.",
      silent: "Nothing announced, skipped.",
      position: "{number} of {total}",
      liveTemplate: "{position}, {variant}: {caption}. {note}",
      formTitle: "Your details",
      nameLabel: "Full name",
      nameValue: "Martin Beck",
      emailLabel: "Email address",
      emailValue: "beck.company.com",
      emailError: "The @ is missing. For example: name@company.com",
      cases: [
        {
          name: "A symbol that means nothing",
          fixedName: "A symbol that gets skipped",
          explanation:
            "Pure decoration, but not marked as such in the code. So the screen reader reads out the file name.",
          fix: "Marked as decoration, the symbol is simply skipped.",
          common: "image, icon-shield-blue-2.svg",
          correct: "",
          isCorrectSilent: true,
        },
        {
          name: "A heading that isn't one",
          fixedName: "A real heading",
          explanation:
            "It looks like a heading but isn't one in the code. Anyone jumping from heading to heading with a screen reader won't find it.",
          fix: "Marked up as a heading, it can be found without looking.",
          common: "Your details",
          correct: "Your details, heading level 2",
        },
        {
          name: "A field without a label",
          fixedName: "A field with a label",
          explanation: "The text above isn't connected to the field. The field stays nameless.",
          fix: "Connected to its label, the field says what goes in and that it's required.",
          common: "edit text, Martin Beck",
          correct: "Full name, required, edit text, Martin Beck",
        },
        {
          name: "An error shown only in red",
          fixedName: "An error that gets announced",
          explanation: "Only the color shows the error. Nobody hears it.",
          fix: "Error and hint are tied to the field, so they're announced with it.",
          common: "Email address, edit text, beck.company.com",
          correct:
            "Email address, invalid data, edit text, beck.company.com. The @ is missing. For example: name@company.com",
        },
        {
          name: "A button without a name",
          fixedName: "A button with a name",
          explanation: "An arrow isn't a name. Nobody knows what the click does.",
          fix: "With a name, it's clear where it leads.",
          common: "button",
          correct: "Continue to summary, button",
        },
      ] as DemoCase[],
    },

    law: {
      title: "The European Accessibility Act in short",
      body: [
        "Since June 28, 2025, many digital services for consumers in the EU have to be accessible. In Germany that's the BFSG. What it means in practice is set by the European standard EN 301 549. Its new version builds on WCAG 2.2, the international guidelines for accessible websites and apps. That's what I test against.",
        "Market surveillance authorities check compliance, after complaints and on their own. They can set deadlines for fixes, issue fines and, as a last resort, shut a service down.",
      ],
      affectedTitle: "Usually affected",
      affected:
        "Online shops, online banking, booking and ticketing, contract sign-ups and apps for consumers",
      notAffectedTitle: "Usually not",
      notAffected:
        "Purely B2B offerings and micro-enterprises providing services, meaning fewer than 10 employees and no more than €2 million in turnover",
    },

    services: {
      title: "How I can help",
      lead: "It usually starts with an audit. After that, I take on as much as you need.",
      items: [
        {
          title: "Audit",
          text: "I test your application against WCAG\u00A02.2, with testing tools and by hand with a screen reader and keyboard. Every issue comes with a fix your team can work with right away.",
        },
        {
          title: "Fix",
          text: "I fix the issues myself, in Figma and right in your code, with your components and tools. Fix a component and the issue is gone everywhere.",
        },
        {
          title: "Enable",
          text: "I show your team what matters, using your own components. Through mentoring and training, they build accessibility in from the start.",
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
          outcome: "You get the report.",
        },
        {
          title: "Talking it through",
          text: "We go through the findings together: what's urgent, what's quick and what can wait.",
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
            "Plugins and overlays put a layer on top of the page, but the code underneath stays the same. That's where most barriers come from. People who use a screen reader bring their own tools anyway and need a page that's built right.",
        },
      ],
    },

    contact: {
      title: "Let's see where you stand.",
      body: "Tell me which application it's about. On a first call we'll take a quick look together, and afterwards you'll know where you stand and what to do next. Free, with no strings attached.",
    },
  },
}
