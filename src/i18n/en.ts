import type { Translations } from "./index"

// --- Screen reader transcripts follow English VoiceOver, which says "button" and
// "edit text" where the German voice says "Taste" and "Textfeld".

export const en: Translations = {
  accessibility: {
    meta: {
      title: "Accessibility for web applications | Ercan Cicek",
      description:
        "I test your web application for accessibility, fix what I find in the code, and show your team how to keep it that way. To WCAG 2.2 and the European Accessibility Act.",
    },
    eyebrow: "Accessibility",
    title: "I make your application accessible.",
    lead: "I test your application, fix what I find in the code, and show your team what to look out for. All from one person — so you end up with an application that works, not a list of things to do.",
    cta: "Start a conversation",

    problem: {
      title: "You can't see the problem.",
      body: "A screen reader doesn't read what's on the screen. It reads what's in the code. When those two disagree, nobody on the team notices, because there's nothing to see. Below is an ordinary form step. On the left is what a screen reader says when it's built the way most are. On the right, when it's built properly.",
    },

    invisible: {
      title: "Five problems no design review will catch.",
      body: [
        "All five live in the code, not the design. You won't spot them on screen, and you won't spot them in a sign-off meeting. They only show up when someone uses the application the way the people who rely on it do.",
        "Since 28 June 2025, the German Accessibility Act applies to a wide range of digital services. The technical standard behind it, EN 301 549, still points at WCAG 2.1. I test against WCAG 2.2 — it closes gaps that 2.1 leaves open, and when the standard catches up, you'll already be there.",
      ],
    },

    services: {
      title: "Three steps, one person.",
      lead: "Book any step on its own. Together they go faster, because nothing gets handed over and nothing gets explained twice.",
      items: [
        {
          step: "01",
          title: "Test",
          lead: "I use your application the way people actually use it: with a screen reader and with the keyboard. Automated tools catch some of it. The rest you only find by hand.",
          items: [
            "Every problem with its place in the code and a fix that works",
            "Ordered by who it blocks, not by criterion number",
            "Something you can build your accessibility statement on",
          ],
        },
        {
          step: "02",
          title: "Fix",
          lead: "I make the changes myself, in your framework and your design system. You get working code back, not homework.",
          items: [
            "React, Vue, Angular, or plain HTML and CSS",
            "Fixed in the component, not patched in fifty places",
            "Dialogs, menus, forms and tables that survive the next release",
          ],
        },
        {
          step: "03",
          title: "Teach",
          lead: "So the same problems don't grow back, I work alongside your team while they build. After a few weeks you won't need me for this.",
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
      body: [
        "Hardly any audit report gets implemented in full, and it's rarely for lack of trying. The people who test don't know the code, so they write in generalities. The people who know the code don't know the criteria, so they guess. And anything that went wrong in the design reaches both of them far too late.",
        "I came up through frontend development and UI/UX design, and I test against WCAG. So I can find a problem, fix it in the same component, and change the design so it doesn't come back. Nothing gets handed over in between.",
        "This matters most in large applications: portals with a dozen user roles, frontends that grew over years, design systems several teams build on. One fix there lands in a hundred places at once. So does one mistake.",
      ],
    },

    contact: {
      title: "Tell me where you are.",
      body: "Send me a few lines about what you're working on and what it's built with. You'll get my read on what needs doing and roughly what it costs. If you don't need me, I'll say so.",
    },

    demo: {
      instruction: "Pick an element — below you'll see what a screen reader says about it.",
      requiredLegend: "Fields marked with {mark} are required.",
      formTitle: "Your details",
      nameLabel: "Full name",
      nameValue: "Martin Beck",
      emailLabel: "Email address",
      emailValue: "beck.company.com",
      emailError: "The @ is missing. For example: name@company.com",
      columnCommon: "Built the usual way",
      columnCorrect: "Marked up properly",
      placeholder: "Pick an element above.",
      silent: "nothing announced, the element is skipped",
      liveTemplate: "Built the usual way: {common}. Marked up properly: {correct}.",
      targets: {
        symbol: "Symbol",
        heading: "Heading",
        nameField: "Full name input",
        emailField: "Email address input",
        submit: "Button with an arrow symbol",
      },
      announcements: [
        { common: "image, icon-shield-blue-2.svg", correct: "", isCorrectSilent: true },
        { common: "Your details", correct: "Your details, heading level 2" },
        {
          common: "edit text, Martin Beck",
          correct: "Full name, required, edit text, Martin Beck",
        },
        {
          common: "Email address, required, edit text, beck.company.com",
          correct:
            "Email address, required, invalid data, edit text, beck.company.com, The @ is missing. For example: name@company.com",
        },
        { common: "button", correct: "Continue to summary, button" },
      ],
    },
  },
}
