import type { Translations } from "./index"
import type { DemoCase } from "./types"

// --- Screen reader transcripts follow English VoiceOver, which says "button" and
// "edit text" where the German voice says "Taste" and "Textfeld".

export const en: Translations = {
  common: {
    close: "Close",
    opensInNewTab: "(opens in a new tab)",
    // --- The copy button on the email tile (ui/ContactCard.astro)
    copyEmail: "Copy email address",
    copied: "Email address copied",
    copyFailed: "Couldn't copy",
    // --- The default preview image when a page is shared (public/og-default-en.png)
    shareImageAlt:
      "Portrait of Ercan Cicek. Next to it his name and: Design, code and accessibility. All from one person.",
    contactCta: "Start a project",
    // --- Under a card whose title is the link: shown, and handed to the link as its description
    more: "Read more",
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
    casualvocabPrivacy: "CasualVocab privacy",
    startWithWaiAriaPrivacy: "Start with WAI-ARIA privacy",
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
        title: "Privacy policy | Ercan Cicek",
        description:
          "What data a visit to this site creates, who receives it and what your rights are. No cookies, no tracking.",
      },
      title: "Privacy policy",
      lead: "This page explains what data a visit to this site creates, who receives it and what your rights are. In short: no cookies, no tracking, no ads. Data only comes up so the page can reach you, and when you write to me: through the form, by email or in a chat with Pixel-Ercan.",
      sections: [
        {
          heading: "Controller",
          body: [
            "The controller responsible for data processing on this site is:",
            { address: ["{legalName}", "{street}", "{postalCode} {city}", "Germany"] },
            "You can reach me at {email} or {phone}.",
          ],
        },
        {
          heading: "Hosting by Netlify",
          body: [
            "This site is hosted by:",
            { address: ["Netlify, Inc.", "101 2nd Street", "San Francisco, CA 94105, USA"] },
            "When you open a page, Netlify processes what is technically needed to deliver it:",
            {
              list: [
                "your IP address",
                "the date and time of the request",
                "the address you requested",
                "details about your browser and operating system",
              ],
            },
            "The legal basis is Art. 6(1)(f) GDPR. My legitimate interest is delivering the site securely and reliably.",
            "Netlify processes this data on my behalf (Art. 28 GDPR). The data processing agreement is part of Netlify's terms. The data may be processed in the USA. This is safeguarded by the European Commission's Standard Contractual Clauses (Art. 46(2)(c) GDPR), which are part of that agreement. Netlify keeps the logs only as long as operation and security require. More in [Netlify's privacy policy](https://www.netlify.com/privacy/).",
          ],
        },
        {
          heading: "Cookies and browser storage",
          body: [
            "This site sets no cookies and uses no analytics or tracking services. Fonts and images come from this site itself; nothing is loaded from other providers.",
            "One exception: when you close Pixel-Ercan's speech bubble with Escape, your browser remembers that in session storage (sessionStorage), so the bubble doesn't come back on the next page. The entry only says that it is hidden, never leaves your browser and is gone as soon as you close the tab. Because it is strictly necessary for a function you asked for, it needs no consent (Section 25(2) No. 2 of the German TDDDG).",
          ],
        },
        {
          heading: "Project requests through the form",
          body: [
            "When you send me a request through the form, I process what you enter:",
            {
              list: [
                "what it's about and your description",
                "your email address",
                "if you provide them: your name, your phone number and whether I should call you",
              ],
            },
            "I need the description and the email address to reply to you. Without them the form can't be sent.",
            "I use this information to answer your request and discuss a possible project with you. The legal basis is Art. 6(1)(b) GDPR, because these are steps before a possible contract that you start yourself.",
            "The form runs on Netlify Forms. Netlify stores the request for me and checks it with the Akismet spam filter by Automattic, Inc. (USA). Processing on my behalf and the transfer to the USA work the same way as for hosting.",
            "I delete the request at Netlify once I've handled it. If it leads to a project, I keep the records as long as legal retention duties require, for example under Section 147 of the German Fiscal Code (AO).",
          ],
        },
        {
          heading: "Email and phone",
          body: [
            "When you write to me or call me, I process your details to reply. If it's about a project, the legal basis is Art. 6(1)(b) GDPR; otherwise it is Art. 6(1)(f) GDPR, my legitimate interest in answering questions. Deletion and retention work the same way as for the form.",
            "My mailbox is hosted by:",
            {
              address: [
                "STRATO GmbH",
                "[Otto-Ostrowski-Straße 7]{lang=de}",
                "10249 Berlin, Germany",
              ],
            },
            "STRATO processes the emails on my behalf (Art. 28 GDPR) within the EU and deletes the mail server logs after six months at the latest.",
          ],
        },
        {
          heading: "Pixel-Ercan, the AI assistant",
          body: [
            "On the pages [Start a project](/en/start-a-project) and [About me](/en/about-me) you can chat with Pixel-Ercan. He is an AI. So he can reply, the site sends your messages and the chat so far to the AI service Anthropic. On the project form, what is already in the form goes along too, so he can add to it. The chat only starts when you send a message yourself.",
            "The provider is:",
            {
              address: [
                "Anthropic Ireland, Limited",
                "6th Floor, South Bank House",
                "Barrow Street",
                "Dublin 4, D04 TR29, Ireland",
              ],
            },
            "Anthropic processes the data on my behalf (Art. 28 GDPR); the data processing agreement is part of Anthropic's terms. The data is also processed in the USA. This is safeguarded by the European Commission's Standard Contractual Clauses, which are part of that agreement.",
            "Anthropic does not use the content to train its models and deletes it within 30 days at the latest. It is kept longer, up to two years, only if Anthropic's automated safety systems flag a message as violating its usage policy, or if the law requires it. Details are in [Anthropic's Privacy Center](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-personal-data).",
            "I don't store the chats myself. The conversation only lives in your open tab and is gone when you leave the page. So nobody can flood the chats with automated requests, Netlify counts requests per IP address and lets through at most twelve per minute.",
            "On the project form the legal basis is Art. 6(1)(b) GDPR, because Pixel-Ercan helps you make your request. On the About me page it is Art. 6(1)(f) GDPR: my legitimate interest in answering your questions about me and my work.",
            "Pixel-Ercan makes no decisions about you. You can change whatever he fills into the form.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "You have the right to:",
            {
              list: [
                "access to your data (Art. 15 GDPR)",
                "rectification (Art. 16 GDPR)",
                "erasure (Art. 17 GDPR)",
                "restriction of processing (Art. 18 GDPR)",
                "data portability, meaning your data in a common format (Art. 20 GDPR)",
              ],
            },
            "Just write to me at {email}.",
          ],
        },
        {
          heading: "Right to object",
          body: [
            "Where I process data based on Art. 6(1)(f) GDPR, you can object at any time on grounds relating to your particular situation (Art. 21 GDPR). I will then stop processing that data, unless there are compelling legitimate grounds that override your interests, or the processing serves to establish, exercise or defend legal claims.",
          ],
        },
        {
          heading: "Complaints to a supervisory authority",
          body: [
            "You can lodge a complaint with a data protection supervisory authority (Art. 77 GDPR). The authority responsible for me is:",
            {
              address: [
                "[Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen]{lang=de}",
                "[Postfach 20 04 44]{lang=de}",
                "40102 Düsseldorf, Germany",
                "[ldi.nrw.de](https://www.ldi.nrw.de)",
              ],
            },
          ],
        },
        {
          heading: "Links to other sites",
          body: [
            "Links to other sites, such as LinkedIn, are plain links. Only when you open one do you leave this site, and the other provider's privacy policy applies.",
          ],
        },
      ],
      statusHeading: "Last updated",
      statusDate: "November 3, 2026",
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
          heading: "How this statement was prepared",
          body: [
            "I prepared this statement on August 18, 2026, and last reviewed it on November 3, 2026. It is based on a self-assessment against WCAG 2.2.",
          ],
        },
        {
          heading: "How accessible is this site?",
          body: [
            "The site is built to WCAG 2.2 level AA and largely meets its requirements. The known exceptions are listed in the next section.",
            "As a micro-enterprise I am not required to publish this statement. It is voluntary.",
          ],
        },
        {
          heading: "Parts that are not fully accessible yet",
          body: [
            {
              list: [
                "On desktop, Pixel-Ercan's speech bubble follows the mouse pointer, so you can't reach it with the mouse (WCAG 1.4.13). Press Escape to hide it for the rest of your visit. It only shows short quips, so you don't miss anything.",
                "Mel-Menu, my playful portfolio from 2016, is not accessible. It only works with a mouse or a finger. It leads to pages you can also reach through the navigation.",
              ],
            },
          ],
        },
        {
          heading: "Deliberate decisions",
          body: [
            "The green buttons stand out from the white and grey background with less than 3:1 contrast. WCAG does not require it here. The W3C says: _If a control has visible content (such as text …), a border … is not required_ ([Understanding 1.4.11, Boundaries](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html#boundaries)).",
          ],
        },
        {
          heading: "Content from other providers",
          body: [
            "Links to other sites, such as LinkedIn, GitHub or CodePen, lead to services whose accessibility I can't influence.",
          ],
        },
        {
          heading: "Report a barrier",
          body: [
            "If something blocks you, write to me at {email}. I will answer and tell you when it is fixed.",
          ],
        },
      ],
      statusHeading: "Status of this statement",
      statusDate: "November 3, 2026",
    },

    // --- The apps' privacy policies, taken over from the previous site
    casualvocabPrivacy: {
      meta: {
        title: "CasualVocab privacy policy | Ercan Cicek",
        description:
          "What data the CasualVocab Widget - Japanese app processes and who receives it.",
      },
      title: "CasualVocab privacy policy",
      lead: "I built the CasualVocab Widget - Japanese app as a free service. This page explains what data comes up when you use it, what it is used for and who receives it.",
      sections: [
        {
          heading: "Controller",
          body: [
            "The controller responsible for the app is:",
            { address: ["{legalName}", "{street}", "{postalCode} {city}", "Germany"] },
            "You can reach me at {email}.",
          ],
        },
        {
          heading: "Information collection and use",
          body: [
            "The app itself does not collect personal data. The services it uses, Firebase and AdMob, may process personal data to provide their services. I only use or share your data as described here.",
          ],
        },
        {
          heading: "Third-party services",
          body: [
            "The app uses these Google services:",
            {
              list: [
                "Firebase collects device information and app usage data to improve performance and functionality. More in [Firebase's privacy policy](https://firebase.google.com/support/privacy).",
                "AdMob shows ads, including personalized ones, and uses cookies and similar identifiers for that. More in [AdMob's privacy policy](https://support.google.com/admob/answer/6128543?hl=en).",
              ],
            },
          ],
        },
        {
          heading: "Log data",
          body: [
            "In case of an error, Firebase may collect log data: your device's IP address, device name, operating system version, app configuration, usage statistics, and the date and time of use.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "The app itself sets no cookies. Firebase and AdMob may use cookies for analytics, advertising and improving their services. You can limit this in your device settings. Some features of the app may then not work properly.",
          ],
        },
        {
          heading: "Security",
          body: [
            "I protect your data with common technical means. No transmission or storage on the internet is completely secure, though.",
          ],
        },
        {
          heading: "Links to other sites",
          body: [
            "The app may link to websites I don't operate. I'm not responsible for their content or privacy practices. Please read their privacy policies.",
          ],
        },
        {
          heading: "Children",
          body: [
            "The app is not meant for children under 13, and I don't collect data from children. If I learn that a child under 13 has provided personal data, I delete it right away.",
          ],
        },
        {
          heading: "Changes",
          body: [
            "I may update this privacy policy. Changes are posted on this page, together with the date of the last update.",
          ],
        },
        {
          heading: "Contact",
          body: ["If you have questions about this privacy policy, write to me at {email}."],
        },
      ],
      statusHeading: "Last updated",
      statusDate: "November 3, 2026, in effect since June 22, 2022",
    },

    startWithWaiAriaPrivacy: {
      meta: {
        title: "Start with WAI-ARIA privacy policy | Ercan Cicek",
        description: "The Start with WAI-ARIA browser extension collects no personal data.",
      },
      title: "Start with WAI-ARIA privacy policy",
      lead: "The Start with WAI-ARIA browser extension collects no personal data. Everything runs locally in your browser.",
      sections: [
        {
          heading: "Controller",
          body: [
            "The controller responsible for the extension is:",
            { address: ["{legalName}", "{street}", "{postalCode} {city}", "Germany"] },
            "You can reach me at {email}.",
          ],
        },
        {
          heading: "What is stored locally",
          body: [
            "The extension uses the “storage” permission only to save your settings in your browser, such as the color theme or hidden patterns.",
            "No data is sent to servers or other providers.",
          ],
        },
        {
          heading: "Contact",
          body: ["If you have questions about this privacy policy, write to me at {email}."],
        },
      ],
      statusHeading: "Last updated",
      statusDate: "November 3, 2026",
    },
  },

  chatBubble: {
    starter: "How are you doing?",
    // --- His last line after Escape, before he leaves for the rest of the visit
    dismissed: "Got it, I'm off.",
    firstName: "My name is pronounced Erjan (like in jungle).",
    mainLinks: "Where to next?",
    languageSwitch: "No worries, I speak both languages.",
    accessibility: "Good choice!",
    design: "Close to my heart.",
    development: "// TODO: Add a catchy line",
    contact: "Looking forward to your message!",
  },

  // --- Pixel-Ercan's chat, the same on the request page and the about page.
  // The page brings its own title, intro and the errors that end in a way out.
  assistantChat: {
    logLabel: "Conversation with Pixel-Ercan",
    speakerYou: "You",
    speakerAssistant: "Pixel-Ercan",
    inputLabel: "Your message to Pixel-Ercan",
    send: "Send",
    working: "Pixel-Ercan is typing …",
    privacyLink: "More in the privacy policy",
    showEarlierOne: "Show 1 earlier message",
    showEarlierMany: "Show {count} earlier messages",
    hideEarlier: "Hide earlier messages",
    toNewest: "Jump to the latest message",
    reset: "Start the chat over",
    errors: {
      stillWorking: "Pixel-Ercan is still typing. Send your message once his reply is in.",
      empty: "Write Pixel-Ercan a few words first, then he gets going.",
      offline:
        "You're offline right now. Once you're back online, send your message again. It's still in the field.",
      timeout:
        "Pixel-Ercan is taking unusually long. Send your message again in a moment, it's still in the field.",
      tooFast: "Pixel-Ercan can barely keep up. Wait a moment, then send your message again.",
      garbled: "Pixel-Ercan just got tangled up. Send your message again, it's still in the field.",
    },
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
      lead: "My code on GitHub, Mel-Menu as my first portfolio from 2016, and a few playgrounds.",
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
      metaTitle: "{label} | Portfolio | Ercan Cicek",
    },
    contact: {
      title: "Get in touch.",
      body: "Tell me briefly what it's about, with no strings attached, and we'll find the right solution together.",
    },
  },

  inquiry: {
    meta: {
      title: "Start a project | Ercan Cicek",
      description:
        "Tell me what it's about: accessibility, design or development. Fill in the form yourself or let Pixel-Ercan help. I usually reply within two working days.",
    },
    title: "Start a project",
    lead: "Tell me what I can help you with. A rough idea is enough. Fill in the form yourself, or let Pixel-Ercan (my AI assistant) help you.",
    assistant: {
      title: "Fill it in with Pixel-Ercan",
      intro:
        "Hi, I'm Pixel-Ercan. Tell me in your own words what you have in mind. I'll ask what Ercan needs for a good first assessment and fill in the form for you.",
      disclosure:
        "Pixel-Ercan is an AI. To fill in the form, your text is sent to the AI service Anthropic.",
      placeholder:
        "Hi Ercan, we run an online shop for bike parts and need to be accessible by June. Can you check where we stand? I'm Peter, you can reach me at peter@example.com",
      replyPlaceholder: "Your reply …",
      callbackYes: "Yes, please",
      callbackNo: "No, email is fine",
      callbackYesMessage: "Yes, please call me.",
      callbackNoMessage: "No, email is fine.",
      filled: "Filled in: {fields}",
      toForm: "Show",
      errors: {
        busy: "Pixel-Ercan is very busy right now. Try again in a minute or fill in the form yourself.",
        budget:
          "So many people have chatted with Pixel-Ercan that he's calling it a day for this month. Thanks for your interest! Please fill in the form yourself, it's just as quick.",
        tooLong: "The chat is getting long. Please add the rest directly in the form.",
        error:
          "That's an error not even Pixel-Ercan saw coming. Try again or fill in the form yourself.",
      },
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
        email: "I always need your email address, even if you've added a phone number.",
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

  about: {
    meta: {
      title: "About Ercan Cicek | Product Engineer in Düsseldorf",
      description:
        "Ercan Cicek is a freelance product engineer in Düsseldorf. He designs digital products, builds their frontend and makes them accessible. Studied at FH Aachen, working in design and development ever since.",
    },
    title: "I'm Ercan, a product engineer from Düsseldorf.",
    lead: "I design digital products, build their frontend and make sure everyone can use them.",
    portraitAlt: "Portrait of Ercan Cicek",
    story: [
      "As a product engineer, I design digital products and build their frontend myself. Depending on the project, I do both or just one of them.",
      "I've worked in design and development since 2016 and led teams in both. Because I know both sides from my own work, I can help in many places: with application tests for [AON](/en/portfolio/aon), with DIANA, the software [Deutsche Bahn](/en/portfolio/deutsche-bahn) uses to spot faults in track switches early, with [Welliba](/en/portfolio/welliba)'s product platform or with [Curanto](/en/portfolio/curanto)'s web shop, where I led design and frontend.",
      "My second focus is [accessibility](/en/accessibility): building digital products everyone can use. I audit against WCAG and the BFSG, fix the issues myself in design and code, and train teams so they build accessibility in from the start.",
      "Today I work with AI, in design, in code and in accessibility. The AI does the legwork, I make the decisions: what the product needs, who uses it and what happens when something goes wrong. That gets you a solution shaped by your users, at the pace of AI.",
    ],
    facts: {
      title: "At a glance",
      availability: "Available from {date}",
      availableNow: "Available on request",
      availabilityNote: "This can change at short notice, just ask.",
      workplace: { term: "Works", value: "From Düsseldorf, remote, hybrid or on site" },
      languages: {
        term: "Speaks",
        items: [
          { name: "German and Turkish", level: "native" },
          { name: "English", level: "full professional proficiency" },
          { name: "Japanese", level: "limited working proficiency" },
        ],
      },
      industries: {
        term: "Experience in",
        items: ["Manufacturing", "HR tech", "Banking", "Public sector", "E-commerce"],
      },
      background: {
        term: "Background",
        items: [
          "Communication and Multimedia Design (B.Sc.), FH Aachen, until 2015",
          "Freelancing since 2018",
        ],
      },
    },
    assistant: {
      title: "Ask Pixel-Ercan.",
      lead: "Pixel-Ercan knows my projects, how I work and relevant personal details. Ask him whatever you want to know.",
      intro: "Hi, I'm Pixel-Ercan. Ask me anything you want to know about Ercan.",
      disclosure:
        "Pixel-Ercan is an AI and can get things wrong. To answer, your question is sent to the AI service Anthropic.",
      placeholder: "For example: Has Ercan worked with startups?",
      replyPlaceholder: "Your next question …",
      suggestionsLabel: "Questions to tap",
      noScript: "Pixel-Ercan needs JavaScript. Feel free to email me directly at {email}.",
      suggestions: [
        "When is Ercan available?",
        "Does Ercan work remotely?",
        "Does Ercan also do just design or just code?",
      ],
      errors: {
        busy: "Pixel-Ercan is very busy right now. Try again in a minute or email me directly at {email}.",
        budget:
          "So many people have chatted with Pixel-Ercan that he's calling it a day for this month. Thanks for your interest! Email me directly at {email}, I'll answer you personally.",
        tooLong: "The chat is getting long. Start it over or email me directly at {email}.",
        error:
          "That's an error not even Pixel-Ercan saw coming. Try again or email me directly at {email}.",
      },
    },
    contact: {
      title: "Get to know me in person.",
      body: "A short call says more than any page. Free, with no strings attached.",
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

    states: {
      title: "Every state belongs in the design.",
      lead: "Designs usually focus on the ideal case. But what about different text lengths, long loading times, empty or overlong lists and errors? I design each of these states too, so your team doesn't have to make anything up.",
      legend: "State",
      commonLabel: "Ideal case only",
      designedLabel: "Every state",
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
          why: {
            common: "An empty surface with just “Loading…” and no way out.",
            designed: "A spinner, “Loading projects …” and, if it takes too long, “Reload”.",
          },
        },
        {
          key: "empty",
          label: "Empty list",
          why: {
            common: "Under the title, an empty box that looks like an error.",
            designed: "“No projects yet”, a sentence on why, and “Create project” right below.",
          },
        },
        {
          key: "error",
          label: "Error",
          why: {
            common: "Only the message from the code: “Error: Request failed with status 500”.",
            designed: "“The projects couldn't be loaded”, what you can do, and “Try again”.",
          },
        },
        {
          key: "long",
          label: "Long name",
          why: {
            common: "The long name runs over the edge and pushes the hours out of view.",
            designed:
              "The name wraps and gets cut after two lines, the hours stay visible. Real names are longer than the ones in the mockup.",
          },
        },
        {
          key: "normal",
          label: "Ideal case",
          why: {
            common: "Three projects with their hours, everything fits.",
            designed: "Looks the same. The other states make the difference.",
          },
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
      title: "Creative to the edge of what's buildable",
      body: "I've been building frontends myself for more than ten years. So I know **how far a design can go**: far enough to make developers sweat, but **never so far that it won't hold up in code**. And if someone's missing for the build, I'm there.",
      portraitAlt: "Ercan Cicek",
    },

    faq: {
      title: "Frequently asked questions",
      items: [
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
      commonLabel: "Common mistake",
      correctLabel: "Built right",
      previous: "Back",
      next: "Next",
      whyButton: "Why is this a problem?",
      // --- Phones: the pill that leads from the picture down to the announcements
      jump: "To the announcement",
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
          title: "Grow a prototype",
          text: "You have a prototype, often built with AI, and it should become a real product. I pick up where you are and bring order to it. No restart.",
        },
        {
          title: "Build from scratch",
          text: "A new web app or website, from the design to launch. You get code your team can read and change later on its own.",
        },
        {
          title: "Work in your team",
          text: "Your team is short a frontend developer for a while. I work in your code and your routines, agree interfaces with the backend and hand over so it carries on without me.",
        },
      ],
    },

    // --- Why vibe coding alone is not enough: five moments around one small
    // feature, told on a phone (VibeStage). The prompts are real sentences,
    // quoted in the steps they belong to; the screen fills, ships clean, breaks
    // in the users' bug reports, gets patched, and holds once someone wrote
    // what cannot be seen.
    vibeCoding: {
      title: "Why vibe coding alone isn't enough.",
      lead: "With vibe coding, the AI builds exactly what you describe, and it builds it fast. Whatever wasn't in the prompt doesn't exist. That only shows once the app meets everyday use.",
      promptLabel: { one: "Example prompt", other: "Example prompts" },
      addedLabel: "Added:",
      // --- The phone: the feature in every state. The second invoice is the
      // one the bug reports are about: a long name, a foreign currency.
      app: {
        title: "Invoices",
        approve: "Approve",
        dueLabel: "Due",
        invoices: [
          {
            supplier: "Krüger GmbH",
            amount: "€12,480",
            due: "Nov 14",
            dueLong: "November 14, 2026",
          },
          {
            supplier: "Optima",
            supplierLong: "Optima Logistics International Ltd.",
            amount: "€3,920",
            amountForeign: "3.920 $",
            amountFixed: "$3,920",
            due: "Nov 18",
            dueLong: "November 18, 2026",
          },
          { supplier: "Nordlicht", amount: "€760", due: "Nov 21", dueLong: "November 21, 2026" },
        ],
        // --- Everyday use: the rows behind the count, from the bug reports on
        moreInvoices: [
          {
            supplier: "Hansa Druck",
            amount: "€1,240",
            due: "Nov 24",
            dueLong: "November 24, 2026",
          },
          { supplier: "Weber AG", amount: "€8,315", due: "Nov 26", dueLong: "November 26, 2026" },
          { supplier: "Brandt IT", amount: "€2,099", due: "Nov 28", dueLong: "November 28, 2026" },
          { supplier: "Lindner Bau", amount: "€15,600", due: "Dec 2", dueLong: "December 2, 2026" },
        ],
        count: "4,812 invoices",
        failed: "Approval failed. Try again.",
        search: "Search",
        range: "1–20 of 4,812",
      },
      steps: [
        {
          title: "The quick prompt",
          text: "A few sentences to the AI, written from the result. A few minutes later it's there, and you see the path where everything works.",
          prompt: { lines: ["Build a page where my team can approve invoices."] },
        },
        {
          title: "Looks good, ship it.",
          text: "Changes are just as quick. The AI always builds what you give it. Sometimes it suggests something useful on top, mostly it doesn't: there are too many things one could consider. Then the result goes out. With the test data everything runs, and at first glance it does for the first users too.",
          prompt: { lines: ["Show the amount and due date too.", "Sort by due date."] },
        },
        {
          title: "The first bug reports",
          text: "Users are different and rarely stay on the planned path: a long company name runs into the button, an amount shows in the wrong currency, with thousands of entries the list takes forever. Bad connections, other languages, longer texts: none of it was in the prompt.",
        },
        {
          title: "More prompts for bug fixing",
          text: "The reported bugs can be fixed, the unreported ones can't. By then, customers may have left. And every fix is a detour: code becomes more code, harder to read, and soon it no longer holds.",
          prompt: {
            lines: [
              "The long name runs into the button, fix that.",
              "Show dollar amounts properly.",
              "The list takes forever to load, make it faster.",
            ],
          },
        },
        {
          title: "Prompted with experience",
          text: "Someone who has developed for years knows what matters: which foundations hold, where it will get stuck. A hundred percent safe doesn't exist. But the good 80 percent have to be in, and that takes someone who thinks ahead. And this is a very simple example. With security, access rights or payments, a lot more is missing from the prompt.",
          prompt: {
            lines: ["Build a page where my team can approve invoices."],
            addedLines: [
              "Load 20 at a time, with search.",
              "Wrap long names, show every currency properly.",
              "Show when it's loading and when there's nothing.",
              "Never send twice if the connection drops.",
            ],
          },
        },
      ],
    },

    oneHand: {
      title: "Why a developer, when AI writes the code?",
      body: "Because building is no longer the hard part. The hard part is the **decisions before it**: Does this still scale when your idea grows? What happens on a bad connection or when something fails? Does a user see at once what to do? I ask those questions before the AI builds, and **check what it delivers** afterwards.",
      portraitAlt: "Ercan Cicek",
    },

    faq: {
      title: "Common questions",
      items: [
        {
          question: "Which frameworks do you work with?",
          answer:
            "With whatever you run. Which framework, which language, which CMS: that's the smallest question today. I read my way in, and you only switch technologies if it really helps you.",
        },
        {
          question: "Do you write the code yourself, or does the AI?",
          answer:
            "Both. The AI brings the quantity, I bring the quality: I set the architecture and the rules, direct it and write it myself where it matters. I'm not a vibe coder. Nothing goes out that I haven't understood and checked.",
        },
        {
          question: "Can you build on our AI prototype, or do you have to start over?",
          answer:
            "Usually, yes. I look at the code first and tell you honestly what can stay and what should be rebuilt.",
        },
        {
          question: "Do you do the backend too?",
          answer:
            "The fundamentals, yes. With AI you can write anything today, but that doesn't mean you should: a backend belongs in experienced hands, just like a frontend. I coordinate the interfaces closely with your backend team and, if you like, set the endpoints the frontend needs, down to the shape of request and response.",
        },
        {
          question: "What is your hourly rate?",
          answer:
            "It depends on how many hours you book. On a first call, free and with no strings attached, I'll give you a concrete rate.",
        },
      ],
    },

    contact: {
      title: "Let's talk.",
      body: "Whether the project is already running or still just an idea. A short call is enough, free, with no strings attached.",
    },
  },
}
