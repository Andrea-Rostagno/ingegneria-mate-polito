---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia]
livello: [triennale]
aliases: ["product topology", "prodotto topologico", "spazio topologico prodotto", "rettangoli aperti", "proiezioni sui fattori", "proprietà universale del prodotto", "metrica prodotto d1 × d2"]
tags: [competenza, area/algebra-geometria]
---

# Topologia prodotto

> La topologia sul prodotto cartesiano generata dai "rettangoli aperti" $A_1\times A_2$: è la più naturale per cui le proiezioni sono continue, e su $\mathbb R^n$ ridà la topologia euclidea.

## Definizione / enunciato
Dati $(X_1,\tau_1)$, $(X_2,\tau_2)$, la famiglia $\mathcal B=\{A_1\times A_2\mid A_i\in\tau_i\}$ non è una topologia (l'unione di $(0,1)^2$ e $(1,2)^2$ non è un rettangolo), ma è una base perché $(B_1\times B_2)\cap(B_1'\times B_2')=(B_1\cap B_1')\times(B_2\cap B_2')$. La topologia generata è la **topologia prodotto** $\tau_1\times\tau_2$ (cap. 4); per un numero finito di fattori si procede ricorsivamente.

**Prop. 4.1.** Se $\mathcal B_i$ è base di $\tau_i$, $\{B_1\times B_2\}$ è base di $\tau_1\times\tau_2$; $\tau_1\times\tau_2$ è di Hausdorff se e solo se lo sono $\tau_1$ e $\tau_2$.

**Prop. 4.6.** Le proiezioni $P_i:X_1\times X_2\to X_i$ sono continue e aperte; $f:X\to X_1\times X_2$ è continua se e solo se $P_1\circ f$ e $P_2\circ f$ lo sono; $X_1\times\{q_0\}$ è omeomorfo a $X_1$.

## Formule chiave
Per $E_i\subseteq X_i$ (Prop. 4.4):
$$(E_1\times E_2)^{\circ}=\mathring E_1\times\mathring E_2,\qquad \overline{E_1\times E_2}=\overline E_1\times\overline E_2,\qquad \mathrm{Fr}(E_1\times E_2)=(\mathrm{Fr}(E_1)\times\overline E_2)\cup(\overline E_1\times\mathrm{Fr}(E_2)).$$
Per spazi metrici $\tau_{d_1\times d_2}=\tau_{d_1}\times\tau_{d_2}$, con $d_1\times d_2=d_{L^\infty}=\max\{d_1,d_2\}$ (Prop. 4.2), perché $B_{d_{L^\infty}}((p_1,p_2),r)=B_{d_1}(p_1,r)\times B_{d_2}(p_2,r)$ e
$$d_{L^\infty}\le d_{L^p}\le2^{1/p}d_{L^\infty}\qquad(\text{Prop. 1.15}).$$
In particolare $\mathcal E_n=\mathcal E_1\times\cdots\times\mathcal E_1$ (Es. 4.3).

## Intuizione
Un aperto del prodotto è un'unione di rettangoli: vicino a $(p_1,p_2)$ vuol dire vicino in ciascuna coordinata. Per questo una funzione a valori nel prodotto è continua esattamente quando lo sono le sue componenti.

## Come si usa
- La distanza $d:X\times X\to\mathbb R$ è continua per la topologia prodotto (Es. 4.7).
- Per mostrare che $f\colon X\to X_1\times X_2$ è continua basta che lo siano le componenti, poiché $f^{-1}(A_1\times A_2)=f_1^{-1}(A_1)\cap f_2^{-1}(A_2)$.
- La topologia prodotto è il terreno dei teoremi "il prodotto di compatti (connessi, connessi per archi) è compatto (connesso, connesso per archi)".

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): le "proposizioni sul prodotto" 4.1 e 4.5 sono il punto 5 della lista delle dimostrazioni per l'orale. Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§1.2 Prop. 1.15; cap. 4, Prop. 4.1-4.6, Es. 4.3 e 4.7, pp. 5-6, 32-34); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§7.2 "Topologia iniziale, topologia prodotto", Prop. 7.8-7.9).

## Prerequisiti
- [[Base di una topologia]]: il prodotto è generato da una base
- [[Funzione continua tra spazi topologici]]: continuità delle proiezioni

## Porta a
- [[Prodotto di spazi compatti]]: il prodotto di due compatti è compatto
- [[Prodotto di spazi connessi]]: connessione del prodotto

## Collegati
- [[Spazio di Hausdorff]]: diagonale chiusa e prodotto di spazi di Hausdorff
- [[Spazio metrico]]: metrica prodotto max{d1, d2}
- [[Regola del prodotto]]: il prodotto cartesiano come insieme
