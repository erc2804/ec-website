import type { DemoCase } from "./types"

// --- No "as const": literal types would force every other language to repeat
// the German strings verbatim.

export const de = {
  common: {
    close: "Schließen",
    opensInNewTab: "(öffnet in neuem Tab)",
    // --- The copy button on the email tile (ui/ContactCard.astro)
    copyEmail: "E-Mail-Adresse kopieren",
    copied: "E-Mail-Adresse kopiert",
    copyFailed: "Kopieren hat nicht geklappt",
    // --- The default preview image when a page is shared (public/og-default.png)
    shareImageAlt:
      "Ercan Cicek, Porträt. Daneben sein Name und: Design, Code und Barrierefreiheit. Aus einer Hand.",
    contactCta: "Projekt anfragen",
    // --- Under a card whose title is the link: shown, and handed to the link as its description
    more: "Mehr dazu",
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
    casualvocabPrivacy: "Datenschutz CasualVocab",
    startWithWaiAriaPrivacy: "Datenschutz Start with WAI-ARIA",
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
        title: "Datenschutzerklärung | Ercan Cicek",
        description:
          "Welche Daten beim Besuch dieser Website anfallen, wer sie bekommt und welche Rechte du hast. Keine Cookies, kein Tracking.",
      },
      // --- Soft hyphen at the compound seam: as one word it overflows the
      // viewport on a phone. Not in meta.title, where it would reach the tab.
      title: "Datenschutz­erklärung",
      lead: "Hier steht, welche Daten beim Besuch dieser Website anfallen, wer sie bekommt und welche Rechte du hast. Kurz vorweg: keine Cookies, kein Tracking, keine Werbung. Daten fallen nur an, damit die Seite bei dir ankommt, und wenn du mir schreibst: über das Formular, per E-Mail oder im Chat mit Pixel-Ercan.",
      sections: [
        {
          heading: "Verantwortlich",
          body: [
            "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
            { address: ["{legalName}", "{street}", "{postalCode} {city}"] },
            "Du erreichst mich unter {email} oder {phone}.",
          ],
        },
        {
          heading: "Hosting bei Netlify",
          body: [
            "Die Website liegt bei:",
            { address: ["Netlify, Inc.", "101 2nd Street", "San Francisco, CA 94105, USA"] },
            "Wenn du eine Seite aufrufst, verarbeitet Netlify, was technisch nötig ist, damit sie bei dir ankommt:",
            {
              list: [
                "deine IP-Adresse",
                "Datum und Uhrzeit des Aufrufs",
                "die aufgerufene Adresse",
                "Angaben zu Browser und Betriebssystem",
              ],
            },
            "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse ist, die Website sicher und zuverlässig auszuliefern.",
            "Netlify verarbeitet die Daten in meinem Auftrag (Art. 28 DSGVO). Der Vertrag dazu ist Teil der Nutzungsbedingungen von Netlify. Die Daten können in den USA verarbeitet werden. Abgesichert ist das über die Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO), die Teil dieses Vertrags sind. Netlify speichert die Protokolle nur so lange, wie es für Betrieb und Sicherheit nötig ist. Mehr dazu in der [Datenschutzerklärung von Netlify](https://www.netlify.com/privacy/).",
          ],
        },
        {
          heading: "Cookies und Speicher im Browser",
          body: [
            "Diese Website setzt keine Cookies und nutzt keine Analyse- oder Trackingdienste. Schriften und Bilder kommen von dieser Website selbst, nichts wird von anderen Anbietern nachgeladen.",
            "Eine Ausnahme: Wenn du die Sprechblase von Pixel-Ercan mit Escape schließt, merkt sich dein Browser das im Sitzungsspeicher (sessionStorage), damit sie auf der nächsten Seite nicht wieder auftaucht. Der Eintrag sagt nur, dass sie ausgeblendet ist, verlässt deinen Browser nicht und ist weg, sobald du den Tab schließt. Weil er für diese von dir gewünschte Funktion unbedingt erforderlich ist, braucht er keine Einwilligung (§ 25 Abs. 2 Nr. 2 TDDDG).",
          ],
        },
        {
          heading: "Projektanfrage über das Formular",
          body: [
            "Wenn du mir über das Formular eine Anfrage schickst, verarbeite ich, was du einträgst:",
            {
              list: [
                "worum es geht und deine Beschreibung",
                "deine E-Mail-Adresse",
                "wenn du sie angibst: deinen Namen, deine Telefonnummer und ob ich dich anrufen soll",
              ],
            },
            "Beschreibung und E-Mail-Adresse brauche ich, um dir antworten zu können. Ohne sie lässt sich das Formular nicht abschicken.",
            "Ich nutze die Angaben, um deine Anfrage zu beantworten und ein mögliches Projekt mit dir zu besprechen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, weil es um Schritte vor einem möglichen Vertrag geht, die du selbst anstößt.",
            "Das Formular läuft über Netlify Forms. Netlify speichert die Anfrage für mich und prüft sie mit dem Spamfilter Akismet von Automattic, Inc. (USA). Für Auftragsverarbeitung und Übermittlung in die USA gilt dasselbe wie beim Hosting.",
            "Ich lösche die Anfrage bei Netlify, sobald ich sie bearbeitet habe. Wird daraus ein Auftrag, bewahre ich die Unterlagen so lange auf, wie es gesetzliche Aufbewahrungspflichten verlangen, etwa nach § 147 der Abgabenordnung.",
          ],
        },
        {
          heading: "E-Mail und Telefon",
          body: [
            "Wenn du mir schreibst oder mich anrufst, verarbeite ich deine Angaben, um dir zu antworten. Geht es um ein Projekt, ist die Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO, sonst Art. 6 Abs. 1 lit. f DSGVO: mein berechtigtes Interesse, Fragen zu beantworten. Für Löschung und Aufbewahrung gilt dasselbe wie beim Formular.",
            "Mein E-Mail-Postfach liegt bei:",
            { address: ["STRATO GmbH", "Otto-Ostrowski-Straße 7", "10249 Berlin"] },
            "STRATO verarbeitet die E-Mails in meinem Auftrag (Art. 28 DSGVO) innerhalb der EU und löscht die Protokolle des Mailservers nach spätestens sechs Monaten.",
          ],
        },
        {
          heading: "Pixel-Ercan, der KI-Assistent",
          body: [
            "Auf den Seiten [Projekt anfragen](/projekt-anfragen) und [Über mich](/ueber-mich) kannst du mit Pixel-Ercan schreiben. Er ist eine KI. Damit er antworten kann, schickt die Website deine Nachrichten und den bisherigen Verlauf des Chats an den KI-Dienst Anthropic. Beim Projektformular geht außerdem mit, was schon im Formular steht, damit er es ergänzen kann. Der Chat beginnt erst, wenn du selbst eine Nachricht abschickst.",
            "Anbieter ist:",
            {
              address: [
                "Anthropic Ireland, Limited",
                "6th Floor, South Bank House",
                "Barrow Street",
                "Dublin 4, D04 TR29, Irland",
              ],
            },
            "Anthropic verarbeitet die Daten in meinem Auftrag (Art. 28 DSGVO), der Vertrag dazu ist Teil der Geschäftsbedingungen von Anthropic. Die Daten werden auch in den USA verarbeitet. Abgesichert ist das über die Standardvertragsklauseln der EU-Kommission, die Teil dieses Vertrags sind.",
            "Anthropic nutzt die Inhalte nicht, um seine Modelle zu trainieren, und löscht sie nach spätestens 30 Tagen. Länger, bis zu zwei Jahre, bleiben sie nur, wenn die automatischen Sicherheitssysteme von Anthropic eine Nachricht als Verstoß gegen die Nutzungsrichtlinien markieren, oder wenn ein Gesetz es verlangt. Details stehen im [Privacy Center von Anthropic](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-personal-data).",
            "Ich selbst speichere die Chats nicht. Der Verlauf liegt nur in deinem geöffneten Tab und ist weg, wenn du die Seite verlässt. Damit niemand die Chats mit automatisierten Anfragen überlastet, zählt Netlify die Anfragen pro IP-Adresse und lässt höchstens zwölf pro Minute durch.",
            "Rechtsgrundlage ist beim Projektformular Art. 6 Abs. 1 lit. b DSGVO, weil Pixel-Ercan dir hilft, deine Anfrage zu stellen. Auf der Seite Über mich ist es Art. 6 Abs. 1 lit. f DSGVO: mein berechtigtes Interesse, deine Fragen zu mir und meiner Arbeit zu beantworten.",
            "Pixel-Ercan entscheidet nichts über dich. Was er ins Formular einträgt, kannst du ändern, und abgeschickt wird nur, was du selbst abschickst.",
          ],
        },
        {
          heading: "Deine Rechte",
          body: [
            "Du hast das Recht auf:",
            {
              list: [
                "Auskunft über deine Daten (Art. 15 DSGVO)",
                "Berichtigung (Art. 16 DSGVO)",
                "Löschung (Art. 17 DSGVO)",
                "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Datenübertragbarkeit, also deine Daten in einem gängigen Format (Art. 20 DSGVO)",
              ],
            },
            "Schreib mir dafür an {email}.",
          ],
        },
        {
          heading: "Widerspruchsrecht",
          body: [
            "Verarbeite ich Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, kannst du jederzeit widersprechen, wenn sich die Gründe aus deiner besonderen Situation ergeben (Art. 21 DSGVO). Dann verarbeite ich diese Daten nicht weiter, außer es gibt zwingende schutzwürdige Gründe, die deine Interessen überwiegen, oder die Verarbeitung dient der Durchsetzung von Rechtsansprüchen.",
          ],
        },
        {
          heading: "Beschwerde bei der Aufsichtsbehörde",
          body: [
            "Du kannst dich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO). Für mich zuständig ist:",
            {
              address: [
                "Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen",
                "Postfach 20 04 44",
                "40102 Düsseldorf",
                "[ldi.nrw.de](https://www.ldi.nrw.de)",
              ],
            },
          ],
        },
        {
          heading: "Links zu anderen Websites",
          body: [
            "Links zu anderen Websites, etwa zu LinkedIn, sind einfache Links. Erst wenn du einen öffnest, verlässt du diese Website, und es gilt die Datenschutzerklärung des jeweiligen Anbieters.",
          ],
        },
      ],
      statusHeading: "Stand dieser Erklärung",
      statusDate: "3. November 2026",
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
          heading: "Erstellung dieser Erklärung",
          body: [
            "Ich habe die Erklärung am 18. August 2026 erstellt und zuletzt am 3. November 2026 überprüft. Grundlage ist eine Selbstbewertung nach den Prüfschritten des BITV-Tests für WCAG 2.2. Geprüft habe ich mit:",
            {
              list: [
                "der Tastatur, ohne Maus",
                "dem Screenreader VoiceOver",
                "einer Bildschirmbreite von 320 Pixeln und vergrößerten Textabständen",
                "gemessenen Kontrasten für Texte, Rahmen und Fokus",
                "automatischen Werkzeugen wie Lighthouse",
              ],
            },
          ],
        },
        {
          heading: "Wie barrierefrei ist die Website?",
          body: [
            "Die Website ist nach WCAG 2.2 Stufe AA gebaut und erfüllt die Anforderungen weitgehend. Die bekannten Ausnahmen stehen im nächsten Abschnitt.",
            "Als Kleinstunternehmen bin ich zu dieser Erklärung nicht verpflichtet. Sie ist freiwillig.",
          ],
        },
        {
          heading: "Diese Bereiche sind noch nicht vollständig barrierefrei",
          body: [
            {
              list: [
                "Die Sprechblase von Pixel-Ercan folgt auf dem Desktop dem Mauszeiger. Deshalb lässt sie sich mit der Maus nicht erreichen (WCAG 1.4.13). Mit Escape blendest du sie für den Rest des Besuchs aus. Sie zeigt nur kurze Sprüche, du verpasst also nichts.",
                "Mel-Menu, ein kleines Spiel von 2018, ist nicht barrierefrei. Es lässt sich nur mit Maus oder Finger bedienen. Es führt zu Seiten, die du auch über die Navigation erreichst.",
              ],
            },
          ],
        },
        {
          heading: "Bewusste Entscheidungen",
          body: [
            "Die grünen Buttons heben sich vom weißen und grauen Hintergrund mit weniger als 3:1 Kontrast ab. WCAG verlangt das hier nicht: Ein Button braucht keine kontrastreiche Fläche oder Umrandung, wenn ihn etwas anderes als Button erkennbar macht, zum Beispiel seine Beschriftung, seine Position oder der Zusammenhang ([W3C, Understanding 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)). Die dunkelblaue Schrift auf dem Grün hat 6,7:1, und die Buttons stehen dort, wo man sie erwartet: am Ende eines Abschnitts oder Formulars und oben rechts in der Navigation.",
          ],
        },
        {
          heading: "Inhalte anderer Anbieter",
          body: [
            "Links zu anderen Websites, etwa zu LinkedIn, GitHub oder CodePen, führen zu Angeboten, deren Barrierefreiheit ich nicht beeinflussen kann.",
          ],
        },
        {
          heading: "Barriere melden",
          body: [
            "Wenn dir etwas auffällt, das dich blockiert, schreib mir an {email} oder ruf mich an unter {phone}. Ich antworte und sage dir, wann es behoben ist.",
          ],
        },
      ],
      statusHeading: "Stand dieser Erklärung",
      statusDate: "3. November 2026",
    },

    // --- The apps' privacy policies, taken over from the previous site
    casualvocabPrivacy: {
      meta: {
        title: "Datenschutzerklärung CasualVocab | Ercan Cicek",
        description:
          "Welche Daten die App CasualVocab Widget - Japanese verarbeitet und wer sie bekommt.",
      },
      title: "Datenschutz\u00ADerklärung CasualVocab",
      lead: "Ich habe die App CasualVocab Widget - Japanese als kostenlosen Dienst entwickelt. Hier steht, welche Daten bei der Nutzung anfallen, wofür sie genutzt werden und wer sie bekommt.",
      sections: [
        {
          heading: "Verantwortlich",
          body: [
            "Verantwortlich für die App ist:",
            { address: ["{legalName}", "{street}", "{postalCode} {city}"] },
            "Du erreichst mich unter {email}.",
          ],
        },
        {
          heading: "Erhebung und Nutzung von Daten",
          body: [
            "Die App selbst erhebt keine personenbezogenen Daten. Die Dienste Firebase und AdMob, die sie nutzt, können aber personenbezogene Daten verarbeiten, um ihre Leistung zu erbringen. Ich nutze oder teile deine Daten nur so, wie es hier beschrieben ist.",
          ],
        },
        {
          heading: "Dienste anderer Anbieter",
          body: [
            "Die App nutzt diese Dienste von Google:",
            {
              list: [
                "Firebase erfasst Geräteinformationen und Nutzungsdaten der App, um Leistung und Funktion zu verbessern. Mehr dazu in der [Datenschutzerklärung von Firebase](https://firebase.google.com/support/privacy).",
                "AdMob blendet Werbung ein, auch personalisierte, und nutzt dafür Cookies und vergleichbare Kennungen. Mehr dazu in der [Datenschutzerklärung von AdMob](https://support.google.com/admob/answer/6128543?hl=de).",
              ],
            },
          ],
        },
        {
          heading: "Protokolldaten",
          body: [
            "Bei einem Fehler kann Firebase Protokolldaten erfassen: die IP-Adresse deines Geräts, den Gerätenamen, die Version des Betriebssystems, die Konfiguration der App, Nutzungsstatistiken sowie Datum und Uhrzeit der Nutzung.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "Die App selbst setzt keine Cookies. Firebase und AdMob können Cookies für Analyse, Werbung und die Verbesserung ihrer Dienste nutzen. In den Einstellungen deines Geräts kannst du das einschränken. Manche Funktionen der App arbeiten dann eventuell nicht mehr richtig.",
          ],
        },
        {
          heading: "Sicherheit",
          body: [
            "Ich schütze deine Daten mit üblichen technischen Mitteln. Keine Übertragung oder Speicherung im Internet ist aber vollkommen sicher.",
          ],
        },
        {
          heading: "Links zu anderen Websites",
          body: [
            "Die App kann Links zu Websites enthalten, die ich nicht betreibe. Für deren Inhalte und Datenschutz bin ich nicht verantwortlich. Bitte lies dort die jeweilige Datenschutzerklärung.",
          ],
        },
        {
          heading: "Kinder",
          body: [
            "Die App richtet sich nicht an Kinder unter 13 Jahren, und ich erhebe keine Daten von Kindern. Erfahre ich, dass ein Kind unter 13 Jahren personenbezogene Daten übermittelt hat, lösche ich sie sofort.",
          ],
        },
        {
          heading: "Änderungen",
          body: [
            "Ich kann diese Datenschutzerklärung anpassen. Änderungen stehen auf dieser Seite, zusammen mit dem Datum der letzten Aktualisierung.",
          ],
        },
        {
          heading: "Kontakt",
          body: ["Bei Fragen zu dieser Datenschutzerklärung schreib mir an {email}."],
        },
      ],
      statusHeading: "Stand dieser Erklärung",
      statusDate: "3. November 2026, gültig seit 22. Juni 2022",
    },

    startWithWaiAriaPrivacy: {
      meta: {
        title: "Datenschutzerklärung Start with WAI-ARIA | Ercan Cicek",
        description:
          "Die Browser-Erweiterung Start with WAI-ARIA erhebt keine personenbezogenen Daten.",
      },
      title: "Datenschutz\u00ADerklärung Start with WAI-ARIA",
      lead: "Die Browser-Erweiterung Start with WAI-ARIA erhebt keine personenbezogenen Daten. Alles läuft lokal in deinem Browser.",
      sections: [
        {
          heading: "Verantwortlich",
          body: [
            "Verantwortlich für die Erweiterung ist:",
            { address: ["{legalName}", "{street}", "{postalCode} {city}"] },
            "Du erreichst mich unter {email}.",
          ],
        },
        {
          heading: "Was lokal gespeichert wird",
          body: [
            "Die Berechtigung „storage“ nutzt die Erweiterung nur, um deine Einstellungen in deinem Browser zu speichern, zum Beispiel das Farbschema oder ausgeblendete Patterns.",
            "Es werden keine Daten an Server oder andere Anbieter übertragen.",
          ],
        },
        {
          heading: "Kontakt",
          body: ["Bei Fragen zu dieser Datenschutzerklärung schreib mir an {email}."],
        },
      ],
      statusHeading: "Stand dieser Erklärung",
      statusDate: "3. November 2026",
    },
  },

  chatBubble: {
    starter: "Wie geht's?",
    // --- His last line after Escape, before he leaves for the rest of the visit
    dismissed: "Alles klar, ich bin weg.",
    firstName: "Mein Name wird Erdschan ausgesprochen (wie bei Dschungel).",
    mainLinks: "Wohin als Nächstes?",
    languageSwitch: "Keine Sorge, ich spreche beide Sprachen.",
    accessibility: "Gute Wahl!",
    design: "Mein Herzensthema.",
    development: "// TODO: Peppigen Spruch einfügen",
    contact: "Ich freue mich auf deine Nachricht!",
  },

  // --- Pixel-Ercan's chat, the same on the request page and the about page.
  // The page brings its own title, intro and the errors that end in a way out.
  assistantChat: {
    logLabel: "Unterhaltung mit Pixel-Ercan",
    speakerYou: "Du",
    speakerAssistant: "Pixel-Ercan",
    inputLabel: "Deine Nachricht an Pixel-Ercan",
    send: "Senden",
    working: "Pixel-Ercan schreibt …",
    privacyLink: "Mehr dazu in der Datenschutzerklärung",
    showEarlierOne: "1 frühere Nachricht anzeigen",
    showEarlierMany: "{count} frühere Nachrichten anzeigen",
    hideEarlier: "Frühere Nachrichten ausblenden",
    toNewest: "Zur neuesten Nachricht",
    reset: "Chat neu starten",
    errors: {
      stillWorking:
        "Pixel-Ercan schreibt noch. Schick deine Nachricht, sobald seine Antwort da ist.",
      empty: "Schreib Pixel-Ercan erst ein paar Worte, dann legt er los.",
      offline:
        "Du bist gerade offline. Sobald du wieder Netz hast, schick deine Nachricht noch mal. Sie steht noch im Feld.",
      timeout:
        "Pixel-Ercan braucht gerade ungewöhnlich lange. Schick deine Nachricht gleich noch mal, sie steht noch im Feld.",
      tooFast:
        "Pixel-Ercan kommt kaum hinterher. Warte einen Moment und schick deine Nachricht dann noch mal.",
      garbled:
        "Pixel-Ercan hat sich gerade verhaspelt. Schick deine Nachricht noch mal, sie steht noch im Feld.",
    },
  },

  home: {
    meta: {
      title: "Barrierefreiheit, UI/UX-Design und Frontend in Düsseldorf | Ercan Cicek",
      description:
        "Ich mache Websites barrierefrei nach BFSG und gestalte und baue Websites und Web-Apps selbst. Selbstständiger Product Engineer in Düsseldorf, über zehn Jahre Design und Code.",
    },
    hero: {
      eyebrow: ["[Product Engineer]{lang=en}", "Düsseldorf"],
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
      lead: "Mein Code auf GitHub, Mel-Menu als mein erstes Portfolio von 2016 und ein paar Spielwiesen.",
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
      metaTitle: "{label} | Portfolio | Ercan Cicek",
    },
    contact: {
      title: "Melde dich bei mir.",
      body: "Erzähl mir kurz und unverbindlich, worum es geht, und wir finden gemeinsam eine passende Lösung.",
    },
  },

  inquiry: {
    meta: {
      title: "Projekt anfragen | Ercan Cicek",
      description:
        "Erzähl mir, worum es geht: Barrierefreiheit, Design oder Entwicklung. Füll das Formular selbst aus oder lass dir von Pixel-Ercan helfen. Antwort normalerweise in zwei Werktagen.",
    },
    title: "Projekt anfragen",
    lead: "Erzähl mir gerne, wobei ich dich unterstützen darf. Auch eine vage Idee reicht. Füll das Formular selbst aus oder lass dir von Pixel-Ercan (meinem KI-Assistenten) helfen.",
    assistant: {
      title: "Mit Pixel-Ercan ausfüllen",
      intro:
        "Hi, ich bin Pixel-Ercan. Erzähl mir von deinem Projekt, und ich trage alles für dich ins Formular ein.",
      disclosure:
        "Pixel-Ercan ist eine KI. Damit er eintragen kann, geht dein Text an den KI-Dienst Anthropic. Abgeschickt wird nur, was du selbst abschickst.",
      placeholder:
        "Hi Ercan, wir sind ein Onlineshop für Fahrradteile und müssen bis Juni barrierefrei sein. Kannst du prüfen, wo wir stehen? Ich bin Lena, erreichbar unter lena@beispiel.de",
      replyPlaceholder: "Deine Antwort …",
      callbackYes: "Ja, gern",
      callbackNo: "Nein, E-Mail reicht",
      callbackYesMessage: "Ja, ruf mich gern an.",
      callbackNoMessage: "Nein, eine E-Mail reicht.",
      filled: "Eingetragen: {fields}",
      toForm: "Ansehen",
      errors: {
        busy: "Bei Pixel-Ercan ist gerade viel los. Versuch es in einer Minute noch mal oder füll das Formular selbst aus.",
        budget:
          "So viele Leute haben mit Pixel-Ercan geschrieben, dass er für diesen Monat Feierabend macht. Danke für dein Interesse! Füll das Formular bitte selbst aus, das geht genauso schnell.",
        tooLong: "Der Chat ist schon ziemlich lang. Ergänze den Rest bitte direkt im Formular.",
        error:
          "Das ist ein Fehler, mit dem nicht mal Pixel-Ercan gerechnet hat. Versuch es noch mal oder füll das Formular selbst aus.",
      },
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

  about: {
    meta: {
      title: "Über Ercan Cicek | Product Engineer in Düsseldorf",
      description:
        "Ercan Cicek ist selbstständiger Product Engineer in Düsseldorf. Er gestaltet digitale Produkte, entwickelt ihr Frontend und macht sie barrierefrei. Studium an der FH Aachen, seitdem in Design und Entwicklung.",
    },
    title: "Ich bin Ercan, [Product Engineer]{lang=en} aus Düsseldorf.",
    lead: "Ich gestalte digitale Produkte, baue ihr Frontend und sorge dafür, dass alle Menschen sie benutzen können.",
    portraitAlt: "Porträt von Ercan Cicek",
    story: [
      "Als [Product Engineer]{lang=en} gestalte ich digitale Produkte und setze sie im Frontend selbst um. Je nach Projekt mache ich beides oder nur eines davon.",
      "Seit 2016 arbeite ich in Design und Entwicklung und habe Teams in beiden Bereichen geleitet. Weil ich beide Seiten aus eigener Arbeit kenne, kann ich an vielen Stellen helfen: bei Bewerbungstests für [AON](/portfolio/aon), bei DIANA, der Software, mit der die [Deutsche Bahn](/portfolio/deutsche-bahn) Störungen an Weichen früh erkennt, bei der Produktplattform von [Welliba](/portfolio/welliba) oder beim Webshop von [Curanto](/portfolio/curanto), wo ich Design und Frontend geleitet habe.",
      "Mein zweiter Schwerpunkt ist [Barrierefreiheit](/barrierefreiheit), also digitale Produkte so zu bauen, dass alle Menschen sie benutzen können. Ich prüfe nach WCAG und BFSG, behebe die Fehler selbst im Design und im Code und schule Teams, damit sie Barrierefreiheit von Anfang an mitdenken.",
      "Heute arbeite ich KI-gestützt, im Design, im Code und bei der Barrierefreiheit. Die KI erledigt die Fleißarbeit, die Entscheidungen treffe ich: was das Produkt braucht, wer es benutzt und was passiert, wenn etwas schiefgeht. So bekommst du eine Lösung, die sich nach deinen Nutzern richtet, im Tempo der KI.",
    ],
    facts: {
      title: "Kurz gesagt",
      availability: "Verfügbar ab {date}",
      availableNow: "Verfügbar auf Anfrage",
      availabilityNote: "Kann sich kurzfristig ändern, frag einfach.",
      workplace: { term: "Arbeitet", value: "Von Düsseldorf aus, remote, hybrid oder vor Ort" },
      languages: {
        term: "Spricht",
        items: [
          { name: "Deutsch und Türkisch", level: "Muttersprachen" },
          { name: "Englisch", level: "verhandlungssicher" },
          { name: "Japanisch", level: "erweiterte Grundkenntnisse" },
        ],
      },
      industries: {
        term: "Erfahrung in",
        items: ["Industrie", "HR-Tech", "Banken", "öffentlichen Einrichtungen", "E-Commerce"],
      },
      background: {
        term: "Hintergrund",
        items: [
          "[Communication and Multimedia Design]{lang=en} (B.Sc.), FH Aachen, bis 2015",
          "Selbstständig seit 2018",
        ],
      },
    },
    assistant: {
      title: "Frag Pixel-Ercan.",
      lead: "Pixel-Ercan kennt meine Projekte, meine Arbeitsweise und auch ein bisschen Persönliches. Frag ihn, was du wissen willst.",
      intro: "Hi, ich bin Pixel-Ercan. Frag mich, was du über Ercan wissen willst.",
      disclosure:
        "Pixel-Ercan ist eine KI. Damit er antworten kann, geht deine Frage an den KI-Dienst Anthropic.",
      placeholder: "Zum Beispiel: Hat Ercan schon mit Startups gearbeitet?",
      replyPlaceholder: "Deine nächste Frage …",
      suggestionsLabel: "Fragen zum Antippen",
      noScript: "Pixel-Ercan braucht JavaScript. Schreib mir gern direkt an {email}.",
      suggestions: [
        "Ab wann hat Ercan Zeit?",
        "Arbeitet Ercan auch remote?",
        "Warum ist Ercan Barrierefreiheit so wichtig?",
      ],
      errors: {
        busy: "Bei Pixel-Ercan ist gerade viel los. Versuch es in einer Minute noch mal oder schreib mir direkt an {email}.",
        budget:
          "So viele Leute haben mit Pixel-Ercan geschrieben, dass er für diesen Monat Feierabend macht. Danke für dein Interesse! Schreib mir direkt an {email}, ich antworte dir persönlich.",
        tooLong:
          "Der Chat ist schon ziemlich lang. Starte ihn neu oder schreib mir direkt an {email}.",
        error:
          "Das ist ein Fehler, mit dem nicht mal Pixel-Ercan gerechnet hat. Versuch es noch mal oder schreib mir direkt an {email}.",
      },
    },
    contact: {
      title: "Lern mich persönlich kennen.",
      body: "Ein kurzes Gespräch sagt mehr als jede Seite. Unverbindlich und kostenlos.",
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

    states: {
      title: "Ins Design gehören alle Zustände.",
      lead: "Entwürfe konzentrieren sich meist auf den Idealfall. Aber was ist mit unterschiedlichen Textlängen, langen Ladezeiten, leeren oder überlangen Listen und Fehlern? Ich entwerfe jeden dieser Zustände mit, damit euer Team nichts erfinden muss.",
      legend: "Zustand",
      commonLabel: "Nur Idealfall",
      designedLabel: "Alle Zustände",
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
          why: {
            common:
              "Auf leerer Fläche steht nur „[Loading…]{lang=en}“, ein englisches Wort ohne Ausweg.",
            designed:
              "Ein Ladekreis, dazu „Projekte werden geladen …“ und, falls es dauert, „Neu laden“.",
          },
        },
        {
          key: "empty",
          label: "Leere Liste",
          why: {
            common: "Unter der Überschrift ein leerer Kasten, der aussieht wie ein Fehler.",
            designed:
              "„Noch keine Projekte“, ein Satz, warum, und gleich darunter „Projekt anlegen“.",
          },
        },
        {
          key: "error",
          label: "Fehler",
          why: {
            common:
              "Nur die Meldung aus dem Code: „[Error: Request failed with status 500]{lang=en}“.",
            designed:
              "„Die Projekte konnten nicht geladen werden“, dazu, was man tun kann, und „Erneut versuchen“.",
          },
        },
        {
          key: "long",
          label: "Langer Name",
          why: {
            common: "Der lange Name läuft über den Rand und schiebt die Stunden aus dem Bild.",
            designed:
              "Der Name bricht um und wird nach zwei Zeilen gekürzt, die Stunden bleiben sichtbar. Echte Namen sind länger als die im Entwurf.",
          },
        },
        {
          key: "normal",
          label: "Idealfall",
          why: {
            common: "Drei Projekte mit ihren Stunden, alles passt.",
            designed: "Sieht genauso aus. Den Unterschied machen die anderen Zustände.",
          },
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
          title: "Prototyp ausbauen",
          text: "Du hast einen Prototyp, oft mit KI gebaut, und er soll ein richtiges Produkt werden. Ich übernehme den Stand, räume auf, wo es klemmt, und baue weiter. Ohne Neustart.",
        },
        {
          title: "Neu entwickeln",
          text: "Eine neue Web-App oder Website, vom Entwurf bis zum Start. Du bekommst Code, den dein Team später selbst lesen und ändern kann.",
        },
        {
          title: "Im Team mitarbeiten",
          text: "Dein Team braucht eine Zeit lang eine Hand mehr. Ich arbeite in eurem Code und euren Abläufen mit, stimme Schnittstellen mit dem Backend ab und übergebe so, dass es ohne mich weitergeht.",
        },
      ],
    },

    // --- Why vibe coding alone is not enough, for people who don't write code:
    // three things a prototype often lacks, each in plain words, once as it
    // tends to go and once what a product needs. Only the security card holds
    // a figure, and it links its source.
    vibeCoding: {
      title: "Warum Vibe-Coding allein nicht reicht.",
      lead: "Vibe-Coding heißt: Software mit KI bauen, ohne den Code zu lesen, den sie schreibt. Für den Anfang ist das großartig: Jeder kann sofort ausprobieren, was er sich vorstellt, und Design und Entwicklung bekommen die beste Vorlage, die man sich wünschen kann. Ein fertiges Produkt ist es aber noch nicht.",
      cards: [
        {
          key: "data",
          title: "Daten schützen",
          prototype:
            "Im Prototyp sieht oft jeder alles. [Matt Palmer hat 2025](https://mattpalmer.io/posts/statement-on-CVE-2025-48757/) 1.645 Apps aus dem KI-Baukasten Lovable geprüft: Bei 170 konnte jeder fremde Daten lesen.",
          product: "Ein Produkt zeigt jedem nur seine eigenen Daten.",
        },
        {
          key: "errors",
          title: "Fehler abfangen",
          prototype:
            "Geht etwas schief, bleibt die Seite oft einfach leer, und niemand weiß, warum.",
          product: "Ein Produkt sagt, was los ist, und hilft weiter.",
        },
        {
          key: "growth",
          title: "Mitwachsen",
          prototype:
            "Mit zehn Testkunden läuft alles. Mit tausenden wird es zäh, und jede neue Funktion dauert länger.",
          product: "Ein Produkt bleibt schnell und verständlich, auch wenn es wächst.",
        },
      ],
      sources:
        "Die Definition von Vibe-Coding stammt von [Simon Willison](https://simonwillison.net/2025/Mar/19/vibe-coding/), den Begriff hat [Andrej Karpathy](https://x.com/karpathy/status/1886192184808149383) im Februar 2025 geprägt.",
    },

    oneHand: {
      title: "Wozu noch ein Entwickler, wenn KI den Code schreibt?",
      body: "Weil Umsetzen nicht mehr der schwierige Teil ist. Schwierig sind die **Entscheidungen davor**: Skaliert das noch, wenn deine Idee wächst? Was passiert bei schlechtem Internet oder im Fehlerfall? Versteht ein Nutzer sofort, was er tun soll? Diese Fragen stelle ich, bevor die KI baut, und **prüfe danach, was sie liefert**.",
      portraitAlt: "Ercan Cicek",
    },

    faq: {
      title: "Häufige Fragen",
      items: [
        {
          question: "Mit welchen Frameworks arbeitest du?",
          answer:
            "Mit dem, was bei euch läuft. Welches Framework, welche Sprache, welches CMS: Das ist heute die kleinste Frage. Ich lese mich ein, und einen Technologiewechsel gibt es nur, wenn er euch wirklich etwas bringt.",
        },
        {
          question: "Schreibst du den Code selbst oder die KI?",
          answer:
            "Beides. Die KI sorgt für die Menge, ich für die Qualität: Ich gebe Architektur und Regeln vor, dirigiere sie und schreibe selbst, wo es darauf ankommt. Ein Vibe-Coder bin ich nicht. Es geht nichts raus, was ich nicht verstanden und geprüft habe.",
        },
        {
          question: "Unser Prototyp ist mit KI gebaut. Kannst du darauf aufbauen?",
          answer:
            "Meistens ja. Ich schaue mir zuerst den Code an und sage dir ehrlich, was bleiben kann und was neu gebaut werden sollte.",
        },
        {
          question: "Machst du auch das Backend?",
          answer:
            "Die Grundlagen, ja. Mit KI lässt sich heute alles schreiben, aber nicht alles sollte man so schreiben: Ein Backend gehört in erfahrene Hände, genau wie ein Frontend. Mit eurem Backend stimme ich die Schnittstellen eng ab, auf Wunsch gebe ich die Endpunkte vor, die das Frontend braucht, bis zur Struktur von Anfrage und Antwort.",
        },
        {
          question: "Wie hoch ist dein Stundensatz?",
          answer:
            "Das kommt auf das Buchungsvolumen an. Im unverbindlichen und kostenlosen Erstgespräch nenne ich dir einen konkreten Satz.",
        },
      ],
    },

    contact: {
      title: "Lass uns sprechen.",
      body: "Egal, ob das Projekt schon läuft oder gerade erst eine Idee ist. Ein kurzes Gespräch reicht, unverbindlich und kostenlos.",
    },
  },
}
