import type { Translations } from "./index"

// --- Screen reader transcripts follow English VoiceOver, which says "button" and
// "edit text" where the German voice says "Taste" and "Textfeld".

export const en: Translations = {
  common: {
    opensInNewTab: "(opens in a new tab)",
    contactCta: "Start a conversation",
    headingLevel: "Heading level {level}",
  },

  routeLabels: {
    accessibility: "Accessibility",
    imprint: "Legal notice",
    privacy: "Privacy",
    accessibilityStatement: "Accessibility statement",
  },

  footer: {
    label: "Legal",
    rights: "All rights reserved.",
    profiles: {
      linkedin: "LinkedIn profile",
      xing: "Xing profile",
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

  nav: {
    label: "Main navigation",
    skipToContent: "Skip to content",
    openMenu: "Menu",
    languageLabel: "Language",
  },

  accessibility: {
    meta: {
      title: "Accessibility for web applications | Ercan Cicek",
      description:
        "I test your web application for accessibility, fix what I find in the code, and show your team how to keep it that way. To WCAG 2.2 and the European Accessibility Act.",
    },

    hero: {
      title: "I make your application accessible.",
      announcement: "I make your application accessible. Heading level 1",
      announcementLabel: "How a screen reader announces this heading",
      lead: "I test your application, fix what I find in the code, and show your team what to look out for. All from one person. You get working code back, not a list of things to do.",
    },

    statement: {
      lead: "A screen reader doesn't read what's on the screen.",
      emphasis: "It reads what's in the code.",
      body: "When those two disagree, nobody on the team notices. There's nothing to see.",
    },

    demo: {
      title: "Five defects you cannot see.",
      lead: "An ordinary form step, the kind every portal has. Five spots in it are marked.",
      formTitle: "Your details",
      requiredLegend: "Fields marked with {mark} are required.",
      nameLabel: "Full name",
      nameValue: "Martin Beck",
      emailLabel: "Email address",
      emailValue: "beck.company.com",
      emailError: "The @ is missing. For example: name@company.com",
      markerLabel: "Defect {number}: {name}",
      columnCommon: "Built the usual way",
      columnCorrect: "Marked up properly",
      placeholderBody:
        "Pick a marked spot in the form. What a screen reader says about it, and what's missing in the code, appears here.",
      silent: "nothing announced, the element is skipped",
      liveTemplate:
        "{name}. Built the usual way: {common}. Marked up properly: {correct}. {explanation}",
      closing:
        "All five live in the code, not the design. You won't spot them on screen, and you won't spot them in a sign-off meeting. They only show up when someone uses the application the way the people who rely on it do.",
      cases: [
        {
          name: "A symbol that means nothing",
          explanation:
            "The shield is decoration. Without an empty alt attribute, the screen reader reads out the file name.",
          common: "image, icon-shield-blue-2.svg",
          correct: "",
          isCorrectSilent: true,
        },
        {
          name: "A heading that isn't one",
          explanation:
            "Big and bold is not a heading. Without an h2 the line never reaches the heading list that blind users rely on to skim a page.",
          common: "Your details",
          correct: "Your details, heading level 2",
        },
        {
          name: "A field with no label",
          explanation:
            "The text above looks like a label but isn't one. Without a label the field stays nameless, and the asterisk marking it as required never comes across either.",
          common: "edit text, Martin Beck",
          correct: "Full name, required, edit text, Martin Beck",
        },
        {
          name: "An error only the eye can see",
          explanation:
            "A red border and red text are purely visual. Without aria-invalid and aria-describedby, nobody learns that the entry is wrong or why.",
          common: "Email address, required, edit text, beck.company.com",
          correct:
            "Email address, required, invalid data, edit text, beck.company.com, The @ is missing. For example: name@company.com",
        },
        {
          name: "A button with no name",
          explanation:
            "An arrow is not a name. With no text in the button, nobody knows what happens on click.",
          common: "button",
          correct: "Continue to summary, button",
        },
      ],
    },

    law: {
      title: "What applies, and what I test against.",
      body: [
        "Since 28 June 2025, the German Accessibility Act applies to a wide range of digital services. The technical standard behind it is EN 301 549. It currently points at WCAG 2.1.",
        "I test against WCAG 2.2, because the newer version closes gaps that 2.1 leaves open. When the standard catches up, you'll already be there.",
      ],
      facts: [
        { term: "Law", description: "German Accessibility Act, in force since 28 June 2025" },
        { term: "Standard", description: "EN 301 549, points at WCAG 2.1" },
        { term: "What I test", description: "WCAG 2.2, level AA" },
      ],
    },

    services: {
      title: "Three services, one person.",
      lead: "Book any of them on its own. Together they go faster, because nothing gets handed over and nothing gets explained twice.",
      items: [
        {
          title: "Test",
          lead: "I use your application the way people actually use it: with a screen reader and with the keyboard. Automated tools catch some of it. The rest you only find by hand.",
          result: "A report your team can work from straight away",
          items: [
            "Every problem with its place in the code and a fix that works",
            "Ordered by who it blocks, not by criterion number",
            "Something you can build your accessibility statement on",
          ],
        },
        {
          title: "Fix",
          lead: "I make the changes myself, in your framework and your design system. You get working code back, not homework.",
          result: "Reviewed code in your repository",
          items: [
            "React, Vue, Angular, or plain HTML and CSS",
            "Fixed in the component, not patched in fifty places",
            "Dialogs, menus, forms and tables that survive the next release",
          ],
        },
        {
          title: "Teach",
          lead: "So the same problems don't grow back, I work alongside your team while they build. After a few weeks you won't need me for this.",
          result: "A team that carries on without me",
          items: [
            "I review new components before they reach the sprint",
            "For designers: contrast, focus, states, target sizes",
            "Acceptance criteria that sit in the ticket and can be checked",
          ],
        },
      ],
    },

    why: {
      title: "Why this usually stalls.",
      portraitAlt: "Ercan Cicek",
      body: [
        "Hardly any audit report gets implemented in full, and it's rarely for lack of trying. The people who test write in generalities, because they don't know the code. The people who know the code guess at the criteria. And anything that went wrong in the design reaches both of them far too late.",
        "I came up through frontend development and UI/UX design, and I test against WCAG. I find a problem, fix it in the same component, and change the design so it doesn't come back. Nothing gets handed over in between.",
        "This matters most in large applications: portals with a dozen user roles, frontends that grew over years, design systems several teams build on. One fix there lands in a hundred places at once. So does one mistake.",
      ],
    },

    contact: {
      title: "Tell me where you are.",
      body: "Send me a few lines about what you're working on and what it's built with. You'll get my read on what needs doing and roughly what it costs. If you don't need me, I'll say so.",
    },
  },
}
