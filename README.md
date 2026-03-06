# Overtourism Lernreise (Flut x Enzensberger x Gröbner)

Dramaturgisch choreografierte, interaktive Reflexionseinheit als **Reise durch eine Lernlandschaft**.

## Neu in dieser Version

- Sichtbarer, animierter Video-Hintergrund (`SwissTourismus.mp4`) mit transparenter Glasoberfläche.
- Mehrere wählbare Reiserouten (inkl. Distance-Learning-Route).
- Stark vertiefte Textarbeit mit
  - Enzensberger-Paradoxon
  - Gröbner **Abgefahren** (insb. Kap. 4-7)
  - Gröbner **Ferienmüde**
  - Wiedmers *Flut* (Dropbox-Link)
- Begegnungsformate als "Reisebekanntschaften".
- Intellektueller Reiseblog inkl. lokaler Speicherung im Browser.
- Lehrerversion: Kommentare pro Blogeintrag plus automatisch generiertes, textgestütztes Feedback (Wiedmer/Enzensberger/Gröbner) mit kritisch-motivierendem Impuls.

## Struktur

- `index.html`: Hauptoberfläche mit Routenwahl
- `styles.css`: Transparenz-/Video-Look + responsive Layout
- `app.js`: Mehr-Routen-Logik, Etappenfortschritt, Debattenkarten, Begegnungen, Bilanztool, Blog
- `docs/choreografie.md`: Route-basierte Durchführung ohne Lektionstakt
- `docs/quellen-und-positionen.md`: Quellenmatrix und inhaltliche Achsen
- `material/*.pdf`: lokale Textgrundlagen

## Start

```bash
cd overtourism-reflexionseinheit
python3 -m http.server 8080
```

Dann im Browser: `http://localhost:8080`

## Lizenz

Der Code steht unter MIT (`LICENSE`).
Urheberrechtlich geschützte Primärtexte sind davon ausgenommen.
