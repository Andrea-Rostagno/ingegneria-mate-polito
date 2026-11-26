# Ingegneria Matematica al Politecnico di Torino, come grafo di competenze

Questa repo contiene tutto quello che si impara nel corso di laurea in **Matematica per l'Ingegneria** (triennale e magistrale), diviso in **1965 competenze atomiche** collegate tra loro. Le competenze vengono da **36 insegnamenti** e hanno **6669 collegamenti**.

Ogni competenza è una nota Markdown: una definizione, un teorema, una tecnica o un modello. Ogni nota dice da cosa dipende (*Prerequisiti*), cosa ne discende (*Porta a*) e come compare in ciascun corso (*Nei corsi*).

È un progetto personale di uno studente, non ufficiale del Politecnico.

## Tre modi di usarla

### 1. Nel browser, senza installare niente
Apri il **Brain**: https://andrea-rostagno.github.io/ingegneria-mate-polito/

- **Tutto / Triennale / Magistrale** passa dal grafo dell'intero percorso a quello di un livello.
- Un clic su un insegnamento nella colonna di sinistra apre **il grafo del singolo corso**, con i nomi delle competenze.
- Un clic su un nodo apre la scheda: riassunto, insegnamenti in cui compare, prerequisiti e competenze che ne discendono, tutti cliccabili, più il link alla nota completa.
- La ricerca trova una competenza per nome. Ogni vista ha il suo indirizzo, quindi si può mandare il link a un corso o a un nodo.

### 2. In Obsidian
1. Clona la repo: `git clone https://github.com/Andrea-Rostagno/ingegneria-mate-polito.git`
2. In [Obsidian](https://obsidian.md): *Open folder as vault*, poi scegli la cartella.
3. Apri il grafo (`Ctrl+G`). La configurazione inclusa mostra solo le competenze, con un colore per corso.

Per il grafo di un solo corso, scrivi nel campo *Filtri* del grafo:
```
path:Competenze [corsi:"Analisi 1"]
```
Per tornare al grafo completo lascia solo `path:Competenze`. La cartella `Corsi/` ha una pagina per insegnamento, con le competenze nell'ordine in cui vengono spiegate.

### 3. Con un'AI
La repo è fatta per essere letta da un assistente (Claude Code, Codex, Cursor e simili). Aprila come progetto e fai domande di matematica, probabilità, statistica, numerica, ottimizzazione, finanza, data science o fisica. Le istruzioni in `CLAUDE.md` e `AGENTS.md` dicono all'AI:
- come cercare tra le note;
- di seguire i collegamenti;
- di citare le note usate;
- di dire cosa non è coperto dal materiale.

## Struttura

| Percorso | Contenuto |
|---|---|
| `Competenze/` | Le 1965 note, una per concetto. Frontmatter: `area`, `corsi`, `livello`, `aliases`. |
| `Corsi/` | Una pagina per insegnamento: le competenze in ordine didattico. |
| `index.md` | Catalogo per area e per corso. |
| `_meta/Schema competenze.md` | Regole e template delle note. |
| `_meta/Registro competenze.md` | Tutti i nomi, con alias e corsi. |
| `_meta/mappe/` | La mappa di ogni corso: fonti usate, collegamenti, **dubbi e refusi segnalati**. |
| `docs/` | La pagina del Brain (GitHub Pages). `python tools/build_brain.py` la rigenera dalle note. |

## Insegnamenti

**Triennale (24):** Analisi 1, Algebra lineare, Matematica discreta, Fisica 1, Informatica, Chimica, Analisi 2, Fisica 2, Metodi matematici e probabilità, Metodi numerici, Quantum physics, Ricerca operativa, Meccanica, Geometria differenziale, Istituzioni algebra, Istituzioni topologia, Prob e statistica, Analisi funzionale, Programmazione e calcolo scientifico, Base di dati, Matematica per l'AI, Equazioni alle derivate parziali, Equazioni di fisica matematica, Prova finale (una tesi sulle copule applicate al DAX).

**Magistrale (12):** Processi stocastici, Modelli statistici, Statistica computazionale, Financial engineering, Numerical opt, Ottimizzazione in condizione di incertezza, Dinamiche su network, Data science tecnologie basi di dati, Data science lab, Business intelligence per big data, Blockchain e criptoeconomia, Crittografia.

Non sono inclusi: Business analytics, Gestione dei rischi, Fundamental MLDL, Inglese. La magistrale coperta è un percorso (quello dell'autore), non l'intera offerta.

## Quanto fidarsi

- Le note sono ricavate da slide, lezioni, dispense e libri dei corsi. Non vengono da temi d'esame o raccolte di esercizi.
- Le fonti originali (PDF, slide, libri) **non sono nella repo**. Le note le citano per nome, con lezione e pagina.
- Le slide hanno refusi. Dove una formula non è certa, la nota scrive **"(da verificare sul PDF)"**. La sezione *Dubbi* della mappa del corso elenca i problemi noti.
- **"(non trattato nei corsi)"** indica un concetto citato ma assente dal materiale.
- Le convenzioni cambiano tra corsi: per esempio il segno dell'energia potenziale, o la variabile in cui il prodotto scalare è lineare. La sezione *Nei corsi* di ogni nota le indica.

Le correzioni sono benvenute: apri una issue o una pull request.
