---
tipo: competenza
area: network
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["planar graph", "planarità", "planarity", "rappresentazione planare", "facce di un grafo planare", "formula di Eulero per i grafi", "Euler formula v - e + f = 2", "K5 non planare", "K3,3 non planare"]
tags: [competenza, area/network]
---

# Grafo planare

> Un grafo è planare se si può disegnare nel piano senza archi che si incrociano. Per i grafi planari connessi vale la formula di Eulero $v-e+f=2$, da cui seguono limiti al numero di archi che escludono $K_5$ e $K_{3,3}$.

## Definizione / enunciato
**Definizione 5.4.1.** Un grafo è **planare** se si può disegnare nel piano, con i nodi come punti e gli archi come curve, senza archi che si incrociano. Il disegno si chiama **rappresentazione planare**. Un grafo planare può avere anche rappresentazioni non planari: per dimostrare che un grafo non è planare bisogna escluderle tutte.

**Facce** (Def. 5.4.2): le regioni in cui una rappresentazione planare divide il piano, compresa quella illimitata.

**Teorema 5.4.4.** Ogni albero è planare e ha una sola faccia.

**Teorema 5.4.5 (formula di Eulero).** In una rappresentazione planare di un grafo connesso con $v$ nodi, $e$ archi e $f$ facce:
$$v-e+f=2.$$
Quindi $f$ non dipende dalla rappresentazione scelta, ma solo da $v$ ed $e$.

**Teorema 5.4.6 (condizioni necessarie).** Sia $G$ planare e connesso:
- (C1) se $v\ge3$, allora $e\le3v-6$;
- (C2) se $v\ge3$ e $G$ non ha cicli di lunghezza 3, allora $e\le2v-4$.

## Formule chiave
$$v-e+f=2,\qquad e\le3v-6,\qquad e\le2v-4\ \ (\text{senza triangoli}).$$
- **Teorema 5.4.7:** $K_n$ è planare se e solo se $n\le4$.
- **Teorema 5.4.8:** $K_{m,n}$ è planare se e solo se $m$ o $n$ vale 1 o 2.

## Intuizione
**Dimostrazione della formula.** Per un albero $f=1$ ed $e=v-1$, quindi $v-e+f=2$. Se il grafo ha un ciclo, togliendo un arco del ciclo due facce si fondono: $e$ ed $f$ calano entrambi di 1 e $v-e+f$ non cambia. Si ripete finché resta un albero.

(C1) segue da $2e=\sum_FN_F\ge3f$: ogni arco tocca due facce e ogni faccia ha almeno 3 lati. Senza triangoli ogni faccia ha almeno 4 lati, e si ottiene (C2).

## Come si usa
- **$K_n$:** $e=\frac{n(n-1)}2\le3n-6$ equivale a $n^2-7n+12\le0$, cioè $3\le n\le4$. Quindi $K_n$ non è planare per $n\ge5$.
- **$K_{m,n}$:** non ha cicli dispari, quindi nemmeno triangoli. (C2) diventa $mn\le2(m+n)-4$. Con $m\ge n$ e dividendo per $m$ si ottiene $n\le4-\frac4m<4$; il caso $n=3$ dà $m\le2$, assurdo. Quindi $K_{3,3}$ non è planare (il problema "tre case e acqua, gas, elettricità").
- $K_{1,n}$ e $K_{2,n}$ hanno rappresentazioni planari esplicite.
- Le condizioni sono solo **necessarie**: se non valgono, $G$ non è planare.

## Nei corsi
- **Matematica discreta** (triennale): lezione 7, dopo grafi completi e bipartiti. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 19-28, 33, manoscritto); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§5.4, Teor. 5.4.4-5.4.8, pp. 99-105).

## Prerequisiti
- [[Albero (teoria dei grafi)]]: caso base della formula ($f=1$, $e=v-1$)
- [[Componenti connesse di un grafo]]: la formula vale per grafi connessi

## Porta a
- Nessuno nel corso.

## Collegati
- [[Caratteristica di Eulero]]: $v-e+f=2$ è la stessa formula dei poliedri convessi, $\chi=2$ per la sfera
- [[Spettro dei grafi bipartiti]]: l'assenza di cicli dispari, usata per $K_{m,n}$
