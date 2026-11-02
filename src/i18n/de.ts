import type { DemoCase } from "./types"

// --- No "as const": literal types would force every other language to repeat
// the German strings verbatim.

export const de = {
  common: {
    close: "Schließen",
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
    starter: "Wie geht's?",
    firstName: "Mein Name wird Erdschan ausgesprochen (wie bei Dschungel).",
    mainLinks: "Wohin als Nächstes?",
    languageSwitch: "Keine Sorge, ich spreche beide Sprachen.",
    accessibility: "Gute Wahl!",
    design: "Mein Herzensthema.",
    development: "// TODO: Peppigen Spruch einfügen",
    contact: "Ich freue mich auf deine Nachricht!",
    legal: "Wirklich?",
  },

  home: {
    meta: {
      title: "Barrierefreiheit, UI/UX-Design und Frontend in Düsseldorf | Ercan Cicek",
      description:
        "Ich mache Websites barrierefrei nach BFSG und gestalte und baue Websites und Web-Apps selbst. Selbstständiger Product Engineer in Düsseldorf, über zehn Jahre Design und Code.",
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
            "Ich prüfe deine Website nach WCAG und BFSG, behebe die Fehler selbst im Code und zeige deinem Team, worauf es ankommt.",
        },
        design: {
          title: "UI/UX-Design",
          teaser:
            "Oberflächen, die sich von selbst erklären. Auch für Produkte, die mit KI gebaut wurden und ein eigenständiges Design bekommen sollen.",
        },
        development: {
          title: "Frontend-Entwicklung",
          teaser:
            "Egal mit welcher Technologie: Ich leite die KI so an, dass sie auch baut, was man im Konzept nicht sieht.",
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
          text: "Ich werde **Teil deines Teams**. Entweder im Design, in der Entwicklung oder als Nahtstelle dazwischen.",
        },
        {
          title: "Prüfen",
          text: "Du willst wissen, wo du stehst. Ich prüfe deine Website auf **Barrierefreiheit**, am liebsten direkt in eurem Code und eurem Design in Figma. Du bekommst einen **Bericht**, mit dem dein Team sofort arbeiten kann.",
        },
        {
          title: "Schulen",
          text: "Mit **Mentoring und Schulungen** bringe ich deinem Team bei, was es gerade braucht, zum Beispiel rund um Barrierefreiheit oder das Arbeiten mit KI. So wendet es das Wissen im Alltag sicher an.",
        },
      ],
      note: "Meist beginnen wir mit einer Prüfung auf Barrierefreiheit, häufig wird daraus eine langfristige Zusammenarbeit in mehreren Bereichen. Wo du am besten einsteigst, klären wir im ersten Gespräch.",
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
    },
    contact: {
      title: "Melde dich bei mir.",
      body: "Erzähl mir kurz und unverbindlich, worum es geht, und wir finden gemeinsam eine passende Lösung.",
      email: "E-Mail",
      linkedin: "LinkedIn",
    },
  },

  portfolio: {
    meta: {
      title: "Portfolio: Web-Apps, Websites und Shops | Ercan Cicek",
      description:
        "Ausgewählte Projekte seit 2016: Web-Apps für Industrie, HR-Tech und Bahn, Shops und Websites, Barrierefreiheitsprüfungen. Mit Rolle, Zeitraum und Technik.",
    },
    title: "Portfolio",
    lead: "Ausgewählte Projekte seit 2016.",
    elsewhere: {
      title: "Sonstiges",
      lead: "Mein Code auf GitHub, Mel-Menu als mein erstes Portfolio von 2018 und ein paar Spielwiesen.",
    },
    project: {
      back: "Zum Portfolio",
      visit: "{host} ansehen",
      facts: {
        title: "Eckdaten",
        period: "Zeitraum",
        role: "Rolle",
        employer: "Arbeitgeber",
        client: "Kunde",
        services: "Leistungen",
        skills: "Kenntnisse",
      },
      imageAlt: "{label} auf dem Handy",
      metaTitle: "{label} | Portfolio | Ercan Cicek",
    },
    contact: {
      title: "Soll dein Projekt hier stehen?",
      body: "Erzähl mir, was du vorhast. Ein kurzes Gespräch reicht, unverbindlich und kostenlos.",
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
      lead: "Nutzerfreundliches und einzigartiges Design: für neue Features in bestehenden Produkten und für neue Produkte, mit oder ohne KI-generierten Prototyp.",
    },

    // --- The before/after section: the two pages side by side
    compare: {
      title: "KI liefert das Übliche, nicht die beste Lösung.",
      lead: "Das Ergebnis funktioniert und ist ein guter Anfang. Nur ist es von der Stange: Die Elemente sehen aus wie überall, das Branding passt nicht, die Einzigartigkeit fehlt.",
      example:
        "Ein Beispiel zur Verdeutlichung: der obere Bereich meiner eigenen Startseite, einmal von einer KI aus denselben Inhalten gebaut und einmal von mir gestaltet. Kundenseiten stelle ich hier bewusst keiner KI-Version gegenüber. Im Gespräch zeige ich dir gern Beispiele, die näher an deinem Projekt sind.",
      before: "KI-generiert",
      after: "Von mir gestaltet",
      // --- One line under each picture, what it comes down to
      beforeNote: "Sieht schick aus, aber wie jede andere generierte Seite.",
      afterNote: "Gibt es so nur einmal: Farben, Schrift und Bild gehören zu mir.",
      // --- For screen readers, who do not see the two pictures
      description:
        "KI-generiert: dunkelblauer Hintergrund mit Gitter, das Kürzel „EC.“ als Logo, der Name in weißer Fettschrift, ein blauer Button mit Farbverlauf und daneben das Porträtfoto in einem leuchtenden Rahmen mit dem Zusatz „Fokus: Accessible Web Products“. Von mir gestaltet: dunkles Grau, das Logo mit den spitzen Klammern, der Name groß in Grün und Hellgrau, ein grüner Button und ein angeschnittenes Porträt, das die rechte Hälfte füllt.",
      // --- The info button next to the AI side and its dialog: where the
      // picture comes from, and the prompt as it was sent
      originLabel: "So ist das KI-Ergebnis entstanden",
      originTitle: "So ist das KI-Ergebnis entstanden",
      originText: [
        "Gebaut von Gemini 3.1 Pro am 2. November 2026, aus einem einzigen Prompt ohne weiteren Kontext und ohne Designvorgaben. Gezeigt ist das gelieferte Ergebnis, unverändert.",
        "Mit anderen Prompts und Werkzeugen kommen auch bessere Ergebnisse heraus. Ohne gute Vorarbeit und passende Prompts wirken sie jedoch so gut wie immer wie von der Stange. Dabei helfe ich euch gern.",
      ],
      promptTitle: "Der Prompt",
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
      title: "Ins Design gehören alle Zustände.",
      lead: "Entwürfe konzentrieren sich meist auf den Idealfall. Aber was ist mit unterschiedlichen Textlängen, langen Ladezeiten, leeren oder überlangen Listen und Fehlern? Ich entwerfe jeden dieser Zustände mit, damit euer Team nichts erfinden muss.",
      legend: "Zustand",
      commonLabel: "Nicht mitgedacht",
      designedLabel: "Mitgedacht",
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
      errorText: "Versuch es gleich noch einmal.",
      errorAction: "Erneut versuchen",
      loading: "Loading…",
      loadingTitle: "Projekte werden geladen …",
      loadingSlow: "Dauert es zu lange?",
      loadingAction: "Neu laden",
      items: [
        {
          key: "loading",
          label: "Ladezeit",
          why: "Nicht mitgedacht: ein englisches Wort auf leerer Fläche. Mitgedacht: Hier steht, was gerade lädt, und falls es dauert, gibt es einen Ausweg.",
        },
        {
          key: "empty",
          label: "Leere Liste",
          why: "Nicht mitgedacht: ein leerer Kasten, der aussieht wie ein Fehler. Mitgedacht: Hier steht, warum nichts da ist, und der erste Schritt gleich darunter.",
        },
        {
          key: "error",
          label: "Fehler",
          why: "Nicht mitgedacht: eine Meldung aus dem Code, die niemandem hilft. Mitgedacht: Hier steht, was passiert ist und was man tun kann.",
        },
        {
          key: "long",
          label: "Langer Name",
          why: "Nicht mitgedacht: Ein langer Name schiebt die Stunden aus dem Bild. Mitgedacht: Er bricht um und wird nach zwei Zeilen gekürzt. Echte Namen sind länger als die im Entwurf.",
        },
        {
          key: "normal",
          label: "Idealfall",
        },
      ],
    },

    services: {
      title: "So kann ich helfen",
      lead: "Ich gestalte neue Features oder unterstütze euch beim grundsätzlichen Aufbau eures Produkts.",
      items: [
        {
          title: "Gestalten",
          text: "Neue Produkte und Funktionen, von den ersten Abläufen bis zum klickbaren Prototyp im Designtool eurer Wahl, gern auch direkt als Code.",
        },
        {
          title: "Überarbeiten",
          text: "Dein Produkt funktioniert bereits, ihr wollt aber neue Bereiche oder ein eigenständiges Design. Ich baue auf dem auf, was da ist, ohne dass ihr von vorn anfangt.",
        },
        {
          title: "Designsystem",
          text: "Farben, Schrift, Abstände und Bausteine als feste Regeln. Damit Design und Code dieselbe Sprache sprechen und dein Team nicht jeden Button neu erfindet.",
        },
      ],
    },

    process: {
      title: "So kann es ablaufen",
      lead: "Jedes Projekt ist anders, deshalb stimmen wir den Ablauf auf dich ab. So kann er zum Beispiel für ein Designprojekt aussehen.",
      steps: [
        {
          title: "Kennenlernen",
          text: "Wir lernen uns kennen und sprechen über eure Produkte: wer sie nutzt und worum es geht.",
        },
        {
          title: "Einordnen",
          text: "Ich mache mich kurz mit eurem Designsystem, euren Nutzern und dem bestehenden Produkt vertraut.",
        },
        {
          title: "Gestalten",
          text: "Ich entwerfe das Produkt oder das neue Feature im Designtool eurer Wahl oder direkt im Code und denke dabei alles mit, was die Entwicklung braucht, etwa jeden Zustand.",
        },
        {
          title: "Übergabe",
          text: "Entwurf, Zustände und Tokens gehen mit Erklärung an dein Team. Auf Wunsch baue ich direkt mit.",
        },
      ],
    },

    oneHand: {
      title: "Design, das sich bauen lässt",
      body: "Ich entwickle seit über zehn Jahren selbst Frontends. Deshalb weiß ich, **wie weit ein Entwurf gehen darf**: so weit, dass Entwickler ins Schwitzen kommen, aber **nie so weit, dass er im Code nicht hält**. Und wenn beim Bauen jemand fehlt, bin ich da.",
      portraitAlt: "Ercan Cicek",
    },

    faq: {
      title: "Häufige Fragen",
      items: [
        {
          question: "Wozu Einzigartigkeit im Design?",
          answer:
            "Weil Menschen eine Seite zuerst nach ihrem Aussehen beurteilen. In einer [Studie der Stanford University](https://doi.org/10.1145/997078.997097) drehte sich fast die Hälfte aller Kommentare zur Glaubwürdigkeit von Websites um das Design. Eine Vorlage von der Stange sieht aus wie viele andere.",
        },
        {
          question: "Kannst du direkt in unserem Designsystem arbeiten?",
          answer:
            "Ja, gern, das ist meist am effizientesten: Ich nutze, was da ist, und ergänze, was fehlt. Habt ihr noch keins, bauen wir die Grundlagen zusammen auf.",
        },
        {
          question: "Wie hoch ist dein Stundensatz?",
          answer:
            "Das kommt auf das Buchungsvolumen an. Im unverbindlichen und kostenlosen Erstgespräch nenne ich dir einen konkreten Satz.",
        },
        {
          question: "Sind deine Designs immer barrierefrei?",
          answer:
            "Wenn es für den Zweck sinnvoll ist und ihr es wollt, ja, und ich empfehle es fast immer. Bei einem internen Tool, das nur euer Team nutzt, schreibt das BFSG in der Regel nichts vor. Dann entscheidet ihr, wie weit ihr gehen wollt.",
        },
      ],
    },

    contact: {
      title: "Lass uns über dein Produkt sprechen.",
      body: "Im ersten Gespräch schauen wir uns euer Produkt gemeinsam an, unverbindlich und kostenlos, und besprechen, wie ich euch unterstützen kann.",
    },
  },

  accessibility: {
    meta: {
      title: "Barrierefreiheit prüfen und umsetzen nach BFSG | Ercan Cicek",
      description:
        "Ich prüfe deine Website nach BFSG und WCAG 2.2, behebe die Fehler in Design und Code und schule dein Team. Aus Düsseldorf. Erstes Gespräch unverbindlich und kostenlos.",
    },

    hero: {
      title: "Ich mache deine digitalen Produkte barrierefrei.",
      // --- What a screen reader announces for the heading above, shown next to it
      announcement: "Ich mache deine digitalen Produkte barrierefrei. Überschrift, Ebene 1",
      announcementLabel: "Das sagt ein Screenreader zu dieser Überschrift",
      lead: "Ich prüfe sie nach WCAG und BFSG. Auf Wunsch behebe ich die Fehler selbst in Design und Code und schule dein Team, damit langfristig keine neuen dazukommen.",
    },

    demo: {
      title: "Sieht gleich aus. Aber was, wenn man schlecht sehen kann?",
      lead: "In diesem Fall nutzen viele einen Screenreader, der Inhalte vorliest. Damit er alles richtig ansagt, braucht er klare Strukturen im Code und manchmal zusätzliche Angaben, etwa ob ein Feld Pflicht ist oder eine Eingabe falsch.",
      instruction:
        "Geh mit „Zurück“ und „Weiter“ durch das Formular oder wähl ein Element direkt darin aus. Zu jedem Element siehst du, was ein Screenreader ansagt: einmal mit einem typischen Fehler, einmal richtig gebaut. Warum der Fehler stört, erklärt „Warum ist das ein Problem?“.",
      // --- Desktop only, where the curtain switch is shown
      instructionCurtain: "Mit „Formular unsichtbar“ erlebst du es ohne Bild.",
      commonLabel: "Häufiger Fehler",
      correctLabel: "Richtig gebaut",
      previous: "Zurück",
      next: "Weiter",
      whyButton: "Warum ist das ein Problem?",
      // --- Phones: the pill that leads from the picture down to the announcements
      jump: "Zur Ansage",
      blind: "Formular unsichtbar",
      curtainText: "Jetzt bleibt dir nur noch, was der Screenreader sagt.",
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
            'Richtig gebaut bekommt das Bild im Code eine leere Bildbeschreibung (`alt=""`). Dann überspringt der Screenreader es. Ob ein Bild nur Deko ist, entscheidet, wer die Seite erstellt. Bilder mit relevantem Inhalt brauchen eine kurze Beschreibung.',
          ],
          common: "Bild, icon-shield-blue-2.svg",
          correct: "",
          isCorrectSilent: true,
        },
        {
          name: "Überschrift, die keine ist",
          details: [
            "„Deine Angaben“ ist groß geschrieben und sieht aus wie eine Überschrift. Im Code ist es aber nur normaler Text.",
            "Die meisten Screenreader-Nutzer suchen Inhalte über Überschriften und springen von einer zur nächsten. Das zeigt die große [Umfrage von WebAIM](https://webaim.org/projects/screenreadersurvey11/) unter Screenreader-Nutzern. Fehlt die Überschrift im Code, überspringen sie manchmal diesen Abschnitt.",
            "Richtig gebaut ist es auch im Code eine Überschrift. Wie sie aussieht, bestimmt weiter das Design.",
          ],
          common: "Deine Angaben",
          correct: "Deine Angaben, Überschrift, Ebene 2",
        },
        {
          name: "Feld ohne Beschriftung",
          details: [
            "Über dem Feld steht „Vor- und Nachname“. Für das Auge gehört beides zusammen, im Code aber nicht.",
            "Der Screenreader sagt deshalb nur „Textfeld“, ohne Namen. Wer nicht (gut) sehen kann, muss raten, was hinein soll. Es trifft auch Menschen, die Maus und Tastatur schlecht bedienen können und ihren Computer stattdessen per Sprache steuern, etwa mit der Sprachsteuerung von macOS oder dem Sprachzugriff von Windows. Sie wählen ein Feld aus, indem sie seine Beschriftung aussprechen. Das klappt nur, wenn das Feld im Code so heißt.",
            "Richtig gebaut ist die Beschriftung per Code mit dem Textfeld verbunden. Dann sagt der Screenreader sie mit an. Durch diese Verbindung kann man außerdem auf die Beschriftung klicken, um das Feld zu aktivieren und etwas einzutippen.",
          ],
          common: "Textfeld, Martin Beck",
          correct: "Vor- und Nachname, Pflichtfeld, Textfeld, Martin Beck",
        },
        {
          name: "Fehler nur in Rot",
          details: [
            "Das Feld ist rot umrandet, darunter steht in Rot, was fehlt. Für die meisten heißt das sofort: Fehler.",
            "Aber was, wenn man das Rot nicht oder nicht richtig sieht? Das betrifft blinde Menschen, aber auch Menschen mit Farbsehschwäche, mit wenig Sehkraft und viele Ältere. Und der Screenreader sagt vom Fehler nichts.",
            "Richtig gebaut ist das Feld auch im Code als fehlerhaft markiert, und der Hinweis darunter ist mit ihm verbunden. Dann sagt der Screenreader beides an: Hier ist ein Fehler, und das ist zu tun. Dazu gehört ein Symbol oder ein Wort, damit der Fehler nicht nur an der Farbe hängt.",
          ],
          common: "E-Mail-Adresse, Textfeld, beck.firma.de",
          correct:
            "E-Mail-Adresse, ungültige Eingabe, Textfeld, beck.firma.de. @ fehlt. Beispiel: name@firma.de",
        },
        {
          name: "Button ohne Namen",
          details: [
            "Der Button zeigt nur ein Symbol. Sehende erraten aus dem Symbol und dem Zusammenhang, was er tut.",
            "Das Symbol kann ein Screenreader nicht deuten, es ist nur eine Grafik. Einen Namen hat der Button im Code nicht. Der Screenreader sagt deshalb nur „Taste“. Ob der Klick weiterführt, etwas löscht oder abschickt, erfährt man nicht.",
            "Richtig gebaut bekommt der Button im Code einen Text, den der Screenreader vorliest, zum Beispiel „Weiter zur Zusammenfassung“. Der Text muss nicht sichtbar sein, das Design bleibt gleich.",
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
      notAffectedTitle: "Meist nicht betroffen",
      notAffected:
        "Angebote nur für Firmenkunden und Dienstleistungen sehr kleiner Firmen: weniger als 10 Beschäftigte und höchstens 2 Millionen Euro Jahresumsatz oder Bilanzsumme (§ 3 BFSG)",
    },

    services: {
      title: "So kann ich helfen",
      lead: "Meist beginnen wir mit einer Prüfung, häufig wird daraus eine langfristige Zusammenarbeit. Ich übernehme so viel, wie du brauchst.",
      items: [
        {
          title: "Prüfen",
          text: "Ich prüfe deine Website nach WCAG\u00A02.2, von Hand und mit Werkzeugen, die ich teils selbst entwickelt habe. Zu jedem Fehler bekommst du einen Lösungsvorschlag, mit dem dein Team sofort loslegen kann.",
        },
        {
          title: "Beheben",
          text: "Ich behebe die Fehler direkt selbst, im Code und im Design, egal mit welcher Technologie ihr arbeitet. Jede Änderung kommentiere ich und fasse sie zusammen, damit dein Team sie nachvollziehen kann und weiß, worauf es künftig achten muss.",
        },
        {
          title: "Schulen",
          text: "Mit Schulungen und Mentoring helfe ich deinem Team, Barrierefreiheit von Anfang an mitzudenken und Korrekturschleifen klein zu halten. Gern auch als Qualitätssicherung während Design und Entwicklung, zum Beispiel als eigener Schritt im Review jedes Sprints.",
        },
      ],
    },

    process: {
      title: "So kann es ablaufen",
      lead: "Jedes Projekt ist anders, deshalb stimmen wir den Ablauf auf dich ab. So kann er zum Beispiel für eine Prüfung aussehen.",
      steps: [
        {
          title: "Kennenlernen",
          text: "Wir lernen uns kennen und sprechen über eure Produkte. Ich helfe dir, die Weichen richtig zu stellen.",
        },
        {
          title: "Aufgaben definieren",
          text: "Wir besprechen, was für euch möglich ist, mit euren Zielen im Vordergrund. Dazu gehören auch Preis und Zeitrahmen.",
        },
        {
          title: "Prüfen",
          text: "Ich prüfe die festgelegten Abläufe Schritt für Schritt von Hand und mit Werkzeugen, die ich teils selbst entwickelt habe. Am Ende steht ein Bericht mit einem Lösungsvorschlag zu jedem Befund, verständlich für den jeweiligen Fachbereich, für Entwickler zum Beispiel direkt als Code.",
        },
        {
          title: "Besprechen",
          text: "Entweder ihr geht den Bericht selbst durch und wir klären eure Fragen, oder wir gehen ihn gemeinsam durch. Danach kann dein Team direkt loslegen.",
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
            "Sehr wahrscheinlich, wenn Privatkunden bei dir online etwas kaufen, buchen oder einen Vertrag abschließen.",
        },
        {
          question: "Was kostet eine Prüfung?",
          answer:
            "Das hängt vom Umfang der Prüfung ab: wie viele unterschiedliche Seiten und Abläufe geprüft werden sollen, wie komplex die Seiten sind und in welchem Format ihr euch den Bericht wünscht. Nach einem unverbindlichen und kostenlosen Erstgespräch bekommst du ein konkretes Angebot.",
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
      title: "Melde dich bei mir.",
      body: "Erzähl mir kurz und unverbindlich, worum es geht, und wir finden gemeinsam eine passende Lösung.",
    },
  },
  development: {
    meta: {
      title: "Frontend-Entwicklung mit React, Vue und TypeScript | Ercan Cicek",
      description:
        "Ich baue Frontends, die auch in zwei Jahren noch halten: aus deinem Prototyp, neu oder als Verstärkung für dein Team. KI schreibt mit, die Entscheidungen treffe ich. Das erste Gespräch ist unverbindlich und kostenlos.",
    },

    hero: {
      title: "Sauberer Code, von KI geschrieben, von mir angeleitet.",
      lead: "Frontend-Entwicklung ist heute KI-getrieben. Mit mehr als zehn Jahren Erfahrung leite ich die KI so an, dass der Code skaliert und auch das stimmt, was man nicht sieht.",
      // --- The terminal next to the heading: what I tell the AI, what it
      // shows while it works, and its answer
      prompt: "Mach die Überschrift zu einem echten h1.",
      working: "かしこまりました、先輩 …",
    },

    services: {
      title: "So kann ich euch unterstützen",
      lead: "Mit einem Prototyp als Vorlage, ganz von vorn oder als Teil eures Teams. Gern auch als Brücke zwischen Design und Entwicklung, auf Wunsch mit Barrierefreiheit im Gepäck.",
      items: [
        {
          title: "Vom Prototyp zum Produkt",
          text: "Du hast einen Prototyp, oft mit KI gebaut, und er soll ein richtiges Produkt werden. Ich übernehme den Stand, räume auf, wo es klemmt, und baue weiter. Ohne Neustart.",
        },
        {
          title: "Neu bauen",
          text: "Eine neue Web-App oder Website, vom Entwurf bis zum Start. Du bekommst Code, den dein Team später selbst lesen und ändern kann.",
        },
        {
          title: "Im Team verstärken",
          text: "Dein Team braucht eine Zeit lang eine Hand mehr. Ich arbeite in eurem Code und euren Abläufen mit, stimme Schnittstellen mit dem Backend ab und übergebe so, dass es ohne mich weitergeht.",
        },
      ],
    },

    workingStyle: {
      title: "Womit du rechnen kannst",
      lead: "Was gebaut wird, entscheidet dein Produkt. Wie ich arbeite, bleibt gleich.",
      // --- The technologies as chips under the first point; the last chip
      // stands for whatever the client runs
      stack: ["React", "Vue", "Angular", "Next.js", "Astro", "Shopify", "Webflow"],
      stackYours: "und eures",
      items: [
        {
          title: "Dein Stack, nicht meiner.",
          text: "Welches Framework, welche Sprache, welches CMS: Das ist heute die kleinste Frage. Ich habe mit React, Vue, Angular, Next.js, Astro, Shopify und Webflow gebaut, und in das, was bei dir läuft, lese ich mich ein. Du bekommst keinen Technologiewechsel, nur weil ich einen Favoriten hätte.",
        },
        {
          title: "Genau bis ins Detail.",
          text: "Ein Abstand, der nicht stimmt, ein Fokusrahmen, der fehlt, ein Ladezustand, der springt: Das sehe ich, und das lasse ich nicht stehen. Was die KI liefert, lese und prüfe ich, bevor es zu dir geht.",
        },
        {
          title: "Eigen statt Vorlage.",
          text: "KI-gebaute Oberflächen sehen sich alle ähnlich. Ich gebe die Richtung vor, mit eigenen Komponenten, Tokens und Bewegung, damit dein Produkt aussieht wie deins. Diese Seite ist so entstanden.",
        },
        {
          title: "Skalierbar von Anfang an.",
          text: "Komponenten, Variablen, klare Grenzen: Ich lege die Struktur so an, dass das zehnte Feature so leicht dazukommt wie das erste. Auch wenn der Prototyp schnell und unordentlich gewachsen ist.",
        },
        {
          title: "In deinem Team zu Hause.",
          text: "Ich arbeite in eurem Repository und nach euren Regeln, stimme Schnittstellen mit dem Backend ab und übergebe so, dass dein Team ohne mich weiterkommt. Wenn es hilft, schule ich es.",
        },
        {
          title: "Barrierefrei auf Wunsch.",
          text: "Tastatur, Screenreader, Kontraste und Fokus plane ich mit ein, wenn du es willst, und prüfe sie so, wie ich es in Audits mache.",
        },
      ],
    },

    oneHand: {
      title: "Wozu noch ein Entwickler, wenn KI den Code schreibt?",
      body: "Weil Umsetzen nicht mehr der schwierige Teil ist. Schwierig sind die **Entscheidungen davor**: Skaliert das noch, wenn deine Idee wächst? Was passiert bei schlechtem Internet oder im Fehlerfall? Versteht ein Nutzer sofort, was er tun soll? Diese Fragen stelle ich, bevor die KI baut, und **prüfe danach, was sie liefert**. Dazu kommt, was ein Modell nicht wissen kann: alles, was nach seinem Training erschienen ist.",
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
          answer:
            "Das hängt von meiner Auslastung ab. Frag einfach, dann sage ich dir ehrlich, wann es geht.",
        },
        {
          question: "Wir haben schon Entwickler. Passt das?",
          answer:
            "Ja. Ich arbeite in eurem Repository, nach euren Regeln und mit euren Werkzeugen. Wenn ich gehe, bleibt kein Code zurück, den nur ich verstehe.",
        },
        {
          question: "Gehört uns der Code?",
          answer:
            "Ja, von der ersten Zeile an. Alles liegt in eurem Repository, ohne Abhängigkeit von mir.",
        },
      ],
    },

    contact: {
      title: "Melde dich, wenn ich helfen kann.",
      body: "Egal, ob das Projekt schon läuft oder gerade erst eine Idee ist. Ein kurzes Gespräch reicht, unverbindlich und kostenlos.",
    },
  },
}
