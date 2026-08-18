import type { DemoCase } from "./types"

// --- No "as const": literal types would force every other language to repeat
// the German strings verbatim.

export const de = {
  common: {
    opensInNewTab: "(öffnet in neuem Tab)",
    contactCta: "Projekt anfragen",
    headingLevel: "Überschrift Ebene {level}",
  },

  routeLabels: {
    accessibility: "Barrierefreiheit",
    imprint: "Impressum",
    privacy: "Datenschutz",
    accessibilityStatement: "Barrierefreiheitserklärung",
  },

  footer: {
    label: "Rechtliches",
    rights: "Alle Rechte vorbehalten.",
    profiles: {
      linkedin: "LinkedIn-Profil",
      xing: "Xing-Profil",
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

  nav: {
    label: "Hauptnavigation",
    skipToContent: "Zum Inhalt springen",
    openMenu: "Menü",
    languageLabel: "Sprache",
  },

  accessibility: {
    meta: {
      title: "Barrierefreiheit für Web-Anwendungen | Ercan Cicek",
      description:
        "Ich prüfe deine Web-Anwendung auf Barrierefreiheit, behebe die Fehler selbst im Code und bringe deinem Team bei, wie es so bleibt. Nach WCAG 2.2 und BFSG.",
    },

    hero: {
      title: "Ich mache deine Anwendung barrierefrei.",
      // --- What VoiceOver announces for the heading above. Shown next to it as
      // the first proof that this page means what it says.
      announcement: "Ich mache deine Anwendung barrierefrei. Überschrift Ebene 1",
      announcementLabel: "So sagt ein Screenreader diese Überschrift an",
      lead: "Ich prüfe deine Anwendung, behebe die Fehler im Code und zeige deinem Team, worauf es ankommt. Alles von einer Person. Du bekommst geprüften Code zurück und keine Liste offener Aufgaben.",
    },

    statement: {
      lead: "Ein Screenreader liest nicht vor, was auf dem Bildschirm steht.",
      emphasis: "Er liest vor, was im Code steht.",
      body: "Passt beides nicht zusammen, merkt es im Team niemand. Man sieht es ja nicht.",
    },

    demo: {
      title: "Fünf Fehler, die man nicht sieht.",
      lead: "Ein ganz normaler Formularschritt, wie er in jedem Portal steht. Fünf Stellen darin sind markiert.",
      formTitle: "Deine Angaben",
      requiredLegend: "Mit {mark} gekennzeichnete Felder sind Pflichtfelder.",
      nameLabel: "Vor- und Nachname",
      nameValue: "Martin Beck",
      emailLabel: "E-Mail-Adresse",
      emailValue: "beck.firma.de",
      emailError: "@ fehlt. Beispiel: name@firma.de",
      markerLabel: "Fehler {number}: {name}",
      columnCommon: "Meistens gebaut",
      columnCorrect: "Richtig ausgezeichnet",
      placeholderBody:
        "Wähle im Formular eine markierte Stelle aus. Hier steht dann, was ein Screenreader dazu sagt und was im Code dafür fehlt.",
      silent: "keine Ansage, das Element wird übersprungen",
      liveTemplate:
        "{name}. Meistens gebaut: {common}. Richtig ausgezeichnet: {correct}. {explanation}",
      closing:
        "Alle fünf entstehen im Code, nicht im Entwurf. Ein Blick auf den Bildschirm zeigt sie nicht, ein Abnahmetermin auch nicht. Man findet sie nur, wenn jemand die Anwendung so bedient wie die Menschen, die darauf angewiesen sind.",
      cases: [
        {
          name: "Symbol ohne Bedeutung",
          explanation:
            "Das Schild ist Dekoration. Fehlt das leere alt-Attribut, liest der Screenreader den Dateinamen vor.",
          common: "Bild, icon-shield-blue-2.svg",
          correct: "",
          isCorrectSilent: true,
        },
        {
          name: "Überschrift, die keine ist",
          explanation:
            "Groß und fett ist keine Überschrift. Ohne h2 taucht die Zeile in der Überschriftenliste nicht auf, mit der blinde Nutzer eine Seite überfliegen.",
          common: "Deine Angaben",
          correct: "Deine Angaben, Überschrift Ebene 2",
        },
        {
          name: "Feld ohne Beschriftung",
          explanation:
            "Der Text darüber sieht aus wie eine Beschriftung, ist aber keine. Ohne label bleibt das Feld namenlos, und der Stern für die Pflichtangabe kommt auch nicht an.",
          common: "Textfeld, Martin Beck",
          correct: "Vor- und Nachname, Pflichtfeld, Textfeld, Martin Beck",
        },
        {
          name: "Fehler, den nur das Auge sieht",
          explanation:
            "Roter Rahmen und rote Schrift sind rein visuell. Ohne aria-invalid und aria-describedby erfährt niemand, dass die Eingabe falsch ist und warum.",
          common: "E-Mail-Adresse, Pflichtfeld, Textfeld, beck.firma.de",
          correct:
            "E-Mail-Adresse, Pflichtfeld, ungültige Eingabe, Textfeld, beck.firma.de, @ fehlt. Beispiel: name@firma.de",
        },
        {
          name: "Schaltfläche ohne Namen",
          explanation:
            "Ein Pfeil ist kein Name. Ohne Text in der Schaltfläche weiß niemand, was beim Klick passiert.",
          common: "Taste",
          correct: "Weiter zur Zusammenfassung, Taste",
        },
      ] as DemoCase[],
    },

    law: {
      title: "Was gilt, und wonach ich prüfe.",
      body: [
        "Seit dem 28. Juni 2025 gilt das Barrierefreiheitsstärkungsgesetz für viele digitale Dienstleistungen. Der technische Maßstab dahinter ist die EN 301 549. Sie verweist derzeit auf WCAG 2.1.",
        "Ich prüfe nach WCAG 2.2, weil die neuere Fassung Lücken schließt, die 2.1 offen lässt. Zieht die Norm nach, bist du schon dort.",
      ],
      facts: [
        { term: "Gesetz", description: "BFSG, in Kraft seit 28. Juni 2025" },
        { term: "Norm", description: "EN 301 549, verweist auf WCAG 2.1" },
        { term: "Mein Maßstab", description: "WCAG 2.2, Stufe AA" },
      ],
    },

    services: {
      title: "Drei Leistungen, eine Person.",
      lead: "Du kannst jede Leistung einzeln buchen. Zusammen geht es schneller, weil nichts übergeben und nichts zweimal erklärt werden muss.",
      items: [
        {
          title: "Prüfen",
          lead: "Ich teste deine Anwendung so, wie sie im Alltag benutzt wird: mit Screenreader und mit der Tastatur. Automatische Werkzeuge finden nur einen Teil der Fehler. Den größeren Teil findet man von Hand.",
          result: "Ein Bericht, mit dem dein Team sofort arbeiten kann",
          items: [
            "Jeder Fehler mit der Stelle im Code und einem fertigen Lösungsweg",
            "Sortiert danach, wen er blockiert, nicht nach Kriteriennummer",
            "Grundlage für deine Barrierefreiheitserklärung",
          ],
        },
        {
          title: "Beheben",
          lead: "Ich baue die Korrekturen selbst ein, in deinem Framework und in deinem Design-System. Du bekommst geprüften Code zurück statt einer Aufgabenliste.",
          result: "Geprüfter Code in deinem Repository",
          items: [
            "React, Vue, Angular oder natives HTML und CSS",
            "Korrigiert an der Komponente, nicht an fünfzig einzelnen Stellen",
            "Dialoge, Menüs, Formulare und Tabellen, die auch nach dem nächsten Release noch stimmen",
          ],
        },
        {
          title: "Beibringen",
          lead: "Damit dieselben Fehler nicht nachwachsen, begleite ich euer Team während der Entwicklung. Nach ein paar Wochen braucht ihr mich dafür nicht mehr.",
          result: "Ein Team, das ohne mich weitermacht",
          items: [
            "Ich prüfe neue Komponenten, bevor sie in den Sprint gehen",
            "Für Designer: Kontrast, Fokus, Zustände und Zielgrößen",
            "Abnahmekriterien, die im Ticket stehen und prüfbar sind",
          ],
        },
      ],
    },

    why: {
      title: "Warum das sonst so oft liegen bleibt.",
      portraitAlt: "Ercan Cicek",
      body: [
        "Die wenigsten Prüfberichte werden ganz umgesetzt, und das liegt selten an Nachlässigkeit. Wer prüft, schreibt allgemein, weil er den Code nicht kennt. Wer den Code kennt, rät bei den Kriterien. Was schon im Entwurf falsch angelegt ist, fällt beiden zu spät auf.",
        "Ich komme aus der Frontend-Entwicklung und dem UI/UX-Design und prüfe nach WCAG. Ich finde einen Fehler, behebe ihn in derselben Komponente und ändere den Entwurf so, dass er nicht wiederkommt. Ohne Übergabe dazwischen.",
        "Am meisten bringt das bei großen Anwendungen: Portalen mit vielen Rollen, gewachsenen Frontends, Design-Systemen, an denen mehrere Teams arbeiten. Dort wirkt jede Korrektur an vielen Stellen gleichzeitig. Jeder Fehler allerdings auch.",
      ],
    },

    contact: {
      title: "Erzähl mir, wo ihr steht.",
      body: "Schreib mir kurz, worum es geht und womit eure Anwendung gebaut ist. Du bekommst eine Einschätzung, was zu tun ist und was es ungefähr kostet. Wenn du mich nicht brauchst, sage ich dir das auch.",
    },
  },
}
