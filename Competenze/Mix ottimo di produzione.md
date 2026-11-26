---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["optimal production mix", "product mix", "mix di produzione", "problema del mix ottimo"]
tags: [competenza, area/ottimizzazione]
---

# Mix ottimo di produzione

> Modello LP che sceglie le quantità da produrre di più prodotti per massimizzare il contributo al profitto, rispettando capacità delle risorse e domanda di mercato.

## Definizione / enunciato
Forma generale (manifattura discreta): domanda $d_i$, contributo al profitto $p_i$, disponibilità $R_j$ della risorsa $j$, fabbisogno $r_{ij}$ del prodotto $i$ sulla risorsa $j$:
$$\max\sum_{i\in[n]}p_ix_i\quad\text{s.t.}\ \sum_{i\in[n]}r_{ij}x_i\le R_j,\ j\in[m];\qquad 0\le x_i\le d_i .$$

## Formule chiave
Esempio delle slide (P1, P2 su 4 gruppi di macchine A-D, 2400 minuti ciascuno, margini $90-45=45$ e $100-40=60$, domanda 100 e 50, costo fisso 5000 euro):
$$\max\ 45x_1+60x_2\ \ \text{s.t.}\ 15x_1+10x_2\le2400,\ 15x_1+35x_2\le2400,\ 15x_1+5x_2\le2400,\ 25x_1+15x_2\le2400,\ 0\le x_1\le100,\ 0\le x_2\le50 .$$

## Intuizione
Le euristiche "intuitive" falliscono: dare priorità a P2 (margine maggiore) porta a $(43.33,50)$ con profitto $-50$; dare priorità a P1 porta a $(96,0)$ con profitto $-680$. Le risorse critiche sono solo B e D (un piano ammissibile per D lo è per A e C): risolvendo $15x_1+35x_2=2400$, $25x_1+15x_2=2400$ si trova $(73.84,36.92)$ con profitto $538.46$. Ma l'idea dei colli di bottiglia non si generalizza a domanda variabile.

## Come si usa
Soluzione grafica: il poliedro ammissibile ha vertici $M_0=(0,0)$, $M_1=(0,50)$, $M_2=(43.33,50)$, $M_3=(73.84,36.92)$, $M_4=(96,0)$; spostando la retta di livello del profitto verso nord-est l'ottimo è $M_3$. Il costo fisso, costante, si omette dall'obiettivo. Imponendo quantità intere l'ottimo diventa $(73,37)$ con profitto 505. Lo stesso esempio è risolto col simplesso (contributo 5538.46, prezzi ombra $1.2692$ e $1.0385$ delle risorse critiche).

## Nei corsi
- **Ricerca operativa** (triennale): esempio guida del corso. Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 8-14); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 4); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap7.pdf` (p. 15-19, 21-22).

## Prerequisiti
- [[Programmazione lineare]]: è un modello LP

## Porta a
- [[Metodo del simplesso]]: esempio numerico risolto passo per passo
- [[Dualità nella programmazione lineare]]: duale e prezzi ombra delle risorse

## Collegati
- [[Pianificazione della produzione multiperiodo]]: estensione dinamica
- [[Programmazione lineare mista-intera]]: con quantità intere l'ottimo scende a 505
- [[Modelli di blending]]: versione per l'industria di processo
