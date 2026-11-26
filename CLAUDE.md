# Istruzioni per l'assistente AI

Questa repo è un wiki di **1965 competenze atomiche** del corso di laurea in Matematica per l'Ingegneria (Politecnico di Torino, triennale e magistrale, 36 insegnamenti). Usala come base di conoscenza per rispondere a domande di matematica, probabilità, statistica, fisica, metodi numerici, ottimizzazione, finanza, data science, informatica e crittografia. Rispondi nella lingua dell'utente.

## Come cercare (dal più veloce al più lento)
1. **Per nome o alias.** Ogni file `Competenze/<Nome>.md` si chiama come il concetto (italiano con accenti, nome internazionale se d'uso: "Moto browniano", "Value at Risk"). Cerca con Glob `Competenze/<nome>*.md` oppure con Grep su `aliases:` in `Competenze/`. `_meta/Registro competenze.md` elenca tutti i nomi con alias e corsi.
2. **Per corso o area.** Usa il frontmatter: `corsi: [..]`, `area:` (probabilita, statistica, analisi, algebra-geometria, numerica, ottimizzazione, finanza, data-ml, informatica, fisica, network), `livello:` (triennale, magistrale). `Corsi/<Corso>.md` elenca le competenze di un corso in ordine didattico.
3. **Seguendo i link.** Ogni nota ha le sezioni **Prerequisiti** (da cosa dipende), **Porta a** (cosa ne discende) e **Collegati** (analoghi, casi particolari, contrasti), con il motivo dopo i due punti. Per una dimostrazione o una derivazione, ricostruisci la catena dei prerequisiti.
4. **Dentro la nota.** Trovi enunciato, formule chiave, intuizione, come si usa (con esempio), e **Nei corsi**: come compare in ogni corso, con le notazioni diverse e le fonti originali (`percorso/file.pdf`, lezione e pagina). Le fonti NON sono nella repo.

## Come rispondere
- Basati sulle note e **citale** (nome della nota e corso). Quello che aggiungi da conoscenza generale va detto esplicitamente.
- Se una formula è marcata **"(da verificare sul PDF)"**, oppure la mappa del corso (`_meta/mappe/<Corso>.md`, sezione Dubbi) segnala un refuso, dillo e non presentarla come certa.
- **"(non trattato nei corsi)"** vuol dire che il concetto non è nel materiale: non c'è una nota.
- Le convenzioni cambiano tra corsi (segni, normalizzazioni, linearità del prodotto scalare): la sezione *Nei corsi* le segnala; dichiara quale convenzione usi.
- Se la domanda non è coperta dal wiki, dillo prima di rispondere con conoscenza generale.

## Se modifichi o aggiungi note
- Regole e template in `_meta/Schema competenze.md`: un concetto = una nota; se compare in più corsi si estende la stessa nota nella sezione "Nei corsi".
- Wikilink solo tra competenze, con il motivo dopo i due punti; le fonti si citano in backtick, mai come wikilink.
- Nessuna formula a memoria: solo da fonti, altrimenti "(da verificare sul PDF)".
- Dopo le modifiche rigenera la pagina del grafo con `python tools/build_brain.py`.
