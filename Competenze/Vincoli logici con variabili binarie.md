---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["logical constraints", "vincoli logici", "condizioni booleane", "linearizzazione del prodotto di binarie", "vincolo di cardinalità", "cardinality constraint"]
tags: [competenza, area/ottimizzazione]
---

# Vincoli logici con variabili binarie

> Come tradurre condizioni booleane (or, xor, implicazione, and) e limiti di cardinalità in vincoli lineari su variabili binarie.

## Definizione / enunciato
Associate variabili binarie $x_a,x_b$ alle condizioni logiche $a$, $b$:
- $a$ or $b$ (inclusivo): $x_a+x_b\ge1$;
- $a$ xor $b$: $x_a+x_b=1$;
- $a\Rightarrow b$: $x_a\le x_b$;
- $a\Leftrightarrow b$: $x_a=x_b$;
- not $a$: $1-x_a$.

## Formule chiave
$c=(a\text{ and }b)$: invece del prodotto non lineare $x_c=x_ax_b$ si impone
$$x_c\le x_a,\qquad x_c\le x_b,\qquad x_c\ge x_a+x_b-1 .$$
**Cardinalità:** per limitare a $K<|J|$ il numero di variabili $x_j\ge0$ strettamente positive si introducono binarie $\delta_j$ ($\delta_j=1$ se $x_j>0$) e si impone $\sum_{j\in J}\delta_j\le K$ (il legame fra $x_j$ e $\delta_j$ si scrive con il trucco della grande M).

## Intuizione
Le variabili binarie sono valori di verità: le operazioni logiche diventano disuguaglianze lineari che ammettono solo le combinazioni 0/1 compatibili. Il trucco per l'and evita i prodotti di variabili, che renderebbero il modello non lineare.

## Come si usa
Verifica per l'and: se $x_a=x_b=1$ il terzo vincolo forza $x_c\ge1$; se una delle due è 0 i primi due forzano $x_c=0$. Il vincolo di cardinalità ricompare nella regressione sparsa (contare i coefficienti non nulli).

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap2.pdf` (p. 9, 12).

## Prerequisiti
- [[Programmazione lineare mista-intera]]: variabili binarie come decisioni logiche
- [[Connettivi logici]]: or, and, not tradotti in vincoli

## Porta a
- [[Vincoli con grande M]]: legare binarie e variabili continue

## Collegati
- [[Implicazione logica]]: $a\Rightarrow b$ diventa $x_a\le x_b$
- [[Regressione regolarizzata]]: cardinalità dei coefficienti non nulli
