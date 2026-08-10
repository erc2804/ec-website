import type { Announcement } from "./types"

// --- No "as const": literal types would force every other language to repeat
// the German strings verbatim.

export const de = {
  accessibility: {
    meta: {
      title: "Barrierefreiheit für Web-Anwendungen | Ercan Cicek",
      description:
        "Ich prüfe deine Web-Anwendung auf Barrierefreiheit, behebe die Fehler selbst im Code und bringe deinem Team bei, wie es so bleibt. Nach WCAG 2.2 und BFSG.",
    },
    eyebrow: "Barrierefreiheit",
    title: "Ich mache deine Anwendung barrierefrei.",
    lead: "Ich prüfe deine Anwendung, behebe die Fehler im Code und zeige deinem Team, worauf es ankommt. Alles von einer Person. Am Ende hast du eine Anwendung, die funktioniert — und keine Liste mit offenen Aufgaben.",
    cta: "Projekt anfragen",

    problem: {
      title: "Das Problem sieht man nicht.",
      body: "Ein Screenreader liest nicht vor, was auf dem Bildschirm steht. Er liest vor, was im Code steht. Passt beides nicht zusammen, merkt es im Team niemand — man sieht es ja nicht. Hier ist ein ganz normaler Formularschritt: Links steht, was ein Screenreader dazu sagt, wenn er gebaut ist wie meistens. Rechts, wenn er richtig gebaut ist.",
    },

    invisible: {
      title: "Fünf Fehler, die man im Entwurf nicht sieht.",
      body: [
        "Alle fünf entstehen im Code, nicht im Design. Ein Blick auf den Bildschirm zeigt sie nicht, ein Abnahmetermin auch nicht. Man findet sie nur, wenn jemand die Anwendung so bedient wie die Menschen, die darauf angewiesen sind.",
        "Seit dem 28. Juni 2025 gilt das Barrierefreiheitsstärkungsgesetz für viele digitale Dienstleistungen. Der technische Maßstab dahinter ist die EN 301 549, die derzeit auf WCAG 2.1 verweist. Ich prüfe nach WCAG 2.2: Die neuere Fassung schließt Lücken, die 2.1 offen lässt — und wenn die Norm nachzieht, bist du schon dort.",
      ],
    },

    services: {
      title: "Drei Schritte, eine Person.",
      lead: "Du kannst jeden Schritt einzeln buchen. Zusammen geht es schneller, weil nichts übergeben und nichts zweimal erklärt werden muss.",
      items: [
        {
          step: "01",
          title: "Prüfen",
          lead: "Ich teste deine Anwendung so, wie sie im Alltag benutzt wird: mit Screenreader und mit der Tastatur. Automatische Werkzeuge finden nur einen Teil der Fehler, den größeren Teil findet man von Hand.",
          items: [
            "Jeder Fehler mit der Stelle im Code und einem fertigen Lösungsweg",
            "Sortiert danach, wen er blockiert — nicht nach Kriteriennummer",
            "Grundlage für deine Barrierefreiheitserklärung",
          ],
        },
        {
          step: "02",
          title: "Beheben",
          lead: "Ich baue die Korrekturen selbst ein, in deinem Framework und in deinem Design-System. Du bekommst geprüften Code zurück statt einer Aufgabenliste.",
          items: [
            "React, Vue, Angular oder natives HTML und CSS",
            "Korrigiert an der Komponente, nicht an fünfzig einzelnen Stellen",
            "Dialoge, Menüs, Formulare und Tabellen, die auch nach dem nächsten Release noch stimmen",
          ],
        },
        {
          step: "03",
          title: "Beibringen",
          lead: "Damit dieselben Fehler nicht nachwachsen, begleite ich euer Team während der Entwicklung. Nach ein paar Wochen braucht ihr mich dafür nicht mehr.",
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
      body: [
        "Die wenigsten Prüfberichte werden ganz umgesetzt, und das liegt selten an Nachlässigkeit. Wer prüft, kennt den Code nicht und schreibt deshalb allgemein. Wer den Code kennt, kennt die Kriterien nicht und rät. Und was schon im Entwurf falsch angelegt ist, fällt beiden zu spät auf.",
        "Ich komme aus der Frontend-Entwicklung und dem UI/UX-Design und prüfe nach WCAG. Deshalb kann ich einen Fehler finden, ihn in derselben Komponente beheben und den Entwurf so ändern, dass er nicht wiederkommt. Ohne Übergabe dazwischen.",
        "Am meisten bringt das bei großen Anwendungen: Portalen mit vielen Rollen, gewachsenen Frontends, Design-Systemen, an denen mehrere Teams arbeiten. Dort wirkt jede Korrektur an vielen Stellen gleichzeitig — jeder Fehler allerdings auch.",
      ],
    },

    contact: {
      title: "Erzähl mir, wo ihr steht.",
      body: "Schreib mir kurz, worum es geht und womit eure Anwendung gebaut ist. Du bekommst eine Einschätzung, was zu tun ist und was es ungefähr kostet. Wenn du mich nicht brauchst, sage ich dir das auch.",
    },

    demo: {
      instruction: "Tippe ein Element an — darunter siehst du, was ein Screenreader dazu sagt.",
      requiredLegend: "Mit {mark} gekennzeichnete Felder sind Pflichtfelder.",
      formTitle: "Deine Angaben",
      nameLabel: "Vor- und Nachname",
      nameValue: "Martin Beck",
      emailLabel: "E-Mail-Adresse",
      emailValue: "beck.firma.de",
      emailError: "@ fehlt. Beispiel: name@firma.de",
      columnCommon: "Gebaut wie meistens",
      columnCorrect: "Richtig ausgezeichnet",
      placeholder: "Tippe oben ein Element an.",
      silent: "keine Ansage, das Element wird übersprungen",
      liveTemplate: "Gebaut wie meistens: {common}. Richtig ausgezeichnet: {correct}.",
      targets: {
        symbol: "Symbol",
        heading: "Überschrift",
        nameField: "Eingabefeld Vor- und Nachname",
        emailField: "Eingabefeld E-Mail-Adresse",
        submit: "Schaltfläche mit Pfeilsymbol",
      },
      announcements: [
        { common: "Bild, icon-shield-blue-2.svg", correct: "", isCorrectSilent: true },
        { common: "Deine Angaben", correct: "Deine Angaben, Überschrift Ebene 2" },
        {
          common: "Textfeld, Martin Beck",
          correct: "Vor- und Nachname, Pflichtfeld, Textfeld, Martin Beck",
        },
        {
          common: "E-Mail-Adresse, Pflichtfeld, Textfeld, beck.firma.de",
          correct:
            "E-Mail-Adresse, Pflichtfeld, ungültige Eingabe, Textfeld, beck.firma.de, @ fehlt. Beispiel: name@firma.de",
        },
        { common: "Taste", correct: "Weiter zur Zusammenfassung, Taste" },
      ] as Announcement[],
    },
  },
}
