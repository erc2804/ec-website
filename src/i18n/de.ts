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
        "Ercan Cicek | Product Engineer: UI/UX-Design, Frontend-Entwicklung und Barrierefreiheit",
      description:
        "Ich gestalte digitale Produkte, baue sie selbst und mache sie barrierefrei. Product Engineer aus Düsseldorf, über zehn Jahre Design und Code, remote oder vor Ort.",
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
            "Ich prüfe deine Anwendung nach WCAG und BFSG, behebe die Fehler selbst im Code und zeige deinem Team, worauf es ankommt.",
        },
        design: {
          title: "UI/UX-Design",
          teaser:
            "Oberflächen, die sich von selbst erklären. Auch wenn dein Produkt schon mit KI gebaut wurde und jetzt aussieht wie alle anderen.",
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
      lead: "Egal ob Barrierefreiheit, Design oder Entwicklung: Du entscheidest, in welcher Rolle ich dazukomme.",
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
          text: "Du willst wissen, wo du stehst. Ich prüfe deine Anwendung auf **Barrierefreiheit** und schaue mir auf Wunsch auch Design und Code an. Du bekommst einen **Bericht**, mit dem dein Team sofort arbeiten kann.",
        },
        {
          title: "Befähigen",
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

  accessibility: {
    meta: {
      title: "Barrierefreiheit prüfen und umsetzen nach BFSG | Ercan Cicek",
      description:
        "Ich prüfe Websites und Web-Anwendungen auf Barrierefreiheit nach WCAG 2.2 und BFSG, behebe die Fehler in Design und Code und schule dein Team. Das erste Gespräch ist unverbindlich und kostenlos.",
    },

    hero: {
      title: "Ich mache deine Anwendung barrierefrei.",
      // --- What VoiceOver announces for the heading above, shown next to it
      announcement: "Ich mache deine Anwendung barrierefrei. Überschrift, Ebene 1",
      announcementLabel: "Das sagt ein Screenreader zu dieser Überschrift",
      lead: "Ich prüfe Websites und Web-Anwendungen auf Barrierefreiheit nach WCAG und BFSG. Auf Wunsch behebe ich die Fehler selbst, in Design und Code, und schule dein Team, damit keine neuen dazukommen.",
    },

    demo: {
      title: "Sieht gleich aus. Klingt anders.",
      lead: "Menschen, die nicht oder schlecht sehen, nutzen einen Screenreader. Das ist ein Programm, das vorliest, was auf dem Bildschirm ist, auf dem Mac zum Beispiel VoiceOver. Viele Barrieren sieht man deshalb nicht, man hört sie.",
      instruction:
        "Geh das Formular Element für Element durch und vergleiche, was VoiceOver ansagt. Schalt den Bildschirmvorhang ein, dann wird das Bild schwarz.",
      outputLabel: "Was VoiceOver sagt",
      variantLabel: "Umsetzung",
      variantCommon: "Wie es oft gebaut ist",
      variantCorrect: "Wie es sein sollte",
      next: "Nächstes Element",
      // --- Apple's own name for the VoiceOver mode that turns the screen off
      blind: "Bildschirmvorhang",
      curtainText: "Jetzt bleibt nur noch, was der Screenreader sagt.",
      ready: "Noch keine Ansage",
      readyNote: "Drück „Nächstes Element“ oder klick auf einen Teil des Formulars.",
      silent: "Keine Ansage, wird übersprungen.",
      position: "{number} von {total}",
      liveTemplate: "{position}, {variant}: {caption}. {note}",
      formTitle: "Deine Angaben",
      nameLabel: "Vor- und Nachname",
      nameValue: "Martin Beck",
      emailLabel: "E-Mail-Adresse",
      emailValue: "beck.firma.de",
      emailError: "@ fehlt. Beispiel: name@firma.de",
      cases: [
        {
          name: "Symbol ohne Bedeutung",
          fixedName: "Symbol, das übersprungen wird",
          explanation:
            "Reine Dekoration, aber im Code nicht so markiert. Also liest der Screenreader den Dateinamen vor.",
          fix: "Als Dekoration markiert, wird das Symbol einfach übersprungen.",
          common: "Bild, icon-shield-blue-2.svg",
          correct: "",
          isCorrectSilent: true,
        },
        {
          name: "Überschrift, die keine ist",
          fixedName: "Echte Überschrift",
          explanation:
            "Sieht aus wie eine Überschrift, ist im Code aber keine. Wer mit Screenreader von Überschrift zu Überschrift springt, findet sie nicht.",
          fix: "Als Überschrift markiert, findet man sie auch ohne hinzusehen.",
          common: "Deine Angaben",
          correct: "Deine Angaben, Überschrift, Ebene 2",
        },
        {
          name: "Feld ohne Beschriftung",
          fixedName: "Feld mit Beschriftung",
          explanation:
            "Der Text darüber ist nicht mit dem Feld verbunden. Das Feld bleibt namenlos.",
          fix: "Ist die Beschriftung mit dem Feld verbunden, weiß man, was hier hingehört und dass es Pflicht ist.",
          common: "Textfeld, Martin Beck",
          correct: "Vor- und Nachname, Pflichtfeld, Textfeld, Martin Beck",
        },
        {
          name: "Fehler nur in Rot",
          fixedName: "Fehler, der angesagt wird",
          explanation: "Den Fehler zeigt nur die Farbe. Angesagt wird er nicht.",
          fix: "Fehler und Hinweis sind mit dem Feld verbunden, also werden sie mit angesagt.",
          common: "E-Mail-Adresse, Textfeld, beck.firma.de",
          correct:
            "E-Mail-Adresse, ungültige Eingabe, Textfeld, beck.firma.de. @ fehlt. Beispiel: name@firma.de",
        },
        {
          name: "Schaltfläche ohne Namen",
          fixedName: "Schaltfläche mit Namen",
          explanation: "Ein Pfeil ist kein Name. Niemand weiß, was der Klick tut.",
          fix: "Mit Namen ist klar, wohin es geht.",
          common: "Taste",
          correct: "Weiter zur Zusammenfassung, Taste",
        },
      ] as DemoCase[],
    },

    law: {
      title: "Das BFSG in Kürze",
      body: [
        "Seit dem 28. Juni 2025 müssen viele digitale Angebote für Privatkunden barrierefrei sein. Was das konkret heißt, steht in der europäischen Norm EN 301 549. Ihre neue Fassung baut auf den WCAG 2.2 auf, den internationalen Regeln für barrierefreie Websites und Apps. Danach prüfe ich.",
        "Kontrolliert wird das von der Marktüberwachungsstelle der Länder, nach Beschwerden und von sich aus. Sie kann Fristen zur Nachbesserung setzen, Bußgelder verhängen und im äußersten Fall das Angebot untersagen.",
      ],
      affectedTitle: "Meist betroffen",
      affected:
        "Onlineshops, Online-Banking, Buchungs- und Ticketportale, Vertragsabschlüsse und Apps für Privatkunden",
      notAffectedTitle: "Meist nicht",
      notAffected:
        "Reine B2B-Angebote und Kleinstunternehmen mit Dienstleistungen, also unter 10 Beschäftigte und höchstens 2 Mio. € Umsatz",
    },

    services: {
      title: "So kann ich helfen",
      lead: "Meist beginnt es mit einer Prüfung. Danach übernehme ich so viel, wie du brauchst.",
      items: [
        {
          title: "Prüfen",
          text: "Ich prüfe deine Anwendung nach WCAG\u00A02.2, mit Prüftools und von Hand mit Screenreader und Tastatur. Zu jedem Befund bekommst du eine Lösung, mit der dein Team sofort arbeiten kann.",
        },
        {
          title: "Beheben",
          text: "Ich behebe die Fehler selbst, in Figma und direkt in eurem Code, mit euren Komponenten und Werkzeugen. Wird eine Komponente repariert, ist der Fehler überall weg.",
        },
        {
          title: "Befähigen",
          text: "Ich zeige deinem Team an euren eigenen Komponenten, worauf es ankommt. Mit Mentoring und Schulungen denkt es Barrierefreiheit von Anfang an mit.",
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
          outcome: "Du bekommst den Bericht.",
        },
        {
          title: "Besprechen",
          text: "Wir gehen die Befunde gemeinsam durch: was dringend ist, was schnell geht und was warten kann.",
          outcome: "Danach weißt du, was zuerst dran ist, und entscheidest, wer es umsetzt: dein Team oder ich.",
        },
      ],
    },

    oneHand: {
      title: "Prüfung und Umsetzung aus einer Hand",
      body: "Ich komme aus UI/UX-Design und Frontend-Entwicklung. Deshalb endet ein Befund bei mir **nicht mit einer Kriteriennummer**, sondern **mit einer Lösung**, die in euer Design-System passt und sich im nächsten Sprint umsetzen lässt.",
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
            "Plugins und Overlays legen eine Schicht über die Seite, der Code darunter bleibt, wie er ist. Genau dort entstehen die meisten Barrieren. Menschen mit Screenreader bringen ihre Hilfsmittel ohnehin selbst mit und brauchen eine Seite, die richtig gebaut ist.",
        },
      ],
    },

    contact: {
      title: "Lass uns schauen, wo du stehst.",
      body: "Sag mir, um welche Anwendung es geht. Im ersten Gespräch schauen wir kurz gemeinsam drauf, und danach weißt du, wo du stehst und was als Nächstes dran ist. Unverbindlich und kostenlos.",
    },
  },
}
