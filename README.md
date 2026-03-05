# Overtourism Reflexionseinheit

Kontroverse, choreografierte und interaktive Unterrichtseinheit auf Basis von:

- Jakob Wiedmer: *Flut*
- Hans Magnus Enzensberger: *Vergebliche Brandung der Ferne*
- Valentin Groebner: *Abgefahren*
- Thierry Paquot: *Der sanfte Terror des Tourismus*

Zentralfrage: **Warum reisen wir, was gewinnen wir, und wer traegt die Kosten?**

## Was dieses Repo enthaelt

- `index.html`: Interaktive Lernoberflaeche
- `styles.css`: Gestaltung mit geblurtem Video-Hintergrund
- `app.js`: Choreografie, Timer, Kontroversen-Generator, Reisebilanz, Spannungsfeld, Beschlussspeicher
- `assets/SwissTourismus.mp4`: transparenter Hintergrundclip
- `docs/choreografie.md`: Moderationsablauf (45 Minuten)
- `docs/quellen-und-positionen.md`: Text- und Videoeinordnung
- `material/*.pdf`: lokale Textgrundlagen (Wiedmer, Enzensberger, Groebner, Paquot)

## Start

Einfach `index.html` im Browser oeffnen.

Optional mit lokalem Server:

```bash
cd overtourism-reflexionseinheit
python3 -m http.server 8080
```

Dann `http://localhost:8080` aufrufen.

## Didaktische Logik

1. **Aufhaenger** mit aktuellem Konfliktfall (Blick-Video).
2. **Romanfenster** zu Wiedmers *Flut* als Ambivalenzmetapher.
3. **Kontroverse Arena** (Enzensberger vs. Groebner, mit Paquot als Stoerimpuls).
4. **Selbsttest** zum eigenen Reiseverhalten (Nutzen/Kosten).
5. **Spannungsfeld** zwischen touristischer Traumwelt und Schattenseiten.
6. **Transfer** mit messbarem persoenlichem Reisebeschluss.

## Hinweise

- Die Positionstexte sind bewusst zugespitzte **Paraphrasen** fuer die Unterrichtsdebatte.
- Fuer wissenschaftliche Arbeiten immer im Originaltext gegenpruefen und exakt zitieren.
- Das Repo verwendet nur statische Webtechnologien und funktioniert auf Desktop und mobil.
- Vor einem oeffentlichen GitHub-Upload die Rechte an den beigefuegten PDFs klaeren.

## Lizenz

Der Code dieses Repos steht unter der MIT-Lizenz (siehe `LICENSE`).
Urheberrechtlich geschuetzte Quellmaterialien (insbesondere PDFs in `material/`) sind davon ausgenommen und per `.gitignore` fuer oeffentliche Uploads ausgeschlossen.
