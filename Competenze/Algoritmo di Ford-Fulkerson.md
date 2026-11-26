---
tipo: competenza
area: ottimizzazione
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Ford-Fulkerson algorithm", "Ford e Fulkerson", "grafo residuo", "residual graph", "capacità residua", "residual capacity", "cammino aumentante", "augmenting path", "algoritmo di Edmonds-Karp", "Edmonds-Karp", "algoritmo di Dinic"]
tags: [competenza, area/ottimizzazione]
---

# Algoritmo di Ford-Fulkerson

> Algoritmo iterativo che parte dal flusso nullo e lo aumenta lungo cammini del grafo residuo finché la destinazione non è più raggiungibile: termina con un flusso massimo e con un taglio minimo.

## Definizione / enunciato
Si parte da $f^{(0)}=0$. Al passo $t$:
- **capacità residua** $c^{(t)}=c-f^{(t)}$;
- **grafo residuo** $\mathcal G_t=(\mathcal V,\mathcal E_t)$: $e\in\mathcal E_t$ se $e\in\mathcal E$ e $c^{(t)}_e>0$, oppure se $e$ è il rovescio di un arco $\bar e\in\mathcal E$ con $f^{(t)}_{\bar e}>0$;
- **insieme raggiungibile** $\mathcal U_t$ = nodi raggiungibili da $o$ in $\mathcal G_t$;
- se $d\notin\mathcal U_t$ l'algoritmo si ferma; altrimenti si sceglie un cammino $o$-$d$ $\gamma^{(t)}=(e_1,\dots,e_l)$ in $\mathcal G_t$, si pone $\varepsilon_t$ uguale al minimo lungo il cammino delle capacità residue (o dei flussi sugli archi percorsi al contrario) e si aggiorna $f^{(t+1)}$ aggiungendo $\varepsilon_t$ sugli archi diretti e togliendolo su quelli percorsi al contrario.

## Formule chiave
- Quando si ferma, il throughput è pari alla capacità del taglio $\mathcal U_t$: è il passo $\tau^*_{od}\ge c^*_{od}$ del teorema max-flow min-cut.
- Capacità intere positive: al più $c^*_{od}$ passi e flusso intero. Capacità razionali $c_e=n_e/m$: al più $c^*_{od}\cdot m$ passi.
- Con capacità irrazionali un'implementazione ingenua può non convergere. Scegliendo il cammino aumentante più corto si ottiene **Edmonds-Karp**, $O(|\mathcal V||\mathcal E|^2)$; Dinic $O(|\mathcal V|^2|\mathcal E|)$, con alberi dinamici $O(|\mathcal V||\mathcal E|\log|\mathcal V|)$.
*(La formula esatta di $\varepsilon_t$ e del vettore di aggiornamento $\chi^{(h)}$ è a p. 32: da verificare sul PDF.)*

## Intuizione
Gli archi all'indietro del grafo residuo permettono di "pentirsi" di scelte precedenti: un cammino aumentante può deviare flusso già instradato. Senza di essi l'algoritmo greedy si blocca in un massimo locale.

## Come si usa
Esempio delle slide con $c=(2,2,3,4,2)$: scegliendo $\gamma^{(0)}=(e_1,e_4)$ ($\varepsilon_0=2$) e poi $(e_2,e_5)$ ($\varepsilon_1=2$) si arriva a $f=(2,2,0,2,2)$ con throughput 4 e $\mathcal U_2=\{o\}$. Partendo invece da $(e_1,e_3,e_5)$ serve il passo $(e_2,e_8,e_4)$ che usa l'arco rovescio di $e_3$, e si ottiene lo stesso $f$. Applicato alla rete bipartita ausiliaria, calcola un matching massimo.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 3, "Ford and Fulkerson's algorithm" ed esempio svolto. Fonti: `magistrale/Dinamiche su network/slide/Slides-3-Connectivity+NetworkFlows.pdf` (pp. 31-45, 53).

## Prerequisiti
- [[Teorema max-flow min-cut]]: l'algoritmo ne dimostra il passo difficile

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Visita in ampiezza]]: in Edmonds-Karp il cammino più corto si trova con una BFS
- [[Teorema di Hall]]: calcola il matching completo quando esiste
- [[Flusso massimo]]: risolve il programma lineare per via combinatoria
