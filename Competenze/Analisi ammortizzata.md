---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [amortized analysis, costo ammortizzato, metodo dell'aggregazione, metodo dei crediti, metodo del potenziale, funzione potenziale]
tags: [competenza, area/informatica]
---

# Analisi ammortizzata

> Valutazione del costo medio per operazione su una sequenza di operazioni nel caso pessimo: le operazioni costose rare vengono "spalmate" su quelle economiche.

## Definizione / enunciato
Tre tecniche:
- **Aggregazione**: si conta il numero totale $T(n)$ di passi elementari per $n$ operazioni e lo si divide per $n$.
- **Crediti**: un fondo comune in cui le operazioni depositano o prelevano crediti per coprire il proprio costo; i crediti depositati devono restare sempre non negativi; il costo ammortizzato di un'operazione è il numero di crediti che deposita.
- **Potenziale**: si definisce una funzione potenziale con $\Phi_{-1}$ iniziale e $\Phi_j\ge0$ dopo l'operazione $j$, $0\le j\le n-1$; il costo ammortizzato è il costo effettivo più la variazione di potenziale.

## Formule chiave
$$\hat c_j=c_j+\Phi_j-\Phi_{j-1},\qquad \sum_{j=0}^{n-1}\hat c_j=\sum_{j=0}^{n-1}c_j+(\Phi_{n-1}-\Phi_{-1}),$$
$$\sum_{j=0}^{n-1}c_j=\sum_{j=0}^{n-1}\hat c_j+(\Phi_{-1}-\Phi_{n-1}).$$
Il costo effettivo totale è quindi maggiorato da quello ammortizzato, $\sum c_j\le\sum\hat c_j$, quando il termine $\Phi_{-1}-\Phi_{n-1}$ non è positivo, cioè $\Phi_{n-1}\ge\Phi_{-1}$ (per esempio con $\Phi_{-1}=0$, visto che $\Phi_j\ge0$). La slide stampa "se $\Phi_{n-1}\le\Phi_{-1}$", con il verso invertito rispetto a quanto segue dalla formula.

## Intuizione
Non è un caso medio probabilistico: vale per ogni sequenza. Il potenziale è un "conto in banca" che le operazioni economiche riempiono e quelle costose svuotano.

## Come si usa
Esempi del corso: array dinamico con raddoppio e dimezzamento (costo $O(n)$ spalmato su almeno $n/2$ operazioni, $O(1)$ ammortizzato); Unisci nelle liste disgiunte ($O(\log m)$ ammortizzato); global rebuilding degli AVL; Move-to-front, dove il potenziale è il numero di inversioni rispetto a OPT.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi cap. 5 (tecniche) e cap. 1 (primo esempio sugli array dinamici). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo05.pdf` (p. 38-40); `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo01.pdf` (p. 8).

## Prerequisiti
- [[Costo computazionale di un algoritmo]]: si estende il caso pessimo alle sequenze
- [[Array dinamico]]: primo esempio di costo spalmato

## Porta a
- Nessuno nel corso.

## Collegati
- [[Union-find]]: costo ammortizzato O(log m) delle unioni
- [[Move-to-front]]: dimostrazione con il potenziale delle inversioni
- [[Albero AVL]]: global rebuilding con costo O(log n) ammortizzato
