---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["set covering", "set partitioning", "set packing", "problema di copertura"]
tags: [competenza, area/ottimizzazione]
---

# Set covering, partitioning e packing

> Tre modelli binari su una famiglia di sottoinsiemi: coprire ogni oggetto almeno una volta a costo minimo, esattamente una volta, o al più una volta.

## Definizione / enunciato
Dati un insieme $I$ di $m$ oggetti e una famiglia di $n$ sottoinsiemi $S_j\subset I$, descritti dalla matrice di incidenza $A\in\mathbb R^{m\times n}$ con $a_{ij}=1$ se l'oggetto $i$ appartiene a $S_j$. Ogni sottoinsieme ha costo $c_j$; $x_j=1$ se $S_j$ è selezionato.

**Set covering:** ogni oggetto in almeno un sottoinsieme scelto, a costo minimo:
$$\min\sum_{j=1}^nc_jx_j\ \ \text{s.t.}\ \sum_{j=1}^na_{ij}x_j\ge1,\ i\in[m];\quad x_j\in\{0,1\}.$$

## Formule chiave
$$\text{covering: }A\mathbf x\ge\mathbf 1_m,\qquad\text{partitioning: }A\mathbf x=\mathbf 1_m,\qquad\text{packing: }A\mathbf x\le\mathbf 1_m,\qquad\mathbf x\in\{0,1\}^n .$$
Nel packing è naturale passare a un problema di massimo.

## Intuizione
Ogni colonna di $A$ è una "soluzione parziale ammissibile" (un turno, un percorso, un gruppo): i vincoli complicati si nascondono nella generazione delle colonne, e il modello resta semplice.

## Come si usa
Covering e partitioning sono la base di modelli per situazioni con molti vincoli difficili da scrivere esplicitamente; si usano approcci di **column generation**, in cui le colonne vengono generate dinamicamente (per esempio nel vehicle routing).

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap2.pdf` (p. 5-6).

## Prerequisiti
- [[Programmazione lineare mista-intera]]: modelli binari puri

## Porta a
- [[Formulazioni basate su colonne]]: colonne come pattern ammissibili

## Collegati
- [[Problema di assegnamento]]: vincoli di partizione $=1$ su entrambi i lati
- [[Vehicle routing problem]]: citato come caso di column generation
- [[Problema dello zaino]]: altro modello binario standard
