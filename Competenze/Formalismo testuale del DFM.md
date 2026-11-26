---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["notazione testuale del data warehouse", "textual formalism", "formalismo testuale"]
tags: [competenza, area/informatica]
---

# Formalismo testuale del DFM

> Notazione testuale, compatibile con Mermaid, con cui il corso chiede di scrivere lo schema concettuale di un data warehouse.

## Definizione / enunciato
Regole delle slide:
- **Tabella dei fatti** all'inizio: etichetta `F`, poi nome e misure tra doppie quadre, separati da `___` (nome, `___` e una misura per riga, come nell'esempio sotto): `F[​[Facts ___ measure 1 ... measure N]​]`.
- **Dimensioni**: gli archi tra attributi e verso il fatto si scrivono con tre trattini `---` a partire dall'etichetta `F`; una riga per ogni dimensione (percorso): `F --- a --- b --- c`.
- **Gerarchie** con divergenze e convergenze: la dimensione si scrive su più righe; la prima è il percorso più lungo, le successive sono sotto-percorsi e iniziano dal primo nodo del sotto-percorso (es. `A --- D --- C`).
- **Archi multipli**: `===` al posto di `---`.
- **Frecce**: `-->`; un testo sull'arco si scrive `--(testo)->`.

## Formule chiave
Esempio completo delle slide (export di vini):
```
F[​[ Export
___
€ tot
Litri tot]​]

F --- Province --- Region --- GeoArea
F --- State --- Continent

F --- OrderSize

F --- Wine --- DOC
Wine --- DOP
Wine --- DOCG

F --- Package

F --- Month --- 2M --- 4M --- Year
Month --- 3M --- 6M --- Year
2M --- 6M
```
Attenzione: in questa nota le doppie quadre contengono uno spazio invisibile (per non essere lette da Obsidian come link); per incollare il codice su mermaid.live riscrivere a mano le doppie parentesi quadre.
Anteponendo `flowchart TB` il codice si visualizza su mermaid.live.

## Intuizione
È la stessa informazione del disegno DFM, linearizzata: ogni riga è un cammino dal fatto verso gli attributi più aggregati, e le righe che non partono da `F` aggiungono rami o convergenze. Nell'esempio le certificazioni (DOC, DOP, DOCG), poche e note a priori, sono attributi booleani legati al vino, come un attributo configurazione (lettura nostra).

## Come si usa
Per un esercizio: scrivere prima la riga del fatto con le misure richieste, poi una riga per dimensione, poi le righe dei sotto-percorsi (es. tempo con mese → bimestre → quadrimestre → anno e mese → trimestre → semestre → anno, più la convergenza bimestre → semestre).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/06 - DW-Formalismo2023.pdf` (pp. 1-4 regole, pp. 6-7 esempio completo e visualizzazione).
- **Business intelligence per big data** (magistrale): stesso documento sulla notazione testuale (tabella dei fatti come etichetta F seguita da nome e misure separati da `___` dentro doppie parentesi quadre, una riga per ogni percorso di dimensione `F --- a --- b --- c`). Fonti: `magistrale/Business intelligence per big data/DW-Formalismo2023.pdf` (pp. 1-8).

## Prerequisiti
- [[Dimensional Fact Model]]: notazione testuale dello schema di fatto

## Porta a
- Nessuno.

## Collegati
- [[Costrutti avanzati del DFM]]: notazione anche per i costrutti avanzati
