---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["dual cone", "polar cone", "cono duale", "cono polare", "cono auto-duale", "self-dual cone", "cono delle direzioni ammissibili"]
tags: [competenza, area/ottimizzazione]
---

# Cono duale e cono polare

> Il cono duale di un insieme $K$ contiene i vettori che formano un angolo acuto con tutti i vettori di $K$; il polare è il suo opposto. Caratterizzano le direzioni ammissibili e sono alla base della dualità conica.

## Definizione / enunciato
$$K^*=\{\mathbf y\in\mathbb R^n:\mathbf y^T\mathbf x\ge0\ \ \forall\mathbf x\in K\},\qquad K^\circ=\{\mathbf y\in\mathbb R^n:\mathbf y^T\mathbf x\le0\ \ \forall\mathbf x\in K\}.$$
Se $K$ è un cono e $K^*=K$, $K$ è **auto-duale**. $(\mathbb R^n)^*=\{\mathbf 0\}$, $\{\mathbf 0\}^*=\mathbb R^n$, $(\mathbb R^n_+)^*=\mathbb R^n_+$.

**Teorema (polare di un cono poliedrale).** Il cono finitamente generato da $\mathbf a_1,\dots,\mathbf a_m$, $K=\{\mathbf x=\sum_j\lambda_j\mathbf a_j,\ \lambda_j\ge0\}$, è chiuso e il suo polare è poliedrale:
$$K^\circ=\{\mathbf x:\mathbf x^T\mathbf a_j\le0,\ j=1,\dots,m\}.$$

**Teorema (cono duale di un cono associato a una norma).** Il duale di $K=\{(\mathbf x,t):\|\mathbf x\|\le t\}$ è $K^*=\{(\mathbf u,v):\|\mathbf u\|_*\le v\}$.

## Formule chiave
Autodualità dell'ortante: se $\mathbf y\ge\mathbf 0$ allora $\mathbf y^T\mathbf x\ge0$ per ogni $\mathbf x\ge\mathbf 0$; se $y_i<0$ allora $\mathbf y^T\mathbf e_i<0$, quindi $\mathbf y\notin(\mathbb R^n_+)^*$.

## Intuizione
Direzioni ammissibili: in un punto in cui i vincoli lineari $\mathbf a_j^T\mathbf x\le b_j$ sono attivi, muoversi lungo il gradiente $\mathbf a_j$ viola il vincolo; servono direzioni con $\mathbf a_j^T\boldsymbol\delta\le0$, cioè nel cono polare del cono generato dai gradienti dei vincoli attivi. Con vincoli non lineari si applica la stessa idea ai vincoli linearizzati.

## Come si usa
Un vettore appartiene al cono duale se soddisfa infiniti vincoli: questo permette di scrivere in forma finita vincoli robusti (norma duale). Il cono delle direzioni ammissibili è il polare del cono attivo, $F(\hat{\mathbf x})=A(\hat{\mathbf x})^\circ$, passo chiave della dimostrazione delle condizioni KKT.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 38-39, 41); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap6.pdf` (p. 30-32).

## Prerequisiti
- [[Cono convesso]]: definizione di cono e cono poliedrale
- [[Prodotto scalare]]: angolo acuto o ottuso fra vettori

## Porta a
- [[Norma duale]]: duale del cono associato a una norma
- [[Condizioni di Karush-Kuhn-Tucker]]: cono delle direzioni ammissibili
- [[Lemma di Farkas]]: alternativa fra cono e polare

## Collegati
- [[Complemento ortogonale]]: analogo lineare del cono polare (collegamento concettuale, non nelle slide)
