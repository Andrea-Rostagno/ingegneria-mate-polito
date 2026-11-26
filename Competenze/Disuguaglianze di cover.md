---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["cover inequalities", "tagli di cover", "lifted cover inequalities", "piani di taglio", "cutting planes", "branch and cut", "lazy constraints", "faccette"]
tags: [competenza, area/ottimizzazione]
---

# Disuguaglianze di cover

> Tagli validi derivati da un vincolo di tipo zaino: se un insieme di oggetti eccede la capacità, non possono essere selezionati tutti. Ridondanti nel discreto, rafforzano il rilassamento continuo e sono alla base del branch and cut.

## Definizione / enunciato
Per un vincolo binario $\sum_jw_jx_j\le B$, un insieme $C$ di oggetti con $\sum_{j\in C}w_j>B$ (una "cover") dà il taglio
$$\sum_{j\in C}x_j\le|C|-1$$
(forma generale scritta da me a partire dagli esempi delle slide, che non la enunciano).
Esempio delle slide ($2x_1+x_2+6x_3+5x_4\le7$): gli oggetti 1 e 3 pesano 8, quindi $x_1+x_3\le1$; analogamente $x_3+x_4\le1$ e $x_1+x_2+x_4\le2$.

## Formule chiave
Con i tre tagli il bound alla radice dello zaino scende da $36.2$ a $34.6667$, con $\mathbf x=(0.3333,1,0.3333,0.6667)$; ramificando su $x_1$ si ottengono $P_1$: $(0,1,1,0)$, 32 e $P_2$: $(1,0,0,1)$, 34, cioè subito l'ottimo.

## Intuizione
Un taglio non elimina nessun punto intero ammissibile ma "taglia via" vertici frazionari del rilassato, avvicinando $\bar S$ a $\mathrm{conv}(S)$. Le **lifted cover inequalities** rafforzano i tagli fino a ottenere faccette (facce di dimensione massima) del poliedro dello zaino.

## Come si usa
I tagli di cover si generano da qualsiasi vincolo binario puro di un MILP; esistono altre famiglie per variabili intere generiche o miste, e famiglie specifiche (per esempio per il TSP). Generandoli automaticamente durante l'enumerazione si ottengono gli algoritmi **branch and cut**; solver come Gurobi permettono tagli definiti dall'utente (lazy constraints). A volte i tagli non bastano e serve riformulare il modello.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap8.pdf` (p. 14-16).

## Prerequisiti
- [[Problema dello zaino]]: vincolo da cui si derivano i tagli
- [[Rilassamento continuo]]: i tagli lo rafforzano

## Collegati
- [[Algoritmo branch and bound]]: con i tagli diventa branch and cut
- [[Problema del commesso viaggiatore]]: i vincoli di subtour si aggiungono come tagli
- [[Vincoli logici con variabili binarie]]: $x_1+x_3\le1$ dice che 1 e 3 sono incompatibili
