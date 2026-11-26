---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [copertura delta, delta-neutral hedging, portafoglio delta-neutrale, delta-neutral portfolio, replica dinamica, dynamic replication, dynamic hedging, copertura dinamica, ribilanciamento, errore di copertura, stop-loss]
tags: [competenza, area/finanza]
---

# Delta hedging

> Rendere insensibile al prezzo del sottostante una posizione in opzioni, tenendo $\Delta$ azioni per opzione e ribilanciando nel tempo: è la replica dinamica di Black-Scholes.

## Definizione / enunciato
Un portafoglio è **delta-neutrale** se $\Delta_P=\partial V/\partial S=0$ (def. c17-delta-neutrale); analogamente gamma- e vega-neutrale. Con $h=(x,y,z_1,\dots)$: $\Delta_P=y+\sum_iz_i\Delta_i=0$.
- Call venduta: comprare $N(d_1)$ azioni; put venduta: **vendere** $1-N(d_1)$ azioni (il delta della put è negativo).

**Replica dinamica** (prop. c16-replica): $y_t=\partial_s\Pi(t,S_t)$ azioni e il resto nel conto in banca è autofinanziante e replica il payoff. Nell'albero il delta è $\frac{V_u-V_d}{S_u-S_d}$ e cambia da nodo a nodo.

## Formule chiave
$\Delta\Pi\simeq\Delta\cdot\Delta S$ (primo ordine). Con ribilanciamento discreto l'errore di copertura ha media circa nulla e deviazione standard proporzionale a $1/\sqrt n$.

## Intuizione
Il portafoglio "$\Delta$ azioni, −1 opzione" non ha rischio istantaneo e deve rendere $r$: da qui l'equazione di Black-Scholes. Poiché $\Delta$ cambia con $S$ e con $t$ (gamma), la copertura va ribilanciata. Errore più frequente: il segno (scrivere sempre il delta del portafoglio con i segni delle posizioni). La strategia stop-loss (comprare quando $S$ supera $K$, vendere sotto) non replica la call.

## Come si usa
Esempi del libro: call venduta con $S_0=K=8$, $T=1$, $\sigma=40\%$, $r=4\%$ (lezione, Rosazza-Sgarra 7.6): $d_1=0.3$, $\Delta_c=0.618$, si comprano 0.618 azioni; per una put venduta $\Delta_p=-0.382$, si vendono 0.382 azioni. Banca che ha venduto 10000 call ($K=40$, 3 mesi) e 5000 put ($K=33$, 7 mesi), $S=36$, $r=3\%$, $\sigma=36\%$: $\Delta_C=0.3250$, $\Delta_P=-0.3024$, deve essere lunga di circa 1738 azioni. Replica discreta mensile di una call con $S_0=K=50$, $r=5\%$, $\sigma=25\%$, 4 mesi: $c_0=3.2850$, $\Delta_0=0.5744$, debito iniziale $25.436$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 10 §Delta e copertura nell'albero; cap. 16 §La replica dinamica; cap. 17 §Delta hedging. Fonti: `Libri/Financial engineering/capitoli/cap10.tex`, `cap16.tex`, `cap17.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/32 - lez 01 aprile - delta hedging opzioni.pdf`, `38 - lez 24 aprile b - esercizi Black Scholes.pdf`.

## Prerequisiti
- [[Greche]]: il delta
- [[Strategia autofinanziante]]: ribilanciamento senza apporti
- [[Formula di Black-Scholes]]: $\Delta_c=N(d_1)$

## Porta a
- [[Copertura delta-gamma]]: copertura al secondo ordine
- [[Equazione di Black-Scholes]]: portafoglio senza rischio

## Collegati
- [[Modello binomiale multiperiodale]]: delta nell'albero
- [[Modello binomiale a un periodo]]: portafoglio senza rischio
- [[Rapporto di copertura a varianza minima]]: copertura con futures
- [[Immunizzazione]]: copertura al primo ordine dei bond
