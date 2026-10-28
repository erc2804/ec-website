import type { DemoCase } from "./types"

// --- No "as const": literal types would force every other language to repeat
// the German strings verbatim.

export const de = {
  common: {
    opensInNewTab: "(öffnet in neuem Tab)",
    contactCta: "Projekt anfragen",
    // --- Under "LinkedIn" on the contact cards: what the click brings, not the profile slug
    linkedinInvite: "Vernetz dich mit mir",
  },

  routeLabels: {
    home: "Start",
    accessibility: "Barrierefreiheit",
    design: "Design",
    development: "Entwicklung",
    portfolio: "Portfolio",
    about: "Über mich",
    inquiry: "Projekt anfragen",
    inquirySent: "Anfrage gesendet",
    imprint: "Impressum",
    privacy: "Datenschutz",
    accessibilityStatement: "Barrierefreiheitserklärung",
  },

  footer: {
    label: "Rechtliches",
    rights: "Alle Rechte vorbehalten.",
    profiles: {
      linkedin: "LinkedIn-Profil",
    },
  },

  legal: {
    imprint: {
      meta: {
        title: "Impressum | Ercan Cicek",
        description: "Anbieterkennzeichnung nach § 5 DDG.",
      },
      title: "Impressum",
      providerHeading: "Angaben gemäß § 5 DDG",
      contactHeading: "Kontakt",
      vatHeading: "Umsatzsteuer-Identifikationsnummer",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      sections: [
        {
          heading: "Haftung für Inhalte",
          body: [
            "Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
            "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.",
          ],
        },
        {
          heading: "Haftung für Links",
          body: [
            "Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.",
          ],
        },
      ],
    },

    privacy: {
      meta: {
        title: "Datenschutz | Ercan Cicek",
        description:
          "Diese Website erhebt keine personenbezogenen Daten, setzt keine Cookies und wertet nichts aus.",
      },
      title: "Datenschutz",
      lead: "Ich nehme den Schutz deiner persönlichen Daten sehr ernst. Auf dieser Website werden keine personenbezogenen Daten erhoben oder verarbeitet. Es werden keine Cookies verwendet, und es erfolgt keine Sammlung oder Auswertung von Nutzerdaten.",
      sections: [
        {
          heading: "Externe Inhalte",
          body: [
            "Die Website enthält möglicherweise externe Inhalte wie eingebettete Fotos und Videos, die Daten an Dritte übermitteln könnten. Du kannst die Nutzung solcher externen Dienste über die Einstellungen deines Browsers steuern.",
          ],
        },
        {
          heading: "Kontakt",
          body: [
            "Bei Fragen zu dieser Datenschutzerklärung kannst du dich gerne an mich wenden: {email}",
          ],
        },
      ],
    },

    accessibilityStatement: {
      meta: {
        title: "Barrierefreiheitserklärung | Ercan Cicek",
        description:
          "Stand der Barrierefreiheit dieser Website, geprüfte Kriterien und wie du mir Barrieren meldest.",
      },
      // --- Soft hyphens at both compound seams: as one word it overflows the
      // viewport on a phone, and even "Barrierefreiheits-" alone is too long at
      // 320px. Not in meta.title, where the character would reach the tab and
      // search results.
      title: "Barriere\u00ADfreiheits\u00ADerklärung",
      lead: "Wer Barrierefreiheit verkauft, sollte die eigene Website daran messen lassen. Deshalb steht hier, was geprüft wurde und was du tun kannst, wenn dir etwas auffällt.",
      sections: [
        {
          heading: "Geltungsbereich",
          body: [
            "Diese Erklärung gilt für die Website unter ercancicek.com in der deutschen und der englischen Fassung.",
          ],
        },
        {
          heading: "Stand der Vereinbarkeit",
          body: [
            "Die Website ist nach WCAG 2.2 Stufe AA gebaut und wird daran geprüft. Getestet wird mit der Tastatur und mit Screenreader, ergänzt um automatische Werkzeuge.",
            "Als Kleinstunternehmen bin ich zu dieser Erklärung nicht verpflichtet. Sie ist freiwillig.",
          ],
        },
        {
          heading: "Bekannte Einschränkungen",
          body: [
            "Die interaktive Demo auf der Seite zur Barrierefreiheit zeigt Abschriften von Screenreader-Ansagen. Damit ein echter Screenreader nicht vorliest, was ein Screenreader vorlesen würde, sind diese Panels ausgeblendet und werden stattdessen als eine zusammenhängende Ansage über eine Live-Region ausgegeben.",
          ],
        },
        {
          heading: "Barriere melden",
          body: [
            "Wenn dir etwas auffällt, das dich blockiert, schreib mir. Ich antworte und sage dir, wann es behoben ist.",
          ],
        },
      ],
      statusHeading: "Stand dieser Erklärung",
      statusDate: "18. August 2026",
    },
  },

  chatBubble: {
    heroZone: "Schön, dass du da bist.",
    offersZone: "Was davon brauchst du?",
    contactZone: "Ich freu mich auf deine Nachricht.",
    starter: "Wie geht's?",
    firstName: "Mein Name wird Erdschan ausgesprochen (wie bei Dschungel).",
    mainLinks: "Wohin als Nächstes?",
    languageSwitch: "Keine Sorge, ich spreche beide Sprachen.",
    accessibility: "Gute Wahl.",
    design: "Ja, das mache ich auch selbst.",
    development: "Und das auch.",
    contact: "Trau dich.",
  },

  home: {
    meta: {
      title:
        "Barrierefreiheit, UI/UX-Design und Frontend in Düsseldorf | Ercan Cicek",
      description:
        "Ich mache Websites und Apps barrierefrei nach BFSG, gestalte sie und baue sie selbst. Selbstständiger Product Engineer in Düsseldorf, über zehn Jahre Design und Code.",
    },
    hero: {
      eyebrow: ["Product Engineer", "Düsseldorf"],
      claim: ["Design, Code und Barrierefreiheit.", "Aus einer Hand."],
      scrollCue: "Weiter nach unten",
    },
    offers: {
      title: "Drei Dinge, die ich für dich tun kann",
      items: {
        accessibility: {
          title: "Barrierefreiheit",
          teaser:
            "Ich prüfe deine Website oder App nach WCAG und BFSG, behebe die Fehler selbst im Code und zeige deinem Team, worauf es ankommt.",
        },
        design: {
          title: "UI/UX-Design",
          teaser:
            "Oberflächen, die sich von selbst erklären. Auch für Produkte, die mit KI gebaut wurden und jetzt ein eigenes Gesicht bekommen.",
        },
        development: {
          title: "Frontend-Entwicklung",
          teaser:
            "React, Vue, TypeScript. Ich baue, was das Design meint, mit allen Zuständen, nicht nur dem schönen.",
        },
      },
      more: "Mehr dazu",
      vignettes: {
        accessibilityCaption: "Weiter, Taste",
        designSizeBefore: "128 × 56",
        designSizeAfter: "160 × 56",
        developmentRemoved: "padding: 13px;",
        developmentAdded: "padding: var(--space-3);",
      },
    },
    roles: {
      title: "Wie du mich einsetzen kannst",
      lead: "Ob Startup, Unternehmen oder Agentur: Du entscheidest, in welcher Rolle ich dazukomme.",
      items: [
        {
          title: "Übernehmen",
          text: "Du gibst mir das Ziel, ich liefere das Ergebnis. **Design, Frontend oder beides**, von der ersten Idee bis zum fertigen Produkt.",
        },
        {
          title: "Mitarbeiten",
          text: "Ich werde **Teil deines Teams**. Als Designer, der weiß, was sich bauen lässt, oder als Entwickler, der versteht, was das Design will.",
        },
        {
          title: "Prüfen",
          text: "Du willst wissen, wo du stehst. Ich prüfe deine Website oder App auf **Barrierefreiheit** und schaue mir auf Wunsch auch Design und Code an. Du bekommst einen **Bericht**, mit dem dein Team sofort arbeiten kann.",
        },
        {
          title: "Schulen",
          text: "Dein Team soll es selbst können. Mit **Mentoring und Schulungen** zu Barrierefreiheit, Design und Frontend, damit es das Wissen im Alltag sicher anwendet.",
        },
      ],
      note: "Oft beginnt es mit einer Prüfung und wird zu mehr. Wenn du nicht weißt, was du brauchst, ist genau das ein guter Grund für ein Gespräch.",
    },
    quotes: {
      title: "Ausgewählte Empfehlungen",
      allLink: "Alle Empfehlungen auf LinkedIn",
      loginNote: "Nur mit LinkedIn-Login sichtbar",
      translated: "übersetzt",
      items: [
        {
          text: "Ercan versteht Nutzerbedürfnisse ausgezeichnet und macht aus komplexen Problemen nahtlose, intuitive Erlebnisse. Ich würde jederzeit wieder mit ihm arbeiten.",
          name: "Johanna Leisch",
          role: "CEO, KONUX",
          isTranslated: true,
        },
        {
          text: "Ein durchdachter UI/UX-Designer mit solidem Verständnis für Frontend-Entwicklung. Er hat ein echtes Talent dafür, abstrakte technische Ideen in klare, intuitive Designs zu verwandeln.",
          name: "Louis Saadé",
          role: "Co-Founder & CTO, context/fab",
          isTranslated: true,
        },
        {
          text: "Mit dem Ergebnis und vor allem mit der Schnelligkeit und Flexibilität seiner Arbeit bin ich mehr als zufrieden. Er war der absolut richtige Partner für dieses Projekt!",
          name: "Katharina Sauer",
          role: "Geschäftsführerin, KKS Karl Konrad",
          isTranslated: false,
        },
      ],
    },
    projects: {
      title: "Aus meinem Portfolio",
      all: "Zum Portfolio",
      cardLabel: "Zum Projekt",
    },
    contact: {
      title: "Erzähl mir, worum es geht.",
      body: "Schreib mir kurz, was du vorhast und womit es gebaut ist. Du bekommst eine ehrliche Einschätzung, auch wenn sie lautet: Dafür brauchst du mich nicht.",
      email: "E-Mail",
      linkedin: "LinkedIn",
    },
  },

  inquiry: {
    meta: {
      title: "Projekt anfragen | Ercan Cicek",
      description:
        "Erzähl mir, worum es geht: Barrierefreiheit, Design oder Entwicklung. Füll das Formular selbst aus oder lass dir von Pixel-Ercan helfen. Antwort normalerweise in zwei Werktagen.",
    },
    title: "Projekt anfragen",
    lead: "Erzähl mir, worum es geht. Ein paar Sätze reichen. Füll das Formular selbst aus oder lass dir von Pixel-Ercan helfen. Er trägt alles für dich ein.",
    assistant: {
      title: "Mit Pixel-Ercan ausfüllen",
      intro:
        "Hi, ich bin Pixel-Ercan. Erzähl mir von deinem Projekt, und ich trage alles für dich ins Formular ein.",
      disclosure:
        "Pixel-Ercan ist eine KI. Damit er eintragen kann, geht dein Text an den KI-Dienst Anthropic. Abgeschickt wird nur, was du selbst abschickst.",
      privacyLink: "Mehr dazu in der Datenschutzerklärung",
      logLabel: "Unterhaltung mit Pixel-Ercan",
      speakerYou: "Du",
      speakerAssistant: "Pixel-Ercan",
      inputLabel: "Deine Nachricht an Pixel-Ercan",
      placeholder:
        "Hi Ercan, wir sind ein Onlineshop für Fahrradteile und müssen bis Juni barrierefrei sein. Kannst du prüfen, wo wir stehen? Ich bin Lena, erreichbar unter lena@beispiel.de",
      replyPlaceholder: "Deine Antwort …",
      send: "Senden",
      callbackYes: "Ja, gern",
      callbackNo: "Nein, E-Mail reicht",
      callbackYesMessage: "Ja, ruf mich gern an.",
      callbackNoMessage: "Nein, eine E-Mail reicht.",
      working: "Pixel-Ercan schreibt …",
      empty: "Schreib Pixel-Ercan erst ein paar Worte, dann legt er los.",
      filled: "Eingetragen: {fields}",
      toForm: "Ansehen",
      showEarlierOne: "1 frühere Nachricht anzeigen",
      showEarlierMany: "{count} frühere Nachrichten anzeigen",
      hideEarlier: "Frühere Nachrichten ausblenden",
      toNewest: "Zur neuesten Nachricht",
      reset: "Chat neu starten",
      error:
        "Das hat gerade nicht geklappt. Versuch es gleich noch mal oder füll das Formular selbst aus.",
      busy: "Gerade ist viel los. Versuch es in einer Minute noch mal oder füll das Formular selbst aus.",
      tooLong: "Der Chat ist schon ziemlich lang. Ergänze den Rest bitte direkt im Formular.",
      tag: "von Pixel-Ercan",
      fieldNames: {
        topics: "Thema",
        goal: "Projekt",
        name: "Name",
        email: "E-Mail",
        phone: "Telefon",
        callback: "Rückruf",
      },
    },
    form: {
      title: "Deine Anfrage",
      optional: "optional",
      topicsLegend: "Wobei kann ich helfen?",
      topicsHint: "Mehrere möglich",
      topics: {
        accessibility: "Barrierefreiheit",
        design: "Design",
        development: "Entwicklung",
        other: "Sonstiges",
      },
      goalLabel: "Dein Projekt",
      goalHint:
        "Was soll entstehen oder besser werden? Gern mit Zeitrahmen und allem, was du schon weißt",
      goalPlaceholder:
        "Unser Onlineshop soll bis Juni barrierefrei sein. Wir wissen nicht, wo wir gerade stehen, und suchen jemanden, der prüft und die Fehler direkt im Code behebt.",
      nameLabel: "Dein Name",
      emailLabel: "Deine E-Mail",
      emailPlaceholder: "name@firma.de",
      phoneLabel: "Telefon",
      phonePlaceholder: "0211 1234567",
      callbackLabel: "Ich wünsche einen Rückruf",
      honeypotLabel: "Dieses Feld bitte leer lassen",
      submit: "Anfrage abschicken",
      sending: "Wird gesendet …",
      waitForAssistant: "Einen Moment, Pixel-Ercan trägt noch ein.",
      sendError:
        "Deine Anfrage ist leider nicht angekommen. Versuch es noch mal oder schreib mir direkt an {email}.",
      errorSummary: "Deine Anfrage ist noch nicht gesendet. Bitte prüf diese Angaben:",
      errors: {
        goal: "Erzähl mir in ein, zwei Sätzen von deinem Projekt. Das reicht mir für eine erste Einschätzung.",
        email: "Ohne E-Mail-Adresse kann ich dir leider nicht antworten. Trag sie hier ein.",
        emailInvalid:
          "An der E-Mail-Adresse fehlt noch etwas. So sieht sie zum Beispiel aus: name@firma.de",
        callbackPhone:
          "Für den Rückruf brauche ich noch deine Telefonnummer. Oder wähle „Ich wünsche einen Rückruf“ wieder ab.",
      },
    },
    sent: {
      title: "Danke! Deine Anfrage ist angekommen.",
      titleWithName: "Danke, {name}! Deine Anfrage ist angekommen.",
      body: "Normalerweise hörst du in den nächsten zwei Werktagen von mir.",
      back: "Zur Startseite",
      newRequest: "Neue Anfrage stellen",
      offersTitle: "Während du wartest",
      offers: {
        accessibility: {
          title: "Barrierefreiheit",
          text: "Wie ich prüfe, was das BFSG verlangt und wie ein Screenreader deine Seite erlebt.",
        },
        design: {
          title: "Design",
          text: "Wie ich Oberflächen gestalte, die sich von selbst erklären.",
        },
        development: {
          title: "Entwicklung",
          text: "Wie aus einem Entwurf Code wird, der in jedem Zustand hält.",
        },
      },
    },
    next: {
      title: "Was danach passiert",
      steps: [
        {
          title: "Ich lese deine Anfrage persönlich",
          text: "Normalerweise melde ich mich in den nächsten zwei Werktagen.",
        },
        {
          title: "Du bekommst eine klare Einschätzung",
          text: "Was sinnvoll ist, was es dafür braucht und wie wir loslegen können.",
        },
      ],
      directTitle: "Du erreichst mich auch direkt",
      email: "E-Mail",
      linkedin: "LinkedIn",
    },
  },

  nav: {
    toHome: "Zur Startseite",
    label: "Hauptnavigation",
    skipToContent: "Zum Inhalt springen",
    openMenu: "Menü",
    languageLabel: "Sprache",
  },

  design: {
    meta: {
      title: "UI/UX-Design für Web-Apps und Websites | Ercan Cicek",
      description:
        "UI/UX-Design für Web-Apps und Websites, auf Wunsch gleich gebaut. Auch für Produkte aus KI-Vorlagen. Aus Düsseldorf, das erste Gespräch ist unverbindlich und kostenlos.",
    },

    hero: {
      title: "Ich gestalte Produkte, die sich von selbst erklären.",
      // --- The sizing chip on the selection frame around the heading, as Figma
      // writes it: the frame fills its parent, the height hugs the text
      selection: "Fill × Hug",
      // --- The colour token of the heading in the tool's property row, before
      // and after the click. Token names are English in every language.
      tokenBefore: "text/tertiary",
      tokenMiddle: "text/secondary",
      tokenAfter: "text/primary",
      lead: "Jeder soll sofort sehen, wo es weitergeht. Dafür sorge ich: in neuen Produkten, in bestehenden, und in solchen, die mit KI gebaut wurden und jetzt den letzten Schritt brauchen.",
    },

    // --- The before/after section with the slider
    compare: {
      title: "Gleicher Inhalt. Anderes Produkt.",
      lead: "KI-Werkzeuge liefern in Minuten eine Seite, die funktioniert. Das ist ein guter Anfang, oft der beste, den ein Projekt haben kann. Nur ist es eine Vorlage, und Vorlagen sehen sich ähnlich: Verlauf oben, drei Karten mit Symbolen, zwei Buttons. Was noch fehlt, ist die Entscheidung, was auf dieser Seite zählt.",
      example:
        "Hier die Startseite eines erfundenen Zeiterfassungs-Tools, links als Vorlage, rechts fertig gestaltet. Dasselbe Produkt, nur entschieden: was zuerst zählt, was weg kann und was man zeigt.",
      before: "KI-Vorlage",
      after: "Gestaltet",
      sliderLabel: "Vergleich derselben Startseite: links die KI-Vorlage, rechts gestaltet",
      // --- For screen readers, who do not see the two pictures
      description:
        "Links: ein lila Verlauf, die Überschrift „Willkommen bei Klaro“, zwei gleich große Buttons und drei Karten mit den Wörtern „Blitzschnell“, „Sicher“ und „Intuitiv“. Rechts: die Überschrift „Stunden erfassen, ohne daran zu denken“, ein Satz dazu, ein Button und daneben ein Blick ins Produkt.",
      changes: [
        {
          title: "Eine Aussage statt drei Schlagworte",
          text: "„Blitzschnell, sicher, intuitiv“ könnte über jedem Produkt stehen. Ein Satz, der sagt, was das Tool tut, steht nur über diesem.",
        },
        {
          title: "Ein Button statt zwei",
          text: "„Jetzt starten“ neben „Mehr erfahren“ heißt: Entscheide du. Ein Button heißt: Hier geht es weiter.",
        },
        {
          title: "Ein eigenes Gesicht",
          text: "Die Vorlage gehört allen. Schrift, Farbe und Bild gehören jetzt zu diesem Produkt.",
        },
      ],
    },

    // --- Texts inside the fictional tool "Klaro" that both demos show
    screen: {
      name: "Klaro",
      nav: ["Funktionen", "Preise", "Login"],
      aiTitle: "Willkommen bei Klaro",
      aiLead: "Die moderne All-in-One-Lösung für effiziente Zeiterfassung in deinem Team.",
      aiPrimary: "Jetzt starten",
      aiSecondary: "Mehr erfahren",
      aiCards: [
        { title: "Blitzschnell", text: "Erfasse deine Zeit in Sekunden, nicht in Minuten." },
        { title: "Sicher", text: "Deine Daten sind bei uns in sicheren Händen." },
        { title: "Intuitiv", text: "Eine Oberfläche, die keine Erklärung braucht." },
      ],
      title: "Stunden erfassen, ohne daran zu denken.",
      lead: "Klaro bucht die Zeit automatisch auf das Projekt, in dem du gerade arbeitest. Für Teams, die ihre Stunden abrechnen.",
      primary: "14 Tage kostenlos testen",
      note: "Ohne Kreditkarte",
      weekLabel: "Diese Woche",
      weekTotal: "31,5 Std.",
      days: ["Mo", "Di", "Mi", "Do", "Fr"],
      hours: [7.5, 8, 6, 8, 2],
      todayProject: "Läuft: Website-Relaunch",
    },

    states: {
      title: "Nicht nur der schöne Zustand.",
      lead: "Entwürfe zeigen fast immer den Idealfall: drei kurze Einträge, alles geladen, nichts schiefgegangen. Im Betrieb ist eine Liste leer, lädt noch, bricht ab oder bekommt Texte, die niemand vorgesehen hat. Ich entwerfe jeden Zustand mit, damit euer Team nichts erfinden muss.",
      legend: "Zustand",
      commonLabel: "Nur der Idealfall entworfen",
      designedLabel: "Jeder Zustand entworfen",
      cardTitle: "Projekte diese Woche",
      rows: [
        { name: "Website-Relaunch", hours: "12,5 Std." },
        { name: "App-Redesign", hours: "6 Std." },
        { name: "Pitch-Deck", hours: "2 Std." },
      ],
      longName:
        "Relaunch der Unternehmenswebsite inklusive Barrierefreiheitsprüfung nach BFSG (Phase 2)",
      emptyTitle: "Noch keine Projekte",
      emptyText: "Leg ein Projekt an, dann landen deine Stunden hier.",
      emptyAction: "Projekt anlegen",
      errorRaw: "Error: Request failed with status 500",
      errorTitle: "Die Projekte konnten nicht geladen werden",
      errorText: "Deine Stunden sind gespeichert. Versuch es gleich noch einmal.",
      errorAction: "Erneut laden",
      loading: "Loading…",
      items: [
        {
          key: "normal",
          label: "Normal",
          why: "So wird ein Entwurf gezeigt und abgenommen: drei Einträge, kurze Namen, alles da. In diesem Zustand sehen beide gut aus.",
        },
        {
          key: "loading",
          label: "Lädt",
          why: "Links ein englisches Wort auf leerer Fläche. Rechts zeigen Platzhalter, dass etwas kommt und wie viel. So wartet man ruhiger.",
        },
        {
          key: "empty",
          label: "Leer",
          why: "Links ein leerer Kasten, der aussieht wie ein Fehler. Rechts steht, warum hier nichts ist, und der erste Schritt steht gleich daneben.",
        },
        {
          key: "error",
          label: "Fehler",
          why: "Links eine Meldung aus dem Code, die niemandem hilft. Rechts steht, was passiert ist, dass nichts verloren ist, und was man tun kann.",
        },
        {
          key: "long",
          label: "Langer Text",
          why: "Links schiebt ein langer Name die Stunden aus dem Bild. Rechts bricht er um und wird nach zwei Zeilen gekürzt. Echte Namen sind länger als die im Entwurf.",
        },
      ],
    },

    services: {
      title: "So kann ich helfen",
      lead: "Das ganze Design oder genau das Stück, das fehlt.",
      items: [
        {
          title: "Gestalten",
          text: "Neue Produkte und Funktionen, von den ersten Abläufen bis zum klickbaren Prototyp in Figma.",
        },
        {
          title: "Nachschärfen",
          text: "Dein Produkt läuft, vielleicht aus einer KI-Vorlage. Es bekommt eine klare Ordnung und einen eigenen Auftritt, ohne dass ihr von vorn anfangt.",
        },
        {
          title: "Designsystem",
          text: "Farben, Schrift, Abstände und Bausteine als feste Regeln. Damit Figma und Code dasselbe sprechen und dein Team nicht jeden Button neu erfindet.",
        },
      ],
    },

    process: {
      title: "So kann es ablaufen",
      lead: "Ein Beispiel. Jedes Projekt ist anders, deshalb stimmen wir den Ablauf auf dich ab.",
      steps: [
        {
          title: "Kennenlernen",
          text: "Du zeigst mir dein Produkt oder deine Idee und erzählst, wer es nutzt.",
          outcome: "Danach weißt du, ob ich helfen kann.",
        },
        {
          title: "Verstehen",
          text: "Ich gehe durch, was Nutzer tun wollen und wo sie heute hängen bleiben.",
          outcome: "Wir wissen, welche Screens zählen.",
        },
        {
          title: "Gestalten",
          text: "Ich entwerfe in Figma, mit jedem Zustand, und zeige dir früh Zwischenstände.",
          outcome: "Du bekommst einen klickbaren Prototyp.",
        },
        {
          title: "Übergeben",
          text: "Entwurf, Zustände und Tokens gehen an dein Team, mit Erklärung. Wenn du willst, baue ich mit.",
          outcome: "Dein Team kann loslegen.",
        },
      ],
    },

    oneHand: {
      title: "Design, das sich bauen lässt",
      body: "Ich entwickle selbst Frontends. Deshalb weiß ich, **wie weit ein Entwurf gehen darf**: so weit, dass Entwickler ins Schwitzen kommen, aber **nie so weit, dass er im Code nicht hält**. Und wenn beim Bauen jemand fehlt, bin ich da.",
      portraitAlt: "Ercan Cicek",
    },

    faq: {
      title: "Häufige Fragen",
      items: [
        {
          question: "Unser Produkt ist mit KI gebaut. Lohnt sich Design dann noch?",
          answer:
            "Ja, und die Vorlage ist dafür ein guter Start. Das Werkzeug nimmt dir das Grundgerüst ab. Was es dir nicht abnimmt, sind die Entscheidungen: was zuerst zählt, was weg kann und wie dein Produkt aussieht. Wir bauen auf dem auf, was schon da ist.",
        },
        {
          question: "Arbeitest du mit unserem Designsystem?",
          answer:
            "Ja. Ich arbeite mit dem, was da ist, und erweitere es, wo etwas fehlt. Gibt es noch keins, legen wir die Grundlagen gemeinsam an.",
        },
        {
          question: "Was kostet ein Projekt?",
          answer:
            "Das hängt vom Umfang ab: wie viele Screens und Abläufe es sind und ob ein Designsystem dazugehört. Nach einem unverbindlichen und kostenlosen Erstgespräch bekommst du ein konkretes Angebot.",
        },
        {
          question: "Ist Barrierefreiheit mit drin?",
          answer:
            "Ja, von Anfang an. Kontraste, Schriftgrößen, Fokus und Zustände plane ich direkt mit, so muss später nichts nachgerüstet werden.",
        },
      ],
    },

    contact: {
      title: "Lass uns über dein Produkt sprechen.",
      body: "Schick mir einen Link oder ein paar Screenshots. Im ersten Gespräch schauen wir gemeinsam drauf, unverbindlich und kostenlos.",
    },
  },

  accessibility: {
    meta: {
      title: "Barrierefreiheit prüfen und umsetzen nach BFSG | Ercan Cicek",
      description:
        "Ich prüfe deine Website oder App nach BFSG und WCAG 2.2, behebe die Fehler in Design und Code und schule dein Team. Aus Düsseldorf. Erstes Gespräch unverbindlich und kostenlos.",
    },

    hero: {
      title: "Ich mache deine digitalen Produkte barrierefrei.",
      // --- What VoiceOver announces for the heading above, shown next to it
      announcement: "Ich mache deine digitalen Produkte barrierefrei. Überschrift, Ebene 1",
      announcementLabel: "Das sagt ein Screenreader zu dieser Überschrift",
      lead: "Ich prüfe sie nach BFSG: Können auch Menschen mit Behinderung sie ohne Hürden nutzen? Auf Wunsch behebe ich die Fehler selbst, in Design und Code, und schule dein Team, damit keine neuen Fehler dazukommen.",
    },

    demo: {
      title: "Sieht gleich aus. Klingt anders.",
      lead: "Wer nicht oder schlecht sieht, lässt sich Websites vorlesen, auf dem Mac von VoiceOver. Ist ein Element unsauber gebaut, hört man Falsches, nichts, oder kommt gar nicht erst an den Button. Und dann nicht weiter.",
      instruction:
        "Geh mit „Zurück“ und „Weiter“ durchs Formular. Zu jedem Element steht da, was VoiceOver bei einem häufigen Fehler sagt, und was, wenn es richtig gebaut ist.",
      // --- Desktop only, where the curtain switch is shown
      instructionCurtain: "Mit „Bildschirm aus“ erlebst du es ohne Bild, so wie VoiceOver-Nutzer.",
      commonLabel: "Häufiger Fehler",
      correctLabel: "Richtig gebaut",
      previous: "Zurück",
      next: "Weiter",
      whyButton: "Warum ist das ein Problem?",
      close: "Schließen",
      // --- Phones: the pill that leads from the picture down to the announcements
      jump: "Zur Ansage",
      // --- The switch in plain words; VoiceOver's own name for the mode,
      // Screen Curtain, is named in the hint under it
      blind: "Bildschirm aus",
      blindHint: "Bei VoiceOver heißt das Bildschirmvorhang.",
      curtainText: "Jetzt bleibt dir nur noch, was VoiceOver sagt.",
      silent: "Keine Ansage",
      position: "Element {number} von {total}",
      liveTemplate: "{position}: {name}",
      formTitle: "Deine Angaben",
      nameLabel: "Vor- und Nachname",
      nameValue: "Martin Beck",
      emailLabel: "E-Mail-Adresse",
      emailValue: "beck.firma.de",
      emailError: "@ fehlt. Beispiel: name@firma.de",
      cases: [
        {
          name: "Symbol ohne Bedeutung",
          details: [
            "Das Schild-Symbol ist reine Deko. Fehlt im Code der Hinweis darauf, lesen manche Screenreader stattdessen den Dateinamen vor.",
            "Solche Ansagen enthalten keine Information. Sie sind Lärm, der das Zuhören mühsamer macht.",
            "Richtig gebaut bekommt das Bild im Code eine leere Bildbeschreibung (alt=\"\"). Dann überspringt der Screenreader es. Ob ein Bild nur Deko ist, entscheidet, wer die Seite erstellt. Bilder mit Inhalt brauchen eine kurze Beschreibung.",
          ],
          common: "Bild, icon-shield-blue-2.svg",
          correct: "",
          isCorrectSilent: true,
        },
        {
          name: "Überschrift, die keine ist",
          details: [
            "„Deine Angaben“ ist groß geschrieben und sieht aus wie eine Überschrift. Im Code ist es aber nur normaler Text.",
            "Die meisten Screenreader-Nutzer suchen Inhalte über Überschriften und springen von einer zur nächsten. Das zeigt die große Umfrage von WebAIM unter Screenreader-Nutzern. Fehlt die Überschrift im Code, überspringen sie diesen Abschnitt.",
            "Richtig gebaut ist es auch im Code eine Überschrift. Wie sie aussieht, bestimmt weiter das Design.",
          ],
          common: "Deine Angaben",
          correct: "Deine Angaben, Überschrift, Ebene 2",
        },
        {
          name: "Feld ohne Beschriftung",
          details: [
            "Über dem Feld steht „Vor- und Nachname“. Für das Auge gehört beides zusammen, im Code aber nicht.",
            "VoiceOver sagt deshalb nur „Textfeld“, ohne Namen. Wer nicht sieht, muss raten, was hinein soll. Auch wer per Sprache steuert, wählt Felder über ihre Beschriftung aus. „Klick auf Vor- und Nachname“ klappt nur, wenn das Feld im Code so heißt.",
            "Richtig gebaut ist die Beschriftung im Code mit dem Feld verbunden. Dann sagt VoiceOver sie mit an. Nebenbei wird die Beschriftung zur größeren Klickfläche: Ein Klick darauf setzt den Cursor ins Feld.",
          ],
          common: "Textfeld, Martin Beck",
          correct: "Vor- und Nachname, Pflichtfeld, Textfeld, Martin Beck",
        },
        {
          name: "Fehler nur in Rot",
          details: [
            "Das Feld ist rot umrandet, darunter steht in Rot, was fehlt. Wer hinsieht, merkt sofort: Hier stimmt etwas nicht.",
            "VoiceOver sagt davon nichts. Wer die Farbe nicht wahrnimmt, merkt nicht, dass etwas falsch ist. Das betrifft nicht nur blinde Menschen, sondern auch Menschen mit Farbsehschwäche, mit wenig Sehkraft und viele Ältere.",
            "Richtig gebaut ist das Feld im Code als fehlerhaft markiert und der Hinweis mit ihm verbunden. Dann sagt VoiceOver beides mit an. Dazu gehört ein Symbol oder ein Wort, damit der Fehler nicht nur an der Farbe hängt.",
          ],
          common: "E-Mail-Adresse, Textfeld, beck.firma.de",
          correct:
            "E-Mail-Adresse, ungültige Eingabe, Textfeld, beck.firma.de. @ fehlt. Beispiel: name@firma.de",
        },
        {
          name: "Button ohne Namen",
          details: [
            "Der Button zeigt nur ein Symbol, kein Wort. Sehende erraten aus dem Zusammenhang, dass es hier weitergeht.",
            "Das Symbol kann ein Screenreader nicht deuten, es ist nur eine Grafik. Einen Namen hat der Button im Code nicht. VoiceOver sagt deshalb nur „Taste“. Ob der Klick weiterführt, etwas löscht oder abschickt, erfährt man nicht.",
            "Richtig gebaut bekommt der Button einen Namen, zum Beispiel „Weiter zur Zusammenfassung“. Der Name muss nicht sichtbar sein, das Design bleibt gleich.",
          ],
          common: "Taste",
          correct: "Weiter zur Zusammenfassung, Taste",
        },
      ] as DemoCase[],
    },

    law: {
      title: "Das BFSG in Kürze",
      body: [
        "Seit dem 28. Juni 2025 gilt das Barrierefreiheitsstärkungsgesetz, kurz BFSG. Danach müssen viele digitale Angebote für Privatkunden barrierefrei sein. Als technischer Maßstab dienen in der Praxis die europäische Norm EN 301 549 und die WCAG, die internationalen Regeln für barrierefreie Websites und Apps. Ich prüfe nach WCAG 2.2 (dem aktuellen Stand, auf dem auch die neue Fassung der Norm aufbaut).",
        "Ob sich jemand daran hält, kontrolliert eine Behörde der Bundesländer, die Marktüberwachungsstelle. Sie wird nach Beschwerden aktiv, aber auch von sich aus. Sie kann eine Frist zum Nachbessern setzen, ein Bußgeld verhängen und im äußersten Fall das Angebot verbieten.",
      ],
      affectedTitle: "Meist betroffen",
      affected:
        "Onlineshops, Online-Banking, Buchungs- und Ticketportale, Vertragsabschlüsse und Apps für Privatkunden",
      notAffectedTitle: "Meist nicht",
      notAffected:
        "Angebote nur für Firmenkunden und Dienstleistungen sehr kleiner Firmen: weniger als 10 Beschäftigte und höchstens 2 Millionen Euro Jahresumsatz oder Bilanzsumme (§ 3 BFSG)",
    },

    services: {
      title: "So kann ich helfen",
      lead: "Meist beginnt es mit einer Prüfung. Danach übernehme ich so viel, wie du brauchst.",
      items: [
        {
          title: "Prüfen",
          text: "Ich prüfe deine Website oder App nach WCAG\u00A02.2, mit Prüftools und von Hand mit Screenreader und Tastatur. Zu jedem Fehler bekommst du einen Lösungsvorschlag, mit dem dein Team sofort loslegen kann. Auf Wunsch schreibe ich auch die Barrierefreiheitserklärung.",
        },
        {
          title: "Beheben",
          text: "Ich behebe die Fehler selbst, in Figma und direkt in eurem Code, mit euren Werkzeugen. Am liebsten in den Bausteinen, aus denen eure Seiten bestehen. Dann ist ein Fehler überall auf einmal weg.",
        },
        {
          title: "Schulen",
          text: "Ich zeige deinem Team an euren eigenen Seiten, worauf es ankommt. Mit Schulungen und Begleitung im Alltag denkt es Barrierefreiheit von Anfang an mit.",
        },
      ],
    },

    process: {
      title: "So kann es ablaufen",
      lead: "Ein Beispiel. Jedes Projekt ist anders, deshalb stimmen wir den Ablauf auf dich ab.",
      steps: [
        {
          title: "Kennenlernen",
          text: "Du erzählst mir, was du anbietest und womit es gebaut ist.",
          outcome: "Danach weißt du, ob ich helfen kann.",
        },
        {
          title: "Umfang festlegen",
          text: "Wir wählen die Seiten und Abläufe, auf die es ankommt, etwa Suche und Bestellung.",
          outcome: "Du bekommst ein Angebot mit festem Umfang.",
        },
        {
          title: "Prüfen",
          text: "Ich gehe die ausgewählten Abläufe Schritt für Schritt durch, so wie deine Kunden sie nutzen.",
          outcome: "Du bekommst einen Bericht mit allen Fehlern und wie man sie behebt.",
        },
        {
          title: "Besprechen",
          text: "Wir gehen die Fehler gemeinsam durch: was dringend ist, was schnell geht und was warten kann.",
          outcome: "Danach weißt du, was zuerst dran ist, und entscheidest, wer es umsetzt: dein Team oder ich.",
        },
      ],
    },

    oneHand: {
      title: "Prüfung und Umsetzung aus einer Hand",
      body: "Ich komme aus UI/UX-Design und Frontend-Entwicklung. Deshalb endet ein Befund bei mir **nicht mit einer Kriteriennummer**, sondern **mit einer Lösung**, die in euer Designsystem passt und sich im nächsten Sprint umsetzen lässt.",
      portraitAlt: "Ercan Cicek",
    },

    faq: {
      title: "Häufige Fragen",
      items: [
        {
          question: "Bin ich überhaupt BFSG-pflichtig?",
          answer:
            "Sehr wahrscheinlich, wenn Privatkunden bei dir online etwas kaufen, buchen oder einen Vertrag abschließen. Im Zweifel schauen wir uns das im ersten Gespräch zusammen an. Eine Rechtsberatung ersetzt das nicht.",
        },
        {
          question: "Was kostet eine Prüfung?",
          answer:
            "Das hängt vom Umfang ab: wie viele unterschiedliche Seitentypen und Abläufe geprüft werden, nicht wie viele Unterseiten es gibt. Nach einem unverbindlichen und kostenlosen Erstgespräch bekommst du ein konkretes Angebot.",
        },
        {
          question: "Reichen automatische Prüftools nicht aus?",
          answer:
            "Sie sind ein guter Start und finden typische technische Fehler, etwa fehlende Bildbeschreibungen oder zu wenig Kontrast. Ob man per Tastatur durch den Bestellprozess kommt, ob eine Ansage verständlich ist oder eine Fehlermeldung hilft, kann nur ein Mensch beurteilen.",
        },
        {
          question: "Was ist mit Barrierefreiheits-Plugins?",
          answer:
            "Solche Plugins legen nur eine Schicht über die Seite. Der Code darunter bleibt, wie er ist, und genau dort entstehen die meisten Barrieren. Wer einen Screenreader nutzt, bringt seine Hilfsmittel ohnehin selbst mit und braucht eine Seite, die richtig gebaut ist.",
        },
      ],
    },

    contact: {
      title: "Lass uns schauen, wo dein Produkt steht.",
      body: "Sag mir, um welche Website oder App es geht. Im ersten Gespräch schauen wir kurz gemeinsam drauf, und danach weißt du, was fehlt und was als Nächstes dran ist. Unverbindlich und kostenlos.",
    },
  },
  development: {
    meta: {
      title: "Frontend-Entwicklung mit React, Vue und TypeScript | Ercan Cicek",
      description:
        "Ich baue Frontends, die auch in zwei Jahren noch halten: neu, in Bestehendem oder als Verstärkung für dein Team. KI schreibt mit, die Entscheidungen treffe ich. Das erste Gespräch ist unverbindlich und kostenlos.",
    },

    hero: {
      title: "Sauberer Code, von KI geschrieben, von mir angeleitet.",
      lead: "Frontend-Entwicklung ist heute KI-getrieben. Mit mehr als zehn Jahren Erfahrung leite ich die KI so an, dass der Code skaliert und auch das stimmt, was man nicht sieht.",
      // --- The terminal next to the heading: what I tell the AI, what it
      // shows while it works, and its answer
      prompt: "Mach die Überschrift zu einem echten h1.",
      working: "Ändere …",
    },

    findings: {
      title: "KI baut schnell. Und übersieht, was man ihr nicht sagt.",
      lead: "Das zeigen gerade mehrere große Auswertungen. Drei Punkte davon betreffen Frontends direkt, und bei allen dreien entscheidet nicht das Werkzeug, sondern wer es führt.",
      items: [
        {
          title: "Sieht richtig aus, ist es nicht.",
          text: "Mehr als die Hälfte der befragten Entwickler hat Code bekommen, der korrekt wirkte und erst im Betrieb versagte. Zwei Drittel ärgern sich über Lösungen, die „fast richtig“ sind.",
          me: "Darum lese und teste ich, was die KI liefert, bevor es zu dir geht. Jede Komponente, nicht stichprobenartig.",
          source: "Sonar, Befragung von 1.149 Entwicklern; Stack Overflow Developer Survey 2025",
          href: "https://redwerk.com/blog/vibe-coding-report/",
        },
        {
          title: "Barrierefrei nur auf Nachfrage. Und selbst dann nicht.",
          text: "Fünf KI-Werkzeuge sollten ausdrücklich barrierefreie Websites bauen. Alle 15 Ergebnisse scheiterten schon an der niedrigsten WCAG-Stufe, im Schnitt mit 55 Fehlern pro Seite.",
          me: "Ich baue Tastaturbedienung, Kontraste und Screenreader-Texte von Anfang an ein und prüfe sie, wie ich es bei Audits mache.",
          source: "AudioEye, September 2026 (Studie des Anbieters, via VentureBeat)",
          href: "https://venturebeat.com/ai/we-asked-five-ai-tools-to-build-accessible-websites-all-15-sites-failed",
        },
        {
          title: "Es wächst, aber niemand räumt auf.",
          text: "Der Anteil der Änderungen, die bestehenden Code ordnen, ist seit 2022 von 21 auf unter 4 Prozent gefallen. Kopierte Codeblöcke haben sich fast verdoppelt. So wird jede spätere Änderung teurer.",
          me: "Ich gebe der KI die Struktur vor, Komponenten, Variablen, Grenzen, und halte sie ein. Dann bleibt dein Produkt auch nach dem zehnten Feature änderbar.",
          source: "GitClear, Auswertung von 623 Mio. Code-Änderungen 2023 bis 2026 (via LeadDev)",
          href: "https://leaddev.com/ai/code-maintainability-plummets-in-the-ai-coding-era",
        },
      ],
      sourceLabel: "Quelle",
    },

    services: {
      title: "So kannst du mich einsetzen",
      lead: "Neu, in Bestehendem oder als Verstärkung für dein Team.",
      items: [
        {
          title: "Bauen",
          text: "Eine neue Web-App oder Website, vom Entwurf bis zum Start. Du bekommst Code, den dein Team später selbst lesen und ändern kann.",
        },
        {
          title: "Weiterbauen",
          text: "Ein Produkt, das es schon gibt, oft mit KI gebaut und schnell gewachsen. Ich räume auf, wo es klemmt, und baue weiter. Ohne Neustart.",
        },
        {
          title: "Verstärken",
          text: "Dein Team braucht eine Zeit lang eine Hand mehr. Ich arbeite in eurem Code und in euren Abläufen mit, so lange es nötig ist.",
        },
      ],
    },

    process: {
      title: "So kann es ablaufen",
      lead: "Ein Beispiel. Jedes Projekt ist anders, deshalb stimmen wir den Ablauf auf dich ab.",
      steps: [
        {
          title: "Kennenlernen",
          text: "Du erzählst mir, was gebaut werden soll und was es schon gibt.",
          outcome: "Danach weißt du, ob ich helfen kann.",
        },
        {
          title: "Einlesen",
          text: "Ich lese Entwurf und Code, falls es ihn schon gibt, und kläre, was offen ist, bevor es losgeht.",
          outcome: "Du bekommst ein Angebot mit klarem Umfang.",
        },
        {
          title: "Bauen",
          text: "Ich baue in kurzen Abschnitten und zeige dir regelmäßig den Stand, lauffähig, nicht als Screenshot.",
          outcome: "Du siehst früh, ob es passt.",
        },
        {
          title: "Übergeben",
          text: "Der Code liegt in eurem Repository, mit Erklärung. Dein Team macht weiter, oder ich bleibe dran.",
          outcome: "Es läuft, und ihr könnt es ändern.",
        },
      ],
    },

    oneHand: {
      title: "Wozu noch ein Entwickler, wenn KI den Code schreibt?",
      body: "Weil der Code der letzte Schritt ist. Vorher entscheidet jemand, **was gebaut wird und wie es zu deinem Produkt und deinem Design passt**. Diese Entscheidungen treffe ich, dann lasse ich die KI bauen und **prüfe, was sie liefert**. Dazu kommt, was ein Modell nicht wissen kann: alles, was nach seinem Training erschienen ist. Das lerne ich laufend und gebe es weiter.",
      portraitAlt: "Ercan Cicek",
    },

    faq: {
      title: "Häufige Fragen",
      items: [
        {
          question: "Was kostet das?",
          answer:
            "Das hängt vom Umfang ab: wie viele Screens und Abläufe es sind und ob ich neu baue oder in Bestehendem arbeite. Nach einem unverbindlichen und kostenlosen Erstgespräch bekommst du ein konkretes Angebot.",
        },
        {
          question: "Wann kannst du anfangen?",
          answer: "Das hängt von meiner Auslastung ab. Frag einfach, dann sage ich dir ehrlich, wann es geht.",
        },
        {
          question: "Mit welchen Technologien arbeitest du?",
          answer:
            "React, Vue und TypeScript, Astro für Websites, Webflow, wenn es ohne Entwickler weitergehen soll. Was bei dir schon im Einsatz ist, bleibt. Ich bringe kein Framework mit, nur weil ich es mag.",
        },
        {
          question: "Wir haben schon Entwickler. Passt das?",
          answer:
            "Ja. Ich arbeite in eurem Repository, nach euren Regeln und mit euren Werkzeugen. Wenn ich gehe, bleibt kein Code zurück, den nur ich verstehe.",
        },
        {
          question: "Gehört uns der Code?",
          answer: "Ja, von der ersten Zeile an. Alles liegt in eurem Repository, ohne Abhängigkeit von mir.",
        },
        {
          question: "Ist Barrierefreiheit mit drin?",
          answer:
            "Ja, von Anfang an. Tastatur, Kontraste, Fokus und Screenreader-Texte plane ich direkt mit, so muss später nichts nachgerüstet werden.",
        },
      ],
    },

    contact: {
      title: "Melde dich, wenn ich helfen kann.",
      body: "Egal, ob das Projekt schon läuft oder gerade erst eine Idee ist. Ein kurzes Gespräch reicht, unverbindlich und kostenlos.",
    },
  },
}
